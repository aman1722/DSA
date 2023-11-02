function fn(n,str){
    let temp =-1;
    let st=[];
    for(let i=0;i<n;i++){
          if(st[temp] == str[i]){
              st.pop();
              temp--;
          }
          else{
              st.push(str[i]);
              temp++;
          }
          
    }
    if(st.length ===0){
        console.log("-1");
    }
    else{
        console.log(st.join(""));
    }
  

}