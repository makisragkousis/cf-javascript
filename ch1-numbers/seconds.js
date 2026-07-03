// Μετατροπή δευτερολέπτων σε λεπτά και δευτερόλεπτα
const totalSeconds = 75;

const SEC_PER_MIN = 60;

const mins = Math.floor(totalSeconds / SEC_PER_MIN) ;
const secs = totalSeconds % SEC_PER_MIN;

console.log(`${totalSeconds} seconds equals ${mins} minute(s) and ${secs} second(s)`);