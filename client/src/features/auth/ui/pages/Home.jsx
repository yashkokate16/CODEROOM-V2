import React from 'react'
import NavBar from "../../../../app/layouts/Navbar"
import HeroSection from "../components/HeroSection"
import CreateRoomCard from "../components/CreateRoomCard"
import JoinRoomCard from "../components/JoinRoomCard"

const Home = () => {
  return (
    <div  className="min-h-screen bg-zinc-950">
      <NavBar />
      <main className="mx-auto max-w-7xl px-6 py-10">
        <HeroSection />

        <section className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <CreateRoomCard />
          <JoinRoomCard />
        </section>

      </main>
    </div>
  )
}

export default Home
