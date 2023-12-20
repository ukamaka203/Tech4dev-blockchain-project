 function Profile(props){ 
    console.log(props)
 const {name, lastname} =props;
    return (
    <h1>
  Name: {props.name} {props. lastname}      
        </h1>
    );
}
export default Profile;
