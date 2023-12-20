import { useState } from "react";
export default function ConditionalComponent(){
   const [display,setDisplay] = useState(true);
   if(display){
 return display (
 <div> 
    <h3>This is a ConditionalComponent</h3>
 </div>
 );  
}else{
<div>
    <h3>Nothing to se here</h3>
</div>
   }
}