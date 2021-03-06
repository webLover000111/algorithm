//随机化参考数
module.exports = function quickSort_2(arr){
    let len;
    if(arr.length<2){
        return arr;
    }
    len = arr.length;
    _quickSort(arr, 0, len-1);
    /*  console.log(arr);*/
    return arr;
};
function _quickSort(arr, l, r){
    if(l>=r){
        return ;
    }
    p = _partition(arr, l, r);
    _quickSort(arr, l, p-1);
    _quickSort(arr, p+1,r);//p是作为标志所处位置,所以这里必须是p+1
}
function _partition(arr, l, r){
    swap(arr,l,Math.floor(Math.random()*(r-l+1)-l));//使取的标志位尽可能随机
    let v = arr[l];
    let j = l;
    for(i = l+1; i<=r; i++){
        if(arr[i]<v){
            swap(arr,i,j+1);
            j++;
        }
    }
    swap(arr, l, j);
    return j;
}
function swap(arr, i, j){
    let temp =arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
