import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TaskModel } from '../../models/taks.model';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, TodoItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit{

  tasks: TaskModel[] = [];

  private storageKey = 'todo-list';

  ngOnInit(){
    this.loadTasksFromLocalStorage();
  }

  handleTaskCompleted(id: number){
    const task = this.tasks.find(t => t.id === id);
    if(task) {
      task.completed = !task.completed;  
      this.saveTasksToLocalStorage();
    }

  }

  handleTaskDeleted(id: number){
    this.tasks = this.tasks.filter(t => t.id !== id);
    this.saveTasksToLocalStorage();
  }

  addTask( title: string ){
    const newTask = new TaskModel(this.tasks.length + 1, title);
    this.tasks.push(newTask);
    this.saveTasksToLocalStorage();
  }

  private saveTasksToLocalStorage(){
    localStorage.setItem(this.storageKey, JSON.stringify(this.tasks));
  }

  private loadTasksFromLocalStorage(){
    const storedTasks = localStorage.getItem(this.storageKey);
    if(storedTasks){
      this.tasks = JSON.parse(storedTasks);
    }
  }

}
