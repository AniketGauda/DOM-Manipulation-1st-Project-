var cnt=0;


let iB = document.getElementById("increment");
let dB = document.getElementById("decrement");
let cB = document.getElementById("clear");

let mDiv = document.getElementById("md");

clrBtn();

function clrBtn(){
    if(cnt<=1)
        cB.setAttribute("style",`display: none;`);
    else
        cB.setAttribute("style",`display:inline-block`);
}

cB.onclick = ()=>{
    cnt=0;
    clrBtn();
    mDiv.innerHTML = `<p>Your Current Count is: ${cnt}</p><hr>`;
}

iB.onclick = ()=>{
    cnt++;
    clrBtn();
    mDiv.innerHTML = `<p>Your Current Count is: ${cnt}</p><hr>`;    
}

dB.onclick = ()=>{

    if(cnt==0){
        mDiv.innerHTML= `
            <p id="result">Your Current Count is: 0</p>
            <hr>
            <p style='color: red;'>Error : Cannot go below 0</p>
        `
    }
    else{
        cnt--;
        clrBtn();
        mDiv.innerHTML = `<p>Your Current Count is: ${cnt}</p><hr>`;
    }
}