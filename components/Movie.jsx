import React from 'react'

const Movie = ({movie, id}) => {
  return (
    <div className="w-[500px] h-[450px] md:h-[500px] md:w-[700px] lg:w-[700px] lg:h-[600px] xl:h-[800px] xl:w-[900px items-center justify-center  fixed top-1/2 left-1/2 font-lora transform -translate-x-1/2 -translate-y-1/2 flex flex-col text-slate-400">

            <div className="flex flex-col w-full items-center justify-center fixed bg-slate-700 h-full rounded-md ">
                <img 
                className="ml-[-20px] md:ml-[-40px] w-[250px] md:w-[300px] h-auto lg:w-[400px] xl:w-[500px] object-contain rounded-md fixed left-[10%] top-[10%] " 
                src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} 
                />

                    <p className="md:ml-64 md:mt-20 md:text-lg font-medium" >
                        Release Date: {movie?.release_date}</p>
                    <p className="md:ml-[270px] md:mt-3 md:text-lg font-medium">Movie Popularity: {movie?.popularity}</p>

                    <p className="md:text-lg font-medium md:ml-[174px] md:mt-3 ">Genre: {movie?.genre_ids} </p>
                

                <h1 className="font-bold text-2xl md:text-3xl  lg:text-4xl flex justify-center text-center items-center h-full mb-28">
                    {movie?.title}
                </h1>

            </div>
            <p className="text-ellipsis overflow-hidden text-md w-[450px] lg:w-[800px] md:w-[600px] mt-52 z-10 ">
                {movie?.overview}
            </p>
        </div>
  )
}

export default Movie