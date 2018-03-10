module.exports = function generate_0_10(n){
    let arr = [];
    for(let i=0; i<n; i++){
        arr.push(Math.floor(Math.random()*(10)));
    }
    return arr;
};