import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

const Movie = ({movie, id, toggleMovie}) => {
  return (
    <div className="w-[500px] h-[450px] md:h-[500px] md:w-[700px] lg:w-[700px] lg:h-[600px] xl:h-[750px] xl:w-[950px] items-center justify-center  fixed top-1/2 left-1/2 font-lora transform -translate-x-1/2 -translate-y-1/2 flex flex-col text-slate-400">

            <div className="flex flex-col w-full items-center justify-center fixed bg-gray-800 h-full rounded-md ">

                <AiOutlineClose 
                size={55} 
                className="relative left-[40%] top-10 cursor-pointer hover:scale-110 duration-300 " 
                onClick={() => toggleMovie(movie)}
                />

                <img 
                className="ml-[-20px] md:ml-[-40px] w-[250px] md:w-[300px] h-auto lg:w-[350px] xl:w-[500px] xl:left-[9%] xl:top-[7%] object-contain rounded-md fixed left-[10%] top-[10%] " 
                src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} 
                />
                
                    <p className="md:ml-64 md:mt-20 lg:ml-[340px] lg:mt-24 md:text-lg font-medium  xl:text-xl xl:ml-[480px] xl:mt-28 ml-[260px] mt-[70px] " >
                        Release Date: {movie?.release_date}</p>
                    <p className="md:ml-[270px] md:mt-3 md:text-lg lg:ml-[353px] font-medium xl:text-xl xl:ml-[496px] xl:mt-6 ml-[272px] mt-2 ">Movie Popularity: {movie?.popularity}</p>

                    <p className="md:text-lg font-medium md:ml-[224px] md:mt-3 lg:ml-[308px] xl:text-xl xl:ml-[445px] xl:mt-6 mt-2 ml-[231px] "> Genre ID: {movie?.genre_ids} </p>
                

                <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl flex justify-center text-center items-center h-full mb-28 lg:mb-24 xl:mb-40">
                    {movie?.title}
                </h1>

            </div>
            <p className="text-ellipsis overflow-hidden text-md w-[450px] xl:w-[800px] md:w-[600px] mt-56 md:mt-60 z-10 xl:text-xl xl:mt-80 lg:mt-[290px] ">
                {movie?.overview}
            </p>
        </div>
  )
}

export default Movie