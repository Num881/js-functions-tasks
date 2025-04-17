// BEGIN
const checkPrime = (number) => {
    if (number < 2) return false;

    const limit = Math.sqrt(number);
    for (let i = 2; i <= limit; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
};

const printPrimeStatus = (number) => {
    const answer = checkPrime(number) ? 'yes' : 'no';
    console.log(answer);
};

export default printPrimeStatus;
// END