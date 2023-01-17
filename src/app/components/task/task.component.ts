import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITask } from '../../models/interfaces/Task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit{

  @Input() task: ITask | undefined;
  @Output() delete: EventEmitter<ITask> = new EventEmitter<ITask>();

  constructor() { }

  ngOnInit(): void { }

  deleteTask() {
    // notificamos al componente superior la tarea a elminar
    this.delete.emit(this.task);
  }
}
