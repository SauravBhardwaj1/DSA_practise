
// Tc - O(n logn);
//sc - O(n);

function merge(arr1, arr2) {
    arr1 = arr1.sort((a, b) => a - b);
    // console.log(arr1);
    arr2 = arr2.sort((a, b) => a - b);
    // console.log(arr2);
  
    let res = [];
  
    let n = arr1.length;
    let m = arr2.length;
    let i = 0;
    let j = 0;
    let k = 0;
  
    while (i < n && j < m) {
      if (arr1[i] <= arr2[j]) {
        res[k] = arr1[i];
        i++;
        k++;
      } else {
        res[k] = arr2[j];
        k++;
        j++;
      }
    }
    while (i < n) {
      res[k] = arr1[i];
      i++;
      k++;
    }
    while (j < m) {
      res[k] = arr2[j];
      j++;
      k++;
    }
    console.log(res.join(" "));
  }