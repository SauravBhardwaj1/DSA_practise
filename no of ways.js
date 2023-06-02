// TC - O(3^9) - This is because the function ways() is called recursively with three different values: n-1, n-2, and n-3.
// SC - O(n) - This is because the function ways() is called recursively with values from n down to 0. 


const No_ofWays = (input)=>{
    let n=+input.trim()

    console.log(No_ofWays(n))
    const Ways = (n)=>{
        if(n<0){
            return 0
        }
        if(n==0){
            return 1
        }

        return Ways(n-1) + Ways(n-2) + Ways(n-3)
    } 
}