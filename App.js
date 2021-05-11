import React, {useEffect, useState} from "react";
import {
    Switch,
    Route,
    useHistory
} from "react-router-dom";
import {slide as Menu} from 'react-burger-menu';
import Home from "./components/HomePage";
import Radiometer from "./components/Radiometer";
import './App.css';
import {getRadiometersRequest} from "./data";

function App() {
    const [radiometers, setRadiometers] = useState([]);
    const history = useHistory();

    useEffect(() => {
        getRadiometersRequest().then(resp => {
            console.log("RADIOS: ", resp);
            setRadiometers(resp.next);
        })
    }, [])

    return (
        <>
        <Menu noOverlay>
            <a id="home" className="bm-item" href="/">Home</a>
            <div>
                <p> Radiometers </p>
                {radiometers.map(radiometer => {
                    const {Radiometer_ID, Nickname} = radiometer;
                    //return (<Link to={`/radiometer/${Radiometer_ID}`}> {Nickname} </Link>)
                    return (
                        <div key={Radiometer_ID}>
                            <button
                                onClick={() => history.push({pathname: `/radiometer`, state: {radiometer}})}
                                key={`radio${Radiometer_ID}`}
                            >
                                    {Nickname}
                            </button>
                        </div>
                    );
                })}
            </div>
        </Menu>

        <div className={"App"}>
            <header className={"App-header"}>

            </header>

            <Switch>
                <Route path="/radiometer">
                    <Radiometer/>
                </Route>
                <Route path="/">
                    <Home radiometers={radiometers} />
                </Route>
            </Switch>
        </div>
        </>
    );
}

export default App;
