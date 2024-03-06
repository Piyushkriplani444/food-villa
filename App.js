import React from "react";
import ReactDOM  from "react-dom/client";
import './index.css'



const Title = ()=> (
    <a href="/">
    <img className="logo" alt="logo"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf0F1XnPmfydXs9wLS7A9QivstRtxs_PcYbdVRTeBzbw&s"/>
    </a>
);

const Header = () =>{
    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div> 
        </div>
    );
}

const BurgarKing = {
         name: "Burgar King",
         image: "https://img.etimg.com/thumb/width-640,height-480,imgsize-731189,resizemode-75,msid-72863458/markets/stocks/news/burger-king-india-could-be-a-better-treat-than-mcdonalds-franchisee/burger-thnkstck.jpg" ,
         cuissines: ["Burgar", "American"],
         rating: 4
}

const ResturantCard = () =>{ 
    return (
        <div className="card">
            <img src= {BurgarKing.image} />
            <h2>{BurgarKing.name}</h2>
            <h3>{BurgarKing.cuissines.join(",")}</h3>
            <h4>{BurgarKing.rating} Star</h4>
        </div>
    )
}


const Body = ()=> {
    return (
        <div className="resturant-list">
            <ResturantCard />
            

        </div>
    )
}

const Footer = () =>{
    return (
        <h3>Footer</h3>
    )
}
const AppLayout = () =>{
    return (
        <>
        <Header/>
        <Body/>
        <Footer/>
        </>
    );
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);