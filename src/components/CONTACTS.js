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