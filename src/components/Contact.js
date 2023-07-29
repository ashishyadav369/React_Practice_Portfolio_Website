import Navbar from "./Navbar";

const Contact = () => {
    return(
        <div class="row-combo">
            <Navbar></Navbar>
           <div className="contact-box">
           <h1 class="for-pseudo">Contact</h1>
           <p>Open for oppurtunities : <strong>Yes</strong></p>
           <div className="contact-form">
            <input></input>
            <input></input>
            <textarea></textarea>
           </div>
           </div>
        </div>
    );
}

export default Contact;  