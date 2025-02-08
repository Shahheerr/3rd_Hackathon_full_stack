
import Image from "next/image"
import Link from "next/link"

const BlogPost = ({ image, date, title, excerpt }: { image: string; date: string; title: string; excerpt: string }) => (
  <div className="w-full lg:w-[872px] mt-12 p-8 lg:p-0">
    <div className="relative h-[250px] md:h-[350px] lg:h-[530px] w-full">
      <Image src={image || "/placeholder.svg"} alt={title} layout="fill" objectFit="cover" />
      <div className="absolute top-0 left-0 w-[60px] h-[60px] bg-[#ff9f0d] text-white text-[16px] font-bold flex justify-center items-center">
        {date}
      </div>
    </div>
    <div className="mt-4">
      <Image src="/Admin.png" alt="Admin" width={100} height={30} />
    </div>
    <h2 className="text-[24px] font-bold font-sans mt-4">{title}</h2>
    <p className="mt-4 font-sans">{excerpt}</p>
    <button className="mt-6 w-[172px] h-[52px] border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white transition-colors duration-300">
      Read more
    </button>
  </div>
)

export default function Blog() {
  const blogPosts = [
    {
      image: "/blog-food.png",
      date: "14 Feb",
      title: "10 Reasons To Do A Digital Detox Challenge",
      excerpt:
        "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet...",
    },
    {
      image: "/blog-pizza.png",
      date: "14 Feb",
      title: "Traditional Soft Pretzels with Sweet Beer Cheese",
      excerpt:
        "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet...",
    },
    {
      image: "/blog-fod.png",
      date: "14 Feb",
      title: "The Ultimate Hangover Burger: Egg in a Hole Burger",
      excerpt:
        "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet...",
    },
    {
      image: "/14feb.png",
      date: "14 Feb",
      title: "My Favorite Easy Black Pizza Toast Recipe",
      excerpt:
        "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet...",
    },
  ]

  return (
    <section className="bg-white">
      <div className="bg-[url('/image/menu.png')] bg-cover bg-center w-full h-[250px] md:h-[350px] lg:h-[410px] flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-white text-[32px] md:text-[48px] lg:text-[56px] font-sans">Blog List</h1>
          <ul className="text-white flex justify-center space-x-2 mt-2">
            <li>
              <Link href="/hero" className="p-2 hover:text-[#ff9f0d]">
                home &gt;
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-[#ff9f0d] p-2">
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="lg:w-2/3">
            {blogPosts.map((post, index) => (
              <BlogPost key={index} {...post} />
            ))}
            <div className="flex justify-center items-center mt-12 lg:mt-24">
              <button className="w-[50px] h-[50px] bg-[#ffffff] hover:bg-[#FF9F0D] mr-2">
                <span className="text-3xl">&#11244;</span>
              </button>
              <button className="text-black text-2xl w-[50px] h-[50px] bg-[#ffffff] hover:bg-[#FF9F0D] mx-1">1</button>
              <button className="text-black text-2xl w-[50px] h-[50px] bg-[#ffffff] hover:bg-[#FF9F0D] mx-1">2</button>
              <button className="text-black text-2xl w-[50px] h-[50px] bg-[#ffffff] hover:bg-[#FF9F0D] mx-1">3</button>
              <button className="w-[50px] h-[50px] bg-[#ffffff] hover:bg-[#FF9F0D] ml-2">
                <span className="text-3xl">&#11246;</span>
              </button>
            </div>
          </div>

          <div className="lg:w-1/3 mt-12 lg:mt-0 lg:pl-6">
            <div className="flex justify-center items-start mb-8">
              <input
                type="text"
                placeholder="Search Product"
                className="w-[250px] h-[60px] lg:w-[421px] lg:h-[82px] border p-4"
              />
              <div className="flex justify-around items-center bg-[#ff9f0d] w-[60px] h-[60px] lg:w-[78px] lg:h-[82px]">
                <button className="w-[20px] h-[20px] text-lg lg:text-xl transform hover:scale-150 transition duration-500 ease-in-out">
                  🔍
                </button>
              </div>
            </div>

            <div className="bg-white p-6 shadow-lg rounded-lg mb-8">
              <Image src="/chef-pro.png" alt="profile" width={200} height={200} className="mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-center mb-2">Prince Miyako</h3>
              <p className="text-center mb-2">Blogger/Photographer</p>
              <div className="flex justify-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-[#FF9F0D]">
                    ★
                  </span>
                ))}
                <span className="ml-2">(1 Review)</span>
              </div>
              <p className="text-center mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis distinctio, odio eligendi suscipit
                reprehenderit atque
              </p>
              <div className="flex justify-center">
                <Image src="/social-pro.png" alt="social" width={200} height={50} />
              </div>
            </div>

            <div className="bg-white p-6 shadow-lg rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4">Recent Post</h3>
              {["/rect2.png", "/rect3.png", "/rect4.png", "/rect1.png"].map((img, index) => (
                <div key={index} className="flex items-center mb-4">
                  <Image
                    src={img || "/placeholder.svg"}
                    alt={`Recent post ${index + 1}`}
                    width={80}
                    height={80}
                    className="mr-4"
                  />
                  <div>
                    <p className="text-sm text-gray-500">June 22, 2020</p>
                    <p className="font-semibold">Lorem ipsum dolor sit cing elit, sed do.</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white p-6 shadow-lg rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4">Filter By Menu</h3>
              {[
                { img: "/filter-1.png", name: "Chicken Fry", count: 26 },
                { img: "/filter-2.png", name: "Chicken Fry", count: 46 },
                { img: "/filter-3.png", name: "Chicken Fry", count: 16 },
                { img: "/filter-4.png", name: "Chicken Fry", count: 36 },
                { img: "/filter-5.png", name: "Chicken Fry", count: 16 },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Image
                      src={item.img || "/placeholder.svg"}
                      alt={item.name}
                      width={40}
                      height={40}
                      className="mr-4"
                    />
                    <span className="font-semibold">{item.name}</span>
                  </div>
                  <span>{item.count}</span>
                </div>
              ))}
            </div>

            <div className="bg-white p-6 shadow-lg rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4">Popular Tags</h3>
              <div className="flex flex-wrap">
                {[
                  "Sandwich",
                  "Tikka",
                  "Bbq",
                  "Restaurant",
                  "Chicken Sharma",
                  "Health",
                  "Fastfood",
                  "Food",
                  "Pizza",
                  "Burger",
                  "Chicken",
                ].map((tag, index) => (
                  <span key={index} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 shadow-lg rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4">Photo Gallery</h3>
              <div className="grid grid-cols-3 gap-2">
                {["/gal1.png", "/gal2.png", "/gal3.png", "/gal4.png", "/gal5.png", "/gal6.png"].map((img, index) => (
                  <Image
                    key={index}
                    src={img || "/placeholder.svg"}
                    alt={`Gallery ${index + 1}`}
                    width={100}
                    height={100}
                    className="rounded"
                  />
                ))}
              </div>
            </div>

            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-bold mb-4">Followers</h3>
              <Image src="/gal-icon.png" alt="Followers" width={300} height={100} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

