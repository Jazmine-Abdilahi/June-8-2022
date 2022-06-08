/* Video 132 */

const greet = function(greeting) {
    return function(name) {
        console.log(`${greeting} ${name}`)
    }
}

const greetHey = greet('Hey');
greeterhey('Jazmine');
greeterHey('Yazmine');

greet('Hello')('Jazmine');

// Challenge
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

