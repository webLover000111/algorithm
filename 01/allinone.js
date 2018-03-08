const generateArr = require('./generateArr');
const testSort = require('./testSort');
const runtime = require('./runtime');
const insertSort = require('./insertSort');
const mergeSort = require('./mergeSort');
let arr = generateArr(10000);


runtime(insertSort,arr);
runtime(mergeSort,arr);

/*testSort(mergeSort(arr));*/
/*testSort(insertSort(arr));*/
