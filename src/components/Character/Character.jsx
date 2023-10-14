import { Link, useParams } from "react-router-dom";
import { customFetch } from "../../utils";
import { useQuery } from "@tanstack/react-query";

import './Character.css'

export const Character = () => {

    const { id } = useParams()

    const { isLoading, data, isError } = useQuery({
        queryKey: ['characters'],
        queryFn: async () => {
            try {
                const { data } = await customFetch.get(`${id}`);
                return data;
            } catch (error) {
                return { data: [] };
            }
        },
    });

    if (isLoading) {
        return (
            <section className='character-page'>
                <h4>Loading...</h4>
            </section>
        );
    }
    if (isError) {
        return (
            <section className='character-page'>
                <h4>There was an error...</h4>
            </section>
        );
    }

    const character = data;

    return (
        <section className="character-page">
            <h1 className="character-page-name">{character.name}</h1>
            <div className="character-page-container">
                <div className="character-page-img">
                    <img src={character.image} alt={character.name} />
                </div>
                <div className="character-page-about">
                    <h2 className="character-page-about-title">About</h2>
                    <div className="character-page-about-info">
                        <ul>
                            <li><span>Status:</span> {character.status}</li>
                            <li><span>Gender:</span> {character.gender}</li>
                            <li><span>Location:</span> {character.location.name}</li>
                            <li><span>Origin:</span> {character.origin.name}</li>
                            <li><span>Species:</span> {character.species}</li>
                        </ul>
                    </div>
                </div >
            </div >
            <Link to="/" className="back-btn">Home page</Link>
        </section >
    )
}