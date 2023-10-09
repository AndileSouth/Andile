import './HOME.css';
import { useState, useEffect } from 'react';

const HOME = () => {

    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        // Trigger the animation after the component mounts
        setFadeIn(true);
    }, []);

    return ( 
        <div className={`HOME ${fadeIn ? 'fade-in' : ''}`}>
            <div className="home-content">
                <div className="home-background">
                    <div className='h-content'>
                    <div className='g-1'>Greetings, I'm Andile Zondo</div>
                    <div className='g-2'>A Front-end Developer</div>
                    <div className='g-3'>I build things for the web</div>
                    </div>

                    <div className="skills-section col">
                        <h3>Tools:</h3>

                        <ul className='skills-1 row'>
                            <li className=''>HTML</li>
                            <li className=''>CSS</li>
                            <li className=''>JAVASCRIPT</li>
                            <li className='col'>REACT.js</li>
                            <li className=''>PHP</li>
                        </ul>

                        <ul className='skills-1 row'>
                            
                            <li className=''>mySQL</li>
                            <li className=''>TYPESCRIP.js</li>
                            <li className=''>XAMPP</li>
                        </ul>

                    </div>

                    <div className="projects-section row">
                        <div className='cursor'></div>
                        <div className='cursor'></div>
                        <div className='cursor'></div>
                    </div>
                    
                </div>
            </div>
        </div>
     );
}
 
export default HOME;