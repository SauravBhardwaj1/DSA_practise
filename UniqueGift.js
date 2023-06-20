// TC - O(n) -
// SC - O(n)

input =input.trim().split("\n");
let tc = +input[0].trim();
let line=1;

for(let i=0;i<tc;i++){
    let str = input[line++].trim();
    let queue = []
    let obj = {}
    let ans = ""
    
    for(let j of  str){
        obj[j]= obj[j] || 0;
        obj[j]++;
        queue.push(j)
        
         while(queue.length!==0 && obj[queue[0]]!==1){
             queue.shift();
         }
         
         if(queue.length==0){
             ans+="#"
         }else{
             ans+=queue[0]
         }
    }
    
  console.log(ans)
}