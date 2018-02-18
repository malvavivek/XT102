class Employee {
    constructor(hourly){
        this.hourly=hourly;
    }
}

class ParttimeEmployee extends Employee{
    constructor(hourly){
        super(hourly);
    }
}

class FulltimeEmployee extends Employee{
    constructor(hourly){
        super(hourly);
    }
}

class TemporaryEmployee extends Employee{
    constructor(hourly){
        super(hourly);
    }
}

class EmployeeFactory{
    static createEmployee(type){
        switch(type){
            case "part":
            return new ParttimeEmployee(500.00);
            break;
            case "full":
            return new FulltimeEmployee(200.00);
            break;
            case "temp":
            return new TemporaryEmployee(400.00);
            break;
            default:
            return new Employee(300.00);    
        }
    }
}
let inst = EmployeeFactory.createEmployee('temp');
console.log(inst.hourly);