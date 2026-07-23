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