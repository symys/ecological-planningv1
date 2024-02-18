import React from 'react'
import { useLocation } from 'react-router-dom';

function SubTitlePage() {
    const location = useLocation();
    const subObj = location.state
  return (
    <div>{subObj.title}</div>
  )
}

export default SubTitlePage