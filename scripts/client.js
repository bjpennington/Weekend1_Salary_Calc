const employees = [];

class Employee {
    constructor(firstName, lastName, idNum, title, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNum = idNum;
        this.title = title;
        this.salary = salary;
    }
}

function newEmployee(firstName, lastName, idNum, title, salary) {
    let employee = new Employee(firstName, lastName, idNum, title, salary);
    employees.push(employee);
}


$(readyNow);

function readyNow() {
    addEventListener();
}

function addEventListener() {
    $('#submitBtn').on('click', handleSubmit);
}

function handleSubmit() {
    console.log('You clicked it!');
    
}