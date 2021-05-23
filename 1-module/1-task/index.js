function factorial(n) {
    for (; n < 2;) {
     return 1;
 }

 for (; n >= 2;) {
     return n * factorial(n - 1);
 }
}
