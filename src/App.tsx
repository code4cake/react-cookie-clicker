import React from 'react'

import { Pikachu } from './components/pikachu'

function App() {
  return (
    <section className="grid h-screen grid-cols-1 place-items-center content-center gap-4">
      <h1 className="font-comic text-5xl font-bold text-amber-600">
        Pika Clicker
      </h1>
      <Pikachu name="pikachu" width="250" height="250" />
    </section>
  )
}

export default App
