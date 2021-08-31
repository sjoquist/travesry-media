import { Component, Input, OnInit } from '@angular/core';
import { ITask } from '../tasks/tasks.component';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent implements OnInit {
  /* 
  
  Här är varför vi tar in: "strictPropertyInitialization": false;
  
  Annars hade vi behövt skriva:
  @Input() task: ITask = { id: 0, text:'' };
  
  Vilket är skitjobbigt & irriterande.

  */
  @Input() task: ITask;

  constructor() {}

  ngOnInit(): void {}
}
