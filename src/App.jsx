import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HomeCards from './components/HomeCards'
import JobLists from './components/JobLists'


const App = () => {

  return (
    <>
    <Navbar />
    <Hero />
    <HomeCards/>
    <JobLists/>

    <section className="m-auto max-w-lg my-10 px-6">
      <a
        href="jobs.html"
        className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Jobs</a
      >
    </section>

    <script src="js/main.js"></script>   
    </>
  )
}

export default App
