'use strict';

function dividesBy(x, y) {
    return x % y === 0;
}

function isPerfectNumber(number) {
    if (typeof number !== 'number') {
        throw new TypeError('Expected a number');
    }

    var sumOfDivisors = 0;
    for (var i = number - 1; i > 0; i--) {
        if (dividesBy(number, i)) {
            sumOfDivisors += i;
        }
    }

    return sumOfDivisors === number;
}

module.exports = isPerfectNumber;
