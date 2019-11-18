import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../models/todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private api = "https://jsonplaceholder.typicode.com/todos/"
  currentTodo:Todo
  constructor(private http:HttpClient) { 
    
  }
  public getTodos():Observable<Todo[]>{
    return this.http.get<Todo[]>(this.api);
  }

}
