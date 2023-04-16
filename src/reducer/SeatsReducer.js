const initialState = {
    listSeats: []
}

export const SeatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'movie/book_seat': {
            const {soGhe} = action.payload;
            const newListSeats = state.listSeats.some(seat => seat.soGhe === soGhe)
            ? state.listSeats.filter(seat => seat.soGhe !== soGhe)
            : [...state.listSeats, action.payload];
            return {...state, listSeats: newListSeats};
        }
        case "movie/cancel_seat" : {
            const {soGhe} = action.payload;
            const newListSeats = state.listSeats.filter(seat => seat.soGhe !== soGhe);
            return {...state, listSeats: newListSeats}
        }
        default:
            return state;
    }
}


