const initialState = {
    count: 0,
    inputNumber: 10,
};

// toa znachi deka bidejki na state e dodelena vredenosta od initialState, mozheme propertinjata vnatre da gi pristapime
export const counterReducer = (state = initialState, action) => {
    // type propertito od action objketot e pristapeno kako shto e podolu
    // ako vrednosta na action.type e INCREMENT, togash vrakame objekt so novata prazna kopija od state-ot a samo go promenuvame propertito count
    switch (action.type) {
        case "INCREMENT":
            return {
                ...state,
                count: state.count + 1
            };

        case "DECREMENT":
            return {
                ...state,
                count: state.count - 1
            };

        case "SET_NUMBER":
            console.log("ACTION", action);
            return {
                ...state,
                inputNumber: action.payload
            };

        default:
            return state;
    }
}