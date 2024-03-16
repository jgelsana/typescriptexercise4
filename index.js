"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moveZeros = void 0;
const moveZeros = (input) => {
    console.log('Original array: [' + input + ']');
    let array = input.split(', ');
    let zeroCounter = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === '0') {
            zeroCounter++;
        }
    }
    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] === '0') {
            array.splice(i, 1);
        }
    }
    for (let i = 0; i < zeroCounter; i++) {
        array.push(0);
    }
    console.log('');
    console.log('     New array: [' + array.join(', ') + ']');
};
exports.moveZeros = moveZeros;
