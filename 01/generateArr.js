 module.exports = function generateArr(n){
    let arr = [];
    for(let i=0;i<n;i++){
     let srand =Math.floor( Math.random()*(10000-0+1));
      arr.push(srand);
    }
    return arr;
};
