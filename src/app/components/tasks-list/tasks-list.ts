import {
    afterNextRender,
    Component,
    computed,
    ElementRef,
    inject,
    viewChild,
} from '@angular/core';
import { TaskService} from '../../services/task.service';

@Component({
    imports: [],
    selector: 'app-tasks-list',
    styleUrl: './tasks-list.css',
    templateUrl: './tasks-list.html',
})
export class TasksList {
    protected readonly taskService = inject(TaskService);
    readonly tasks = this.taskService.tasks;
    readonly taskAmount = computed(() => this.tasks().length);

    private readonly title = viewChild.required<ElementRef<HTMLElement>>('title');

    constructor() {
        afterNextRender(() => (this.title().nativeElement.style.backgroundColor = 'red'));
    }

    deleteTask(id: number) {
        this.taskService.removeTask(id);
    }
}
