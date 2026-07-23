const user = {
    id: 1,
    firstname: 'Alice'
}

// Άσκηση 1
// Μία συνάρτηση getPropertyValue(obj, propertyName)
// που επιστρέφει την τιμή της ιδιότητας με αυτό
// το όνομα

function getPropertyValue(obj, propertyName) {
    // return obj.propertyName λάθος, θα αναμέναμε μέσα στο obj να υπάρχει "propertyName"
    return obj[propertyName];
}

console.log(getPropertyValue(user, "id"));

// Άσκηση 1b
// Μία συνάρτηση getPropertyValue(obj, propertyName)
// που επιστρέφει την τιμή της ιδιότητας με αυτό
// το όνομα και λαμβάνει υπόψη την περίπτωση το obj
// να είναι null/undefined

function getPropertyValue(obj, propertyName) {
    // return obj.propertyName λάθος, θα αναμέναμε μέσα στο obj να υπάρχει "propertyName"
    return obj?.[propertyName];       // optional chaining
}

console.log(getPropertyValue(null, "id"));

// Άσκηση 1c
// Μία συνάρτηση getPropertyValue(obj, propertyName)
// που επιστρέφει την τιμή της ιδιότητας με αυτό
// το όνομα και λαμβάνει υπόψη την περίπτωση το obj
// να είναι null/undefined ή και το propertyName να μην
// υπάρχει

function getPropertyValue(obj, propertyName) {
    if (obj == null || obj == undefined) {
        return undefined;
    }

    return Object.hasOwn(obj, propertyName)
        ? obj[propertyName]
        : undefined
}


// Άσκηση 2
// Μία συνάρτηση που αθροίζει τις τιμές των
// ιδιοτήτων ενός object

function sumValues(obj) {
    let sum = 0;
    for (const value of Object.values(obj)) {
        sum += value
    }
    return sum;
}

function sumValues2(obj) {
    return Object.values(obj).reduce((sum, value) => sum + value, 0);
}


// Άσκηση 3
// Μία συνάρτηση που να εκτυπώνει τα key, value
// ενός obj

function printEntries(obj) {
    for (const [key, value] of Object.entries(obj)) {
        console.log(key + ": " + value)
    }
}

function printEntries2(obj) {
    Object.entries(obj).forEach(([key, value]) => console.log(`${key}, ${value}`))
}