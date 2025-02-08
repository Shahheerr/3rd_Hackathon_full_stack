
import Image from "next/image"
import Link from "next/link"

export default function About() {
    return (
        <section className="bg-white">
            <div className="bg-[url('/image/menu.png')] bg-cover bg-center w-full h-[250px] md:h-[350px] lg:h-[410px] flex justify-center items-center">
                <div className="text-center">
                    <h1 className="text-white text-[32px] md:text-[48px] lg:text-[56px] font-sans">About Us</h1>
                    <ul className="text-white flex justify-center space-x-2 mt-2">
                        <li>
                            <Link href="/hero" className="p-2 hover:text-[#ff9f0d]">
                                Home
                            </Link>{" "}
                            &gt;
                        </li>
                        <li>
                            <Link href="/about" className="hover:text-[#ff9f0d] p-2">
                                About
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                        <Image src="/ab1.png" alt="About 1" width={300} height={400} />
                        <div>
                            <Image src="/ab2.png" alt="About 2" width={300} height={200} />
                            <Image src="/ab3.png" alt="About 3" width={300} height={200} className="mt-4" />
                        </div>
                    </div>
                    <div className="lg:w-1/2 mt-8 lg:mt-0 lg:pl-8">
                        <h2 className="text-[#FF9F0D] text-lg">About Us</h2>
                        <h3 className="text-3xl lg:text-4xl font-bold mt-4">Food is an important part of a balanced diet</h3>
                        <p className="mt-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui
                            volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices
                            mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
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

                {/* Why Choose Us Section */}
                <div className="mt-24">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
                        <p className="max-w-2xl mx-auto">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui
                            volutpat fringilla bibendum.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="text-center">
                            <Image src="/a-student.png" alt="Best Chef" width={80} height={80} className="mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-2">Best Chef</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui
                                volutpat
                            </p>
                        </div>
                        <div className="text-center">
                            <Image src="/a-coffy.png" alt="120 Item Food" width={80} height={80} className="mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-2">120 Item Food</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui
                                volutpat
                            </p>
                        </div>
                        <div className="text-center">
                            <Image src="/a-person.png" alt="Clean Environment" width={80} height={80} className="mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-2">Clean Environment</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui
                                volutpat
                            </p>
                        </div>
                    </div>
                </div>

                {/* Team Member Section */}
                <div className="mt-24 relative">
                    <div className="bg-[#FF9F0DD9] py-16">
                        <div className="container mx-auto text-center text-white">
                            <h2 className="text-4xl font-bold mb-4">Team Member</h2>
                            <p className="max-w-2xl mx-auto">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue
                            </p>
                        </div>
                    </div>
                    <div className="container mx-auto px-4 -mt-32">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {["Mark Henry", "Lucky Helan", "Moon Henry", "Tom Monrow"].map((name, index) => (
                                <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                                    <Image src="/a-owner.png" alt={name} width={200} height={200} className="mx-auto mb-4 rounded-full" />
                                    <h3 className="text-xl font-bold">{name}</h3>
                                    <p className="text-gray-500">{["Owner", "Chef", "Founder", "Specialist"][index]}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

