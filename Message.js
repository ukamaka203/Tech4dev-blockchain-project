import {component} from "react"
class Message extends component{
    render(){
        return <h1>Message: {this.props.messagecontent}</h1>;
    }
}

export default Message
