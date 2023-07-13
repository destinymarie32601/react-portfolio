import React from 'react';

const Contact = () => {
    return (
        <div
            name="contact"
            className='w-full h-screen bg-[#1e1b4b] text-[#c7d2fe] flex justify-center items-center p-4'
        >
            <h2 className='text-[45px] lg:text-[100px] leading-none mb-12'>
                Let's work <br /> together!
            </h2>
            <form className='flex-1 border rounded-2x1 flex flex-col gap-y-6 pb-24 p-6 items-start'>
                <input
                    className='bg-transparent border-b py-3 outline-none w-full
            placeholder:text-white focus:border-accent'
                    type='text'
                    placeholder='Your Name'
                />
                <input
                    className='bg-transparent border-b py-3 outline-none w-full
            placeholder:text-white focus:border-accent '
                    type='text'
                    placeholder='Your Email'
                />
                <textarea
                    className='bg-transparent border-b py-12 outline-none w-full
            placeholder:text-white focus:border-accent resize-none mb-12'
                    type='text'
                    placeholder='Your Message'
                ></textarea>
                <button className='btn btn-lg bg-[#ddd6fe] text-center rounded-lg px-5 py-5 text-[#2e1065] font-bold'>Send me a message</button>
            </form>

        </div>

    );
};

export default Contact;