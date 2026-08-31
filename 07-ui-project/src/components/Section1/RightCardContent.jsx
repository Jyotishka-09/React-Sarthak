

const RightCardContent = (props) => {
  return (
      <div className="absolute top-0 left-0 h-full w-full  p-8 flex flex-col justify-between">
        <h2 className="bg-white font-bold rounded-full h-10 w-10 flex justify-center items-center">
          {props.id+1}
        </h2>
        <div>
          <p className="text-lg leading-normal mb-5 text-white ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            blanditiis aspernatur accusantium molestiae odit
          </p>

          <button className="bg-blue-600 text-white font-medium px-8 py-2 rounded-full ">
          {props.tag}
          </button>
          <button className="bg-blue-600 text-white font-medium px-4 py-2 rounded-full ">
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
  )
}

export default RightCardContent
