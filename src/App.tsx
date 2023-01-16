import React from 'react'

import { Pikachu } from './components/pikachu'

function Score() {
  // const score = usePikachuStore((s) => s.score)
  return (
    <div className="space-evenly flex">
      {/* <input className="text-red-500" value={score} /> */}
      <input className="w-14 shrink text-5xl text-red-500" value={0} />
      <Pikachu name="pikachu" width="50" height="50" />
    </div>
  )
}

function BigPikachuButton() {
  // const actions = usePikachuStore((s) => s.actions)
  // return <button className="cookieBtn" onClick={() => actions.changeScore(1)} />
  return (
    <button
      className="pikachuBtn"
      onClick={() => {
        console.log(' I was clicked')
        // actions.changeScore(1)
      }}
    />
  )
}

function NewGameButton() {
  // const actions = usePikachuStore((s) => s.actions)
  return (
    // <button onClick={() => actions.newGame()} className="my-12">
    <button
      onClick={() => {
        console.log('I was clicked for a new game')
        // actions.newGame()
      }}
      className="rounded-md border border-yellow-600 p-4 font-comic text-3xl font-bold text-yellow-500"
    >
      New Game
    </button>
  )
}

function App() {
  return (
    <div className="grid h-screen grid-cols-1 place-items-center content-center gap-12">
      <Score />
      <section className="grid grid-cols-1  content-center gap-4">
        <h1 className="font-comic text-5xl font-bold text-yellow-600">
          Pika Clicker
        </h1>
        {/* <Pikachu name="pikachu" width="250" height="250" />
         */}
        <BigPikachuButton />
      </section>
      <NewGameButton />
    </div>
  )
}

export default App
