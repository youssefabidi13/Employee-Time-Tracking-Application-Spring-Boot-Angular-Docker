import { Work } from "./work";

export class Break {

    constructor(
      public id: number,
      public date: Date,
      public start: string,
      public end: string,
      public work: Work
    ) {}
  
  }
