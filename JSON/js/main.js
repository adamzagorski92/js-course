console.log("JSON - JS Object Notation");

let employeesList =
`{
    "employees": 
    [
        { 
            "firstName": "Adam", 
            "lastName": "Zagorski"
        },
        { 
            "firstName": "Jan", 
            "lastName": "Kowalski"
         },
        { 
            "firstName": "Marek", 
            "lastName": "Iksinski"
         }
    ]
}`;

/* console.log(employeesList.employees[0].firstName); */

// for (let worker of employeesList.employees) {
//     console.log(worker.lastName);
// }

// console.log(JSON.stringify(employeesList)); // zamienia JSONa na tekst -->> to wysyła się na serwer (w takiej formie)

console.log(JSON.parse(employeesList)); // zamienia tekst na obiekt java Scriptowy JSONa -->> na tym  operujemy w kodzie JS (w takiej formie)

