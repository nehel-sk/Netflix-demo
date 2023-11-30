import React, { useEffect,useState } from 'react'
import Youtube from 'react-youtube'
import axios from '../../axios'
import {API_KEY, imageUrl} from '../../constants/constants'
import './RowPost.css'

function RowPost(props) {
  const [movies,setMovies] = useState([])
  const [urlId,setUrlId]=useState('')
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
      autoplay: 1,
  }}
  
  const handleMoiveTrailer=(id)=>{
    console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
      if(response.data.length!==0){
        setUrlId(response.data.results[0])
      }else{
        console.log('Array empty')
      }
      
    })
  }
  return (
    <div className='row'>
        <h1>{props.title}</h1>
        <div className='posters'>
            {movies.map((obj)=>
                <img onClick={()=>{handleMoiveTrailer(obj.id)}} className={props.isSmall? "smallPoster" : "poster"} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
            )}
            
        </div>
        { urlId && <Youtube opts={opts} videoId={urlId.key} />}
    </div>
  )
}
 
export default RowPost