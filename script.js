// --------------------------Task1------------------------
const user = {
    hobby: "cycling",
    premium: true
}

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;
// for (const key of Object.keys(user)) {
//   console.log(`${key}: ${user[key]}`);
// }

// --------------------------Task2------------------------

const object = {
    height: 150,
    weight: 150,
    border: true
}

const countProps = (obj) => {
    return Object.keys(obj).length;
}

// console.log(countProps(object));

// --------------------------Task3------------------------
const employees = {
    Mango: 5,
    Kiwi: 7,
    Poly: 4,
    Ajax: 3
}

const findBestEmployee = (employees) => {
    let result = 0;
    let resultName;
    for (const key in employees) {
        if (employees[key] > result) {
            result = employees[key];
            resultName = key;
        }
    }

    return resultName
}

// console.log(findBestEmployee(employees))

// --------------------------Task4------------------------
const employeesSalary = {
    Mango: 150,
    Kiwi: 130,
    Poly: 200,
    Ajax: 190
}

const countTotalSalary = (employees) => {
    let sum = 0;

    for (const key in employees) {
        sum += employees[key];
    }

    return sum
}

// console.log(countTotalSalary(employeesSalary));

// --------------------------Task5------------------------

// Використовую той самий масив об'єктів для 5 та 6 завдань
const products = [
    { name: "bread", price: 25, quantity: 2 },
    { name: "orange", price:5, quantity: 5 },
    { name: "water", price: 35, quantity: 3}
]


const getAllPropValues = (arr, prop) => {
    let values = [];
    for (let i = 0; i < arr.length; i++) {
        values.push(arr[i][prop]);
    }

    return values;
}

// console.log(getAllPropValues(products, "price"));

// --------------------------Task6------------------------


const calculateTotalPrice = (allProdcuts, productName) => {
    let totalPrice = 0;

    for (const product of allProdcuts) {
        if (productName == product.name) {
            totalPrice += product.price * product.quantity;
        }
    }

    return totalPrice

}
// console.log(calculateTotalPrice(products, "orange"));