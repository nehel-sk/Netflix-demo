import React, { useEffect,useState } from 'react'
import axios from '../../axios'
import {imageUrl} from '../../constants/constants'
import './RowPost.css'

function RowPost(props) {
  const [movies,setMovies] = useState([])
  useEffect(() => {
    axios.get(props.url).then((response)=>{
      console.log(response.data)
      setMovies(response.data.results)
    }).catch(err=>{
      alert("Network Error")
    })
  
  })
  
  return (
    <div className='row'>
        <h1>{props.title}</h1>
        <div className='posters'>
            {movies.map((obj)=>
                <img className={props.isSmall? "smallPoster" : "poster"} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
            )}
            
        </div>
    </div>
  )
}

export default RowPost