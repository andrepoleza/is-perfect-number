'use strict';

var test = require('ava');
var isPerfectNumber = require('./');

test('checks if the number is perfect', function(t) {
    t.assert(!isPerfectNumber(1));
    t.assert(!isPerfectNumber(2));
    t.assert(!isPerfectNumber(3));
    t.assert(!isPerfectNumber(4));
    t.assert(!isPerfectNumber(5));

    t.assert(isPerfectNumber(6));
    t.assert(isPerfectNumber(28));
    t.assert(isPerfectNumber(496));
    t.assert(isPerfectNumber(33550336));
    t.assert(isPerfectNumber(8589869056));

    t.end();
});
