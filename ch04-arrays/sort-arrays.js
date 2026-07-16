const cities = ['Paris', 'London', 'Berlin', 'Athens'];
const numbers = [10, 101, 103, 77, 79, 650, 590];

cities.sort( (a, b) => a.localeCompare(b, 'en') );        // sorts in-place

numbers.sort(function(a,b) {
    if (a > b) return 1;
    if (a < b) return -1;
    if (a === b) return 0;
});

numbers.sort((a, b) => a - b);    // Ascending
numbers.sort(function(a,b) {
    return a - b;
})

numbers.sort((a, b) => b - a);     // Descending