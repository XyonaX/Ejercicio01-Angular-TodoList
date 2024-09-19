import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TaskModel } from '../../models/taks.model';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, TodoItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {

  tasks: TaskModel[] = [];

  handleTaskCompleted(id: number){
    const task = this.tasks.find(t => t.id === id);
    if(task) {
      task.completed = !task.completed;  
    }

  }

  handleTaskDeleted(id: number){
    this.tasks = this.tasks.filter(t => t.id !== id);
  }

  addTask( title: string ){
    const newTask = new TaskModel(this.tasks.length + 1, title);
    this.tasks.push(newTask);
  }

}
