const redux = require('redux')
const createStore = redux.createStore


// Goal 1.0 is to Manage Ice Cream aswell now
// 1. Create a Action Type
const BUY_ICECREAM = 'BUY_ICECREAM'
// 2. Create Action Creator
function buyIceCream() {
    return {
        type: 'BUY_ICECREAM',
        info: 'Buying IceCream from Store'
    }
}
// 3. Update Initial State to have IceCreams in Fridge ✅
// 4. Update Reducer to have Buy IceCream action ✅
// 5. Buy some IceCreams ✅

// Goal 2.0 Create seperate reducers for each item
// 1. Seperate States ✅
// 2. Seperate Reducers ✅

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
// const initialState = {
//     numOfCakes: 10,
//     numOfIceCreams: 10
// }

// Cake State
const cakeState = {
    numOfCakes: 10
}

// IceCream State
const IceCreamState = {
    numOfIceCream: 10
}

// Create a Reducer
// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case BUY_CAKE: return {
//             ...state,
//             numOfCakes: state.numOfCakes - 1
//         }
//         case BUY_ICECREAM: return {
//             ...state,
//             numOfIceCreams: state.numOfIceCreams - 1
//         }
//         default: return state
//     }
// }

// Cake Reducer
const cakeReducer = (state = cakeState, action) => {
    switch (action.type) {
        case 'BUY_CAKE':
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            }
            break
        default: state
    }
}

// IceCream Reducer
const IceCream = (state = IceCreamState, action) => {
    switch (action.type) {
        case 'BUY_ICECREAM':
            return {
                ...state,
                numOfIceCream: state.numOfIceCream - 1
            }
            break
        default: state
    }
}


const store = createStore(reducer)
console.log('Initial State', store.getState())
const unsubscribe = store.subscribe(() => {
    console.log('Updated State', store.getState())
})

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyCake())

unsubscribe()
