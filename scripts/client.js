// create empty array for employees
const employees = [];

// create Employee class
class Employee {
    constructor(firstName, lastName, idNum, title, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNum = idNum;
        this.title = title;
        this.salary = parseInt(salary);
    } // end constructor
} // end Employee class

// set global variable for total expenses
let totalExpense = 0;

// function for constructing new employees and adding them to employees array
function newEmployee(firstName, lastName, idNum, title, salary) {
    let employee = new Employee(firstName, lastName, idNum, title, salary);
    employees.push(employee);
//    return employee;
} // end newEmployee

//initialize jQuery
$(readyNow);

function readyNow() {
    addEventListeners();
    updateExpense(totalExpense);
} // end readyNow

function addEventListeners() {
    $('#submitBtn').on('click', handleSubmit);
    $('#salaryTable').on('click', '.deleteBtn', handleDelete);
} // end addEventListeners

function handleSubmit() {
    // capture input values from DOM
    let firstName = $('#fnInput').val();
    let lastName = $('#lnInput').val();
    let idNum = $('#idNumInput').val();
    let title = $('#titleInput').val();
    let salary = $('#salaryInput').val();

    // use input values to create new objects in the employees array
    newEmployee(firstName, lastName, idNum, title, salary);

    // append new table row with input data
    employeesToTable();

    // update total expense based on additonal salary
    updateExpense(salary);

    // check if total monthly expenses are greater than $20,000
    checkCosts();

    // clear inputs
    $('#fnInput').val('');
    $('#lnInput').val('');
    $('#idNumInput').val('');
    $('#titleInput').val('');
    $('#salaryInput').val('');

} // end handleSubmit

function handleDelete() {

    // capture employee name from row to be deleted
    let nameToDelete = $(this).closest('tr').data('name');

    // confirm delete alert specifying employee name
    if (confirm('Are you sure you want to delete ' + nameToDelete + '?')) {

        // capture employee id and salary from row to be deleted
        let idToDelete = $(this).closest('tr').data('id');
        let lessSalary = -($(this).closest('tr').data('salary'));

        // use employee id to identify and remove employee from employees array
        for (let i = 0; i < employees.length; i++) {
            if (employees[i].idNum === idToDelete) {
                employees.splice(i, 1);
            } // end if statement
        } // end for loop
        
        // remove row from table
        $(this).closest('tr').remove();

        // update total expense based on employee removal
        updateExpense(lessSalary);

        // check if total monthly expenses are greater than $20,000
        checkCosts();

    } // end if statement
} // end handleDelete

// create new table row and append to the DOM
function addTableRow(firstName, lastName, idNum, title, salary) {

    // initialize new empty row
    let $row = $('<tr></tr>');

    // append data to new row
    $row.append(`<td>${firstName}</td>`);
    $row.append(`<td>${lastName}</td>`);
    $row.append(`<td>${idNum}</td>`);
    $row.append(`<td>${title}</td>`);
    $row.append(`<td class="salaryColumn">${accounting.formatMoney(salary)}</td>`);
    $row.append('<button class="btn btn-danger deleteBtn">Delete</button>');

    // add data tags to row
    $row.data('id', idNum);
    $row.data('salary', salary);
    $row.data('name', firstName + ' ' + lastName);

    // append new row to table on the DOM
    $('#salaryTable').append($row);

} // end addTableRow

// clear old table data and recreate data using employees array
function employeesToTable() {

    // clear current table data
    $('#salaryTable').empty();

    // add table data built from employees array
    for (employee of employees) {
        addTableRow(employee.firstName,
                    employee.lastName,
                    employee.idNum,
                    employee.title,
                    employee.salary);
    } // end for loop
} // end employeesToTable

// update total monthly costs
function updateExpense(salary) {

    // calculate monthly expense for passed in salary and add to total expense
    totalExpense += salary / 12;

    // append updated expenses to the DOM
    $('#monthlyTotal').text('Total Monthly: ' + accounting.formatMoney(totalExpense));
} // end updateExpense

// check if total monthly cost exceeds $20,000
function checkCosts() {

    // add red background if total monthly cost exceeds $20,000
    if (totalExpense > 20000) {
        $('#monthlyTotal').addClass('redBack');
    } // end if statement
    //remove red background if total monthly cost drops below $20,000
    else {
        $('#monthlyTotal').removeClass('redBack');
    }
} // end checkCosts