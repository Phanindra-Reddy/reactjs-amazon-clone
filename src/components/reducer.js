export const initialState = {
    basket:[],
    user:null
}

export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price+amount, 0);

const reducer = (state, action) => {
    
    switch(action.type){
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket:[...state.basket, action.item],
            }

        case 'DELETE_ITEM':
            const itemIndex = state.basket.findIndex((item) => item.id === action.id);
            let newBasket = [...state.basket]
            if(itemIndex >= 0){
                newBasket.splice(itemIndex, 1);

            }else{
                alert(`Item not found in basket!!`)
            }

            return{
                ...state,
                basket:newBasket,
            }

        case 'SET_USER':
            return {
                ...state,
                user:action.user,
            }

        case 'EMPTY_BASKET':
            return {
                ...state,
                basket:[]
            }
            
        default:
            return state;
    }
}

export default reducer;