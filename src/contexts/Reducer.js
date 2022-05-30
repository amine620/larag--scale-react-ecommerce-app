export function reducer(state, action) {
    switch (action.type) {
        case 'open_chat':
            return {
                ...state,
                chat: true
            }
            
        case 'close_chat':
            return {
                ...state,
                chat: false
            }
            
        case 'open_cart':
            return {
                ...state,
                cart: true
            }
            
        case 'close_cart':
            console.log(state);
            return {
                ...state,
                cart: false
            }
            
        case 'open_notification':
            return {
                ...state,
                notification: true
            }
            
        case 'close_notification':
            return {
                ...state,
                notification: false
            }
            

        case 'open_user':
            return {
                ...state,
                userProfile: true
            }
            
        case 'close_user':
            return {
                ...state,
                userProfile: false
            }
            
        default:  throw new Error();

    }
}