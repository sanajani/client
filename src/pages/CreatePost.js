import './CreatePost.css';

const CreatePost = () => {
  return (
    <div className='createpost'>
      <div className="createPostContainer container">
      <form>
            <input type="text" placeholder='Title' />
            <input type="text" placeholder='Desc' />
            <input type="file"  placeholder='Upload an Image' />
        </form>
      </div>
    </div>
  )
}

export default CreatePost