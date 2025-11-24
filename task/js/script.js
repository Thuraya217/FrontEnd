// FizzBuzz from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i, "FizzBuzz");
    }
    else if (i % 3 == 0) {
        console.log(i, "Fizz");
    }
    else if (i % 5 == 0) {
        console.log(i, "Buzz");
    }
    else {
        console.log();
    }
}

// Prime numbers between 1 to 100
for (let n = 2; n <= 100; n++) {
    let isPrime = true;

    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(n, "is a prime number");
    }
}
