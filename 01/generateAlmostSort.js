module.exports = function generateAlmostSort(n,m){
    var arr = [];
    for(let i=0;i<n;i++){
        arr[i] = i;
    }
    for(let i=0; i<m;i++){
        swap(arr,(Math.floor(Math.random()*n)),(Math.floor(Math.random()*n)));
    }
    return arr;
};
function swap(arr,i,j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}