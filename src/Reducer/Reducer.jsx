
const initialState = {
    items: []
}

const rootReducer = (state = initialState, action) => {
   
    switch(action.type) {
        case "ADD_ITEM":
            return {
                items: [...state.items, action.payload]
            };
            case "Delete_ITEM":
                return{
                    items:state.items.filter((item,index)=> index !== action.payload)
                }

                case "EDIT_ITEM":
                    return {
                       
                        items: state.items.map((item, id) =>{
                            return id === action.payload.id ? action.payload.value : item}
                    ),
                    };

        default:
            return state;
    }
    
}

export default rootReducer;