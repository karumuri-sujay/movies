import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch , Redirect, Route } from 'react-router-dom';
import Index from './Discover/Index';
import Popular from './Discover/Popular/Popular';
import Latest from './Discover/Latest/Latest';
import Favourites from './Discover/Favourites/Favourites';
import Navbar from './Navbar';
import Login from './Login/Login';
import React from 'react';
import Register from './Login/Register';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      poster_path:[],
      title:undefined,
      overview:undefined,
      date:undefined,
      value:'',
      id:undefined,
      average:undefined,
      movie_results:[],
      error:false
    };
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  getMovies=async()=>{
    const api_call=await fetch(`https://api.themoviedb.org/3/search/movie?api_key=1312ab3dbe648dd2090bdb5801ed955c&language=en-US&page=1&include_adult=false&query=${this.state.value}`);
    const response=await api_call.json();
    console.log(response);

    this.setState({
      poster_path:"https://image.tmdb.org/t/p/w500/"+response.results[0].poster_path,
      title:response.results[0].original_title,
      overview:response.results[0].overview,
      date:response.results[0].release_date,
      error:false,
      movie_results:response.results,
      average:response.results[0].vote_average*10,
      id:"https://www.themoviedb.org/movie/"+response.results[0].id,
    });
  }


  handleChange(event){
    this.setState({value:event.target.value});
  }

  handleSubmit(event){
    console.log(this.state.value);
    event.preventDefault();
    this.getMovies();
  }

  render(){
    return(
      <div>
        <Router>
          <Navbar/>
        </Router>
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Movie Name:</label>
              <input className="form-control input" type="text" value={this.state.value} onChange={this.handleChange} placeholder="Enter Movie name"/>
              <br></br>
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
        <br></br>
        {this.state.error ? alert("wrong") : 
        <Index poster={this.state.poster_path} title={this.state.title} date={this.state.date}
        overview={this.state.overview}
        id={this.state.id}
        movies={this.state.movie_results}/>
        }
        <Router>
        <Switch>
            <Route path="/" exact component={Index}>
              <Redirect to="/discover"></Redirect>
            </Route>
            <Route exact path="/discover/latest" component={Latest}/>
            <Route exact path="/discover/popular" component={Popular}/>
            <Route exact path="/discover/favourites" component={Favourites}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/register" component={Register}/>
          </Switch>
          </Router>
      </div>
    )
  }
}

export default App;
