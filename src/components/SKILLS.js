import './SKILLS.css';
import { useState, useEffect } from 'react';


const SKILLS = () => {

    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        // Trigger the animation after the component mounts
        setFadeIn(true);
    }, []);

    return ( 
        <div className={`SKILLS ${fadeIn ? 'fade-in' : ''}`}>
            <div className="content-background">

                <h2>SKILLS</h2>

                <div>
                    <p>
                    I'm truly passionate about web development, and my skill set reflects my dedication to crafting exceptional digital experiences. I have a strong foundation in HTML, CSS, and JavaScript, which allows me to bring creative ideas to life on the front end. I'm a big fan of React.js and the magic it brings to user interfaces. Currently, I'm diving into TypeScript.js and Angular.js to keep pushing my boundaries. On the back end, I've been exploring PHP and diving deep into MySQL. Whether it's ensuring that websites look great on all devices, optimizing performance for a seamless user experience, or solving complex challenges, I'm committed to delivering polished and user-friendly web solutions.
                    </p>
                </div>

                <div className="skills-section col">
                        <h3>Tools:</h3>

                        <ul className='skills-1 row'>
                            <li className=''>HTML</li>
                            <li className=''>CSS</li>
                            <li className=''>JAVASCRIPT</li>
                            <li className='col'>REACT.js</li>
                            <li className='col'>ANGULAR.js</li>
                            
                        </ul>

                        <ul className='skills-1 row'>
                            <li className=''>PHP</li>
                            <li className=''>mySQL</li>
                            <li className=''>TYPESCRIP.js</li>
                            <li className=''>XAMPP</li>
                        </ul>

                </div>
            </div>
        </div>
     );
}
 
export default SKILLS;