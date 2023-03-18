import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import { Component, useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

class App extends Component {
  construstor(){
    super();
    this.state = {
      input: '',
    }
  }

  onInputChange = (event) => {
    console.log(event);
  }
  render(){
   return(
    <div className="App">
      <Particles>
        params ={{
          
        }}
      </Particles>
      <Navigation/>
      <Logo />
      <Rank/>
      <ImageLinkForm onInputChange = {this.onInputChange}/>
      {/*<FaceRecognition />*/}
    </div>
  );
      }
}

export default App;
