export default function createIteratorObject(report) {
  let employees = [];
  for (const department in report.allEmployees) {
    employees = employees.concat(report.allEmployees[department]);
  }
  let currentIndex = 0;
  return {
    next() {
      if (currentIndex < employees.length) {
        return { value: employees[currentIndex++], done: false };
      } else {
        return { value: undefined, done: true };
      }
    }
  };
}

