import { Component, input } from '@angular/core';
import { Task } from '../../../interfaces/Task';

@Component({
    imports: [],
    selector: 'app-tasks-list',
    styleUrl: './tasks-list.css',
    templateUrl: './tasks-list.html',
})
export class TasksList {
    readonly tasks = input.required<Task[]>();
}
