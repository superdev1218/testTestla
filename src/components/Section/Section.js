import React from 'react'
import Button from '../UI/Button'
import style from './Section.module.css'
import SectionInfo from './SectionInfo'
import { Fade } from "react-awesome-reveal";
import { useInView } from 'react-intersection-observer'

const Section = props => {
  const windowSize = window.innerWidth;
  const delay = props.first ? 600 : 600;
  const delayBtn = props.first ? 1200 : 350;
  const headDelay = props.first ? 0 : 250;
  const { ref: myRef, _, entry: sectionEntry } = useInView({ root: null, rootMargin: '0px', threshold: [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.5, 0.75, 0.9, 1], })
  return (
    <div className={style.section} style={{ backgroundImage: `url(./images/${props.backgroundImage})` }} id={props.id}>
      <div style={{ opacity: sectionEntry ? sectionEntry.intersectionRatio * 5 : 0, transform: `translateY(${sectionEntry ? sectionEntry.intersectionRatio * 30 : 0}px)` }}>
        <SectionInfo title={props.title} headDelay={headDelay} linkDes={props.linkDes} animationDelay={delay}>{props.description}
        </SectionInfo>
      </div>
      <div className={style.buttons} >
        <div className={`${style['btn-group']} ${props.first ? style.first__section : ''}`}>
          <div ref={myRef} className={style.btnScrollIntersectionAnimation} style={{ opacity: sectionEntry ? sectionEntry.intersectionRatio : 0, transform: `translateY(${sectionEntry ? sectionEntry.intersectionRatio * 50 : 0}px)` }}>
            <Fade direction={windowSize > 578 && props.rightButton ? 'left' : 'up'} delay={delayBtn} >
              <Button className={props.rightButton ? 'btn-left' : ''}>{props.leftButton}</Button>
            </Fade>
            {props.rightButton &&
              <Fade direction={windowSize > 578 ? 'right' : 'up'} delay={delayBtn} >
                <Button className="btn-right">{props.rightButton}</Button>
              </Fade>}
          </div>
        </div>
        {props.first &&
          <Fade direction="down" delay={delay} 	>
            <div className="down">
              <a href='#second'>
                <img className={style['down-arrow']} src="./images/down-arrow-2.svg" alt="" />
              </a>
            </div>
          </Fade>
        }
      </div>
    </div >
  )
}

export default Section