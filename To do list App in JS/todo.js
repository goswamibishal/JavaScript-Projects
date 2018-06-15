document.getElementById("clock").innerHTML=new Date();

function add()
{ 
      var val=document.getElementById("input_id").value;      
    
    if(val == "")
        {
            alert("oops! Please Enter Something")
        }
    
    else{
        
           var newlist=document.createElement("li");
           newlist.innerHTML=val;  
           document.getElementById("list").appendChild(newlist);
        
//        
//           var newlist=document.createElement("li");
//           newlist.innerHTML=val;  
//           document.getElementById("list").appendChild(newlist);
//        
        
        
        
       } 
               
}

function remove()
{
      var val=document.getElementById("input_id").value;


      if(val == "")
    {
        alert("No data is found to remove");
    }
   else
        {
           //list.innerHTML=" ";
            document.getElementById("list").innerHTML=" ";
            
            
        }
}