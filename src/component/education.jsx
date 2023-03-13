import React from 'react';
import '../resume.css';

function EducationProfile(){
    return(
        <div className='technical-profile'>
            <h1 className='text-introduction'>My Technical Skills</h1>
            <div className='technical-details'>
                <img className='logo-technical-skills' src='/Picture/JS6.png' alt="JS6 icon"></img>
                <img className='logo-technical-skills' src='/Picture/nodejs.png' alt="nodejs icon"></img>
                <img className='logo-technical-skills' src='/Picture/HTML5.png' alt="HTML5 icon"></img>
                <img className='logo-technical-skills' src='/Picture/CSS3.png' alt="CSS3 icon"></img>
                <img className='logo-technical-skills' src='/Picture/python logo.png' alt="python icon"></img>
                <img className='logo-technical-skills' src='/Picture/django.png' alt="django icon"></img>
                
            </div>
        </div>
    );
}

export default EducationProfile;