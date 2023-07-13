import {React, useState} from 'react';

const Contact = () => {
    const [name, setName] = useState('');
    const [email,setEmail] = useState('');
    const [message,setMessage]=useState('');
    const [nameError,setNameError]=useState('');
    const [emailError, setEmailError] = useState('');

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleBlur = (e) => {
        const fieldName = e.target.name;

        if (fieldName === 'name' && !name) {
            setNameError('Please Enter Your Name');
        }
        if (fieldName === 'email' && !email) {
            setEmailError('Please Enter Your Email')
        }
    };

    const handleChange = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
    
        if (fieldName === 'name') {
          setName(fieldValue);
          setNameError('');
        }
        if (fieldName === 'email') {
          setEmail(fieldValue);
          setEmailError('');
        }
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        // Validate name and email
        if (!name) {
          setNameError('Name is required');
        }
        if (!email) {
          setEmailError('Email is required');
        } else if (!validateEmail(email)) {
          setEmailError('Invalid email address');
        }
    
        // Submit form if no errors
        if (name && email && validateEmail(email)) {
          // Perform form submission or API call here
          console.log('Form submitted successfully');
          // Reset form fields
          setName('');
          setEmail('');
          setMessage('');
        }
      };

    return (
        <div
            name="contact"
            className='w-full h-screen bg-[#1e1b4b] text-[#c7d2fe] flex justify-center items-center p-4'
        >
            <h2 className='text-[45px] lg:text-[100px] text-[#eef2ff] leading-none mb-12 pr-6'>
                Let's work <br /> together! 
            </h2>
            <div className='text-[45px] lg:text-[30px] leading-none mb-4 pr-6'>
                Email: Destiny32601@gmail.com <br /> Cell: 704-807-2872

            </div>
            <form className='flex-1 border rounded-2x1 flex flex-col gap-y-6 pb-24 p-6 items-start' onSubmit={handleSubmit}>
                <input
                    className='bg-transparent border-b py-3 outline-none w-full
            placeholder:text-white focus:border-accent'
                    type='text'
                    name='name'
                    placeholder='Your Name'
                    value={name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {nameError && <p className='text-red-500'>{nameError}</p>}
                <input
                    className='bg-transparent border-b py-3 outline-none w-full
            placeholder:text-white focus:border-accent '
                    type='text'
                    name='email'
                    placeholder='Your Email'
                    value={email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {emailError && <p className='text-red-500'>{emailError}</p>}
                <textarea
                    className='bg-transparent border-b py-12 outline-none w-full
            placeholder:text-white focus:border-accent resize-none mb-12'
                    
                    name='message'
                    placeholder='Your Message'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <button className='btn btn-lg bg-[#ddd6fe] text-center rounded-lg px-5 py-5 text-[#2e1065] font-bold'>Send me a message</button>
            </form>

        </div>

    );
};

export default Contact;