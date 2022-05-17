import { useState } from "react";
import Header from "./Header";
import "./App.css";
import Section from "./Section";
import transform from "./images/desktop/image-transform.jpg";
import standOut from "./images/desktop/image-stand-out.jpg";
import Main from "./Main";
import Team from './Team'
import Images from './Images'
import Footer from './Footer'
import MobileMenu from "./Mobile_Menu";


function App() {
  const [navBar, setNavbar] = useState(false)
  
  function HandleClick() {
    
   setNavbar(!navBar)
   }
  return (
    <div className="App">
      <MobileMenu navBar={ navBar}/>
      <Header HandleClick={ HandleClick}/>
      <Section
         class= 'transform'
        img={transform}
        heading="Transform your brand"
        main="
        We are a full-service creative agency specializing in helping brands grow fast. 
        Engage your clients through compelling visuals that do most of the marketing for you.
      "
        info="Learn more"
        border = 'yellow_border'
      />
      <Section
        class= 'standout'
        img={standOut}
        heading="Stand out to the right audience"
        main="
        Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. 
      "
        info="Learn more"
        border = 'pink_border'
      />
      <Main
       class = 'main_section_cherry'
        heading="Graphic design"
        main=" Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."
      />
      <Main
         class = 'main_section_orange'
        heading="Photography"
        main=" Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
      />
      <Team />
      <Images />
      <Footer  />
    
    </div>
  );
}

export default App;
