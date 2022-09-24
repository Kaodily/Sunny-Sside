export default function MobileMenu(props) {
    return props.navBar && (< div className = 'Menu' >
            <ul>
            <li><a href = '#'>About</a></li>
            <li><a href = '#'>Services</a></li>
            <li><a href = '#'>Projects</a></li>
            </ul>
            <button>Contact</button>
    </ div>)

}