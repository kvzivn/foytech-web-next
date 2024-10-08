const BoxGrid = () => {
  return (
    <div className="relative w-full h-[calc(6*clamp(6.75rem,0rem+6.6666666667vw,7.875rem))] [margin-block:calc(-1*clamp(6.75rem,0rem+6.6666666667vw,7.875rem))_clamp(6.75rem,0rem+6.6666666667vw,7.875rem)]">
      <div className="absolute w-[6rem] h-[6rem] bg-slate-300 opacity-50 p-2 left-[calc(0*6.666vw)] top-[calc(0*clamp(6.75rem,0rem+6.6666666667vw,7.875rem))]"></div>
      <div className="absolute w-[8rem] h-[8rem] bg-primary-200 opacity-75 p-2 left-[calc(2*6.666vw)] top-[calc(1*clamp(6.75rem,0rem+6.6666666667vw,7.875rem))]"></div>
      <div className="absolute w-[10rem] h-[10rem] bg-primary-400 p-2 left-[calc(4*6.666vw)] top-[calc(2*clamp(6.75rem,0rem+6.6666666667vw,7.875rem))]"></div>
      <div className="absolute w-[7rem] h-[7rem] bg-slate-400 opacity-60 p-2 left-[calc(6*6.666vw)] top-[calc(3*clamp(6.75rem,0rem+6.6666666667vw,7.875rem))]"></div>
      <div className="absolute w-[9rem] h-[9rem] bg-primary-300 opacity-80 p-2 left-[calc(8*6.666vw)] top-[calc(0*clamp(6.75rem,0rem+6.6666666667vw,7.875rem))]"></div>
      <div className="absolute w-[5rem] h-[5rem] bg-slate-100 opacity-90 p-2 left-[calc(10*6.666vw)] top-[calc(4*clamp(6.75rem,0rem+6.6666666667vw,7.875rem))]"></div>
      <div className="absolute w-[11rem] h-[11rem] bg-primary-100 opacity-70 p-2 left-[calc(12*6.666vw)] top-[calc(1*clamp(6.75rem,0rem+6.6666666667vw,7.875rem))]"></div>
      <div className="absolute w-[7.5rem] h-[7.5rem] bg-slate-200 opacity-55 p-2 left-[calc(14*6.666vw)] top-[calc(3*clamp(6.75rem,0rem+6.6666666667vw,7.875rem))]"></div>
      <div className="absolute w-[8.5rem] h-[8.5rem] bg-primary-500 opacity-85 p-2 right-[calc(2*6.666vw)] top-[calc(0*clamp(6.75rem,0rem+6.6666666667vw,7.875rem))]"></div>
      <div className="absolute w-[6.5rem] h-[6.5rem] bg-slate-500 opacity-65 p-2 right-0 top-[calc(2*clamp(6.75rem,0rem+6.6666666667vw,7.875rem))]"></div>
    </div>
  )
}

export default BoxGrid
