import { Component, OnInit } from '@angular/core';
import { TaskService, Task } from '../service/task.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from '../material/material.module';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    HttpClientModule,

    MaterialModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatCheckboxModule
  ],
  providers: [TaskService],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})

export class TasksComponent implements OnInit {
  tasks: Task[] = [];//Array de objetos do tipo Task

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  addTask(title: string): void {
    const newTask: Task = { title, completed: false };
    this.taskService.addTask(newTask).subscribe((task) => this.tasks.push(task));
  }

  updateTask(task: Task): void {
    task.completed = !task.completed;
    this.taskService.updateTask(task).subscribe((updatedTask) => {});
  }

  deleteTask(id: string): void {
    this.taskService.deleteTask(id).subscribe(() => {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    });
  }
}
