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

// set global variable for total expenses
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
    updateExpense(totalExpense);
}

function addEventListener() {
    $('#submitBtn').on('click', handleSubmit);
    $('#salaryTable').on('click', '.deleteBtn', handleDelete);
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

    // update total expense based on additonal salary
    updateExpense(salary);

    checkCosts();

    $('#fnInput').val('');
    $('#lnInput').val('');
    $('#idNumInput').val('');
    $('#titleInput').val('');
    $('#salaryInput').val('');



}

function handleDelete() {
    let lessSalary = -($(this).closest('tr').data('salary'));
    
    $(this).closest('tr').remove();

    updateExpense(lessSalary);
    
    
}

function employeesToTable() {

    // clear current table data
    $('#salaryTable').empty();

    // add table data built from employees array
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
    $row.append('<button class="button deleteBtn">Delete</button>');

    $row.data('salary', salary);
    

    $('#salaryTable').append($row);
    
}

function updateExpense(salary) {

    // calculate monthly expense for passed in salary and add to total expense
    totalExpense += salary / 12;

    //return totalExpense;

    // append updated expenses to the DOM
    $('#monthlyTotal').text('Total Monthly: ' + totalExpense.toFixed(2));
}

function checkCosts() {
    if(totalExpense > 20000) {
        $('#monthlyTotal').addClass('redBack');
    }
}