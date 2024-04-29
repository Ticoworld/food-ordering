import { FaCartShopping } from "react-icons/fa6";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper/modules';
const PopularDishes = () => {
  const Popular = [
    {
        id:1,
        image: '/Bitter leaf soup (Ofe Onugbu).jpeg',
        dishName:'Onogbu soup',
        price:30,
        category: "swallow"
    },
    {
        id:2,
        image: 'ghana.jpeg',
        dishName:'Jollof Rice',
        price:30,
        category: "swallow"
    },
    {
        id:3,
        image: `/coconut_rice2.jpeg`,
        dishName:'Coconut RIce',
        price:30,
        category: "swallow"
    },
    {
        id:4,
        image: '/okro.jpeg',
        dishName:'Okro soup',
        price:30,
        category: "swallow"
    },
    
    {
        id:5,
        image: '/egusi_soup.jpeg',
        dishName:'Egusi soup',
        price:30,
        category: "swallow"
    },
    {
        id:6,
        image: '/fried_rice.jpeg',
        dishName:' Fried Rice',
        price:30,
        category: "swallow"
    },
    {
        id:7,
        image: '/nsala.jpeg',
        dishName:' Nsala soup',
        price:30,
        category: "swallow"
    },
    {
        id:8,
        image: '/moi.jpeg',
        dishName:' Moi Moi',
        price:30,
        category: "swallow"
    },
    
   
]
  return (<div className="px-6 bg-background py-2">
    <h2 className="text-primary font-bold lg:text-2xl text-xl py-4">Popular Dishes</h2>
     <div>
     <Swiper
              modules = {[Autoplay, Pagination]}
              slidesPerView={3}
              pagination={{ "clickable": true }}
              autoplay = {{delay: 20000}}
              spaceBetween={10}
              breakpoints={
              { 
                  320: {
                      slidesPerView: 3,
                  },
                  520: {
                      slidesPerView: 4,
                  },
                  840: {
                      slidesPerView: 6,
                  },
              }
              }
              className="lg:h-[16.8rem] h-[11rem] lg:px-4 px-0 my-2"
          >
              <div className=' border-blue-700 border-2'>
                  {
            Popular.map((popularDish) => ( 
                  <SwiperSlide key={popularDish.id}>
                <div className="lg:w-48 lg:h-58  w-28 border-yellow-600 border-2 rounded-md p-1" key={popularDish.id}>
                    <div className="flex items-center justify-between flex-col gap-0">
                        <div>
                        <img src={popularDish.image} alt=""  className="lg:w-44 w-24 rounded-md lg:h-36 h-[5rem] object-cover "/>   
                        </div>
                        <div className="details w-full">
                            <h5 className="text-yellow-700 font-semibold lg:text-lg text-xs uppercase text-wrap ">{popularDish.dishName}</h5>
                            <div className="flex items-center justify-between lg:gap-2 gap-1 py-2">
                            <button title="buy now"
                            className="bg-red-500 text-white lg:py-2 lg:px-4 px-1 py-1 text-xs lg:text-lg rounded-md cursor-pointer w-full"
                        >
                           ${popularDish.price}
                        </button>
                            <button title="add to cart"
                            className="bg-warning text-white lg:py-2 py-1 x-2 text-center rounded-md cursor-pointer lg:px-4 px-2"
                        >
                            <FaCartShopping className="lg:text-2xl text-accent cursor-pointer"   />
                        </button>
                            </div>
                        
                        </div>
                    </div>
                    </div> 
                    </SwiperSlide>
            ))
        }
                 
            
              </div>
          </Swiper>
       </div>
  </div>);
};

export default PopularDishes;
