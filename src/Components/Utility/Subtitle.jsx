import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Subtitle({title,btnTitle,pathText}) {
  return (
    <div className='d-flex justify-content-between pt-4'>
<div className="sub-title">
    {title}
</div>
{btnTitle ?(
  <NavLink to={`${pathText}`} style={{textDecoration:"none"}}>
    <div className="shopping-now">{btnTitle}</div></NavLink>
):null}

    </div>
  )
}
