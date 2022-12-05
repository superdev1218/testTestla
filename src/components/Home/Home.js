import React, { useRef, useState, useEffect } from 'react'
import Section from '../Section/Section'
import style from './Home.module.css'
import Navbar from '../Navbar/Navbar'
import NavbarBottom from '../Navbar/NavbarBottom'
import { Fade } from 'react-awesome-reveal'

function Home() {
  const listInnerRef = useRef();
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {

    window.addEventListener('wheel', listenToScroll);
    return () =>
      window.removeEventListener('wheel', listenToScroll);
  }, [])
  const listenToScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
    console.log(scrollTop, scrollHeight, clientHeight);
    let offset = (scrollHeight - scrollTop);
    console.log(offset);
    if (offset ==  clientHeight) {
      console.log('yes');
      setIsVisible(true);
    } else {
      console.log('no');
      setIsVisible(false);
    }
  }

  return (
    <div className={style.container} ref={listInnerRef}>
      <Navbar />
      <Section title="Model 3"
        description=""
        backgroundImage="model-3.jpg"
        linkDes="Touchless Delivery"
        leftButton="Custom Order"
        rightButton="Existing Inventory"
        first={true}
      />
      <Section title="Model Y"
        description=""
        backgroundImage="model-y.jpg"
        linkDes="Touchless Delivery"
        leftButton="Custom Order"
        rightButton="Existing Inventory"
        id="second"
      />
      <Section title="Model S"
        description=""
        backgroundImage="model-s.jpg"
        linkDes="Touchless Delivery"
        leftButton="Custom Order"
        rightButton="Existing Inventory"
      />
      <Section title="Model X"
        description=""
        backgroundImage="model-x.jpg"
        linkDes="Touchless Delivery"
        leftButton="Custom Order"
        rightButton="Existing Inventory"
      />
      <Section title="Solar Panels"
        description="Lowest Cost Solar Panels in America"
        backgroundImage="solar-panel.jpg"
        leftButton="Order Now"
        rightButton="Learn More"
      />
      <Section title="Solar Roof"
        description="Produce Clean Energy From Your Roof"
        backgroundImage="solar-roof.jpg"
        leftButton="Order Now"
        rightButton="Learn More"
      />
      <Section title="Accessories"
        backgroundImage="accessories.jpg"
        leftButton="Shop Now"
        last="true"
      />
      {isVisible &&
        <Fade direction='up' delay={600}>
          <NavbarBottom />
        </Fade>
        }



    </div>
  )
}

export default Home