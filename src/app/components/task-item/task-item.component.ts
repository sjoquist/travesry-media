import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ITask } from 'src/app/interfaces/ITask';

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
  @Output() onDeleteTask: EventEmitter<ITask> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick = () => {
    console.log('Clicked');
  };

  // onDelete(task) {
  //   this.onDeleteTask.emit(task);
  // }
}
