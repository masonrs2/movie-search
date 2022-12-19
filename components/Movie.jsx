import React from 'react'

const Movie = ({movie, id}) => {
  return (
    <div className="w-[500px] h-[450px] md:h-[500px] md:w-[700px] xl:h-[800px] xl:w-[900px] bg-white flex items-center justify-center  fixed top-1/2 left-1/2 font-lora transform -translate-x-1/2 -translate-y-1/2">
        <div className="text-cyan-300 flex flex-col mx-auto  " >

            <div className="flex flex-row w-screen items-center justify-center fixed" >
                <img 
                className="w-[400px] h-96 object-contain rounded-md fixed left-[10%] top-[10%] " 
                src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} 
                />
                <h1 className="font-bold text-xl md:text-2xl flex justify-center text-center">
                    {movie?.title}
                </h1>



            </div>
            <p className="text-ellipsis overflow-hidden w-[800px]  ">
                {movie?.overview}
            </p>
        </div>
    </div>
  )
}

export default Movie