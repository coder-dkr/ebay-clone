
const Offer = (props) => {
  return (
    <>
      <div className={`flex justify-between items-center px-8 py-8 bg-[${props.bg}] text-[${props.color}] rounded-3xl mt-8`}>
        <div className="flex flex-col gap-y-2">
          <h2 className="font-bold text-2xl">{props.title}</h2>
          <p className="text-sm font-normal">{props.sub}</p>
        </div>
        <button className={`bg-[${props.color}] text-[${props.bg}] py-3 px-6 font-bold rounded-full`}>{props.btn}</button>
      </div>
    </>
  )
}

export default Offer
