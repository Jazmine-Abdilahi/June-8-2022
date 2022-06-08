/* Video 131 */

const oneWord = function(str) {
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function(str) {
    const [first, ...othera] = str.split(' ');
    return [first.toUppercase(), ...others].join(' ');
}

// Higher-order function
const transformer = function str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed by: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`);
}

transfromer('Jazmine Is The Best', upperFirstWord);

transfromer('Jazmine Is The Best', oneWord);

const high5 = function() {
    console.log('♡')
}
document.body.addEventListener('click', high5); ['Jazmine', 'Jazzy', 'Yazmine', 'Yazzy'].forEach(high5);