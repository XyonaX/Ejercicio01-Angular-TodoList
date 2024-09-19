import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css'
})
export class TodoFormComponent {
  newTaskTitle: string = '';

  @Output() taskAdded = new EventEmitter<string>();

  addTask(){
    if(this.newTaskTitle.trim()){
      this.taskAdded.emit(this.newTaskTitle);
      this.newTaskTitle = '';
    }
  }
}
