function printPattern(N){
    let ans = ""
    for(let i=0;i<N;i++){
        for(let j=0;j<N;j++){
            ans+="*"+" ";
        }
        console.log(ans);
        ans="";
    }
}
printPattern(5)