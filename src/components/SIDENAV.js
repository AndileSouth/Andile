import { Link } from 'react-router-dom';
import './SIDENAV.css';

const SIDENAV = () => {

    function sideBarSize() {
        const medium = document.querySelector('.side-nav-md');
        const large = document.querySelector('.side-nav-lg');
        const SIDENAV = document.querySelector('.SIDENAV');
        const backBtn = document.querySelector('.back');

        const styleMd = window.getComputedStyle(medium);
        const stylelg = window.getComputedStyle(large);

        const displayMd = styleMd.getPropertyValue('display');
        const displaylg = stylelg.getPropertyValue('display');

        if(displaylg === 'none') {
            medium.style.display = 'none';
            large.style.display = 'flex';
            SIDENAV.style.width = '210px';
            backBtn.style.display = 'inline';
        } 
        else {
            medium.style.display = 'flex';
            large.style.display = 'none';
            SIDENAV.style.width = '50px';
            backBtn.style.display = 'none';
        }

    }

    return ( 
        <div className="SIDENAV col">
            <div id='side-nav-lg' className="side-nav col side-nav-lg">
                <h3>NAVIGATION</h3>
                <ul className='col'>
                    <li className='back cursor' onClick={sideBarSize}><svg fill='currentcolor' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg></li>
                    <li className='active cursor'><Link to={`/`}><span className='active-hover'>👉</span>Home</Link></li>
                    <li className='cursor'><Link to={`/ABOUT`}><span className='active-hover'>👉</span>About</Link></li>
                    <li className='cursor'><Link to={`/SKILLS`}><span className='active-hover'>👉</span>Skills</Link></li>
                    <li className='cursor'><Link to={`/PROJECTS`}><span className='active-hover'>👉</span>Projects</Link></li>
                    <li className='cursor'><Link to={`/CONTACTS`}><span className='active-hover'>👉</span>Contacts</Link></li>
                </ul>
                
            </div>
            <div id='side-nav-md ' className="side-nav col side-nav-md cursor" onClick={sideBarSize}>
                
            <svg fill='currentcolor' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>

            </div>
        </div>
     );
}
 
export default SIDENAV;