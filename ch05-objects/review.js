// Άσκηση 1
// Μία συνάρτηση getPropertyValue(obj, propertyName)
// που επιστρέφει την τιμή της ιδιότητας με αυτό
// το όνομα

function getPropertyValue(obj, propertyName) {
    // return obj.propertyName λάθος, θα αναμέναμε μέσα στο obj να υπάρχει "propertyName"
    return obj[propertyName];
}