import { taskService } from '../task.service';
import { task } from '../task';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  public tasks = [];
  task: task = new task();
  submitted = false;

  constructor(private taskService: taskService,
    private router: Router) { }

  ngOnInit() {
  }

  newtask(): void {
    this.submitted = false;
    this.task = new task();
  }
  //call on submit for create a task with the information submitted
  save() {
    this.taskService.createTask(this.task)
      .subscribe(data => console.log(data), error => console.log(error));
    this.task = new task();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  // return to page taskslist
  gotoList() {
    this.router.navigate(['/tasks']);
    this.taskService.getTasksList()
    .subscribe(data => this.tasks = data);
  }

}