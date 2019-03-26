function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
    // make array
        let myArray = [];
    for (i = startIndex; i<= stopIndex; i++) {
        myArray.push(i);
        if (i % 3 == 0) {
            threeCallback(i);
        };
        if (i % 5 == 0) {
            fiveCallback(i);
        };
    }

    console.log(myArray);
    return myArray;

}

console.log(threeFive(10, 15, function(num) { console.log(num+' is dividable by 3');}, function (num) { console.log(num+' is dividable by 5');}));  
// console.log(threeFive(10,15), threeCallback(i), fiveCallback(i));

let addSix = createBase(6);

function createBase(n) {
	return function (b) { return (n+b) };
};
