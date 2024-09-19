import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../models/taks.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})

export class TodoItemComponent {

  @Input() task!: Task;
  @Output() completed = new EventEmitter<number>();
  @Output() deleted = new EventEmitter<number>();

  markAsCompleted() {
    this.completed.emit(this.task.id);
  }

  deleteTask() {
    this.deleted.emit(this.task.id);
  }

}
