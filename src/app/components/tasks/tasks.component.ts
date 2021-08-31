import { Component, OnInit } from '@angular/core';
import { ITask } from 'src/app/interfaces/ITask';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  tasks: ITask[];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(
      (res) => (this.tasks = res),
      (error) => console.log(error)
    );
  }
}
