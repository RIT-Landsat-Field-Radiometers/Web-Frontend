
import React from "react";
import NavBar from './../components/NavBar'
function Data() {
    return (
        <div>
            <NavBar />
  
            <section class="section">
                <div class="box-main">
                    <div class="firstHalf">
                        <h1 class="text-big">
                            Data Page
                        </h1>
                        <p class="text-small">
                            Page for obtaining data from each radiometer
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

export default Data;