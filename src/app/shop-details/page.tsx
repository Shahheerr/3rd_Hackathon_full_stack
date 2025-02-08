import ProductDisplay from "../components/add-to-cart/page"; // Ensure this path is correct
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

export default function Details() {
  return (
    <>
      <section className="bg-white w-full lg:w-[1920px]">
        <div className="bg-[url('/image/menu.png')] bg-cover bg-center w-full h-[250px] md:h-[350px] lg:h-[410px] flex justify-center items-center">
          <div className="text-center">
            <h1 className="text-white text-[32px] md:text-[48px] lg:text-[56px] font-sans">Shop</h1>
            <ul className="text-white flex justify-center space-x-2 mt-2">
              <li><a href="/hero" className="hover:text-[#ff9f0d]">home</a></li>
              <li>&gt;</li>
              <li><a href="/blog" className="hover:text-[#ff9f0d]">Shop Details</a></li>
            </ul>
          </div>
        </div>

        <div>
          <ProductDisplay />
        </div>

        <div className="flex justify-center items-center">
          <div className="w-full lg:w-[1320px] p-6 lg:p-0">
            <div className="flex">
              <div className="flex justify-center items-center w-[165px] h-[50px] bg-[#FF9F0D]">Description</div>
              <p className="p-4">Reviews (24)</p>
            </div>
            <p>
              Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis sagittis. Vestibulum suscipit cursus bibendum. Integer at justo eget sem auctor auctor eget vitae arcu. Nam tempor malesuada porttitor. Nulla quis dignissim ipsum. Aliquam pulvinar iaculis justo, sit amet interdum sem hendrerit vitae. Vivamus vel erat tortor. Nulla facilisi. In nulla quam, lacinia eu aliquam ac, aliquam in nisl.
            </p>
            <p className="mt-8">
              Suspendisse cursus sodales placerat. Morbi eu lacinia ex. Curabitur blandit justo urna, id porttitor est dignissim nec. Pellentesque scelerisque hendrerit posuere. Sed at dolor quis nisi rutrum accumsan et sagittis massa. Aliquam aliquam accumsan lectus quis auctor. Curabitur rutrum massa at volutpat placerat. Duis sagittis vehicula fermentum. Integer eu vulputate justo. Aenean pretium odio vel tempor sodales. Suspendisse eu fringilla leo, non aliquet sem.
            </p>
            <p className="w-full lg:w-[500px] mt-6">
              <span className="text-[18px] font-bold font-sans">Key Benefits</span>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Maecenas ullamcorper est et massa mattis condimentum.</li>
              <li>Vestibulum sed massa vel ipsum imperdiet malesuada id tempus.</li>
              <li>Etiam nec massa et lectus faucibus ornare congue in nunc.</li>
              <li>Mauris eget diam magna, in blandit turpis.</li>
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center mt-24">
          <div className="w-full lg:w-[1320px] p-6 lg:p-0">
            <div className="flex justify-between items-center">
              <h1 className="text-[32px] font-sans font-bold">Similar Products</h1>
              <div>
                <button>
                  <span className="p-2 text-black hover:text-white bg-[#ffffff] hover:bg-[#FF9F0D] w-[40px] h-[40px] rounded-full">&#129032;</span>
                </button>
                <button>
                  <span className="p-2 text-black hover:text-white bg-[#ffffff] hover:bg-[#FF9F0D] w-[40px] h-[40px] rounded-full">&#129034;</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:flex justify-between p-8 lg:p-0 mt-12">
              <div className="transform hover:scale-110 transition duration-500 ease-out">
                <img src="/mask1.png" alt="food" className="w-[312px] h-[267px]" />
                <h1 className="text-[18px] font-sans font-bold">Fresh Lime</h1>
                <h1 className="text-[#FF9F0D] text-[16px] p-2">$38.00<span className="text-[16px] text-gray-500 p-2 line-through">$45.00</span></h1>
              </div>
              <div className="transform hover:scale-110 transition duration-500 ease-out">
                <img src="/mask3.png" alt="food" className="w-[312px] h-[267px]" />
                <h1 className="text-[18px] font-sans font-bold">Chocolate Muffin</h1>
                <h1 className="text-[#FF9F0D] text-[16px] p-2">$28.00</h1>
              </div>
              <div className="transform hover:scale-110 transition duration-500 ease-out">
                <img src="/mask2.png" alt="food" className="w-[312px] h-[267px]" />
                <h1 className="text-[18px] font-sans font-bold">Burger</h1>
                <h1 className="text-[#FF9F0D] text-[16px] p-2">$21.00<span className="text-[16px] text-gray-500 p-2 line-through">$45.00</span></h1>
              </div>
              <div className="transform hover:scale-110 transition duration-500 ease-out">
                <img src="/mask1.png" alt="food" className="w-[312px] h-[267px]" />
                <h1 className="text-[18px] font-sans font-bold">Fresh Lime</h1>
                <h1 className="text-[#FF9F0D] text-[16px] p-2">$38.00<span className="text-[16px] text-gray-500 p-2 line-through">$45.00</span></h1>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </section>
    </>
  );
}
