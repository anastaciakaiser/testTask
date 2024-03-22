import React from 'react';
import './Home.scss'; 
import avatarJohn from '../assets/avatar_john.png';

const Home = () => {
    return (
        <div className="home-container">

            <div className="first-block">
                <div className="text">
                    <h1>Hi, I am John, <br/> Creative Technologist</h1>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    <button>Download Resume</button>
                </div>
                <div className='container'>                  
                  <img src={avatarJohn} alt="Photo of John" />
                </div>
            </div>

            <div class="second-block">
                <div class="content-wrapper">
                    <div class="header">
                        <p className='block-title'>Recent posts</p>
                        <a href="#">View all</a>
                    </div>
                    <div class="miniblocks">
                        <div class="miniblock">
                            <p className='mini-block-title'>Making a design system from scratch</p>
                            <p className='mini-block-text1'>12 Feb 2020&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Design, Pattern</p>
                            <p className='mini-block-text2'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        </div>
                        <div class="miniblock">
                            <p className='mini-block-title'>Creating pixel perfect icons in Figma</p>
                            <p className='mini-block-text1'>12 Feb 2020&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Figma, Icon Design</p>
                            <p className='mini-block-text2'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="third-block">
                <div className="blog">
                    <p className='block-title'>Featured works</p>
                    <img src="blog_image.jpg" alt="Изображение блога" />
                </div>
            </div>
        </div>
    );
}

export default Home;
