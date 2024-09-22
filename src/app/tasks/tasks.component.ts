import { Component, OnInit } from '@angular/core';
import { TaskService, Task } from '../service/task.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//Importação de módulos do Angular Material
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,

    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatCheckboxModule,
    MatButtonModule
  ],
  providers: [TaskService],//"Importa" o servico de conexão com o banco de dados json
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})

export class TasksComponent implements OnInit {
  tasks: Task[] = [];//Array de objetos do tipo Task

  constructor(private taskService: TaskService) {}

  // Método para carregar todas as tarefas
  ngOnInit(): void {
    this.loadTasks();
  }

  // Método para carregar todas as tarefas, acessando o método correspondente do seviço de conexão
  loadTasks(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  // Método para adicionar nova tarefa ao banco, acessando o método correspondente do seviço de conexão
  addTask(title: string): void {
    const newTask: Task = { title, completed: false };
    this.taskService.addTask(newTask).subscribe((task) => this.tasks.push(task));
  }

  // Método para atualizar o status da tarefa no banco, acessando o método correspondente do seviço de conexão
  updateTask(task: Task): void {
    task.completed = !task.completed;
    this.taskService.updateTask(task).subscribe((updatedTask) => {});
  }

    // Método para deletar a tarefa do banco, acessando o método correspondente do seviço de conexão
  deleteTask(id: string): void {
    this.taskService.deleteTask(id).subscribe(() => {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    });
  }
}