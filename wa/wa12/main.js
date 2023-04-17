// Problem 1
const employees = [
    {
      firstName: 'Sam',
      department: 'Tech',
      designation: 'Manager',
      salary: 40000,
      raiseEligible: true
    },
    {
      firstName: 'Mary',
      department: 'Finance',
      designation: 'Trainee',
      salary: 18500,
      raiseEligible: true
    },
    {
      firstName: 'Bill',
      department: 'HR',
      designation: 'Executive',
      salary: 21200,
      raiseEligible: false
    }
  ];
  
  // Problem 2
  const company = {
    companyName: 'Tech Stars',
    website: 'www.techstars.site',
    employees: employees
  };
  
  // Problem 3
  const newEmployee = {
    firstName: 'Anna',
    department: 'Tech',
    designation: 'Executive',
    salary: 25600,
    raiseEligible: false
  };
  company.employees.push(newEmployee);
  
  // Problem 4
  const totalSalary = company.employees.reduce((sum, employee) => sum + employee.salary, 0);
  console.log('Total Salary:', totalSalary);
  
  // Problem 5
  function updateSalaryAndEligibility() {
    company.employees.forEach(employee => {
      if (employee.raiseEligible) {
        employee.salary *= 1.1;
        employee.raiseEligible = false;
      }
    });
  }
  updateSalaryAndEligibility();
  
  // Problem 6
  const workFromHomeEmployees = ['Anna', 'Sam'];
  company.employees.forEach(employee => {
    employee.wfh = workFromHomeEmployees.includes(employee.firstName);
  });
  
  console.log('Updated Company JSON:', company);
  