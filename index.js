const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
const totalBatteries = [4, 5, 3, 4, 4, 6, 5].reduce(function(accumulator,element){return element + accumulator},0)
console.log(totalBatteries)
// Code your solution here
