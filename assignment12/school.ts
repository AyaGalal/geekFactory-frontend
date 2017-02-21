export class Person {
    constructor(public name: string){ 
    }
    getRole(){

    }
    getInfo(){
        return 'My name is '+this.name+'. I am a '+this.getRole()+'.';
    }
}
export class Student extends Person{
    getRole(){
        return 'Student';
    }
    getInfo(){
        return 'My name is '+this.name+'. I am a '+this.getRole()+'.';
    }
}
export class Staff extends Person{
    getRole(){
        return 'Staff';
    }
    getInfo(){
        return 'My name is '+this.name+'. I am a '+this.getRole()+'.';
    }
}
export class Teacher extends Staff{
    constructor(public name: string,public subject: string){ 
        super(name); 
    }
    getInfo(){
        return 'My name is '+this.name+'. I am a '+this.getRole()+'. I teach '+this.subject+'.';
    }
}
