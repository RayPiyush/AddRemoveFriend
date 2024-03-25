var sta=document.querySelector('h3');

var btn=document.querySelector("#add");

var check=0;

btn.addEventListener('click',function(){
    if(check==0){
        sta.innerHTML="Friends";
        sta.style.color="green";
        btn.innerHTML="Remove";
        btn.style.background="#dadada";
        check=1;
    }
    else{
        sta.innerHTML="Stranger";
        sta.style.color="red";
        btn.innerHTML="Add Friend";
        btn.style.background="#00BFFF";
        check=0;
    }
    
})