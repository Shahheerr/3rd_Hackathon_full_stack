import Image from "next/image"
import Link from "next/link"

const MenuItem = ({ title, description, calories, price }) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 w-full lg:w-[760px] mb-8">
    <div>
      <h3 className="text-[20px] md:text-[23px] lg:text-[24px] font-sans font-semibold text-[#333333] hover:text-[#ff9f0d]">
        {title}
      </h3>
      <p className="text-sm">
        {description}
        <br />
        {calories} cal
      </p>
    </div>
    <div>
      <h3 className="text-left lg:text-right text-[20px] md:text-[23px] lg:text-[24px] font-sans font-bold text-[#ff9f0d]">
        {price}$
      </h3>
    </div>
  </div>
)

const MenuSection = ({ title, items, image }) => (
  <div className="w-full flex flex-col lg:flex-row justify-center items-center lg:items-start">
    <div className="w-full lg:w-auto mb-8 lg:mb-0">
      <Image
        src={image || "/placeholder.svg"}
        alt={title}
        width={468}
        height={626}
        className="w-full lg:w-[468px] h-auto lg:h-[626px]"
      />
    </div>
    <div className="w-full lg:w-auto lg:ml-6 p-4">
      <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-sans font-bold text-[#333333] mb-8">{title}</h2>
      {items.map((item, index) => (
        <MenuItem key={index} {...item} />
      ))}
    </div>
  </div>
)

export default function Menu() {
  const starterMenu = [
    {
      title: "Berries and creme tart",
      description: "Gorgonzola, ricotta, mozzarella, taleggio",
      calories: 700,
      price: 43,
    },
    // Add more starter menu items here
  ]

  const mainCourseMenu = [
    {
      title: "Optic Big Breakfast Combo Menu",
      description: "Toasted French bread topped with romano, cheddar",
      calories: 560,
      price: 32,
    },
    // Add more main course menu items here
  ]

  const dessertMenu = [
    {
      title: "Fig and lemon cake",
      description: "Toasted French bread topped with romano, cheddar",
      calories: 560,
      price: 32,
    },
    // Add more dessert menu items here
  ]

  const drinksMenu = [
    {
      title: "Caffè macchiato",
      description: "Toasted French bread topped with romano, cheddar",
      calories: 560,
      price: 32,
    },
    // Add more drinks menu items here
  ]

  return (
    <>
      <section id="menu" className="w-full max-w-[1920px] mx-auto bg-white">
        <div className="bg-[url('/image/menu.png')] bg-cover bg-center w-full h-[250px] md:h-[350px] lg:h-[410px] flex justify-center items-center">
          <div className="text-center">
            <h1 className="text-white text-[32px] md:text-[48px] lg:text-[56px] font-sans">Our Menu</h1>
            <ul className="text-white flex justify-center space-x-2 mt-2">
              <li>
                <Link href="/hero" className="p-2 hover:text-[#ff9f0d]">
                  home &gt;
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-[#ff9f0d] p-2">
                  Menu
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <MenuSection title="Starter Menu" items={starterMenu} image="/menu-1.png" />
          <MenuSection title="Main Course" items={mainCourseMenu} image="/menu-bur.png" />

          <div className="w-full bg-[#151514] py-12 my-16">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {["/Chef.png", "/spoon1.png", "/spoon2.png", "/pizza.png"].map((src, index) => (
                  <div key={index} className="flex justify-center">
                    <Image
                      src={src || "/placeholder.svg"}
                      alt={`Chef ${index + 1}`}
                      width={200}
                      height={200}
                      className="transform hover:scale-110 transition duration-500 ease-in-out"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <MenuSection title="Dessert" items={dessertMenu} image="/cake.png" />
          <MenuSection title="Drinks" items={drinksMenu} image="/drink.png" />

          <div className="mt-16 text-center">
            <h3 className="text-[12px] lg:text-[14px]">Partners & Clients</h3>
            <h2 className="text-[28px] md:text-[36px] lg:text-[48px] font-sans font-bold mt-4">
              We work with the best people
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-8">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <div key={num} className="flex justify-center">
                  <Image src={`/partner${num}.png`} alt={`Partner ${num}`} width={230} height={140} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

