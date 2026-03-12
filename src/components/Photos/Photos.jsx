import './Photos.css'


export const Photos = (props) => {
  return (
    <>
        {
            props.photos.map((el) => {
                return <div key={el.id} className='photoItem'>
                    <img  alt="photo" />
                </div>
            })
        }
    </>
  )
}
