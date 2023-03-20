export default function createReportObject(employeesList) {
  const allEmployees = {};
  
  // loop through employeesList to populate allEmployees object
  employeesList.forEach(employee => {
    const {name, department} = employee;
    
    if (allEmployees[department]) {
      allEmployees[department] = [...allEmployees[department], name];
    } else {
      allEmployees[department] = [name];
    }
  });
  
  // return report object with allEmployees and getNumberOfDepartments method
  return {
    allEmployees,
    getNumberOfDepartments() {
      return Object.keys(allEmployees).length;
    }
  };
}

