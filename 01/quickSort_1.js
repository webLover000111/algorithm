//三路快排;
module.exports = function quickSort_1(arr){
    let len = arr.length;
    if(len < 2){
        return arr;
    }
    _quickSort(arr, 0, len-1);
    return arr;
};
function _quickSort(arr, l, r ){
    if(l >= r){
        return;
    }
    let [a, b] = _partition(arr, l, r);
    _quickSort(arr, l, a-1);
    _quickSort(arr, b, r);
}
function _partition(arr, l, r){
    swap(arr[l],arr[Math.floor(Math.random()*(r-l+1)+l)]);
    let v = arr[l];
    let lt = l;
    let gt = r+1;
    let i = l+1;
    while(i < gt){
        if(arr[i] < v){
            swap(arr, i, lt+1);
            i++;
            lt++;
        }
        else if( arr[i] > v){
            swap(arr, i, gt-1);
            gt--;
        }
        else{
            i++;
        }
    }
    swap(arr, l, lt);
    return [lt, gt];
}

function swap(arr, i, j){
    let temp =arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
