 //import logo from './logo.svg';
import './App.css';
//import Hello from './components/Hello';
//mport Message from './components/Message';
//import Profile from '.components/Profile';
import form from './components/Form';
import Counter from './components/Counter';
import FunctionalCounter from './components/FunctionalCounter';
//import Resume from './components/Resume';
//import FunctionEvent from'./components/FunctionEvent';
//import ClassEvent from './components/ClassEvent';
import ConditionalComponent from './components/ConditionalComponent';
import Product from './components/Product';
function App() {
  return (
    <div className="App">
      <form></form>
      <Product></Product>
      <ConditionalComponent></ConditionalComponent>
      <FunctionalCounter></FunctionalCounter>
      <classEvent></classEvent>
      <FunctionEvent></FunctionEvent>
      <Resume> name="Ebele"</Resume>
      <Counter></Counter>
      <Profile>name="Ukamaka" lastname="udoh"</Profile>
   <Hello></Hello> 
   <Message messagecontent="this is a message from props"/>
 </div>
 );
}

  export default App;
