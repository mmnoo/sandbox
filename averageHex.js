const numberToHex = number => Math.round(number).toString(16);
const hexToNumber = hex => parseInt(hex, 16);
 
const testNumToHex1 = numberToHex(255);
const testNumToHex2 = numberToHex(43.4);
const testNumToHex3 = numberToHex(43.6);
console.assert(testNumToHex1 === 'ff', testNumToHex1);
console.assert(testNumToHex2 === '2b', testNumToHex2);
console.assert(testNumToHex3 === '2c', testNumToHex3);

const testHexToNumber1 = hexToNumber('ff');
const testHexToNumber2 = hexToNumber('2b');
const testHexToNumber3 = hexToNumber('2c');
console.assert(testHexToNumber1 === 255, testHexToNumber1);
console.assert(testHexToNumber2 === 43, testHexToNumber2);
console.assert(testHexToNumber3 === 44, testHexToNumber3);




  