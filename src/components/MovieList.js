import React from 'react';

const MovieList = (props) => {
	const FavouriteComponent = props.favouriteComponent;

	return (
		<>
			{props.movies.map((movie, index) => (
				// <div className='image-container d-flex justify-content-start '>
				// 	<img src={movie.Poster} alt='movie'></img>
				// 	 <div
				// 		onClick={() => props.handleFavouritesClick(movie)}
				// 		 className='overlay d-flex align-items-center justify-content-center'
				// 	>
				// 		<FavouriteComponent /> 
				// 	</div> 
				// </div>

				<div className='movie col-lg-3 image-container mr-2 d-flex justify-content-start'>
					<img src={movie.Poster} alt='movie'></img>
					 <div
						onClick={() => props.handleFavouritesClick(movie)}
						 className='overlay d-flex align-items-center  justify-content-center'
					>
						<FavouriteComponent className="fav"/> 
					</div> 
				</div>
			))}
		</>
	);
};

export default MovieList;
