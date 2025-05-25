// Memoized Fibonacci function
// This function calculates the nth Fibonacci number using memoization to optimize performance.
// It stores previously computed Fibonacci numbers in a memo object to avoid redundant calculations.

const fib = (n, memo={}) => {
    if(n in memo) return memo[n]
    if(n <= 2) return 1;
    memo[n] =  fib(n-1, memo) + fib(n-2, memo);
    return memo[n]
}

console.log(fib(6));
console.log(fib(7));
console.log(fib(150))