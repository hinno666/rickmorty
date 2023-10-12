import { useQuery } from "@tanstack/react-query";
import { customFetch } from "../../utils";
import { useGlobalContext } from "../context/context";

import './Characters.css'

export const Characters = () => {

  const { searchTerm } = useGlobalContext();

  const { isLoading, data, isError } = useQuery({
    queryKey: ['characters', searchTerm],
    queryFn: async () => {
      try {
        const { data } = await customFetch.get(`?name=${searchTerm}`);
        return data;
      } catch (error) {
        return { results: [] };
      }
    },
  });

  if (isLoading) {
    return (
      <section className='image-container'>
        <h4>Loading...</h4>
      </section>
    );
  }
  if (isError) {
    return (
      <section className='image-container'>
        <h4>There was an error...</h4>
      </section>
    );
  }

  const results = data.results;
  if (results.length < 1) {
    return (
      <section className='image-container'>
        <h4>No results found...</h4>
      </section>
    );
  }

  return (
    <section className='image-container'>
      {results.map((item) => {
        return (
          <div className="image-card" key={item.id}>
            <img
              src={item.image}
              alt={item.alt_description}
              className='img'
            ></img>
            <div className="card-description">
              <div className="card-description-item">{item.name}</div>
              <div className="card-description-item">{item.gender}</div>
              <div className="card-description-item">{item.status}</div>
              <div className="card-description-item">{item.location.name}</div>
            </div>
          </div>
        );
      })}
    </section>
  )
}
