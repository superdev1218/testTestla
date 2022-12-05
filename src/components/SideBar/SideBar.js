import React from 'react'
import CloseWrapper from '../UI/CloseWrapper'
import style from './Sidebar.module.css'
const SideBar = props => {
  const windowSize = window.innerWidth;
  return (
    <div className={`${style.container} ${style[props.className]}`}>
      <CloseWrapper onClick={props.closeSidebarHandler} />
      <ul className={style.sidebar}>
        {windowSize < 1198 &&
          props.products &&
          props.products.map((el, i) => {
            return <li key={i}><a href={`#${el}`}>{el}</a></li>
          })
        }
        {windowSize < 1198 &&
          props.options &&
          props.options.map((el, i) => {
            return <li key={i}><a href={`#${el}`}>{el}</a></li>
          })
        }
      </ul>
    </div>
  )
}

export default SideBar