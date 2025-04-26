
import React, { createContext, useState, useContext, ReactNode } from 'react';

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

  const updateUser = (updates: Partial<UserProfile>) => {
    setUser((prev) => ({ ...prev, ...updates }));
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

  return (
    <UserContext.Provider
      value={{ user, updateUser, addInterest, removeInterest, registerUser, isLoggedIn }}
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
