export const moveZeros = (input: string) => {

    console.log('Original array: [' + input + ']');

    let array: any[] = input.split(', ');
    let zeroCounter: number = 0;

    for(let i = 0; i < array.length; i++) {
        if(array[i] === '0') {
            zeroCounter++;
        }
    }

    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] === '0') {
            array.splice(i, 1);
        }
    }

    console.log('     Zero counter: ' + zeroCounter);
    console.log('     Spliced array: [' + array.join(', ') + ']');

    for(let i = 0; i < zeroCounter; i++) {
        array.push(0);
    }

    console.log('');
    console.log('     New array: [' + array.join(', ') + ']');
}