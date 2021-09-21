import React from "react";
import "./App.css";
import img_1 from "./assets/webp/1.webp";
import img_2 from "./assets/webp/2.webp";
import img_3 from "./assets/webp/3.webp";
import img_4 from "./assets/webp/4.webp";
import img_5 from "./assets/webp/5.webp";
import img_6 from "./assets/webp/6.webp";
import img_7 from "./assets/webp/7.webp";
import img_8 from "./assets/webp/8.webp";
import img_9 from "./assets/webp/9.webp";
import img_10 from "./assets/webp/10.webp";
import img_11 from "./assets/webp/11.webp";
import img_12 from "./assets/webp/12.webp";
import img_13 from "./assets/webp/13.webp";
import img_14 from "./assets/webp/14.webp";
import img_15 from "./assets/webp/15.webp";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import FooterState from "./components/footerState/FooterState";
import Form from './components/form/Form'

function App() {
  const navbarLinks = [
    { url: "#fata", title: "Home" },
    { url: "#interior", title: "Interior" },
    { url: "#portbagaj", title: "Portbagaj" },
    { url: "#spate", title: "Spate" },
    { url: "#info", title: "Info" },
  ];
    return (
    <div className="App" id='home'>
      <Navbar navbarLinks={navbarLinks} />
      <Hero imageSrc={img_1} />

      <p id='fata'>{}</p>
      <Slider

        imageSrc={img_2}
        title={"Kilometri reali 130000"}
        subtitle={"Benzina . Anul 2009"}
        flipped={true}
      />

        <Slider
            imageSrc={img_3}

            title={"Clima automata"}
            subtitle={
                "ABS"
            }
        />
      <p id='interior'>{}</p>
        <Slider
            imageSrc={img_4}
            title={"Airbaguri Frontale"}
            subtitle={"Geamuri electrice"}
            flipped={true}
        />


      <Slider
          imageSrc={img_5}
          title={"Transmisie fata"}
          subtitle={"Cutie de viteza manuala"}
          // flipped={true}
      />

      <Slider
          imageSrc={img_6}
          title={"Inchidere centralizata"}
          subtitle={"Servodirectie"}
          flipped={true}
      />
      <Slider
          imageSrc={img_7}
          title={"Ope Astra G 1.6 twin turbo"}
          subtitle={"Aer conditionat"}
          // flipped={true}
      />
      <p id='portbagaj'>{}</p>
      <Slider
          imageSrc={img_8}
          title={"Combustibil : benzina"}
          subtitle={"Putere: 105 cp"}
          flipped={true}
      />
      <Slider
          imageSrc={img_9}
          title={"Roata de rezerva "}
          subtitle={"Nefolosita"}
          // flipped={true}
      />
      <Slider
          imageSrc={img_10}
          title={"Capacitatea cilindrica : 1598"}
          subtitle={"I love my Opel"}
          flipped={true}
      />
      <p id='spate'>{}</p>
      <Slider
          imageSrc={img_11}
          title={"Norma de poluare Euro 4"}
          subtitle={"Filtru de particule"}
          // flipped={true}
      />

      <Slider
          imageSrc={img_12}
          title={"Culoare arginitie"}
          subtitle={"Usor zgariata pe partea dreapta"}
          flipped={true}
      />
      <Slider
          imageSrc={img_13}
          title={"Seria sasiu"}
          subtitle={""}
          // flipped={true}
      />
      <Slider
          imageSrc={img_14}
          title={"Cauciucuri Michelin"}
          subtitle={"Cauciucuri vara"}
          flipped={true}
      />
      <Slider
          imageSrc={img_15}
          title={"Masina de familie perfecta"}
          subtitle={""}
          // flipped={true}
      />
      <Form />
      <p id='info'>{}</p>

      <FooterState />
    </div>
  );
}

export default App;







