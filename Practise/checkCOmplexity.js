let a=0
for(let i=0;i<n;i++){
    for(let j=n;j>i;j--){
        a=a+i+j 
    }
}
// i can check roughly it is O(n^2) but can you explain how as per me cause it is going through same loop and iterating n twice so i think
// it is O(n^2)