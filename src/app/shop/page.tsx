'use client'
import Stars from "../components/stars";
import FoodList from "../products/page";

import { useState, } from "react";

const products = [
    { id: 1, name: "Club Sandwich", category: "Sandwich" },
    { id: 2, name: "Appic Hamed Sandwich", category: "Sandwich" },
    { id: 3, name: "City Burger", category: "burger" },
    { id: 4, name: "Jucy Chick Burger", category: "burger" },
    { id: 5, name: "Chicken Burger", category: "Burger" },
  ];

  



export default function Shop(){

    const [query, setQuery] = useState('');

    const filteredProduct = products.filter((product) => 
      product.name.toLowerCase().includes(query.toLowerCase())
    );
  
    const handleText = (e:any) => {
      setQuery(e.target.value);
    };
  
    



const [slectedCategory, setselectedCategories]= useState<string[]>([]);    

const handleCategoryChange = (category : string)=>{
setselectedCategories((prevcategories)=>{
if(prevcategories.includes(category)){
return prevcategories.filter((item)=> item !==category)
}else{
return[...prevcategories,category];
}
});
}   
   
   
    return(


        <>
        
        
        <section className="   w-full lg:w-[1920px]    bg-white"   >

        <div className="bg-[url('/image/menu.png')] bg-cover bg-center w-full h-[250px]  md:h-[350px]  lg:h-[410px] flex justify-center items-center">
        
        
        <div className="text-center">

        <h1 className="text-white  text-[32px] md:text-[48px] lg:text-[56px] font-sans " >Shop</h1>
        <ul className="text-white flex justify-center space-x-2 mt-2    " >
            <li><a href="/hero" className=" hover:text-[#ff9f0d] ">home   </a></li>
            <li className="">&gt;</li>
            <li><a href="/shop-details" className="hover:text-[#ff9f0d] ">Shop details</a></li>
        </ul>
        </div>
        
        </div>


        <div className="flex justify-center items-center w-[1920px] mt-24 " >
        <div className="  grid grid-cols-1 lg:flex w-full lg:w-[1320px] p-6 lg:p-0">

        
        
        <div >

           <FoodList selectedCategories={slectedCategory} />





        </div>
                
                
        <div className="w-[312px]  " >

<div className="flex justify-center items-start mt-20" >

    <input type="text" placeholder="Search Product" className="w-[248px] h-[46px] border-2 border-gray-300"
            value={query} 
            onChange={handleText} 
    
    />
        
     



        
        <div className=" flex justify-around items-center bg-[#ff9f0d] w-[46px] h-[46px] " >
    
    <button className=" w-[20px] h-[20px] transform hover:scale-150 transition duration-500 ease-in-out">🔍</button></div>

</div>


<div>
{query && (
        <ul className="mt-2 border border-black p-2 max-h-48 overflow-y-auto">
          {filteredProduct.length > 0 ? (
            filteredProduct.map((product) => (
              <li className="list-none m-2" key={product.id}>{product.name}</li>
            ))
          ) : (
            <li className="list-none m-2 text-red-500">No Product Found</li>
          )}
        </ul>
      )}

</div>

<div className=" w-[248px] h-[372px] " >
    
    <h1 className="text-[20px] font-sans font-bold text-black" >Category</h1>
    
    
    <form action="">

        <label className="text-[18px]  " >
            <input type="checkbox" name="optional1" className="mr-2 mt-5"
            onChange={()=> handleCategoryChange('Sandwich')}
            />
            Sandwiches
        </label>
    <br />
        <label className="text-[18px] " >
            <input type="checkbox" name="optional2" className="mr-2 mt-5" 
            onChange={()=>handleCategoryChange('burger')}
            />
            Burger
        </label>
    
        <br />
        <label className="text-[18px] " >
            <input type="checkbox" name="optional3" className="mr-2 mt-5" />
            Chicken chup
        </label>
    

        <br />
        <label className="text-[18px] " >
            <input type="checkbox" name="optional4" className="mr-2 mt-5" />
            Drink
        </label>
        <br />
        <label className="text-[18px] " >
            <input type="checkbox" name="optional5" className="mr-2 mt-5"
            onChange={()=>handleCategoryChange('pizza')}
            
            />
            Pizza 
        </label>

        <br />
        <label className="text-[18px] " >
            <input type="checkbox" name="optional6" className="mr-2 mt-5" />
            Thi
        </label>

        <br />
        <label className="text-[18px] " >
            <input type="checkbox" name="optional7" className="mr-2 mt-5" />
            Non Veg
        </label>

        <br />
        <label className="text-[18px] " >
            <input type="checkbox" name="optional8" className="mr-2 mt-5" />
            Uncategorized
        </label>



    </form>
</div>


<div className=" bg-[url('/rise.png')]  bg-cover bg-center w-[248px] h-[286px]"> 

<h1 className="text-[16px] text-white font-sans font-bold pt-6 pl-6 " >Perfect Test</h1>
<h1 className="text-[20px] font-sans font-bold text-white p-6 " >Classic Resturent</h1>
<h1 className="text-[#FF9F0D]  text-[16px] font-bold pl-6 ">45.00$</h1>

<button className="text-white text-[24px]  font-sans p-6 mt-12 transform hover:scale-110  " > shop Now <span className="border-2 border-white rounded-full m-2 p-1 " >→</span> </button>
  
  </div>

  <div className=" mt-12" >

<h1 className="text-[20px] font-bold font-sans p-4 " >Filter By Price</h1>
        
                       <input type="range"
className=" h-2 bg-[#FF9F0D] rounded-lg appearance-none cursor-pointer accent-gray-500
     focus:outline-none focus:ring-2 focus:ring-green-500 "                                
                       />

                       <div className="flex justify-between p-4" ><h1 className="text-[#1E1E1E] text-[16px] font-sans font-bold " >
                        From $0 to $8000</h1>
                         <h1 className="text-[#1E1E1E] text-[16px] font-sans font-bold mr-6">Filter</h1></div>
                        </div>


                        <div className="mt-12"> 
                            <h1 className="text-[20px] font-bold font-sans" >Latest Products</h1>

<div className="flex" >
 <div><img src="/vec.png" alt="rating" className="p-4" /></div>
<div className="p-4">
 <h1 className="text-[#4F4F4F] text-[16px] font-bold font-sans " >Pizza</h1>
 <Stars/>
  <h1 className="text-[#4F4F4F] text-[14px] font-bold " >35$</h1>
  </div>
</div>


<div className="flex" >
 <div><img src="/vec.png" alt="rating" className="p-4" /></div>
<div className="p-4">
 <h1 className="text-[#4F4F4F] text-[16px] font-bold font-sans " >Cupchake</h1>
 <Stars/>
  <h1 className="text-[#4F4F4F] text-[14px] font-bold " >35$</h1>
  </div>
</div>


<div className="flex" >
 <div><img src="/vec.png" alt="rating" className="p-4" /></div>
<div className="p-4">
 <h1 className="text-[#4F4F4F] text-[16px] font-bold font-sans " >Cookies</h1>
 <Stars/>
  <h1 className="text-[#4F4F4F] text-[14px] font-bold " >35$</h1>
  </div>
</div>


<div className="flex" >
 <div><img src="/vec.png" alt="rating" className="p-4" /></div>
<div className="p-4">
 <h1 className="text-[#4F4F4F] text-[16px] font-bold font-sans " >Burger</h1>
 <Stars/>
  <h1 className="text-[#4F4F4F] text-[14px] font-bold " >35$</h1>
  </div>
</div>



<div>

    <h1 className="text-[20px] font-sans font-bold">Product Tags</h1>
<div className="grid grid-cols-1 ">
    
    <div className="p-4">
    <a href="" className="text-[20px]  hover:text-[#FF9F0D] font-sans " >Services</a>
    <a href="" className="text-[20px] p-4  hover:text-[#FF9F0D] font-sans ">Our Menu</a>
    <a href="" className="text-[20px]  hover:text-[#FF9F0D] font-sans ">Pizza</a>
    </div>
    
    <div className="p-4">
    <a href="" className="text-[20px]  hover:text-[#FF9F0D] font-sans " >Cup Cake</a>
    <a href="" className="text-[20px] p-4 hover:text-[#FF9F0D] font-sans ">Burger</a>
    <a href="" className="text-[20px]  hover:text-[#FF9F0D] font-sans ">Cookies</a>
    </div>
    <div className="p-4">
    <a href="/details" className="text-[20px]  hover:text-[#FF9F0D] font-sans ">Our Shop</a> 
    <a href="" className="text-[20px] pl-4 hover:text-[#FF9F0D] font-sans ">Tandoori Chicken</a>
    </div>
</div>
</div>
                            
                        </div>
    

        </div>
        

        </div>

        </div>
        </section>
        
        
        
        
        
        
        
        </>
    )
}