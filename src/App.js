import React, { useState } from 'react';
import { Parallax } from 'react-parallax';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import './App.css'; // Import your main CSS file
import aa from './assets/aa.avif';
import bb from './assets/bb.avif';
import cc from './assets/cc.avif';
import HorizontalSlider from './HorizontalSlider';

function App() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };


  const images = [aa, bb, aa, bb, cc];

  return (
    <div className="App">
      <Parallax strength={600} bgImage='https://images.pexels.com/photos/1276518/pexels-photo-1276518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'>
        <div className="content">
          <div className="text-content"><h1>Powered By Nature</h1></div>
        </div>
      </Parallax>

      <Parallax strength={600} >
        <div className="content-two">
          <div className="text-content-two">
            <h1 style={{marginBottom:"3%"}}>Powered By Nature</h1>
            <p>Nature refers to the natural world and the environment that surrounds us, encompassing everything from landscapes and ecosystems to plants, animals, and the physical elements such as air, water, and soil. It represents the complex, interconnected web of life on Earth, showcasing the diversity and beauty of our planet.
              Nature plays a crucial role in sustaining life, providing essential resources like clean air, water, food, and materials. It serves as a source of inspiration for art, literature, and spirituality. Beyond its practical and aesthetic value, nature also offers numerous benefits to human well-being, contributing to physical and mental health.
              Exploring nature encourages a sense of wonder and awe, fostering a deeper understanding of the intricate balance and resilience of natural systems. Conservation efforts aim to protect and preserve these ecosystems, recognizing the importance of maintaining biodiversity for the health of the planet and future generations.
              In addition to its tangible contributions, nature has the power to evoke feelings of tranquility, connectedness, and humility. Many people find solace and rejuvenation in spending time outdoors, whether it's hiking through forests, enjoying a sunset, or simply observing the wonders of the natural world.
              Overall, nature is a dynamic and invaluable force that influences our lives in myriad ways, emphasizing the need for responsible stewardship to ensure a sustainable and harmonious coexistence between humans and the environment.</p>

          </div>
        </div>
      </Parallax>

      <Parallax strength={300} blur={{ min: -5, max: 15 }} bgImage={bb}>
        <div className="content">
          <div className="scroll">
            <Slider {...settings}>

              
              {images.map((img, idx) => (
                <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
                
                  <img src={img} alt={img} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </Parallax>

      <Parallax strength={-600} bgImage='https://images.pexels.com/photos/2105416/pexels-photo-2105416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'>
        <div className="content">
          <div className="text-content">The Mountains</div>
        </div>
      </Parallax>

      <div className="content">
        <HorizontalSlider/>
      </div>
    </div>
  );
}

export default App;
