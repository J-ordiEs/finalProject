import { ITask } from './../../models/interfaces/Task.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit{

  @Input() task: ITask | undefined;

  constructor() { }

  ngOnInit(): void { }

  deleteTask() {
    console.log('eliminar tarea', this.task?.title);

  }


}