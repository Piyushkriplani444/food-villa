const Title = ()=> (
    <a href="/">
    <img 
        className="logo"
        alt="logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf0F1XnPmfydXs9wLS7A9QivstRtxs_PcYbdVRTeBzbw&s"/>
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

export default Header;