const initial = {
    firstname: "Alice",
    age: 30,
    address: {street: "Patission", streetNum: 80}
}

const copyObj = initial;
copyObj.firstname = 'Bob';
console.log(initial.firstname);   // Shallow Copy - Bob

const copyInitial = {...initial};                                 // SHALLOW COPY
copyInitial.firstname = 'Bob';
copyInitial.address.street = 'Aristotelous';

console.log(initial.firstname);
console.log(initial.address.street);

const copyInitial2 = JSON.parse(JSON.stringify(initial));         // DEEP COPY

const copyInitial3 = structuredClone(initial);                    // DEEP COPY