let a=0
for(let i=0;i<n;i++){
    for(let j=n;j>i;j--){
        a=a+i+j 
    }
}
// i can check roughly it is O(n^2) but can you explain how as per me cause it is going through same loop and iterating n twice so i think
// it is O(n^2)


let i=0,j=0,k=0
for(i=n/2;i<=n;i++){
    for(j=2;j<=n;j=j*2){
        k=k+n/2
    }
}
// i think asnwer would be O(N Log N) cause n is iterating twice but seperately for inner loop than outer loop