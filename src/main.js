/**
 * the Let and var
 */

function theVar () {
    var test = 'outer var';

    if (1) {
        var test = 'inner var';
        console.log(test);
    }

    console.log(test);
}

function theLet () {
    let test = 'outer let';

    if (1) {
        let test = 'inner let';
        console.log(test);
    }

    console.log(test);
}


theVar();
console.log('-------------------');
theLet();

for (let i = 0; i < 10; i++) {
    console.log(i);
}
console.log(i);  // error: i is not defined
