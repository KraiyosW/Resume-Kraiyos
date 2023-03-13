import React from 'react';
import '../resume.css';

function ContentDetails(){
    return(
        <div className='content-details'>
            <h1 className='text-introduction'>Why Hire Me?</h1>
            <div className='content-item'>
                <div className='content-sub-item'>
                    <div className='circle'>
                        <img className="ellipse"src="/Picture/Ellipse 44.png"></img>
                            <img className="in-ellipse-icon"src="/Picture/Group1.png" alt="Communicative icon"></img>
                    </div>
                    <p className='text-content'>Communicative</p>
                    <p className='text-normal1'>"I have experience in people management, having worked as an Assistant Team Leader. My subordinates were all older than me. I am confident that I can work as part of a team and manage conflicts within the team."</p>
                </div>
                <div className='content-sub-item'>
                    <div className='circle'>
                        <img className="ellipse"src="/Picture/Ellipse 44.png"></img>
                            <img className="in-ellipse-icon"src="/Picture/Group2.png" alt="Professional icon"></img>
                    </div>
                    <p className='text-content'>Professional</p>
                    <p className='text-normal1'>"I am a professional who does heavy work. If the job is not finished, I refuse to stop working and am always eager to learn new things. I can work with people of all ages and have been able to quickly move up the ranks in previous companies I have worked for. Please trust me."</p>
                </div>
                <div className='content-sub-item'>
                    <div className='circle'>
                        <img className="ellipse"src="/Picture/Ellipse 44.png"></img>
                            <img className="in-ellipse-icon"src="/Picture/Group 243.png" alt="Collaborative icon"></img>
                    </div>
                    <p className='text-content'>Collaborative​</p>
                    <p className='text-normal1'>"This is one of the reasons why I switched career paths from mechanical engineering to become a software developer. I enjoy working in teams and collaborating with skilled individuals. Working with talented people, I believe, will enable me to rapidly develop my skills and grow alongside the team."</p>
                </div>
                <div className='content-sub-item'>
                    <div className='circle'>
                        <img className="ellipse"src="/Picture/Ellipse 44.png"></img>
                            <img className="in-ellipse-icon"src="/Picture/Group 242.png" alt="Fast learning icon"></img>
                    </div>
                    <p className='text-content'>Fast learning</p>
                    <p className='text-normal1'>"I love learning new things and I understand that as a software developer, it is necessary to quickly and accurately learn new things. I believe that I have the ability to learn new things very well."</p>
                </div>
            </div>
        </div>

    );
}

export default ContentDetails;