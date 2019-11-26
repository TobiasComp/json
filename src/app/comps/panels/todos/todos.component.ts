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
    this.next();
    // this.todoService.getTodos()
    //   .subscribe(function(data){ 
    //     console.log(data);
        
    //     this.todos = data;
    //     this.next();
    //   });
    //   setTimeout(console.log,2000,['hi after 2 seconds']);
    //   setTimeout(console.log,2000,[this.todoService.currentTodo]);
    
  }

  next(){
    this.todoService.getTodos(this.index).subscribe(data=>this.todoService.currentTodo = data);
    this.index++;
  }
}
