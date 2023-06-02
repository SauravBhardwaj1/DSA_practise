// TC- O(N)
// SC- O(N)


const Balanced = (input)=>{

    let str = input.trim();
    let n= str.length
    let stack = []

    for(let i=0;i<n;i++){
        if(str[i]=="(" || str[i]==")" || str[i]=="[" || str[i]=="]" || str[i]=="{" || str[i]=="}"){
            if(str[i]==")" && stack[stack.length]=="(" ||
             str[i]=="}" && stack[stack.length]=="{" ||
              str[i]=="]" && stack[stack.length]=="[" ){
                stack.pop()
                continue
              }
              else{
                stack.push(str[i])
              }
        }
    }

    if(stack.length===0){
        console.log("Balanced")
    }else{
        console.log("Not Balanced")
    }

}