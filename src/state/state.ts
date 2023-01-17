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
    cost: 50,
    name: 'grandma',
  },
  3: {
    id: 3,
    cps: 25,
    cost: 100,
    name: 'shipment',
  },
  4: {
    id: 4,
    cps: 100,
    cost: 1000,
    name: 'truckload',
  },
  5: {
    id: 5,
    cps: 500,
    cost: 10000,
    name: 'factory',
  },
})

export interface AppState {
  score: number
  // purchasedUpgrades: [{}]
  upgrades: any
  purchasedUpgrades: []
  actions: {
    changeScore: (amount: number) => void
    newGame: () => void
  }
}

// @ts-ignore:  AppState does not accept an array like T, that's why ignoring this rule for the moment
export const usePikachuStore = create<AppState>()((set, get) => ({
  score: getInitialScore(),
  upgrades: getInitialUpgrades(),
  purchasedUpgrades: [],
  actions: {
    changeScore(amount = 1) {
      set((state) => ({ score: state.score + amount }))
    },
    newGame() {
      console.log('new game')
      set({
        score: getInitialScore(),
        upgrades: getInitialUpgrades(),
        purchasedUpgrades: [],
      })
    },
  },
}))

// @ts-ignore:  AppState does not accept an array like T, that's why ignoring this rule for the moment
// export const [useCookieStore, store] = create<AppState>()((set, get) => ({
//   score: getInitialScore(),
//   upgrades: getInitialUpgrades(),
//   purchasedUpgrades: [],
//   actions: {
//     newGame() {
//       set({
//         score: getInitialScore(),
//         upgrades: getInitialUpgrades(),
//         purchasedUpgrades: [],
//       })
//     },
//     changeScore(amount = 1) {
//       set((state) => ({ score: state.score + amount }))
//     },
//     purchase(upgradeId) {
//       const { upgrades, actions } = get()
//       const upgrade = upgrades[upgradeId]

//       actions.changeScore(-upgrade.cost)
//       set((state) => ({
//         purchasedUpgrades: [...state.purchasedUpgrades, upgrade],
//       }))
//       // setInterval(() => {
//       //   actions.changeScore(1);
//       // }, 1000 / upgrade.cps);
//     },
//   },
// }))

// store.setState(JSON.parse(window.localStorage.getItem('state')))

// store.subscribe((state) => {
//   const stateCopy = { ...state }
//   delete stateCopy['actions']
//   window.localStorage.setItem('state', JSON.stringify(stateCopy))
// })
