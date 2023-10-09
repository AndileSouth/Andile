import './CONTACTS.css';
import { useState, useEffect } from 'react';

const CONTACTS = () => {

    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        // Trigger the animation after the component mounts
        setFadeIn(true);
    }, []);

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

                    <form className="col half-space" action="">
                        <div className='row'>
                            <input type="text" name="name" placeholder='Name'/>
                        <input type="text" name="name" placeholder='Email'/>
                        </div>
                        
                        <div className="textarea">
                        <textarea className='message' name="message" placeholder='Message' style={{ width: '100%' }} />
                        </div>
                        

                        <input className='submit' type="submit" name='submit' value="submit"/>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default CONTACTS;