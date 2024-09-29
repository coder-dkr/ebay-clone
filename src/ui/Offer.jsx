
const Offer = (props) => {
  return (
    <>
      <div 
      style={{
        backgroundColor : props.bg,
        color : props.color
      }}
      className={`flex justify-between items-center px-8 py-8 rounded-3xl mt-8`}>
        <div className="flex flex-col gap-y-2">
          <h2 className="font-bold text-2xl">{props.title}</h2>
          <p className="text-sm font-normal">{props.sub}</p>
        </div>
        <button className={`py-3 px-6 font-bold rounded-full`}
        style={{
              backgroundColor : props.color,
              color : props.bg
            }}
        >{props.btn}</button>
      </div>
    </>
  )
}

export default Offer
