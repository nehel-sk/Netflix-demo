import React, { useEffect,useState } from 'react'
import Youtube from 'react-youtube'
import axios from '../../axios'
import {imageUrl} from '../../constants/constants'
import './RowPost.css'

function RowPost(props) {
  const [movies,setMovies] = useState([])
  useEffect(() => {
    axios.get(props.url).then((response)=>{
      // console.log(response.data)
      setMovies(response.data.results)
    }).catch(err=>{
      alert("Network Error")
    })
  
  })

  const opts={
    height:'390',
    width:'100%',
    playerVars: {
      autoplay: 0,
  }}
  
  const handleMoiveTrailer=(id)=>{
    console.log(id)
  }
  return (
    <div className='row'>
        <h1>{props.title}</h1>
        <div className='posters'>
            {movies.map((obj)=>
                <img onClick={()=>{handleMoiveTrailer(obj.id)}} className={props.isSmall? "smallPoster" : "poster"} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
            )}
            
        </div>
        <Youtube opts={opts} videoId="2g811Eo7K8U"/>
    </div>
  )
}

export default RowPost