export default function iterateThroughObject(reportWithIterator) {
  let employeesString = '';
  let employeeIterator = reportWithIterator.getIterator();
  let employee = employeeIterator.next();
  while (!employee.done) {
    employeesString += employee.value + ' | ';
    employee = employeeIterator.next();
  }
  // remove the extra ' | ' at the end of the string
  return employeesString.slice(0, -3);
}

