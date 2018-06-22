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
    return employee;
}


$(readyNow);

function readyNow() {
    addEventListener();
}

function addEventListener() {
    $('#submitBtn').on('click', handleSubmit);
}

function handleSubmit() {
    let firstName = $('#fnInput').val();
    let lastName = $('#lnInput').val();
    let idNum = $('#idNumInput').val();
    let title = $('#titleInput').val();
    let salary = $('#salaryInput').val();
    
    newEmployee(firstName, lastName, idNum, title, salary);
    addTableRow(firstName, lastName, idNum, title, salary);
    
}

function addTableRow(firstName, lastName, idNum, title, salary) {
    // use passed in parameters to create a table row
    let $row = $('<tr></tr>');
    
    $row.append(`<td>${firstName}</td>`);
    $row.append(`<td>${lastName}</td>`);
    $row.append(`<td>${idNum}</td>`);
    $row.append(`<td>${title}</td>`);
    $row.append(`<td>${salary}</td>`);

    $('#salaryTable').append($row);
}