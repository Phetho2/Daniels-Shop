import { combineReducers } from 'redux'
import { productREducer, selectedProductReducer } from './productReducer'

const reducers = combineReducers({
    allProducts: productREducer,
    product: selectedProductReducer,
})

export default reducers;