const generateArr = require('./generateArr');
const generate_0_10 = require('./generate_0_10');
const testSort = require('./testSort');
const runtime = require('./runtime');
const insertSort = require('./insertSort');
const mergeSort = require('./mergeSort');
const quickSort = require('./quickSort');
const quickSort_1 = require('./quickSort_1');
const quickSort_2 = require('./quickSort_2');
const generateAlmostSort = require('./generateAlmostSort');
const mergeSort_1 = require('./mergeSort_1');
const mergeSort_2 = require('./mergeSort_2');

let arr ;
    arr = generateArr(1000000);
   /* arr = generate_0_10(1000000);*/
/*    arr = generateAlmostSort(10,1);*/

/*runtime(insertSort,arr);*/
/*runtime(mergeSort,arr);*/
/*runtime(quickSort_1,arr);*/
/*testSort(mergeSort(arr));*/

/*testSort(mergeSort_1(arr));*/
/*console.log(arr);*/
/*runtime(quickSort_2,arr);*/
/*runtime(quickSort_2,arr);*/
/*runtime(mergeSort_1,arr);
runtime(mergeSort_2,arr);*/
runtime(quickSort_1,arr);



/*testSort(quickSort_1(arr));*/
/*testSort(quickSort(arr));*/
/*testSort(insertSort(arr));*/
/*testSort(mergeSort_2(arr));*/
