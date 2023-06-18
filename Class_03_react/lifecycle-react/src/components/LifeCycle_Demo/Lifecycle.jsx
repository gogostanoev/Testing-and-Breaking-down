import { Component } from "react";

class LifeCycle extends Component {
    constructor(props) {
        super(props);

        console.log("Constructor");

        this.state = {
            message: "Our initial message",
            // vrednosta sekogash ke ja imame up to date vo movieValue
            movieValue: "",
            moviesNames: ["Batman", "Spiderman", "The Avengers"]
        }
    };

    componentDidMount() {
        console.log("COMPONENT DID MOUNT");
    };

    componentDidUpdate(previousProps, previousState) {  // vo previousState vrednosta e od movieValue
        console.log("PREVIOUS VALUES: ", previousProps, previousState);
        console.log("COMPONENT DID UPDATE");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("SHOULD COMPONENT UPDATE");
        console.log("NEXT VALUES: ", nextProps, nextState);

        if (nextState.movieValue === "Some movie") {
            // If the condition is met, we prevent update of the component
            return false;
        }

        return true;
    };

    handleChangeMovieValue = (value) => {
        // setState go menuva state-ot na ovaa vrednost
        this.setState({
            movieValue: value,
        });
    };

    handleAddMovieName = () => {
        //if no movieValue we prevent adding of empty movie
        if (this.state.movieValue === "") {
            return;
        }
        this.setState({
            // moviesNames: [this.state.movieValue] => so ova dodavame nova niza, pravime overwrite na starata niza
            moviesNames: [...this.state.moviesNames, this.state.movieValue],
            movieValue: ""
        })
    }

    // render metoda e metodata koja shto go vraka UI na komponentata
    render() {
        console.log("Render");
        return (
            <div>
                <h2>Lifecycle component</h2>
                <p>{this.state.message}</p>

                <hr />
                <br />
                <br />

                <ol>
                    {
                        this.state.moviesNames.map((movie) => (
                            <li key={movie}>{movie}</li>
                        ))
                    }
                </ol>

                <br />
                <label htmlFor="movie_name">Movie name:</label>
                <input
                    type="text"
                    id="movie_name"
                    value={this.state.movieValue}
                    onChange={(e) => {
                        this.handleChangeMovieValue(e.target.value)
                    }}
                />
                <button onClick={this.handleAddMovieName}>Add Movie</button>
            </div>
        );
    };
};

export default LifeCycle;