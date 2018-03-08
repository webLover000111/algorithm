module.exports = function runtime(fn,arr){
    let wholeTime ;
    startTime = new Date();
    fn(arr);
    endTime = new Date();
    wholeTime = (endTime.getTime() - startTime.getTime())/1000+'s';
    console.log(wholeTime);
}
