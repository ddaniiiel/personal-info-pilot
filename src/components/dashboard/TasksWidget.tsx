
import React from 'react';
import { CheckSquare } from 'lucide-react';

interface Task {
  title: string;
  deadline: string;
  priority: 'high' | 'medium' | 'low';
  completed: boolean;
}

const TasksWidget: React.FC = () => {
  const [tasks, setTasks] = React.useState<Task[]>([
    {
      title: 'Einkaufsliste erstellen',
      deadline: 'Heute',
      priority: 'medium',
      completed: false
    },
    {
      title: 'Geschenk für Omas Geburtstag kaufen',
      deadline: 'Diese Woche',
      priority: 'high',
      completed: false
    },
    {
      title: 'Steuerformulare einreichen',
      deadline: 'Überfällig',
      priority: 'high',
      completed: false
    }
  ]);

  const toggleTaskCompletion = (index: number) => {
    setTasks(prevTasks => 
      prevTasks.map((task, i) => 
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const getPriorityStyle = (priority: Task['priority']) => {
    switch (priority) {
      case 'high':
        return 'border-red-500';
      case 'medium':
        return 'border-orange-400';
      case 'low':
        return 'border-green-500';
      default:
        return 'border-gray-300';
    }
  };

  const getDeadlineStyle = (deadline: string) => {
    return deadline === 'Überfällig' ? 'text-rose-500 font-medium' : 'text-muted-foreground';
  };

  return (
    <div className="space-y-2">
      {tasks.map((task, index) => (
        <div 
          key={index} 
          className={`flex items-center justify-between p-3 bg-gray-50 rounded-md border-l-4 ${getPriorityStyle(task.priority)}`}
        >
          <div className="flex items-center">
            <input 
              type="checkbox" 
              checked={task.completed}
              onChange={() => toggleTaskCompletion(index)}
              className="mr-3 h-4 w-4 rounded border-gray-300 text-dashboard-purple focus:ring-dashboard-purple"
            />
            <span className={task.completed ? 'line-through text-muted-foreground' : ''}>
              {task.title}
            </span>
          </div>
          <span className={`text-sm ${getDeadlineStyle(task.deadline)}`}>
            {task.deadline}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TasksWidget;
