import React, { Component } from 'react';
import { Map, Marker } from "pigeon-maps";

class Frontend extends Component {
    // Constructor 
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            DataisLoaded: false
        };
    }

    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
        fetch(
         "https://api.documenu.com/v2/restaurants/zip_code/10065?key=82dbeaac7b3078a26ab28e0736ecf8ee"
        )
        //"https://api.documenu.com/v2/restaurant/4072702673999819?key=82dbeaac7b3078a26ab28e0736ecf8ee")
        //"https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((json) => {
            this.setState({
                items: json,
                DataisLoaded: true
            });
        })
    }

    render() {
            const { DataisLoaded, items } = this.state;
            if(!DataisLoaded) return<div>
            < h1 > Loading.... </h1 > </div >;
        console.log(items);

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
                <div class="bottom">
                    <div class="selector">
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
                        <label className="peanutLabel" for="switch" value="on">Peanuts</label>
                        <label class="switch">
                            <input type="checkbox" ></input>
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
                        <br></br>
                        <br></br>
                        <label className="veganLabel" for="switch" l>Vegan</label>
                        <label class="switch">
                            <input type="checkbox"></input>
                            <span class="slider round"></span>
                        </label>
                        <br></br>
                        <br></br>
                        <label className="kosherLabel" for="switch" l>Kosher</label>
                        <label class="switch">
                            <input type="checkbox"></input>
                            <span class="slider round"></span>
                        </label>
                    </div>
                    <div class="selector">
                        <h1> Restaurant Data</h1>{
                            items.data.map((item) => (
                                <ol key={item.id} >
                                    Name: {item.restaurant_name}<br></br>
                                    Hours: {item.hours}<br></br>
                                    Prices: {item.price_range}<br></br>
                                    Cuisine: {item.cuisines}<br></br>
                                    Phone #: {item.restaurant_phone}<br></br><br></br>
                                </ol>
                            ))
                            // items.map((item) => (
                            //     <ol key={item.id} >
                            //         User_Name: {item.username},
                            //         Full_Name: {item.name},
                            //         User_Email: {item.email}
                            //     </ol>
                            // ))
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Frontend;