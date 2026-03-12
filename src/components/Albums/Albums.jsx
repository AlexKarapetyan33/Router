import './Albums.css'

export const Albums = (props) => {
  return (
    <>
        {
            props.albums.map((el) => {
                return <div className='item' key={el.id}>
                    <p>Title: {el.title}</p>
                </div>
            })
        }
    </>
  )
}
