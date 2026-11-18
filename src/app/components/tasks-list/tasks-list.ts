import {
    afterNextRender,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    input,
    viewChild,
} from '@angular/core';
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

    private readonly title = viewChild.required<ElementRef<HTMLElement>>('title');

    constructor() {
        afterNextRender(() => this.title().nativeElement.style.backgroundColor = 'red');
    }
}
