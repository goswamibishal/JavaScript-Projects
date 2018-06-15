var clock,d,h,m,s,color;

function cloky(){
    d=new Date();
    h=d.getHours();
    m=d.getMinutes();
    s=d.getSeconds();

    
//    if(h=>13&&h<=23)
//    
//                {
//                    h=(h-12);
//                }
//    
    
    
 if(h==13)
     {
         h=1;
     }
    if(h==14)
     {
         h=2;
     }
    if(h==15)
     {
         h=3;
     }
    if(h==16)
     {
         h=4;
     }
    if(h==17)
     {
         h=5;
     }
    if(h==18)
     {
         h=6;
     }
    if(h==19)
     {
         h=7;
     }
    if(h==20)
     {
         h=8;
     }
    if(h==21)
     {
         h=9;
     }
    if(h==22)
     {
         h=10;
     }
    if(h==23)
     {
         h=11;
     }
if(h<=9){
    
    h='0'+h;
    
}
 if(m<=9){
     m='0'+m;
 }
    if(s<=9){
        s='0'+s;
    }
    
    clock=h + ":" + m +":" +s;
    color="#" +h +m +s;
document.getElementById("clock").innerHTML=clock;
document.body.style.background=color;
    
    setTimeout(cloky,1000);
    
   
}
cloky();


























    
    
    
    