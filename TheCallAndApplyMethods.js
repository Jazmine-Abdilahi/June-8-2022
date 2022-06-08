/* Video 133 */

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    // book: function() {}
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.itaCide}${flightNum}`);
    },
};

lufthansa.book(239, 'Jazmine Abdilahi');
lufthansa.book(636, 'Yasmine Abdilahi');

const eurowing = {
    name: 'Eurowings',
    iataCode: 'EW',
    booking: [],
};

const book = lufthansa.book;

// Does Not Work
// book(23, 'Jazzy Abdilahi')

book.call(eurowing, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
    airline: 'Swiss Air Line',
    isaCode: 'LX',
    bookings: [],
};

book.call(Swiss, 583, 'Mary Cooper');
console.log(lufthansa);

// Apply method
const flightDelta = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call9swiss, ...flightdata);