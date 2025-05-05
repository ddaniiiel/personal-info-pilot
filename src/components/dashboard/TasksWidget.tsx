
import React, { useState } from 'react';
import { CheckSquare, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

interface Task {
  title: string;
  deadline: string;
  priority: 'high' | 'medium' | 'low';
  completed: boolean;
}

const TasksWidget: React.FC = () => {
  const [showAddTaskDialog, setShowAddTaskDialog] = useState(false);
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

  const AddTaskDialog = ({ onClose }: { onClose: () => void }) => {
    const [newTask, setNewTask] = useState({
      title: '',
      deadline: 'Heute',
      priority: 'medium',
    });

    const handleAddTask = () => {
      if (newTask.title.trim()) {
        setTasks(prev => [
          ...prev, 
          {...newTask, priority: newTask.priority as 'high' | 'medium' | 'low', completed: false}
        ]);
        onClose();
      }
    };

    return (
      <div className="p-4">
        <h3 className="text-lg font-medium mb-4">Neue Aufgabe hinzufügen</h3>
        <div className="space-y-4">
          <div>
            <label htmlFor="task-title" className="block text-sm font-medium text-gray-700 mb-1">
              Aufgabentitel
            </label>
            <input
              id="task-title"
              type="text"
              className="w-full p-2 border rounded"
              value={newTask.title}
              onChange={(e) => setNewTask({...newTask, title: e.target.value})}
            />
          </div>
          <div>
            <label htmlFor="deadline" className="block text-sm font-medium text-gray-700 mb-1">
              Fälligkeit
            </label>
            <select
              id="deadline"
              className="w-full p-2 border rounded"
              value={newTask.deadline}
              onChange={(e) => setNewTask({...newTask, deadline: e.target.value})}
            >
              <option value="Heute">Heute</option>
              <option value="Morgen">Morgen</option>
              <option value="Diese Woche">Diese Woche</option>
              <option value="Nächste Woche">Nächste Woche</option>
            </select>
          </div>
          <div>
            <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-1">
              Priorität
            </label>
            <select
              id="priority"
              className="w-full p-2 border rounded"
              value={newTask.priority}
              onChange={(e) => setNewTask({...newTask, priority: e.target.value})}
            >
              <option value="low">Niedrig</option>
              <option value="medium">Mittel</option>
              <option value="high">Hoch</option>
            </select>
          </div>
          <div className="flex justify-end space-x-2 pt-2">
            <Button variant="outline" onClick={onClose}>Abbrechen</Button>
            <Button onClick={handleAddTask}>Hinzufügen</Button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-medium flex items-center">
          <CheckSquare className="h-4 w-4 mr-2 text-dashboard-purple" />
          Aufgaben
        </h3>
        <Dialog open={showAddTaskDialog} onOpenChange={setShowAddTaskDialog}>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm" className="h-7 px-2 text-xs">
              <Plus className="h-3 w-3 mr-1" /> Hinzufügen
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Neue Aufgabe</DialogTitle>
            </DialogHeader>
            <AddTaskDialog onClose={() => setShowAddTaskDialog(false)} />
          </DialogContent>
        </Dialog>
      </div>
      
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
      
      <div className="text-center pt-1">
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-xs text-dashboard-purple hover:text-dashboard-purple-dark w-full"
        >
          Alle Aufgaben anzeigen
        </Button>
      </div>
    </div>
  );
};

export default TasksWidget;
