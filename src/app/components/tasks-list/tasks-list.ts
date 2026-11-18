import { Component, input } from '@angular/core';
import { Task } from '../../../interfaces/Task';

@Component({
    imports: [],
    selector: 'app-tasks-list',
    styleUrl: './tasks-list.css',
    templateUrl: './tasks-list.html',
})
export class TasksList {
    // input.required() : le parent doit obligatoirement fournir [tasks].
    // tasks est un signal en lecture seule : on le lit avec tasks() dans le template.
    readonly tasks = input.required<Task[]>();
}
