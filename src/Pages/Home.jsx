import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Home = () => {
    const location = useLocation();
    const {pathname, search} = location;
    console.log({pathname, search});
    console.log({location});
    const searchParams = new URLSearchParams(search).get("name");
    console.log({searchParams}); 
    const data ={
        name: "Pornessian Parapio"
    }
  return (
    <div>Home
        <Link to="about" state={data}>Go to About</Link>
        <a href="/base/contact">Go to Contact</a>
        {/* anchor tag will refresh the page but link tag would not */}
        {/* link tag url ma append kr deta hai but anchor tag same path pe leke jata hai, we can simply give the name of the route in link tag but not in anchor tag */}
    </div>
  )
}

export default Home