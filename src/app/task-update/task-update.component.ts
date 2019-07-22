import { task } from '../task';
import { Component, OnInit, Input } from '@angular/core';
import { taskService } from '../task.service';
import { TaskListComponent } from '../task-list/task-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-update',
  templateUrl: './task-update.component.html',
  styleUrls: ['./task-update.component.css']
})
export class TaskUpdateComponent implements OnInit {
  
  task: task;
  oldId;
  submitted = false;

  constructor(private route: ActivatedRoute,private router: Router,
    private taskService: taskService) { }

    public tasks = [];

    ngOnInit(){
      this.task = new task();
  
      this.task.id = this.route.snapshot.params['id'];
      //get the task by the id in param
      this.taskService.getTaskById(this.task.id)
        .subscribe(data => {
          console.log(data)
          this.task = data;
        }, error => console.log(error));
    }

    reloadData() {
      this.taskService.getTasksList()
      .subscribe(data => this.tasks = data);
    }

    goToUpdate(){
    this.task.id = this.route.snapshot.params['id'];
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

    onSubmit() {
      this.submitted = true;
      this.taskUpdate();    
    }
    
    taskUpdate(){
      //save old id before delete it
      this.oldId = this.route.snapshot.params['id'];
      //Delete
      this.deleteTask(this.task.id)
      //Add
      this.task.id = this.oldId;
      this.taskService.createTask(this.task)
      .subscribe(data => console.log(data), error => console.log(error));
      this.task = new task();
      this.goTolist();
    }

    goTolist(){
      this.taskService.getTasksList()
      .subscribe(data => this.tasks = data);
      this.router.navigate(['tasks']);
    }

}
