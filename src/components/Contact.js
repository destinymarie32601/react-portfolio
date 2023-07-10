import React, {useState} from 'react';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);
        //form submission logic here
    };

    return(
        <section className="contact">
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input 
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                />

                <label htmlFor="email">Email:</label>
                <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />

                <label htmlFor="message">Message:</label>
                <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                ></textarea>

                <button type="submit">Submit</button>
            </form>
        </section>
    );
}

export default Contact;