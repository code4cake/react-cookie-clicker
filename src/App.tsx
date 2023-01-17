import React from 'react'

import { Pikachu } from './components/pikachu'

import { AppState, IUpgrade, usePikachuStore } from './state/state'

function Score() {
  const score = usePikachuStore((store: AppState) => store.score)

  return (
    <div
      className="space-evenly mt-14 flex
    "
    >
      <input
        readOnly
        className="w-14 shrink text-5xl text-red-500"
        value={score}
      />
      <Pikachu name="pikachu" width="50" height="50" />
    </div>
  )
}

function BigPikachuButton() {
  const actions = usePikachuStore((store: AppState) => store.actions)

  return (
    <button className="pikachuBtn" onClick={() => actions.changeScore(1)} />
  )
}

function NewGameButton() {
  const actions = usePikachuStore((store) => store.actions)

  return (
    <button
      onClick={() => actions.newGame()}
      className="rounded-md border border-yellow-600 p-4 font-comic text-3xl font-bold text-yellow-500"
    >
      New Game
    </button>
  )
}

function UpgradeList() {
  const score = usePikachuStore((store: AppState) => store.score)
  const upgrades = usePikachuStore((store: AppState) => store.upgrades)
  const actions = usePikachuStore((store: AppState) => store.actions)

  return (
    <div className="grid grid-cols-1 place-items-center gap-2 rounded-md border border-yellow-600 p-4">
      <h3 className=" font-comic text-3xl font-bold text-yellow-600">
        Upgrades
      </h3>
      <ul>
        {Object.keys(upgrades)
          .map((key: any) => {
            console.log('Object.keys(upgrades)', Object.keys(upgrades))
            console.log('key', key)
            console.log('upgrades[key]', upgrades[key])
            return upgrades[key]
          })
          .map((upgrade) => (
            <li
              key={upgrade.id}
              className="space-between flex flex-row items-center gap-2 font-comic text-xl font-bold text-yellow-600"
            >
              <div>
                {upgrade.name} ({upgrade.cps}cps): {upgrade.cost}c
              </div>
              <button
                className="rounded-md border p-2 font-comic text-xl font-bold text-yellow-500"
                disabled={score < upgrade.cost}
                onClick={() => actions.purchase(upgrade.id)}
              >
                Buy
              </button>
            </li>
          ))}
      </ul>
    </div>
  )
}

function App() {
  return (
    <div className="grid h-screen grid-cols-1 place-items-center content-center gap-10">
      <Score />
      <section className="grid grid-cols-1  content-center gap-2">
        <h1 className="font-comic text-5xl font-bold text-yellow-600">
          Pika Clicker
        </h1>
        {/* <Pikachu name="pikachu" width="250" height="250" />
         */}
        <BigPikachuButton />
      </section>
      <UpgradeList />
      <NewGameButton />
    </div>
  )
}

export default App
