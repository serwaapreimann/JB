import '../../styles/partials/_fonts.scss';
import './Header.scss';
import Logo from '../../icons/Josh Blakk (1).svg'



export default function Header(){
    return <div className='header--section'>
        <div className='header--section-logo'>
            <img src={Logo} alt='Josh Blakk' className='header--section-img'/>
        </div>
         <nav className='header--section-nav'>
            <ul className='header--section-navlinks'>
                <li className='header--section-navlink'><a href="#">HOME</a></li>
                <li className='header--section-navlink'><a href="#">ABOUT</a></li>
                <li className='header--section-navlink'><a href="#">EVENTS</a></li>
                <li className='header--section-navlink'><a href="#">NEWS</a></li>
                <li className='header--section-navlink'><a href="#">CONNECT</a></li>
            </ul>
        </nav>


    </div>




}
