// build helper function - randomWordSelector- RWS, 
// RWS- return a random word from an given array 
function RWS(array) {
    const i = Math.floor(Math.random() * array.length);
    return array[i];
}

const signInfo = ['star', 'moon', 'sun', 'comet']
const fortuneOutput = ['terrible luck', 'bad luck', 'ok luck', 'good luck', 'great luck']
const advice = ['go out and eat', 'not read this', 'play more', 'trust no one']

function reader() {
    console.log(`Your sign is ${RWS(signInfo)}`);
    console.log(`Your having ${RWS(fortuneOutput)}`);
    console.log(`You should trust: ${RWS(advice)}`);
}

reader()