
import Image from "next/image"

export default function Hero() {
  return (
    <>
      <section className="w-full lg:w-[1920px] mx-auto">
        <div className="flex justify-center items-center w-full h-auto py-8 md:py-12 lg:h-[950px]">
          <div className="flex flex-col lg:flex-row justify-between items-center w-full max-w-[1320px] mx-auto h-auto lg:h-[900px] px-4 lg:px-0">
            <div className="flex flex-col justify-between items-center lg:mr-10 h-auto lg:h-[492px]">
              <div className="hidden lg:block h-[150px] w-0 border-2"></div>
              <div className="w-[25px] h-[107px] border-blue-400">
                <img src="/icon.png" alt="icon" className="hidden lg:block mt-2 object-contain" />
              </div>
              <div className="hidden lg:block h-[150px] w-0 border-2"></div>
            </div>

            <div className="text-center lg:text-left w-full max-w-[472px] h-auto mb-8 lg:mb-0">
              <img src="/head.png" alt="" className="w-[249px] h-[40px] mx-auto lg:mx-0" />
              <div className="mt-4">
                <h1 className="text-[#ff9f0d] text-[30px] md:text-[40px] lg:text-[60px] font-sans font-bold leading-tight">
                  Th<span className="text-white">e Art of Speed Food Quality</span>
                </h1>
                <p className="text-white mt-4 text-sm md:text-base lg:text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa
                  congue.
                </p>
                <button className="mt-6 w-[160px] md:w-[190px] h-[50px] md:h-[60px] bg-[#ff9f0d] text-white rounded-3xl">
                  See More
                </button>
              </div>
            </div>

            <div className="h-[250px] md:w-[500px] md:h-[350px] lg:h-[530px] lg:w-[877px] p-6 lg:p-0">
              <img src="/Image.png" alt="" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center w-full h-auto py-8 md:py-12">
          <div className="flex flex-col lg:flex-row justify-between items-center w-full max-w-[1320px] mx-auto h-auto lg:h-[562px] gap-8 px-4 lg:px-0">
            <div className="w-full max-w-[562px] h-auto text-center lg:text-left p-6 lg:p-0">
              <img src="/head2.png" alt="" className="w-[91px] h-[40px] mx-auto lg:mx-0" />
              <div className="mt-4">
                <h1 className="text-[#ff9f0d] text-[28px] md:text-[36px] lg:text-[48px] font-sans font-bold leading-tight">
                  We <span className="text-white">Create the Best Foody Product</span>
                </h1>
                <p className="text-white mt-5 text-sm md:text-base lg:text-lg font-sans">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui
                  volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices
                  mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
                </p>
                <ul className="mt-5 space-y-4">
                  <li className="text-[14px] md:text-[16px] lg:text-[18px] text-white font-sans">
                    ✔ Lacus nisi, et ac dapibus sit eu velit in consequat.
                  </li>
                  <li className="text-[14px] md:text-[16px] lg:text-[18px] text-white font-sans">
                    ✔ Quisque diam pellentesque bibendum non dui volutpat fringilla.
                  </li>
                  <li className="text-[14px] md:text-[16px] lg:text-[18px] text-white font-sans">
                    ✔ Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                </ul>
                <button className="mt-8 w-[160px] md:w-[190px] h-[50px] md:h-[60px] bg-[#ff9f0d] text-white rounded-3xl">
                  See More
                </button>
              </div>
            </div>

            <div className="w-full max-w-[660px] h-auto p-6 lg:p-0">
              <img
                src="/food1.png"
                alt="food"
                className="w-full h-auto p-2 object-contain transform hover:scale-110 transition duration-500 ease-in-out"
              />
              <div className="flex flex-wrap justify-center lg:justify-between gap-4 mt-4">
                <img
                  src="/food2.png"
                  alt="food"
                  className="w-[150px] md:w-[200px] lg:w-[322px] h-auto p-2 object-contain transform hover:scale-110 transition duration-500 ease-in-out"
                />
                <img
                  src="/food3.png"
                  alt="food"
                  className="w-[150px] md:w-[200px] lg:w-[322px] h-auto p-2 object-contain transform hover:scale-110 transition duration-500 ease-in-out"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-orange-500">Choose</span> Your Favorite
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {["/food-item1.png", "/food-item2.png", "/food-item3.png", "/food-item4.png"].map((src, index) => (
              <div key={index} className="group">
                <Image
                  src={src || "/placeholder.svg"}
                  alt={`Food item ${index + 1}`}
                  width={300}
                  height={300}
                  className="rounded-lg shadow-md transition duration-300 ease-in-out group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-orange-500">Meet</span> Our Chefs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {["/cheff1.png", "/cheff2.png", "/cheff3.png", "/cheff4.png"].map((src, index) => (
              <div key={index} className="group">
                <Image
                  src={src || "/placeholder.svg"}
                  alt={`Chef ${index + 1}`}
                  width={300}
                  height={400}
                  className="rounded-lg shadow-md transition duration-300 ease-in-out group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

