import { Employee } from "./employee";

export class Work {

    constructor(
        public id: number,
        public date: Date,
        public start: string,
        public end: string,
        public employee?: Employee,
        public isEmpty?: boolean,
        public duration?: number,
        public breakDuration?: number
    ){
        
    }

}