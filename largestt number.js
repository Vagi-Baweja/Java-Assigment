let array = function(arr) {
    let max = arr[0];
    for(let i=0; i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return "largest number="+max;
}
console.log(array(["1,2,3,4,5"]))