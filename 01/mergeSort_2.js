module.exports = function mergeSort_2(arr){
    let len = arr.length;
    if(len < 2){
        return arr;
    }
    //这里可以考虑当step<=16时,用插入排序优化
    for(let step = 1; step <= len; step = step+step){
        for(let i = 0; i < len; i += step*2){
            // 对 arr[i...i+sz-1] 和 arr[i+sz...i+2*sz-1] 进行归并
            if( arr[i+step-1] > arr[i+step] ){
                let mins = min(i+step*2-1, len-1);
                _doMerge(arr, i, i+step-1, mins);
            }
        }
    }
    return arr;

};


function min(a, b){
    if(a >= b){
        return b;
    }
    else{
        return a;
    }
}

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
