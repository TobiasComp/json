import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[] = []
  index = 1;
  constructor(public todoService:TodoService) { }

  ngOnInit() {
    this.todoService.getTodos()
      .subscribe(data => this.todos = data)
    this.todoService.currentTodo = this.todos[this.index]
    console.log(this.todoService.currentTodo);
    
  }

  next(){
    this.index++;
    this.todoService.currentTodo = this.todos[this.index];
  }
}
