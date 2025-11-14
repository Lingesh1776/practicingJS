import RestCard from "./RestCard"
import RestList from "../utils/mockdata";
import { useEffect, useState } from "react";
import RestList from "../utils/mockdata";
import Shimmer from "./Shimmer";

const Body = () => {
    const [listOfRest,setListOfRest] = useState([]);

    useEffect(()=>{fetchData()},[]);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.01020&lng=76.97010&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
        setListOfRest(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    }

    if(listOfRest.length===0){
        return(<Shimmer/>);
    }

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn"
                onClick={()=>{
                    const filtered = RestList.filter((res)=>res.info.avgRating>=4.5);
                    setListOfRest(filtered);
                }}>
                    Top Rated Restaurants
                </button>
            </div>
            {/* <input className="search" placeholder="Search">
                
            </input> */}
            <div className="cards">
                {
                    listOfRest.map((Res)=>
                    <RestCard key={Res.info.id} RestData={Res}/>)
                }
            </div>
        </div>
    )
};

export default Body;