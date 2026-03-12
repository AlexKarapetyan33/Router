import './Comments.css'

export const Comments = (props) => {
  return (
    <>
        {
            props.comments.map((el) => {
                return <div className='item' key={el.id}>
                    <p>{el.name}</p>
                    <p>{el.email}</p>
                </div>
            })
        }
    </>
  )
}
