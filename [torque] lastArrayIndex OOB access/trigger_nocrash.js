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
let res = Array.prototype.lastIndexOf.call(receiver,searchElement, fromIndex);
/*
array.elements before triggering the bug (output from %DebugPrint):

 - length: 7
 - elements: 0x1cddc4f8aaa1 <FixedArray[7]> {
           0: 1
           1: 2
           2: 3
           3: 4
           4: 5
           5: 6
           6: 7
 }

array.elements after triggering the bug (output from %DebugPrint): 

 - length: 1
 - elements: 0x1cddc4f8aaa1 <FixedArray[7]> {
           0: 1
         1-6: 0x1abefa4005b9 <the_hole>
 }

We can observe that array.length didn't actually made the underlying 
FixedArray smaller. Only the JSArray's length was changed.

To trigger an assert or a crash, we'd need to trigger a resize of this elements FixedArray.

 */

