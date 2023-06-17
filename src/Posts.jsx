import { useEffect,useState } from "react";
import Post from "./Post";

const Posts = () => {
    const [data,setData] = useState()

    useEffect(() => {
      fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(json =>{
        console.log(json)
        setData(json)
      })
    }, []);
  return (
    <div className="posts-con">
        
        {data && data.map(item => (
           <Post key={item.id} {...item} />
        ))}
    </div>
  )
}

export default Posts