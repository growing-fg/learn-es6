"use strict"

function template (context) {
    return `<h1>This is template</h1>
<b>name</b>: ${context.name}<br>
<b>age</b>: ${context.age}<br>
<p>${context.message}</p>`
}

let html = template({
    name: "Fred",
    age: 28,
    message: "I am so happy to learn es2015!"
});

document.getElementById('template').innerHTML = html;
