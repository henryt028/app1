export class User {
    id: number;
    first_name: string;
    last_name:string;
    avatar:string;
    constructor( id: number, f_name: string, l_name: string){
        this.id = (id) ? id : null;
        this.first_name = (f_name) ? f_name : null;
        this.last_name = (l_name) ? l_name : null;
      }
}