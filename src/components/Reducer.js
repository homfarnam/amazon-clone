export const initialState = {
    basket: [
    //     {
    //     id:'2323232',
    //     title:'new apple',
    //     price:23233,
    //     rating:4,
    //     image:'https://images-na.ssl-images-amazon.com/images/I/41Hkw++IIJL._AC_US160_.jpg'
    // },
    // {
    //     id:'2323232',
    //     title:'new apple',
    //     price:12313,
    //     rating:3,
    //     image:'https://images-na.ssl-images-amazon.com/images/I/41Hkw++IIJL._AC_US160_.jpg'
    // },
   
],
    user:null
}

export const getBasketTotal = (basket) => basket?.reduce((amount,item)=> item.price + amount, 0)



const reducer = (state,action) =>{
    console.log(action)

    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user: action.user
            }

        case 'ADD_TO_BASKET':
            // logic adding item to basket
            return {
                ...state,
                basket:[...state.basket, action.item]
            }
            
        case 'REMOVE_FROM_BASKET':
            // logic removing item to basket

            // clone the basket
            let newBasket = [...state.basket]
            
            // check to see of product exists
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );

            if(index >= 0){
                // item exists n basket , remove it ....
                newBasket.splice(index, 1)
                 
            }else{
                console.warn(
                    `Can not remove product (id: ${action.id}) as its`
                )
            }

            return {...state, basket: newBasket}
            
        default:
            return state
        
    }
}

export default reducer