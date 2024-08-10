import '../css/Navbar.css'

function Navbar(){
    return (
        <nav className="navbar">
            <div className="navButtons">
                <img src="https://upload.wikimedia.org/wikipedia/en/7/73/Trollface.png" alt="app_logo" height="48px" width="64px"/>
                <a href="/">Home</a>
                <a href="/login">Login</a>
            </div>
            <p>Logged in as: {localStorage.getItem("username")}</p>
        </nav>
    )
}

export default Navbar