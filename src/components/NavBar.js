import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div>
            <nav class="navbar background">
                <ul class="nav-list">
                    <div class="logo">
                    <img src= "https://pbs.twimg.com/profile_images/2185327422/dirs_logo_400x400.png" alt = "DIRS Logo"/>
                    <p class="text-small">
                        <li><Link to="/">DIRS Radiometer Project</Link></li>
                        </p>
                        
                    </div>
                    <li><Link to="../radiometers">List of Radiometers</Link></li>
                    <li><Link to="../data">Data</Link></li>
                    <li><a href="https://www.rit.edu/dirs/">Info</a></li>
                    <li><a href='#NOAA'>NOAA Buoy Data</a></li>
                </ul>
            </nav>
        </div>   
    )
}
  
export default NavBar