let array = new Array(1,2,3,4,5,6,7);
let fromIndex = {
  [Symbol.toPrimitive]() {
    %DebugPrint(array);
    array.length = 1;
    %DebugPrint(array);
    return 7;
  }
};
let receiver = array;
let searchElement = {};
receiver.push(1);
let res = Array.prototype.lastIndexOf.call(receiver,searchElement, fromIndex);
