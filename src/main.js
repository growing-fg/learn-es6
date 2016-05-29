"use strict"

function test1 (arg = 'default value') {
    console.log('arg is ' + arg);
}

test1();
test1('passed value');


function test2 (a, b, c) {
    console.log(a, b, c);
    console.log(arguments);
}

let data = [1, 2, 3];
test2(data);
test2(...data);
