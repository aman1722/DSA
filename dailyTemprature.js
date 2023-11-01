function daily(n,arr){
    let stalk = []; 
    let temp = new Array(n).fill(0); 
    for (let i = 0; i < n; i++) {
      while (stalk.length && arr[i] > arr[stalk[stalk.length - 1]]) {    
       let index = stalk.pop(); 
        temp[index] = i - index; 
      }
      stalk.push(i); 
    }
    return temp.join(" "); 
  }