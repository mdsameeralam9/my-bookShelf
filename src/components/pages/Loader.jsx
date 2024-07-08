import CardSkelton from "../common/CardSkelton";

const Loader = () => {
  return (
    <div className='booksList'>
      {Array(10).fill("").map((_, index) => (
       <CardSkelton key={index}/>
      ))}
    </div>
  )
}

export default Loader;
