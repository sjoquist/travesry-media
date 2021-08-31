import { Component, OnInit } from '@angular/core';

export interface ITask {
  id: number;
  text: string;
}

const TASKS: ITask[] = [
  {
    id: 1,
    text: "Doctor's appointment",
  },
  { id: 2, text: 'Workout' },
];
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  tasks: ITask[] = TASKS;

  constructor() {}

  ngOnInit(): void {}
}
