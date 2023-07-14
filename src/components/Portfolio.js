import React from 'react';
import workday from './images/workday.png';
import feedme from './images/feedme.png';
import weather from './images/weather.png';
import notetaker from './images/notetaker.png';
import cookbook from './images/cookbook.png';
import colorc from './images/colorc.png';

export const Portfolio = () => {
    return (
        <div
            name="portfolio"
            className='w-full md:h-screen bg-[#1e1b4b] text-[#ede9fe]'
        >
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-[#ede9fe] border-[#a78bfa]'>
                        My Projects
                    </p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    <div
                        style={{ backgroundImage: `url(${workday})` }}
                        className='shadow-sm shadow-gray-200 group container rounded-md flex justify center items-center mx-auto content-div'
                    >
                        <div className="text-center opacity-0 group-hover:opacity-100">
                            <p className="text-2xl font-bold tracking-wider text-black">
                                Work Day Scheduler
                            </p>
                            <a href="https://github.com/destinymarie32601/workday-schedule">
                                <button
                                    link=""
                                    className="bg-[#ddd6fe] text-center rounded-lg px-4 py-3 text-[#2e1065] mb-2"
                                >
                                    GitHub
                                </button>
                            </a>
                            <a href="https://destinymarie32601.github.io/workday-schedule/">
                                <button
                                    link=""
                                    className="bg-[#ddd6fe] text-center rounded-lg px-4 py-3 text-[#2e1065] ml-2"
                                >
                                    Live
                                </button>
                            </a>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${weather})` }}
                        className='shadow-sm shadow-gray-200 group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        <div className='text-center opacity-0 group-hover:opacity-100'>
                            <p className='text-2xl; font-bold tracking wider text-white'>
                                Weather Dashboard
                            </p>
                            <a href="https://github.com/destinymarie32601/weather-dashboard">
                                <button
                                    link=""
                                    className="bg-[#ddd6fe] text-center rounded-lg px-4 py-3 text-[#2e1065] mb-2"
                                >
                                    GitHub
                                </button>
                            </a>
                            <a href="https://destinymarie32601.github.io/weather-dashboard/">
                                <button
                                    link=""
                                    className="bg-[#ddd6fe] text-center rounded-lg px-4 py-3 text-[#2e1065] ml-2"
                                >
                                    Live
                                </button>
                            </a>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${feedme})` }}
                        className='shadow-sm shadow-gray-200 group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        <div className='text-center opacity-0 group-hover:opacity-100'>
                            <p className='text-2x; font-bold tracking wider text-black'>
                                Feed.Me
                            </p>
                            <a href="https://github.com/brandta-1/Project-01--Feed.me">
                                <button
                                    link=""
                                    className="bg-[#ddd6fe] text-center rounded-lg px-4 py-3 text-[#2e1065] mb-2"
                                >
                                    GitHub
                                </button>
                            </a>
                            <a href="https://brandta-1.github.io/Project-01--Feed.me/">
                                <button
                                    link=""
                                    className="bg-[#ddd6fe] text-center rounded-lg px-4 py-3 text-[#2e1065] ml-2"
                                >
                                    Live
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    <div style={{ backgroundImage: `url(${notetaker})` }}
                        className='shadow-sm shadow-gray-200 group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        <div className='text-center opacity-0 group-hover:opacity-100'>
                            <p className='text-2x; font-bold tracking wider text-black'>
                                Note Taker
                            </p>
                            <a href="https://github.com/destinymarie32601/note-taker">
                                <button
                                    link=""
                                    className="bg-[#ddd6fe] text-center rounded-lg px-4 py-3 text-[#2e1065] mb-2"
                                >
                                    GitHub
                                </button>
                            </a>
                            <a href="https://sheltered-tor-16808-98830cbf80d2.herokuapp.com/">
                                <button
                                    link=""
                                    className="bg-[#ddd6fe] text-center rounded-lg px-4 py-3 text-[#2e1065] ml-2"
                                >
                                    Live
                                </button>
                            </a>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${cookbook})` }}
                        className='shadow-sm shadow-gray-200 group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        <div className='text-center opacity-0 group-hover:opacity-100'>
                            <p className='text-2x; font-bold tracking wider text-black'>
                                Nacho Mamas Cookbook
                            </p>
                            <a href="https://github.com/gabriellapinto/nacho-mamas-cookbook">
                                <button
                                    link=""
                                    className="bg-[#ddd6fe] text-center rounded-lg px-4 py-3 text-[#2e1065] mb-2"
                                >
                                    GitHub
                                </button>
                            </a>
                            <a href="https://nacho-mamas-cookbook.herokuapp.com/">
                                <button
                                    link=""
                                    className="bg-[#ddd6fe] text-center rounded-lg px-4 py-3 text-[#2e1065] ml-2"
                                >
                                    Live
                                </button>
                            </a>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${colorc})` }}
                        className='shadow-sm shadow-gray-200 group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        <div className='text-center opacity-0 group-hover:opacity-100'>
                            <p className='text-4x; font-bold tracking wider text-black'>
                                Color Culture
                            </p>
                            <a href="https://github.com/destinymarie32601/color-culture">
                                <button
                                    link=""
                                    className="bg-[#ddd6fe] text-center rounded-lg px-4 py-3 text-[#2e1065] mb-2"
                                >
                                    GitHub
                                </button>
                            </a>
                            <a href="https://agile-sands-25127-bd108b7da8b9.herokuapp.com/">
                                <button
                                    link=""
                                    className="bg-[#ddd6fe] text-center rounded-lg px-4 py-3 text-[#2e1065] ml-2"
                                >
                                    Live
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;