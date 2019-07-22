import { task } from '../task';
import { Component, OnInit, Input } from '@angular/core';
import { taskService } from '../task.service';
import { TaskListComponent } from '../task-list/task-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {

  task: task;

  constructor(private route: ActivatedRoute,private router: Router,
    private taskService: taskService) { }

  //when page is called init and get information of a task with his id in param in url
  ngOnInit() {
    this.task = new task();

    this.task.id = this.route.snapshot.params['id'];

    this.taskService.getTaskById(this.task.id)
      .subscribe(data => {
        console.log(data)
        this.task = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['tasks']);
  }
}