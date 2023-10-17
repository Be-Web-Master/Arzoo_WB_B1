import React from 'react'
import { useLocation } from 'react-router-dom'

const AboutUs = () => {
    const {state} = useLocation();
    console.log(state);
  return (
    <div>AboutUs</div>
  )
}

export default AboutUs