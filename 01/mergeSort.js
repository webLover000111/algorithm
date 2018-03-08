module.exports = function mergeSort(arr){
    let len = arr.length;
    if(len < 2){
        return arr;
    }
    for(let mergeLen = 2; mergeLen <= len; mergeLen = mergeLen*2 ){
        let temp = [];
        let pushed = [];
        while(arr[1]!==undefined){
            for(let i=0;i<2;i++){
                temp[i] = arr.shift();
            }
            pushed = merge(temp);
            arr[(arr.length)] = pushed;
        }
    }
    return arr[0];



};
function merge(temp) {
    let pushed = [];
    let ilen;
    let jlen;
    if(typeof temp[0]==='number'){
        temp[0] = Array.of(temp[0]);
    }
    if(typeof temp[1]==='number'){
        temp[1] = Array.of(temp[1]);
    }
    ilen = temp[0].length;
    jlen = temp[1].length;
    for(var i=0,j = 0; i<ilen && j< jlen; ){
        if(temp[0][i]<=temp[1][j]){
            pushed.push(temp[0][i]);
            i++;
        }
        else{
            pushed.push(temp[1][j]);
            j++;
        }
    }
    if(i===ilen && j!==jlen){
        for(;j<jlen;j++){
            pushed.push(temp[1][j]);
        }
    }
    else if(j===jlen && i!==ilen){
        for(; i<ilen; i++){
            pushed.push(temp[0][i]);
        }
    }
    return pushed;

}