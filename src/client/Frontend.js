import React, { Component } from 'react';
import { Map, Marker } from "pigeon-maps";

class Frontend extends Component {
    render() {
        return (
            <div className='App'>
                <div class="topnav-Container">
                    <div class="header">
                        eatAll
                    </div>
                    <div class="topnav">

                        <div class="Home"></div>
                        <div class="Features"></div>
                        <div class="About"></div>
                    </div>

                </div>
                <div className="mapper"><Map height={400} defaultCenter={[40.712776, -74.005974]} defaultZoom={15}>
                    <Marker width={50} anchor={[40.712776, -74.005974]} />
                </Map></div>
                <div className="selector">
                    <h1 className="prompt">Select food(s) you can't eat: </h1>
                    <input className="sbar" type="text" placeholder="Search.."></input>
                    <br></br>
                    <br></br>
                    <label className="atnLabel" for="switch" l>All Tree Nuts     </label>
                    <label class="switch">
                        <input type="checkbox"></input>
                        <span class="slider round"></span>
                    </label>
                    <br></br>
                    <br></br>
                    <label className="peanutLabel" for="switch" >Peanuts</label>
                    <label class="switch">
                        <input type="checkbox"></input>
                        <span class="slider round"></span>
                    </label>
                    <br></br>
                    <br></br>
                    <label className="cashewLabel" for="switch" l>Cashews</label>
                    <label class="switch">
                        <input type="checkbox"></input>
                        <span class="slider round"></span>
                    </label>
                    <br></br>
                    <br></br>
                    <label className="dairyLabel" for="switch" >Dairy</label>
                    <label class="switch">
                        <input type="checkbox"></input>
                        <span class="slider round"></span>
                    </label>
                    <br></br>
                    <br></br>
                    <label className="eggLabel" for="switch" l>Egg</label>
                    <label class="switch">
                        <input type="checkbox"></input>
                        <span class="slider round"></span>
                    </label>
                    <br></br>
                    <br></br>
                    <label className="glutenLabel" for="switch" l>Gluten</label>
                    <label class="switch">
                        <input type="checkbox"></input>
                        <span class="slider round"></span>
                    </label>
                </div>
            </div>
        );
    }
}

export default Frontend;