import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

const getInitialScore = () => 0
const getInitialUpgrades = () => ({
  1: {
    id: 1,
    cps: 1,
    cost: 10,
    name: 'auto-clicker',
  },
  2: {
    id: 2,
    cps: 5,
    cost: 20,
    name: 'pokebull',
  },
  3: {
    id: 3,
    cps: 25,
    cost: 30,
    name: 'bulbasaur',
  },
  4: {
    id: 4,
    cps: 100,
    cost: 40,
    name: 'charmander',
  },
  5: {
    id: 5,
    cps: 500,
    cost: 50,
    name: 'shinny',
  },
})

export interface IUpgrade {
  [key: number]: {
    id: number
    cps: number
    cost: number
    name: string
  }
}
export interface AppState {
  score: number
  upgrades: IUpgrade
  purchasedUpgrades: [] | any
  actions: {
    changeScore: (amount: number) => void
    newGame: () => void
    purchase: (upgradeId: number) => void
  }
}

export const usePikachuStore = create<AppState>()((set, get) => ({
  score: getInitialScore(),
  upgrades: getInitialUpgrades(),
  purchasedUpgrades: [],
  actions: {
    changeScore(amount = 1) {
      set((state) => ({ score: state.score + amount }))
    },
    newGame() {
      set({
        score: getInitialScore(),
        upgrades: getInitialUpgrades(),
        purchasedUpgrades: [],
      })
    },
    purchase(upgradeId) {
      const { upgrades, actions } = get()
      const upgrade = upgrades[upgradeId]

      actions.changeScore(-upgrade.cost)
      set((state) => ({
        purchasedUpgrades: [...state.purchasedUpgrades, upgrade],
      }))
    },
  },
}))

usePikachuStore.setState(
  JSON.parse(window.localStorage.getItem('pikachuClickerState') as string),
)

usePikachuStore.subscribe((state) => {
  const stateCopy = { ...state } as Partial<AppState>
  delete stateCopy['actions']
  window.localStorage.setItem('pikachuClickerState', JSON.stringify(stateCopy))
})
