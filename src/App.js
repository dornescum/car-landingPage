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

function App() {
  const navbarLinks = [
    { url: "home", title: "Home" },
    { url: "fata", title: "Trips" },
    { url: "spate", title: "Rewards" },
  ];

    // const inputEl = useRef(null);
    // const onButtonClick = () => {
    //     // `current` points to the mounted text input element
    //     inputEl.current.focus();
    // };
  // const scroll = () => {
  //   const section = document.querySelector( '#fata' );
  //   section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
  // };

  const sectionOne = useRef(null);
  const goOne =()=>{
    const height = window.innerHeight;
    console.log(height)
    window.scrollTo({top: sectionOne.current.offsetTop, behavior: 'smooth'})
  }


    return (
    <div className="App">
      <Navbar navbarLinks={navbarLinks} id='home'/>
      <Hero imageSrc={head} />

      <Slider id='fata'
        imageSrc={img_1}
        title={"Be an explorer."}
        subtitle={
          "Our platform offers a wide variety of unique travel locations!"
        }
              // ref={inputEl}
              // onClick={onButtonClick}

      />

      <Slider id='interior'
        imageSrc={img_3}
        title={"Memories for a lifetime."}
        subtitle={"Your dream vacation is only a few clicks away."}
        flipped={true}
      />
        <Slider id='portbagaj'
            imageSrc={img_4}
            title={"Be an explorer."}
            subtitle={
                "Our platform offers a wide variety of unique travel locations!"
            }
        />

        <Slider id='spate'
            imageSrc={img_5}
            title={"Memories for a lifetime."}
            subtitle={"Your dream vacation is only a few clicks away."}
            flipped={true}
        />
    </div>
  );
}

export default App;
