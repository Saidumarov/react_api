import { Link } from "react-router-dom"




const Post = ({images,title,description,id}) => {
    
  return (
    <div className='item-con'>
      <p>{title}</p>
      <img src={images} alt="" className="img" />
      <Link to={`/post/roduct/single/${id}`} className="a" >
      <button> Ko'rish</button>
      </Link>
    </div>
  )
}

export default Post