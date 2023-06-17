import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

const Postsingle = () => {
    let {id} = useParams()



    const [post,setPost] = useState()

    useEffect(() => {
        fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
        .then(response => response.json())
        .then(json => {
            console.log(json)
            setPost(json)
        })
    }, [id]);
  return (
    <div>
      {
        post ? (
            <div>
               <div className="batf">
                <div className="bat">
                <img src={post.images} alt="Image not found" />
                </div>
                <div className="bat1">
                    
               
                  <h4>{post.title}</h4>
                  <h3>{post.description}</h3>
                  <h2>ID:{post.id}</h2>
                </div>
               </div>
                
            </div>
        ) :""
      
      }
    </div>
  )
}

export default Postsingle
