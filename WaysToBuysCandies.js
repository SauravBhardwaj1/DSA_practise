// TC - O(2^n) This is because in the worst case, the algorithm will have to explore all possible combinations of candies that can be bought to reach the target c.
// SC - O(n) - The maximum depth of the call stack will be n in the worst case, when all candies have to be bought.

var count=0
const WaysToBuyCandies = (arr,n,m,ans,sum,index)=>{
    if(sum===c){
        console.log(ans.join(" "))
        count++;
        return
    }
    else if(sum<m){
        return
    }

    for(let i=index;i<n;i++){
        ans.push(arr[i])
        WaysToBuyCandies(arr,n,m,ans,sum+arr[i],i)
        ans.pop()
    }
}

function runProgram(input){
    input=input.trim().split("\n");
    let [n,m] = input[0].trim().split(" ").map(Number);
    let arr= input[1].trim().split(" ").map(Number);
    
    WaysToBuyCandies(arr,n,m,[],0,0);
    if(count===0)
    {
        console.log(-1)
    }
}
if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}