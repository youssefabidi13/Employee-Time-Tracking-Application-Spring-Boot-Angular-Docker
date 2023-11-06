export class Employee {

    constructor(
        public id: number,
        public email: string,
        public firstName: string,
        public jobTitle: string,
        public lastName: string,
        public password: string,
        public phone: string,
        public roles: string,
        public isWorking: boolean = true
    ) {}
    
}