// Write your solution in this file!

const employee = {
    name:'Sam',
    streetAddress : '',
};

let beforeEach = (function () {
    for (const key in employee) {
      delete employee[key];
    }

    employee.name = 'Sam';
  });

// Function to clone an object
function cloneObject(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
  
  // Function to update an employee object with a new key value pair
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    // Clone the original employee object
    const newEmployee = cloneObject(employee);
    // Add the new key value pair to the cloned employee object
    newEmployee[key] = value;
    // Return the new employee object
    return newEmployee;
  }
  
  // Function to update an employee object destructively with a new key value pair
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    // Update the original employee object with the new key value pair
    employee[key] = value;
    // Return the entire updated employee object
    return employee;
  }
  
  // Function to delete a key from an employee object
  function deleteFromEmployeeByKey(employee, key) {
    // Clone the original employee object
    const newEmployee = cloneObject(employee);
    // Delete the specified key from the cloned employee object
    delete newEmployee[key];
    // Return the new employee object
    return newEmployee;
  }
  
  // Function to delete a key from an employee object destructively
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    // Delete the specified key from the original employee object
    delete employee[key];
    // Return the entire updated employee object
    return employee;
  }