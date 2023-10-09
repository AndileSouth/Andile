import './ABOUT.css';
import { useState, useEffect } from 'react';


const ABOUT = () => {

    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        // Trigger the animation after the component mounts
        setFadeIn(true);
    }, []);

    return ( 
        <div className={`ABOUT ${fadeIn ? 'fade-in' : ''}`}>
            <div className="content-background col">
                <h2>About</h2>

                <div className='about-p row'>
                    <h3>Hello there!</h3>
                </div>

                <div className='about-p row'>
                    <p>
                    I'm a self-taught front-end developer on a journey filled with curiosity and a passion for building exceptional web experiences. My story began with a desire to learn and grow, and it's led me to a solid foundation in HTML, CSS, and JavaScript. With these skills in hand, I've crafted beautiful and user-friendly websites. I've also embraced the power of React.js, a tool that lets me bring creative visions to life.
                    </p>
                </div>

                <div className='about-p row'>
                    <p>
                    But I'm not stopping there. I'm always hungry for knowledge, and right now, I'm deep into TypeScript.js and Angular.js to take my front-end skills to new heights. On the back end, I've explored the world of PHP and am currently immersed in mastering MySQL.
                    </p>
                </div>

                <div className='about-p row'>
                    <p>
                    I may lean towards the introverted side, but I know the magic that happens when talented individuals come together. Teamwork is where innovation thrives, and I'm eager to contribute my skills, learn from others, and be a part of something amazing.
                    </p>
                </div>

                <div className='about-p row'>
                    <p>
                    My dream? To find a long-term position as a front-end developer, a place where I can continue to learn, grow, and make a meaningful impact. If your company is in search of a junior developer who's dedicated, eager to learn, and brings fresh perspectives to the team, I'd be thrilled to be a part of your exciting journey. Let's build incredible web solutions together!
                    </p>
                </div>

            </div>
        </div>
     );
}
 
export default ABOUT;