// ACTION , ACTION_CREATOR , REDUCER

const SET_VAL ='SET_VAL'

// export  const setVal = () => ({
//     type: SET_VAL
// })

const firstReducer = (state = {val:0},action) => {
    console.log(action.val)
       switch(action.type){
            case 'SET_VAL_ASYNC':{
                return {
                    ...state,
                    val: action.val + 1
                };
            }
            
            default:
                return state
       }
    
}

export default firstReducer
