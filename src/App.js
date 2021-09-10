import React, {useRef} from "react";
import "./App.css";
import head from "./assets/dan-1.jpg";
import img_1 from "./assets/dan-2.jpg";
import img_3 from "./assets/dan-3.jpg";
import img_4 from "./assets/dan-4.jpg";
import img_5 from "./assets/dan-5.jpg";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Info from "./components/info/info";


function App() {
  const navbarLinks = [
    { url: "home", title: "Home" },
    { url: "#fata", title: "Interior" },
    { url: "#portbagaj", title: "Portbagaj" },
    { url: "#spate", title: "Spate" },
    { url: "#info", title: "Info" },
  ];

    return (
    <div className="App" id='home'>
      <Navbar navbarLinks={navbarLinks} />
      {/*<Navbar  />*/}
      <Hero imageSrc={head} />
      <p id='fata'>{}</p>
      <Slider
        imageSrc={img_1}
        title={"Be an explorer."}
        subtitle={
          "Our platform offers a wide variety of unique travel locations!"
        }
      />

      <p id='interior'>{}</p>
      <Slider
        imageSrc={img_3}
        title={"Memories for a lifetime."}
        subtitle={"Your dream vacation is only a few clicks away."}
        flipped={true}
      />
      <p id='portbagaj'>{}</p>
        <Slider
            imageSrc={img_4}
            title={"Be an explorer."}
            subtitle={
                "Our platform offers a wide variety of unique travel locations!"
            }
        />
      <p id='spate'>{}</p>
        <Slider
            imageSrc={img_5}
            title={"Memories for a lifetime."}
            subtitle={"Your dream vacation is only a few clicks away."}
            flipped={true}
        />
      <p id='info'>{}</p>
     <Info />


    </div>
  );
}

export default App;
