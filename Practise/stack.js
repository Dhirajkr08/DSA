
class stack{
    constructor(size){
      this.item=[]
      this.size=size
    }
    push(ele){
      this.item.push(ele)
    }
    pop(){
      if(!this.isEmpty()){
        return this.item.pop()
      }
    }
    isEmpty(){
      return this.item.length===0
    }
    isfull(){
      return this.item.length===this.size
    }
    peek(){
      if(!this.isEmpty()){
        return this.item[this.item.length-1]
      }
    }
  }
  
  let st=new stack(3)
  st.push(10)
  st.push(20)
  console.log(st.isfull())
  console.log(st.isEmpty())
  console.log(st.peek())