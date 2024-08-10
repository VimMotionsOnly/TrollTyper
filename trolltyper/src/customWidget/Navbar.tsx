import '../css/Navbar.css'

function Navbar(){
    return (
        <section className="navbar">
            <a href="/">Home</a>
            <p>Logged in as: {localStorage.getItem("username")}</p>
        </section>
    )
}

export default Navbar