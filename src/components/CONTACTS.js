import './CONTACTS.css';
import { useState, useEffect } from 'react';

const CONTACTS = () => {

    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        // Trigger the animation after the component mounts
        setFadeIn(true);
    }, []);

    const handleEmailButtonClick = () => {
        const emailAddress = 'andilezondo555@gmail.com';

        const subject = 'Job Inquiry: Front-End Developer Position';
        const body = 'Hi, I found your portfolio and I am interested in discussing a front-end developer position..';

        const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
    };


    return ( 
        <div className={`CONTACTS ${fadeIn ? 'fade-in' : ''}`}>
            <div className="content-background col">
                <h2>Contact me</h2>
                <div className="inside-content row">
                    <div className="get-in-touch-message col half-space">
                        <h4>Get in touch</h4>

                        <p>
                        I'm actively seeking a full-time front-end developer position. However, I'm also open to short-term projects.if you need a front-end developer let's connect and discuss how I can contribute to your project's success. Feel free to reach out.
                        </p>

                    </div>

                    <div className='email-btn col'>
                        <button onClick={handleEmailButtonClick}>Click To Mail Me</button>

                        <h4>OR</h4>

                        <div className='row socials'>
                        <a href="https://twitter.com/AndileSouth" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>
                        </a>
                        </div>
                        
                    </div>

                    {/* <form className="col half-space" action="">
                        <div className='row'>
                            <input type="text" name="name" placeholder='Name'/>
                        <input type="text" name="name" placeholder='Email'/>
                        </div>
                        
                        <div className="textarea">
                        <textarea className='message' name="message" placeholder='Message' style={{ width: '100%' }} />
                        </div>
                        

                        <input className='submit' type="submit" name='submit' value="submit"/>
                    </form> */}
                </div>
            </div>
        </div>
     );
}
 
export default CONTACTS;