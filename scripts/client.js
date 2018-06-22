// create empty array for employees
const employees = [];

// create Employee class
class Employee {
    constructor(firstName, lastName, idNum, title, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNum = idNum;
        this.title = title;
        this.salary = salary;
    }
}

let totalExpense = 0;

// function for constructing new employees and adding them to employees array
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
    // capture input values
    let firstName = $('#fnInput').val();
    let lastName = $('#lnInput').val();
    let idNum = $('#idNumInput').val();
    let title = $('#titleInput').val();
    let salary = $('#salaryInput').val();
    
    // use input values to create new objects in the array
    newEmployee(firstName, lastName, idNum, title, salary);
    
    // append new table row with input data
    employeesToTable();
    
}

function employeesToTable() {
    for (employee of employees) {
        addTableRow(employee.firstName, employee.lastName, employee.idNum, employee.title, employee.salary);
    }
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

function updateExpense(salary) {
    totalExpense += (parseInt(salary)/12);
    return totalExpense;
}