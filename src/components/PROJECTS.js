import './PROJECTS.css';
import { useState, useEffect } from 'react';
import IMAGES from './img/images';

const PROJECTS = () => {

    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        // Trigger the animation after the component mounts
        setFadeIn(true);
    }, []);

    return ( 
        <div className={`PROJECTS ${fadeIn ? 'fade-in' : ''}`}>
            <div className="content-background col">
                <h1>Projects</h1>

                <div className='project row'>
                    <div className="project-img img-container">
                    <img src={IMAGES.iEventFinder} alt="" />
                    </div>
                    <div className="project-details">
                        <div className="title">
                           <h2>
                            <a href="https://andilesouth.github.io/iEventFinder/" target="_blank" rel="noopener noreferrer">1. iEventFinder
                            </a>
                            </h2> 
                           <p className='overview'>Overview(ongoing)</p>
                           <p className='langueges-used'>languages used: Css, Javascript, React.js, Php, mySQL</p>
                           <p>iEventFinder is an exciting project that aims to make event discovery a breeze. Whether you're looking for local concerts, online workshops, or other types of events.</p>
                        </div>
                    </div>
                </div>

                <div className='project row'>
                    <div className="project-img img-container">
                        <img src={IMAGES.DadJokeGenerator} alt="" />
                    </div>
                    <div className="project-details">
                        <div className="title col">
                           <h2>Dad joke generator</h2> 
                           <p className='overview'>Overview</p>
                           <p className='langueges-used'>languages used: Html,Css and Javascript</p>

                           <p>Dad Joke Generator project that leverages the power of APIs to deliver endless laughs. This endeavor was an invaluable learning experience, equipping me with the skills to seamlessly interface with APIs and craft data into visually appealing and user-friendly features. Through this project, I honed my abilities to retrieve and manipulate data, resulting in a delightful and entertaining tool that brings joy to users one dad joke at a time.</p>
                        </div>
                    </div>
                </div>
                <div className='project row'>
                    <div className="project-img img-container">
                        <img src={IMAGES.ActivityApp} alt="" />
                    </div>
                    <div className="project-details">
                        <div className="title col">
                           <h2>
                           <a href="https://andilesouth.github.io/Activity-Suggestion-App/" target="_blank" rel="noopener noreferrer">3. Activity Suggestions
                           </a>
                           </h2> 
                           <p className='overview'>Overview</p>
                           <p className='langueges-used'>languages used: Html,Css,Javascript</p>
                           <p>The Activity Suggestion App represents a significant milestone in my journey as a web developer. It's a dynamic web application designed to provide users with instant activity suggestions at the click of a button. What makes this project particularly valuable is its integration with an external API that offers a vast array of activities</p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
     );
}
 
export default PROJECTS;