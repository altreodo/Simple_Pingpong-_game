var j=document.getElementsByClassName("po");
var k=document.getElementById("mc");
var box = j[0].getBoundingClientRect();
var box2 = j[1].getBoundingClientRect();
    var p=box.left+ window.pageXOffset;
    var sp=box.top+ window.pageYOffset;
    var ps=box2.top+ window.pageYOffset;
    document.onkeypress= function(evt) {
    evt = evt || window.event;
    var charCode = evt.keyCode || evt.which;
    var charStr = String.fromCharCode(charCode);
    k.style.left=p+"px";
    j[1].style.left=p+"px";
    if(charStr=="a"){
        if(p>-8){
            p=p-8;
   k.style.left=p+"px";
   j[1].style.left=p+"px";
    }
    }if(charStr=="d"){
        if(p<1300){ p=p+8;
            k.style.left=p+"px";
            j[1].style.left=p+"px";
        }
    }
};
var bl=document.getElementById("bal");
var cord=bl.getBoundingClientRect();
var x=cord.left+window.pageXOffset;
var xt=cord.right+window.pageXOffset;
var y=cord.top+window.pageYOffset;
var s=0;
var f=0;
var mc=9;
var gh=setInterval(function(){
    if(x<-4){
        f=0;
    }else if(x>1296){
        f=1;
    }if(y<0){
        alert("Game over-  Rod 2 wins!!!");
        clearInterval(gh);
    }else if(y>746){
        alert("Game over- Rod 1 wins!!!");
        clearInterval(gh);
    }
    console.log(xt,p);
    if(x>p-100  &  x<p+200){
        if(y<10 || y>720){
            if(y<10){
            j[0].style.backgroundColor="cyan";
            }
            if(y>720){
                j[1].style.backgroundColor="cyan";
            }
            setTimeout(function(){
                j[0].style.backgroundColor="rgb(243, 239, 7)";
                j[1].style.backgroundColor="rgb(243, 239, 7)";
            },600);
        if(s==0){
            s=1;
        }else{
            s=0;
    }
}
    }
    if(f==0){
        bl.style.left=x+"px";
       x=x+mc;
       }else if(f==1){
        bl.style.left=x+"px";
       x=x-mc;
       }
       console.log(y);
    if(s==0){
        if(y>22){
     bl.style.top=y+"px";
        }
    y=y-mc;
    }else if(s==1){
        if(y<705){
        bl.style.top=y+"px";
        }
    y=y+mc;
    }
},55);