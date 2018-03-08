/*const generateArr = require('./generateArr');
const testSort = require('./testSort');
let arr = generateArr(100000);*/
module.exports = function insertSort(arr){
    const len = arr.length;
    if(len < 2){
        return arr;
    }
    for(let i=1;i<len;i++){
        temp = arr[i];
        for(let j= i-1;j>-1;j--){
            if(temp< arr[j]){
                arr[j+1] = arr[j];
            }
            else{
                arr[j+1] = temp;
                break;
            }
        }
    }
    return arr;
}
/*testSort(insertSort(arr));*/
