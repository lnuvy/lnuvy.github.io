import ArrowDown from 'public/svg/arrow-down'

const ScrollDownArrow = () => {
  return (
    <div>
      <div className="absolute text-[20px] bottom-[100px] left-[calc(50%-24px)] text-text-default">Scroll</div>

      <div className="absolute w-[30px] h-[30px] left-[calc(50%-15px)] bottom-[30px] animate-bounce">
        <ArrowDown />
      </div>
    </div>
  )
}

export default ScrollDownArrow
