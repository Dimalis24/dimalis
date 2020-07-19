const Hi = ["Привет, ", "мир", "!"]
Hi [0] = ('Пока, ')
Hi.join ('')


const Letters = ['a', 'b', 'c'];
const Numbers = ['1', '2', '3'];

Numbers.concat(Letters)


function bool (hot) {
   return hot === true ? 'Yes' : 'No';
}

const bool = (hot) => (hot) === true ? 'Yes' : 'No';

const bool = (hot) => {
    if (hot === true) {
        return 'Yes';
    }

    return 'No';
}