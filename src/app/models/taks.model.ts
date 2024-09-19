export interface Task {
    id: number;
    title: string;
    completed: boolean;
}

export class TaskModel implements Task {
    constructor(
        public id: number,
        public title: string,
        public completed: boolean = false
    ) {}

}