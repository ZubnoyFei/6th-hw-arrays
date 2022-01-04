function pushToArray() {
const array = [];
while(true) {
    const answer = prompt('Enter your word');
    if (answer === null||answer === '') {
        array.pop();
    }else {
        array.push(answer);
    }
    console.log(result);
}
}
