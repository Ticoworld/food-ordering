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
              spaceBetween={9}
              breakpoints={
              { 
                  320: {
                      slidesPerView: 3,
                  },
                  520: {
                      slidesPerView: 4,
                  },
                  800: {
                      slidesPerView: 5,
                  },
                  1024: {
                      slidesPerView: 6,
                  },
              }
              }
              className="lg:h-[15.1rem]  lg:px-4 px-0"
          >
              <div className=' border-blue-700 border-2'>
                  {
            Popular.map((popularDish) => ( 
                  <SwiperSlide key={popularDish.id}>
                <div className="xl:w-48 lg:w-[9.7rem]  border-yellow-600 border-2 rounded-md p-1 gap-2" key={popularDish.id}>
                    <div className="flex items-center justify-between flex-col gap-0">
                        <div>
                        <img src={popularDish.image} alt=""  className="w-44 rounded-md h-[8.8rem] object-cover "/>   
                        </div>
                        <div className="details w-full">
                            <h5 className="text-yellow-700 font-semibold lg:text-lg text-xs uppercase text-wrap pt-1 ">{popularDish.dishName}</h5>
                            <div className="flex items-center justify-between lg:gap-2 gap-1 py-1">
                            <button title="buy now"
                            className="bg-red-500 text-white py-2 px-4  text-xs lg:text-lg rounded-md cursor-pointer w-full"
                        >
                           ${popularDish.price}
                        </button>
                            <button title="add to cart"
                            className="bg-warning text-white lg:py-2 py-1 x-2 text-center rounded-md cursor-pointer lg:px-4 px-2"
                        >
                            <FaCartShopping className="text-2xl text-accent cursor-pointer"   />
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
