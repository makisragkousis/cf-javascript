// Άσκηση 1
// Μία συνάρτηση που παίρνει ως παράμετρο ένα string
// και επιστρέφει ένα νέο string με τους χαρακτήρες
// σε αντίστροφη σειρά.

function reverse(str) {
    let returnedStr = '';

    for (let i = str.length - 1; i >= 0; i--) {
        returnedStr += str[i];
    }
    
    return returnedStr;
}

function reverse2(str) {
    return str.trim().split('').reverse().join('');
}

let str = "Coding";
console.log(reverse(str));
console.log(reverse2(str));


// Άσκηση 2
// Μία συνάρτηση που να ελέγχει αν ένα string
// είναι παλινδρομικό, αγνοώντας πεζά/κεφαλαία και κενά.
// Επιστρέφει boolean.

function isPalindrome(str) {
    const cleaned = str.trim().toUpperCase().split(/\s+/).join('');

    for (let i= 0, j = cleaned.length - 1; i < j; i++, j--) {
        if (cleaned[i] !== cleaned[j]) {
            return false;
        }
    }
    return true;
}

function isPalindrome2(str) {
    const reversed = str.trim().toUpperCase().split(/\s+/).reverse().join('');
    return reversed === str.trim().toUpperCase().split(/\s+/).join('');
}

let s1 = 'Radar';

console.log(isPalindrome(s1));
console.log(isPalindrome2(s1));


// Άσκηση 3
// Μία συνάρτηση που μετράει πόσα φωνήεντα
// [a, e, i, o , u] περιέχει ένα string, ανεξαρτήτως
// κεφαλαίων/πεζών.

function countVowels(str) {
    let count = 0;
    const vowels = ['a', 'e', 'i', 'o' , 'u'];

    for (const char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

console.log(countVowels('Javascript'));


// Άσκηση 4
// Μία συνάρτηση που παίρνει ως είσοδο μία πρόταση
// και να επιστρέφει την ίδια πρόταση, αλλά με το
// πρώτο γράμμα κάθε λέξης κεφαλαίο και τα υπόλοιπα πεζά
// και ένα κενό μεταξύ των λέξεων.
// 'codING    faCtory'  ->  'Coding Factory'

function capitalize(str) {
    if (!str.trim()) return '';

    let returnedSentence = '';
    const tokens = str.trim().split(/\s+/)

    for (const token of tokens) {
        const newToken1 = token[0].toUpperCase();
        const newToken2 = token.slice(1).toLowerCase();
        returnedSentence += newToken1 + newToken2 + ' ';
    }
    return returnedSentence.trim();
}

console.log(capitalize('codING    faCtory'));


// Άσκηση 5
// Μία συνάρτηση που παίρνει ένα κείμενο και
// μία λέξη και επιστρέφει πόσες φορές εμφανίζεται
// αυτή η λέξη μέσα στο κείμενο (ανεξαρτήτως πεζών/κεφαλαίων).

function wordCount(text, str) {
    if (!text.trim() || !str.trim()) return 0;

    const words = text.trim().toLowerCase().split(/\s+/);
    const searchedTerm = str.trim().toLowerCase();
    let times = 0;

    for (const word of words) {
        if (word === searchedTerm) times++;
    }
    return times++;
}

function wordCount2(text, str) {
    if (!text.trim() || !str.trim()) return 0;

    const pattern = new RegExp('\\b + str.trim() + \\b', 'gi');
    const matches = text.match(pattern);

    return matches === null ? 0 : matches.length;
}