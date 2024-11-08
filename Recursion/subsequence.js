function subSequence(arr){
    function sequence(temp=[],i=0){
        for(let j=i;j<arr.length;j++){
            temp.push(arr[j]);
            console.log(temp)
            sequence(temp,j+1)
            temp.pop()
        }
    }
    sequence([],0);
}
let arr=[1,2,3]
subSequence(arr)