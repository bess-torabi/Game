
function doIt()
{
    // Variables for HTML element DOM references.
    var kRef, nRef, answerRef; 
    
    // Working variables.
    var k, n, answer; 
    
    // Get references to DOM elements.
    kRef = document.getElementById("k");
    nRef = document.getElementById("n");
    answerRef = document.getElementById("answer");

    // Convert strings to numbers.
    k = Number(kRef.value);
    n = Number(nRef.value);
    
    // Perform code
    var list = [];
    var startidx = 1;
    
    for (var i = 0; i < n+1; i++) { 
        list.push(i);
    }
    
    answerRef.innerText = "";
    
    while((list.length)>2){
        out = (remover(k,startidx,list));
        list = out[0];
        startidx = out[1];
        console.log(startidx);
        answerRef.innerText += out[2];
    }

    
    // Update "answer" label DOM to show result.
    answerRef.innerText += "\nWinner is children number: "+String(list[1]);

}

function modmod(a,b)
{
    var remainder=a%b;
    if(remainder===0){
       remainder=b;
       }
    return remainder;
}

function remover(k,startIdx,list)
{
    var removeIdx=modmod(k,list.length-1)+startIdx-1;
    removeIdx=modmod(removeIdx,list.length-1);
    var removedprint = "Children number "+String(list[removeIdx])+" Removed\n ";
    var left=list.slice(0,removeIdx);
    left = left.concat(list.slice(removeIdx+1,list.length));
    
    var out=[left,removeIdx,removedprint];
    return out;  
    
}
