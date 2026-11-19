import { Service, signal } from '@angular/core';
import { Task } from '../../interfaces/Task';

@Service()
export class TaskService {
    private readonly _tasks = signal<Task[]>([
        {
            id: 1,
            title: 'Promener le chien',
            isDone: false,
        },
        {
            id: 2,
            title: 'Faire à manger',
            isDone: false,
        },
    ]);
    readonly tasks = this._tasks.asReadonly();

     addTask(newTaskName: string) {
        this._tasks.set([
            ...this._tasks(),
            {
                id: 3,
                title: newTaskName,
                isDone: false,
            },
        ]);
    }

     removeTask(id: number) {
        this._tasks.set(this._tasks().filter((i) => i.id !== id));
    }
}
