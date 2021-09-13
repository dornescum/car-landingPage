import React, {useRef, useState} from "react";
import "./App.css";
import img_1 from "./assets/webp/1.webp";
// import img_2 from "./assets/webp/2.webp";
// import img_2s from "./assets/webp/2-sm.webp";
// import img_3 from "./assets/webp/3.webp";
// import img_4 from "./assets/webp/4.webp";
// import img_5 from "./assets/webp/5.webp";
// import img_6 from "./assets/webp/6.webp";
// import img_7 from "./assets/webp/7.webp";
// import img_8 from "./assets/webp/8.webp";
// import img_9 from "./assets/webp/9.webp";
// import img_10 from "./assets/webp/10.webp";
// import img_11 from "./assets/webp/11.webp";
// import img_13 from "./assets/webp/13.webp";
// import img_14 from "./assets/webp/14.webp";
// import img_15 from "./assets/webp/15.webp";
// import imgF from '../public/img/2.webp'
// import imgF1 from '../public/img/2.webp'
// import img_12 from "./assets/webp/12.webp";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
// import Slider from "./components/Slider";
import Info from "./components/info/info";
import Card from "./components/card/card";
import dataInfo from './data.json'


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
      <Hero imageSrc={img_1} />
      {dataInfo.map((car)=>{
        const {img, title, desc, id, imgSm} =car;
        // return <img src={img} alt=""/>
        return <Card key={id}
            img={img}
            srcSet={`${imgSm} 600w, ${img} 1920w`}
                     sizes="(max-width:600px) 50vw,
                        (max-width:1920px) 100vh"
            title={title}
            subtitle={desc}
        />
      })}
     <Info />
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




{/*<p id='interior'>{}</p>*/}
{/*<Slider*/}
{/*  // srcSet={`${img_2s} 600w,  ${img_2} 1200w`}*/}
{/*  // sizes="(max-width:600px) 50vw,(max-width:1920px) 100vw"*/}
{/*  imageSrc={img_2}*/}
{/*  title={"Bordul Masini"}*/}
{/*  subtitle={"Your dream vacation is only a few clicks away."}*/}
{/*  flipped={true}*/}
{/*/>*/}
{/*<p id='portbagaj'>{}</p>*/}
{/*  <Slider*/}
{/*      imageSrc={img_3}*/}
{/*      // srcSet={`${img_2s} 600w,  ${img_2} 1200w`}*/}
{/*      //*/}
{/*      // sizes="(max-width:600px) 50vw,*/}
{/*      //*/}
{/*      //             (max-width:1920px) 100vw"*/}
{/*      title={"Be an explorer."}*/}
{/*      subtitle={*/}
{/*          "Our platform offers a wide variety of unique travel locations!"*/}
{/*      }*/}
{/*  />*/}
{/*<p id='spate'>{}</p>*/}
{/*  <Slider*/}
{/*      imageSrc={img_4}*/}
{/*      title={"Memories for a lifetime."}*/}
{/*      subtitle={"Your dream vacation is only a few clicks away."}*/}
{/*      flipped={true}*/}
{/*  />*/}
{/*<p id='info'>{}</p>*/}

{/*<Slider*/}
{/*    imageSrc={img_5}*/}
{/*    title={"Memories for a lifetime."}*/}
{/*    subtitle={"Your dream vacation is only a few clicks away."}*/}
{/*    // flipped={true}*/}
{/*/>*/}

{/*<Slider*/}
{/*    imageSrc={img_6}*/}
{/*    title={"Memories for a lifetime."}*/}
{/*    subtitle={"Your dream vacation is only a few clicks away."}*/}
{/*    flipped={true}*/}
{/*/>*/}
{/*<Slider*/}
{/*    imageSrc={img_7}*/}
{/*    title={"Memories for a lifetime."}*/}
{/*    subtitle={"Your dream vacation is only a few clicks away."}*/}
{/*    // flipped={true}*/}
{/*/>*/}
{/*<Slider*/}
{/*    imageSrc={img_8}*/}
{/*    title={"Memories for a lifetime."}*/}
{/*    subtitle={"Your dream vacation is only a few clicks away."}*/}
{/*    flipped={true}*/}
{/*/>*/}
{/*<Slider*/}
{/*    imageSrc={img_9}*/}
{/*    title={"Memories for a lifetime."}*/}
{/*    subtitle={"Your dream vacation is only a few clicks away."}*/}
{/*    // flipped={true}*/}
{/*/>*/}
{/*<Slider*/}
{/*    imageSrc={img_10}*/}
{/*    title={"Memories for a lifetime."}*/}
{/*    subtitle={"Your dream vacation is only a few clicks away."}*/}
{/*    flipped={true}*/}
{/*/>*/}
{/*<Slider*/}
{/*    imageSrc={img_11}*/}
{/*    title={"Memories for a lifetime."}*/}
{/*    subtitle={"Your dream vacation is only a few clicks away."}*/}
{/*    // flipped={true}*/}
{/*/>*/}
{/*<Slider*/}
{/*    imageSrc={img_12}*/}
{/*    title={"Memories for a lifetime."}*/}
{/*    subtitle={"Your dream vacation is only a few clicks away."}*/}
{/*    flipped={true}*/}
{/*/>*/}
{/*<Slider*/}
{/*    imageSrc={img_13}*/}
{/*    title={"Memories for a lifetime."}*/}
{/*    subtitle={"Your dream vacation is only a few clicks away."}*/}
{/*    // flipped={true}*/}
{/*/>*/}
{/*<Slider*/}
{/*    imageSrc={img_14}*/}
{/*    title={"Memories for a lifetime."}*/}
{/*    subtitle={"Your dream vacation is only a few clicks away."}*/}
{/*    flipped={true}*/}
{/*/>*/}
{/*<Slider*/}
{/*    imageSrc={img_15}*/}
{/*    title={"Memories for a lifetime."}*/}
{/*    subtitle={"Your dream vacation is only a few clicks away."}*/}
{/*    // flipped={true}*/}
{/*/>*/}

