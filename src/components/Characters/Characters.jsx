import { useQuery } from "@tanstack/react-query";
import { customFetch } from "../../utils";
import { useGlobalContext } from "../context/context";

import './Characters.css'
import { Link } from "react-router-dom";
import { Loader } from "../Loader/Loader";

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
        <Loader />
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
          <div className="flip-card" key={item.id}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={item.image} alt={item.alt_description} className='img'></img>
              </div>
              <div className="flip-card-back">
                <div className="card-description">
                  <div className="card-description-item">{item.name}</div>
                  <Link className="details-btn" to={`/character/${item.id}`}>
                    <span className="actual-text">&nbsp;view&nbsp;</span>
                    <span aria-hidden="true" className="hover-text">&nbsp;view&nbsp;</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  )
}
