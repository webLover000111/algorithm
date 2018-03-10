//自顶向下merge
module.exports = function mergeSort_1(arr) {
    let len = arr.length;
    if (len < 2) {
        return arr;
    }
    _merge(arr, 0, len - 1);
    return arr;
}
function _merge(arr, l, r){
    if(l>=r){
        return;
    }
    let mid = Math.floor(r/2 + l/2);
    _merge(arr, l, mid);
    _merge(arr, mid+1, r);
    if( arr[mid] > arr[mid+1]){
        _doMerge(arr, l, mid, r);
    }
}

//_doMerge 用于归并操作
function _doMerge(arr, l, mid, r){
    let aux = [];
    for( let i=l; i<=r; i++){
        aux[i-l] = arr[i];//aux 用于存要merge的所有数据
    }
        let i = l, j = mid+1;//比较两部分要merge的大小
        for(k=l; k<=r; k++){
            if( i > mid ){
                arr[k] = aux[j-l]; j ++;
            }
            else if( j > r ){
                arr[k] = aux[i-l]; i ++;
            }
            else if( aux[i-l] < aux[j-l] ){
                arr[k] = aux[i-l]; i ++;
            }
            else{
                arr[k] = aux[j-l]; j ++;
            }
        }

}
