import { Injectable, DoBootstrap, NgModule } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule} from '@angular/common/http';
import { Observable } from 'rxjs';
import {task} from './task';

@Injectable({
  providedIn: 'root'
})

@NgModule({
  imports: [HttpClientModule]
})

export class taskService {


  //url Json server for data ( to launch the server : json-server --watch src/data/db.json --port 4000)
  baseUrl = 'http://localhost:4000/tasks';
  
  constructor(private httpClient: HttpClient) { }

  //all functions are defined here.
  //in fact is like a tool box which can be called when we import task-service




  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  
  //get a task with the id (use in update-task.component.ts)
  getTaskById(id: number): Observable<any> {
    return this.httpClient.get<task[]>(`${this.baseUrl}/${id}`);
  }

  //function for create a task (use in create-task.component.ts)
  createTask(task: Object): Observable<Object> {
    return this.httpClient.post(this.baseUrl, task);
    //return this.http.post(`${this.baseUrl}`, task);
  }

  //function for delete a task where id passed in param
  deleteTask(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  //get all the tasks in an array of task type
  getTasksList(): Observable<task[]> {
    return this.httpClient.get<task[]>(this.baseUrl);
  }

  getTask() { 
    return this.httpClient.get(`${this.baseUrl}`);
  }

}