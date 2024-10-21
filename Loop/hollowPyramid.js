function hollowPyramid(n){
    for(let i=0;i<n;i++){
        let str=''
        for(let j=0;j<n-i-1;j++){
            str+=' '
        }
        if(i===n-1){
            for(let k=0;k<2*n-1;k++){
                str+="*"
            }
        }
        else{
            str+='*'
            for(let l=0;l<2*i-1;l++){
                str+=' '
            }
            if(i>0){
                str+="*"
            }
        }
        console.log(str)
    }
}
hollowPyramid(4)