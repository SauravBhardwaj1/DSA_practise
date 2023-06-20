// TC - O(log n) - This is because the maximum number of iterations of the outer loop is 32 
//                 (since we are checking a 32-bit integer), which is constant. The inner loop iterates over the digits of n, which has a maximum length of log n (in base 10).
// SC - O(1)

happy=(n)=>{
    let flag= true;
    for(let i=0;i<32;i++){
        flag=false;
        let sum=0;
        n=n.toString();
        for(let j=0;j<n.length;j++){
            sum+=n[j]**2;
        }
        n=sum;
        if(sum==1){
            flag=true;
            break;
        }
    }
    console.log(flag)
}   