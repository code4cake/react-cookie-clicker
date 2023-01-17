import React, { useCallback, useEffect } from 'react'

import { useInterval } from 'react-use-timeout'

import { Pikachu } from './components/pikachu'

import { AppState, IUpgrade, usePikachuStore } from './state/state'

function Score() {
  const score = usePikachuStore((store: AppState) => store.score)

  return (
    <div className="space-evenly flexgst mt-14">
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

function AutoClicker({ upgrade }: any) {
  const actions = usePikachuStore((store: AppState) => store.actions)
  const greaterThan1000cps = upgrade.cps > 1000
  const delay = Math.max(1000 / upgrade.cps, 1)
  const incAmount = greaterThan1000cps ? upgrade.cps / 1000 : 1

  const incScore = useCallback(
    () => actions.changeScore(incAmount),
    [actions, incAmount],
  )
  const timeout = useInterval(incScore, delay)

  useEffect(() => {
    timeout.start()
  }, [])

  return null
}

function AutoClickers() {
  const purchasedUpgrades = usePikachuStore(
    (store: AppState) => store.purchasedUpgrades,
  )
  console.log(purchasedUpgrades)
  return purchasedUpgrades.map((upgrade: any) => (
    <AutoClicker key={upgrade.id} upgrade={upgrade} />
  ))
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
      <AutoClickers />
      <UpgradeList />
      <NewGameButton />
    </div>
  )
}

export default App
