const initialState = {
    movieName: "",
    movies: [],
};

export const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_MOVIE_NAME":
            return {
                ...state,
                movieName: action.payload,
            };

        case "ADD_MOVIE":
            return {
                ...state,
                // gi kopirame site momentalni filmovi shto gi imame i ke go dodademe noviot film
                movies: [...state.movies, action.payload],
                // za da se ischisti inputot mora da stavime prazen string, za posle sekoe stiskanje na Add Movie da se ischiste
                movieName: "",
            };

        default:
            return state;
    }
};
