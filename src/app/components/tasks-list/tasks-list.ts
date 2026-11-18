import {
    afterNextRender,
    ChangeDetectionStrategy,
    Component,
    computed,
    ElementRef,
    input,
    output,
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
    readonly remove = output<number>();
    readonly taskAmount = computed(() => this.tasks().length);

    private readonly title = viewChild.required<ElementRef<HTMLElement>>('title');

    constructor() {
        afterNextRender(() => (this.title().nativeElement.style.backgroundColor = 'red'));
    }

    deleteTask(id: number) {
        this.remove.emit(id);
    }
}
