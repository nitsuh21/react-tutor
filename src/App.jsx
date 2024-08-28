import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HomeCards from './components/HomeCards'
import JobLists from './components/JobLists'
import Viewalljobs from './components/Viewalljobs'

const App = () => {

  return (
    <>
    <Navbar />
    <Hero />
    <HomeCards/>
    <JobLists/>
    <Viewalljobs/>
    
    <script src="js/main.js"></script>   
    </>
  )
}

export default App
