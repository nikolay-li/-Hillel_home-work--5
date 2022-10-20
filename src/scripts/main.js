'use strict';

let userString = prompt('Your text');


if (userString && userString.length > 10) {
    console.log(userString.slice(0, 5));
    console.log(userString.slice(-5));
    alert('you can check result at console.log')
} else {
    alert('Error, wrong length of text');
}