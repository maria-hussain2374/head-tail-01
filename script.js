unction coin(){
    let flip=Math.floor(Math.random()*2);
    if(flip===0){
        document.getElementById("empty").innerHTML="Head :1";
    }else{
        document.getElementById("empty").innerHTML="Tail :0";
    }
}
