// TC - O(9^K) where K is the size of arr, This is because the function buyApresent() is recursively called K times with 9 iterations each time. 
// SC - O(K) unction buyApresent() uses recursion and creates an array arr of size K to store the current combination of numbers being checked

function runProgram(input){
    let [P,K] = input.trim().split(" ").map(Number)
    buyApresent(P,K,1,[])
    if(bag.length>0){
        console.log(bag.join("\n"))
    }
    else{
        console.log(-1)
    }
}

let bag=[]

function buyApresent(P,K,index,arr){
    if(arr.length==K){
        if(arr.reduce((a,b)=>a+b)==P){
            bag.push(arr.join(" "))
        }
    }
    for(let i=index;i<=9;i++){
        arr.push(i)
        buyApresent(P,K,i+1,arr)
        arr.pop()
    }
}