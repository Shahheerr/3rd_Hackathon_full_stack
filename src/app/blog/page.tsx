import Layout from "../components/Layout"
import HeroSection from "../components/HeroSection"
import Image from "next/image"

const About = () => {
  return (
    <Layout title="About Us">
      <HeroSection
        title="About Us"
        breadcrumbs={[
          { label: "Home", href: "/hero" },
          { label: "About", href: "/about" },
        ]}
      />
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <Image src="/ab1.png" alt="About 1" width={300} height={400} />
            <div>
              <Image src="/ab2.png" alt="About 2" width={300} height={200} />
              <Image src="/ab3.png" alt="About 3" width={300} height={200} className="mt-4" />
            </div>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <h2 className="text-[#FF9F0D] text-lg">About Us</h2>
            <h3 className="text-3xl lg:text-4xl font-bold mt-4">Food is an important part of a balanced diet</h3>
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui
              volutpat fringilla bibendum...
            </p>
            <div className="mt-6 flex items-center">
              <button className="bg-[#FF9F0D] text-white px-6 py-3 rounded-md hover:bg-[#e08c0b] transition-colors">
                Show More
              </button>
              <button className="ml-4 text-3xl text-black">
                <i className="fa fa-play-circle text-[#FF9F0D] mr-2"></i> Watch Video
              </button>
            </div>
          </div>
        </div>
        {/* Add more sections as needed */}
      </div>
    </Layout>
  )
}

export default About

