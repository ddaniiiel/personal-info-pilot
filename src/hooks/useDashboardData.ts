
import { useState, useEffect, useMemo } from 'react';
import { useUser } from '@/contexts/UserContext';

export interface TodayPriority {
  id: string;
  title: string;
  description: string;
  type: 'task' | 'event' | 'alert' | 'reminder';
  urgency: 'high' | 'medium' | 'low';
  deadline?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export interface DashboardStats {
  energy: {
    todayUsage: number;
    change: number;
    status: 'good' | 'warning' | 'critical';
  };
  finance: {
    monthlyBudget: number;
    spent: number;
    change: number;
  };
  family: {
    upcomingEvents: number;
    pendingTasks: number;
  };
}

export const useDashboardData = () => {
  const { user, isLoggedIn } = useUser();
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  // Get time-based greeting
  const greeting = useMemo(() => {
    const hour = currentTime.getHours();
    const firstName = isLoggedIn ? user.firstName : 'Gast';
    
    if (hour < 12) return `Guten Morgen, ${firstName}!`;
    if (hour < 18) return `Guten Tag, ${firstName}!`;
    return `Guten Abend, ${firstName}!`;
  }, [currentTime, isLoggedIn, user]);

  // Get today's priorities based on time
  const todayPriorities = useMemo((): TodayPriority[] => {
    const hour = currentTime.getHours();
    const priorities: TodayPriority[] = [];

    // Morning priorities
    if (hour >= 6 && hour < 12) {
      priorities.push({
        id: 'energy-check',
        title: 'Energieverbrauch prüfen',
        description: 'Ihr Stromverbrauch ist heute 12% höher als gestern',
        type: 'alert',
        urgency: 'medium',
        action: {
          label: 'Details anzeigen',
          onClick: () => window.location.href = '/topics/energie'
        }
      });
    }

    // Afternoon priorities
    if (hour >= 12 && hour < 18) {
      priorities.push({
        id: 'budget-reminder',
        title: 'Budgetübersicht',
        description: 'Sie haben noch 340€ für diesen Monat verfügbar',
        type: 'reminder',
        urgency: 'low',
        action: {
          label: 'Finanzen öffnen',
          onClick: () => window.location.href = '/finance'
        }
      });
    }

    // Evening priorities
    if (hour >= 18) {
      priorities.push({
        id: 'family-planning',
        title: 'Familienplanung',
        description: 'Morgen stehen 3 Termine an',
        type: 'event',
        urgency: 'medium',
        action: {
          label: 'Kalender anzeigen',
          onClick: () => window.location.href = '/family'
        }
      });
    }

    // Always include important tasks
    priorities.push({
      id: 'tax-deadline',
      title: 'Steuererklärung einreichen',
      description: 'Frist endet in 25 Tagen',
      type: 'task',
      urgency: 'high',
      deadline: '31.05.2025',
      action: {
        label: 'Jetzt erledigen',
        onClick: () => console.log('Starting tax declaration')
      }
    });

    return priorities.sort((a, b) => {
      const urgencyOrder = { high: 3, medium: 2, low: 1 };
      return urgencyOrder[b.urgency] - urgencyOrder[a.urgency];
    });
  }, [currentTime]);

  // Dashboard statistics
  const dashboardStats = useMemo((): DashboardStats => ({
    energy: {
      todayUsage: 28.5,
      change: -5.2,
      status: 'good'
    },
    finance: {
      monthlyBudget: 2800,
      spent: 2460,
      change: -12.5
    },
    family: {
      upcomingEvents: 3,
      pendingTasks: 7
    }
  }), []);

  return {
    currentTime,
    greeting,
    todayPriorities,
    dashboardStats,
    isLoggedIn,
    user
  };
};
