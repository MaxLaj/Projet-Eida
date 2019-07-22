import { TaskDetailsComponent } from '../task-details/task-details.component';
import { TaskUpdateComponent } from '../task-update/task-update.component';
import { Observable } from "rxjs";
import { taskService } from "../task.service";
import { task } from "../task";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';


//main page to see all the tasks


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  public tasks = [];

  constructor(private taskService : taskService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.taskService.getTasksList()
    .subscribe(data => this.tasks = data);
  }


  deleteTask(id:number){
    this.taskService.deleteTask(id)
    .subscribe(
      data => {
        console.log(data);
          this.reloadData();
        },
        error => console.log(error));
      }
  
  taskDetails(id: number){
    this.router.navigate(['details', id]);
    }

  goToUpdate(id: number){
    this.router.navigate(['update', id]);
  }

  }
