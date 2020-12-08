"use strict";

fetch('http://localhost/informations/info.json', {mode: 'no-cors'})
.then((value) => {
    console.log(value);
    return value;
}).then((data) => {
    console.log(data);
})


