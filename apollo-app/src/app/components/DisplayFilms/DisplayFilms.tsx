import { GET_ALL_FILMS } from "@/app/graphql/queries/query"
import { Film } from "@/app/interfaces/film.interface";
import { useQuery } from "@apollo/client"

export const DisplayFilms = () => {
    const { loading, error, data } = useQuery(GET_ALL_FILMS);

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error : {error.message}</p>

    return (
        <div>
            <h1>All Films</h1>
            <ul>
                {data.allFilms.films.map((film: Film) => (
                    <li key={film.title}>
                        <h2>{film.title}</h2>
                        <p>Release Date: {film.releaseDate}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}