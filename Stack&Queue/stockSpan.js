var stockSpanner=function(){
    this.stack=[]
}
stockSpanner.prototype.next=function(price){
    let span=1
    while(this.stack.length>0 && this.stack[this.stack.length-1].price<=price){
        span+=this.stack.pop().span
    }
    this.stack.push({price,span})
    return span
}
