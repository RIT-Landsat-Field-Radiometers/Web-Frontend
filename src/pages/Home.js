import React from "react";
import NavBar from './../components/NavBar'

function Home() {
    return (
        <div>
            <NavBar />
            
            <section class="section">
                <div class="box-main">
                    <div class="firstHalf">
                        <h1 class="text-big">
                            Digital Imaging and Remote Sensing Lab at the Rochester Institute of Technology
                        </h1>
                        <p class="text-small">
                            Website for eight-channel thermal radiometer
                        </p>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <p className="text-footer">
                    Copyright ©-All rights are reserved
                </p>
            </footer>
        </div>
    )
}

export default Home;