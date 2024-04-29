let data=""
const wrapper = document.getElementById("wrapper");
const items = [
    { id: 1, name: "apple", price: 1.75, categoryId: 1, inventory: 50 },
    { id: 2, name: "banana", price: 0.25, categoryId: 1, inventory: 100 },
    { id: 3, name: "orange", price: 1.0, categoryId: 1, inventory: 100 },
    { id: 4, name: "broccoli", price: 3.0, categoryId: 2, inventory: 400 },
    { id: 5, name: "cucumber", price: 1.0, categoryId: 2, inventory: 150 },
    { id: 6, name: "milk", price: 5.75, categoryId: 3, inventory: 100 },
    { id: 7, name: "cheddar cheese", price: 4.0, categoryId: 3, inventory: 100 },
    { id: 8, name: "sourdough loaf", price: 5.5, categoryId: 4, inventory: 200 },
];

const cart = [];
