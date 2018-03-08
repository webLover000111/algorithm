module.exports = function testSort(arr){
    const len =arr.length;
    for(var i=0;i<len;i++){
        if(arr[i]>arr[i+1]){
            console.log(arr[i]+'and'+arr[i+1]);
            console.log('wrong sort!');
            break;
        }
    }
    if(i===len){
        console.log('success sort!');
    }
}