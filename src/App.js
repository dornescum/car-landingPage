import React, {useRef, useState} from "react";
import "./App.css";
import img_1 from "./assets/webp/1.webp";
import img_111 from "./assets/webp/1.jpg";
import img_2 from "./assets/webp/2.webp";
import img_2s from "./assets/webp/2-sm.webp";
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
// import imgF from '../public/img/2.webp'
// import imgF1 from '../public/img/2.webp'
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Info from "./components/info/info";
import Card from "./components/card/card";
import dataInfo from './data.json'
import AltInfo from "./components/info2/altInfo";
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
      <Hero imageSrc={img_111} />

      <p id='fata'>{}</p>
      <Slider
        // srcSet={`${img_2s} 600w,  ${img_2} 1200w`}
        // sizes="(max-width:600px) 50vw,(max-width:1920px) 100vw"
        imageSrc={img_2}
        title={"Kilometri reali 130000"}
        subtitle={"Benzina . Anul 2009"}
        flipped={true}
      />

        <Slider
            imageSrc={img_3}
            // srcSet={`${img_2s} 600w,  ${img_2} 1200w`}
            //
            // sizes="(max-width:600px) 50vw,
            //
            //             (max-width:1920px) 100vw"
            title={"Clima automata"}
            subtitle={
                "Consum mixt 7L/100km"
            }
        />
      <p id='interior'>{}</p>
        <Slider
            imageSrc={img_4}
            title={"Masina intretinuta"}
            subtitle={"Torpedou cu suport pahare"}
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
          title={"Tapiterie protejata"}
          subtitle={""}
          flipped={true}
      />
      <Slider
          imageSrc={img_7}
          title={"Ope Astra G 1.6 twin turbo"}
          subtitle={"Inchidere centralizata,cu protectie copii"}
          // flipped={true}
      />
      <p id='portbagaj'>{}</p>
      <Slider
          imageSrc={img_8}
          title={"Portbagaj incapator"}
          subtitle={""}
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
          title={"Consum extra urban 5.6L /100Km"}
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
     {/*<Info />*/}
     {/* <AltInfo />*/}
      <FooterState />
    </div>
  );
}

export default App;
{/*<div>*/}
{/*  <img src={img_2} srcSet={`${img_2s} 600w,  ${img_2} 1200w`}  alt="test"*/}
{/*       sizes="(max-width:600px) 50vw,*/}
{/*                (max-width: 768px) 70vw,*/}
{/*                (max-width:1920px) 100vw"*/}
{/*  />*/}
{/*</div>*/}








// {dataInfo.map((car)=>{
//   const {img, title, desc, id, imgSm} =car;
//   // return <img src={img} alt=""/>
//   return <Card key={id}
//                img={img}
//                srcSet={`${imgSm} 600w, ${img} 1920w`}
//                sizes="(max-width:600px) 50vw,
//                         (max-width:1920px) 100vh"
//                title={title}
//                subtitle={desc}
//   />
// })}