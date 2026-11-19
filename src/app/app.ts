import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TasksList } from './components/tasks-list/tasks-list';
import { TaskAdd } from './components/task-add/task-add';

// @todo Faire un répo avec 3 composant contenant les 3 types de formulaire

@Component({
    imports: [RouterOutlet, TasksList, TaskAdd],
    selector: 'app-root',
    styleUrl: './app.css',
    templateUrl: './app.html',
})
export class App {

}
