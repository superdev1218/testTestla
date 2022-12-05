import React from 'react'
import { Fade } from "react-awesome-reveal";
import Hero from './Hero'
import Navbar from '../Navbar/Navbar'
import VideoAds from './VideoAds'
import Spec from './Spec'
import Aero from './Aero'
import Interio from './Interio'
import Topview from './Topview'
import Unveil from './Unveil'


import style from './TechSpec.module.scss'


const TechSpec = () => {
    return (
        <div className={style.container}>
            <Navbar />
            <Hero />
            <Fade direction='up' fraction={0.1} triggerOnce>
                <VideoAds />
            </Fade>
            <Fade direction='up' fraction={0.1} triggerOnce>

                <Spec />
            </Fade>
            <Fade direction='up' fraction={0.1} triggerOnce>

                <Aero />
            </Fade>
            <Fade direction='up' fraction={0.1} triggerOnce>

                <Interio />
            </Fade>
            <Fade direction='up' fraction={0.1} triggerOnce>

                <Topview />
            </Fade>
            <Fade direction='up' fraction={0.1} triggerOnce>

                <Unveil />
            </Fade>
            <Fade direction='up' fraction={0.1} triggerOnce>

                <div className={style.vline}></div>

                <div className={style.bottom_cta}>
                    <a href="/roadster/reserve" title="Reserve your Tesla Roadster now" className={style.g_order_button}>
                        Reserve Now
                    </a>
                    <a href="/updates" title="Get Newsletter" className={style.g_order_button}>
                        Get Newsletter
                    </a>
                </div>
                <div className={style.lastP}>
                    <p className={style.tds_text_caption} style={{ margin: 'inherit', textAalign: 'center' }}>Certain high data usage vehicle features require at least Standard Connectivity, including maps, navigation and voice commands. Access to features that use cellular data and third-party licenses are subject to change.&nbsp;<a href="/support/connectivity#connectivity-features-limited" rel="nofollow noopener" target="_blank" title="Follow link" data-tesla_locale_processed="1" style={{ color: 'white' }} >Learn more about Standard Connectivity and any limitations</a>.</p>
                </div>
            </Fade>
        </div>
    )
}

export default TechSpec
