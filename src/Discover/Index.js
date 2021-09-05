import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './image.png';

function Index({poster,title,overview,date,id,movies}){

    useEffect(()=>{
        document.title=`Results - ${movies.length}`;
    })

    return(
        <div className="container">
            {poster && title && overview && date && id && movies ?
            <div>
                    {movies.map((value)=>{
                        return <div className="row">
                            <div className="col-md-6">
                                <div className="card">
                                    {value.poster_path ? 
                                    <img className="card-img-top" alt="Card image cap" src={"https://image.tmdb.org/t/p/w500/"+value.poster_path} ></img>
                                    : <img className="card-img-top" alt="Card image cap" src={logo} ></img>}
                                    <div className="card-body">
                                        <h5 className="card-title">{value.original_title}</h5>
                                        {value.overview ?
                                        <p className="card-text">{value.overview}</p>
                                        :<p className="card-text">Overview is not present in the database. Try to add it in the MoviesDB website</p>}
                                        {value.release_date ? 
                                        <p className="card-text">Release Date- {value.release_date}</p>
                                        :<p className="card-text">Release Date- Not Yet Decided</p>}
                                        <a href={"https://www.themoviedb.org/movie/"+value.id} className="btn btn-primary">Go the Moviedb Website</a>
                                    </div>
                                </div>
                                <br></br>
                            </div>
                        </div>
                    })}
            </div>
            :null}
        </div>
    )
};

export default Index;