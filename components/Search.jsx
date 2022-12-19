import React from 'react'
import Form from 'react-bootstrap/Form'
import { useState } from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import { useEffect } from 'react'
import Movie from './Movie'

const Search = () => {
    const [search, setSearch] = useState('')
    const [popularMovies, setPopularMovies] = useState([])
    const [toggle, setToggle] = useState(false)
    const [movie, setMovie] = useState({})

    const toggleMovie = (movie) => {
        setMovie(movie)
        toggle ? setToggle(false) : setToggle(true)
    }

    const popularUrl = "https://api.themoviedb.org/3/movie/popular?api_key=6259a38ecc880ab73db793a33df58313&language=en-US&page=1"

    const latestUrl = "https://api.themoviedb.org/3/movie/top_rated?api_key=6259a38ecc880ab73db793a33df58313&language=en-US&page=1"
    

    const fetchPopular = async () => {
        let data = await fetch(popularUrl);
        let movies = await data.json();
        setPopularMovies(movies.results)
    }

    useEffect(() => {
        fetchPopular();
    }, [])

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen">
        <div className="text-white">
            {/* <input 
                type="text" 
                placeholder='Enter a movie to search...'
                className="rounded-md text-2xl mb-44 font-lora w-96 px-3 bg-gray-800" 
            /> */}

            <Form>
                <InputGroup className="">
                    <Form.Control 
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder = "Enter a movie to search..."
                        className="rounded-md text-2xl mb-44 font-lora w-96 px-3 bg-gray-800 outline-none"
                        
                    />
                </InputGroup>
            </Form>

            
        </div>
            {/* <h1 className="text-center font-semibold mb-12" >Movies</h1> */}
           
            <div className="w-full h-44 grid sm:grid-cols-2  md:grid-cols-3 xl:grid-cols-5 px-10" >
                {
                    popularMovies.filter((movie) => {
                        return search.toLowerCase() === ''
                        ? movie 
                        : movie.title.toLowerCase().includes(search.toLowerCase())
                    }).map((movie) => (
                        <div className="flex flex-col px-3 hover:scale-105 duration-300 gap-3 hover:shadow-gray-600 hover:shadow-md py-3 rounded-md cursor-pointer hover:bg-gray-600/20"
                            onClick={() => toggleMovie(movie)} >
                            <h4 className="flex justify-center font-semibold font-lora text-lg lg:text-2xl items-center mt-2 py-2 " >
                                {movie?.title}
                            </h4>

                            <div>
                                <img src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie.title} className="rounded-md" />
                            </div>  

                           
                        </div>
                    ))
                }
                 <div className="z-10">
                    {
                        toggle &&  (<Movie movie={movie} toggleMovie={toggleMovie} />) 
                    }
                </div>
                
            </div>
    </div>
  )
}

export default Search