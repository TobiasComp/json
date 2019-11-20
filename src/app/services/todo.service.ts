import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../models/todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private api = "https://jsonplaceholder.typicode.com/todos/#";
  currentTodo:Todo
  constructor(private http:HttpClient) { 
    
  }
  public getTodos(todoId:number):Observable<Todo>{
    let newApi = this.api.replace("#",todoId.toString());
    return this.http.get<Todo>(newApi);
  }

}
