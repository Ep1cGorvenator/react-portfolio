import { useEffect, useRef } from "react"
import "./intro.scss"
import { init } from "ityped"

export default function Intro() {
  const textRef = useRef();                                     // keeps reference of changing text
  
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Computer Science Student", "Vocational Worker", "Gamer"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
        <div className="left">
          <div className="imageContainer">
            <img src="assets\man.png" alt=""/>
          </div>
        </div>
        <div className="right">
          <div className="wrapper">
            <h2>Hi there, I'm</h2>
            <h1>Ethan Govender</h1>
            <h3>Occupation: <span ref={textRef}></span></h3>
          </div>
          <a href="#portfolio">
            <img src="assets\down.png" alt=""/>
          </a>
        </div>
    </div>
  )
}
