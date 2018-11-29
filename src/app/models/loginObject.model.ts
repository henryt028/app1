export class LoginObject {
    public email: string;
    public password: string;
    public token: string;
    constructor( mail: string, pass: string){
      this.email = (mail) ? mail : null;
      this.password = (pass) ? pass : null;
    }
  }