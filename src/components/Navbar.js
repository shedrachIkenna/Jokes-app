const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper container">
                <a href="#!" class="brand-logo"><i class="material-icons">sentiment_very_satisfied</i>Jokes'nYou</a> 
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="sass.html">Sass</a></li>
                    <li><a href="badges.html">Components</a></li>
                    <li><a href="collapsible.html">JavaScript</a></li>
                </ul>
            </div>
        </nav>     
    )
}

export default Navbar