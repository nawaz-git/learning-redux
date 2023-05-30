const redux = require('redux')
const createStore = redux.createStore

// Create a Action Type
const BUY_CAKE = 'BUY_CAKE'

// Create a Action Creator
function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'Buying Cake from Store'
    }
}

// Initial State
const initialState = {
    numOfCakes: 10
}

// Create a Reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }

        default: return state
    }
}

const store = createStore(reducer)
console.log('Initial State', store.getState())
const unsubscribe = store.subscribe(() => {
    console.log('Updated State', store.getState())
})

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

unsubscribe()
