const GradientCircle = () => {
  return (
    <div className="absolute w-full h-full top-[50rem] left-0 z-0">
      {/* <div className="absolute w-[calc(max(5em,7.5vw)*9)] h-[calc(max(5em,7.5vw)*9)] bg-[radial-gradient(circle,#3987a3_0%,rgba(0,0,0,0)_66%)] opacity-40 pointer-events-none rounded-full top-0 left-[20px] -translate-x-1/2 -translate-y-1/2"></div> */}
      <div className="absolute w-[calc(max(5em,7.5vw)*9)] h-[calc(max(5em,7.5vw)*9)] bg-[radial-gradient(circle,#3987a3_0%,rgba(0,0,0,0)_66%)] opacity-40 pointer-events-none rounded-full bottom-0 right-0 translate-x-1/2 translate-y-1/2"></div>
    </div>
  )
}

export default GradientCircle
