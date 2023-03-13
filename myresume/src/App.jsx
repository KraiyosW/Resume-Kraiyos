import './resume.css'
import React from 'react'
import Header,{Introduction} from './component/landingpage'
import ContentDetails from './component/content'
import EducationProfile from './component/education'
import Footer from './component/footer'

function App() {
 

  return (
    <div className='App'>
      <Header/>
      <Introduction/>
      <ContentDetails/>
      <EducationProfile/>
      <Footer/>
    </div>
  )
}

export default App;
