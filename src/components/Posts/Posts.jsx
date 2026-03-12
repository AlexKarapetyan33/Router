import './Posts.css'

export const Posts = (props) => {
  return (
    <>
    {
        props.posts.map((el) => {
            return <div key={el.id} className='item'>
                <p>{el.title}</p>
                <p>{el.body}</p>
            </div>
        })
    }
    </>
  )
}
