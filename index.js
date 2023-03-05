// Write your solution in this file!
const employee = {
    name: "Paul",
    streetAddress: "4341 Sue Rd"
}

function updateEmployeeWithKeyAndValue(employee, name, streetAddress) {
    return {
        ...employee,
        [name]: streetAddress,
    };
}


function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, streetAddress) {
    employee[name] = "12 Broadway"
    return employee;
}

function deleteFromEmployeeByKey(employee, name, value) {
    const newEmployee = {...employee};
    newEmployee[name] = value;
    return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name;
    return employee;
}


