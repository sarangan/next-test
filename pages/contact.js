import PropLayout from "../components/PropLayout";

const ContactChild =  <div>
        <p>contact me</p>
    </div>;

function Contact(){
    return(
    <PropLayout content={ContactChild}/>
    );
}

export default Contact;