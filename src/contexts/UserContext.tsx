
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export type UserType = 'private' | 'business';
export type InterestTopic = 'wohnen' | 'steuern' | 'versicherungen' | 'energie' | 'recht' | 'foerderungen';

interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  userType: UserType;
  location: string;
  interests: InterestTopic[];
  isRegistered: boolean;
}

interface UserContextType {
  user: UserProfile;
  updateUser: (updates: Partial<UserProfile>) => void;
  addInterest: (interest: InterestTopic) => void;
  removeInterest: (interest: InterestTopic) => void;
  registerUser: (profile: UserProfile) => void;
  isLoggedIn: boolean;
  logout: () => Promise<void>;
}

const defaultUserState: UserProfile = {
  firstName: '',
  lastName: '',
  email: '',
  userType: 'private',
  location: '',
  interests: ['wohnen', 'steuern'],
  isRegistered: false,
};

export const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile>(defaultUserState);
  const isLoggedIn = user.isRegistered;

  // Check for existing session on load
  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      
      if (data.session?.user) {
        try {
          const { data: profileData, error } = await supabase
            .from('profiles' as any)
            .select('*')
            .eq('id', data.session.user.id)
            .single();
          
          if (!error && profileData) {
            setUser({
              firstName: profileData.first_name || '',
              lastName: profileData.last_name || '',
              email: data.session.user.email || '',
              // Ensure userType is of type UserType
              userType: (profileData.user_type as UserType) || 'private',
              location: profileData.location || '',
              interests: ['wohnen', 'steuern'], // Default interests, could be stored in profile
              isRegistered: true
            });
          }
        } catch (error) {
          console.error('Error fetching profile:', error);
        }
      }
    };
    
    checkSession();
    
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event === 'SIGNED_IN' && session?.user) {
          // User signed in, update context
          try {
            const { data: profileData, error } = await supabase
              .from('profiles' as any)
              .select('*')
              .eq('id', session.user.id)
              .single();
            
            if (!error && profileData) {
              setUser({
                firstName: profileData.first_name || '',
                lastName: profileData.last_name || '',
                email: session.user.email || '',
                // Ensure userType is of type UserType
                userType: (profileData.user_type as UserType) || 'private',
                location: profileData.location || '',
                interests: ['wohnen', 'steuern'],
                isRegistered: true
              });
            }
          } catch (error) {
            console.error('Error fetching profile on sign in:', error);
          }
        } else if (event === 'SIGNED_OUT') {
          // User signed out, reset context
          setUser(defaultUserState);
        }
      }
    );
    
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const updateUser = (updates: Partial<UserProfile>) => {
    setUser((prev) => ({ ...prev, ...updates }));
    
    // If logged in, update profile in database
    if (isLoggedIn) {
      const updateProfile = async () => {
        try {
          const { data: { user: authUser } } = await supabase.auth.getUser();
          
          if (authUser) {
            await supabase.from('profiles' as any).update({
              first_name: updates.firstName || user.firstName,
              last_name: updates.lastName || user.lastName,
              user_type: updates.userType || user.userType,
              location: updates.location || user.location,
            }).eq('id', authUser.id);
          }
        } catch (error) {
          console.error('Error updating profile:', error);
        }
      };
      
      updateProfile();
    }
  };

  const addInterest = (interest: InterestTopic) => {
    if (!user.interests.includes(interest)) {
      setUser((prev) => ({
        ...prev,
        interests: [...prev.interests, interest],
      }));
    }
  };

  const removeInterest = (interest: InterestTopic) => {
    setUser((prev) => ({
      ...prev,
      interests: prev.interests.filter((item) => item !== interest),
    }));
  };

  const registerUser = (profile: UserProfile) => {
    setUser({ ...profile, isRegistered: true });
  };
  
  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      setUser(defaultUserState);
    }
    return error ? Promise.reject(error) : Promise.resolve();
  };

  return (
    <UserContext.Provider
      value={{ user, updateUser, addInterest, removeInterest, registerUser, isLoggedIn, logout }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
