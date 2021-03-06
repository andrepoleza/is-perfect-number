# is-perfect-number

[![npm version](https://badge.fury.io/js/is-perfect-number.svg)](http://badge.fury.io/js/is-perfect-number)
[![Build Status](https://travis-ci.org/andrepoleza/is-perfect-number.svg?branch=master)](https://travis-ci.org/andrepoleza/is-perfect-number)
[![Dependency Status](https://david-dm.org/andrepoleza/is-perfect-number.svg)](https://david-dm.org/andrepoleza/is-perfect-number)

> Checks if a [number is perfect](https://en.wikipedia.org/wiki/Perfect_number).

## Install

```
$ npm install --save is-perfect-number
```


## Usage

```js
var isPerfectNumber = require('is-perfect-number');

isPerfectNumber(1);
//=> false

isPerfectNumber(2);
//=> false

isPerfectNumber(3);
//=> false

isPerfectNumber(6);
//=> true

isPerfectNumber(28);
//=> true

isPerfectNumber(496);
//=> true
```
