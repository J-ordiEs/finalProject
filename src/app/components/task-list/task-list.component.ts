import { Component, OnInit } from '@angular/core';
import { ITask, Levels } from '../../models/interfaces/Task.interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  // TODO:  reformular lista de tareas

  task1: ITask = {
    title: 'task 1',
    description: 'description 1',
    completed: false,
    level: Levels.Info
  }

  task2: ITask = {
    title: 'task 2',
    description: 'description 2',
    completed: true,
    level: Levels.Urgent
  }

  constructor(){}

  ngOnInit(): void {  }

  deleteTask(task: ITask){
    //TODO sustituir por un splice para eliminar de la lista de tareas
    alert(`se procede a eliminar la tarea ${task.title}`)
  }

}
