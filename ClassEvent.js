import { Component } from "react";
class ClassEvent extends Component{ 
   handleClick(){
    console.log("Class based event handling")
   }
    render(){
        return( 
        <div>
            This is a class based Component
  <button on onClick={this.handlClick}>Click</button>
 </div>    
  ); 
}
}
export default ClassEvent
