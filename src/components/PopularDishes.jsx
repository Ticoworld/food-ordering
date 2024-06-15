import React from 'react';
import { FaCartShopping } from "react-icons/fa6";
import Swal from "sweetalert2";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay, Pagination } from 'swiper/modules';

const PopularDishes = () => {
  const Popular = [
    {
      id: 1,
      image: '/Bitter leaf soup (Ofe Onugbu).jpeg',
      dishName: 'Onogbu soup',
      price: 30,
      discount: 20,
      category: "swallow"
    },
    {
      id: 2,
      image: 'ghana.jpeg',
      dishName: 'Jollof Rice',
      price: 30,
      discount: 15,
      category: "swallow"
    },
    {
      id: 3,
      image: `/coconut_rice2.jpeg`,
      dishName: 'Coconut Rice',
      price: 30,
      discount: 25,
      category: "swallow"
    },
    {
      id: 4,
      image: '/okro.jpeg',
      dishName: 'Okro soup',
      price: 30,
      discount: 10,
      category: "swallow"
    },
    {
      id: 5,
      image: '/egusi_soup.jpeg',
      dishName: 'Egusi soup',
      price: 30,
      discount: 5,
      category: "swallow"
    },
    {
      id: 6,
      image: '/fried_rice.jpeg',
      dishName: 'Fried Rice',
      price: 30,
      discount: 18,
      category: "swallow"
    },
    {
      id: 7,
      image: '/nsala.jpeg',
      dishName: 'Nsala soup',
      price: 30,
      discount: 22,
      category: "swallow"
    },
    {
      id: 8,
      image: '/moi.jpeg',
      dishName: 'Moi Moi',
      price: 30,
      discount: 30,
      category: "swallow"
    }
  ];

  const featuredItems = Popular.slice(0, 3); // Example: First 3 items as featured

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  });

  return (
    <div className="p-5 bg-background">
      <h1 className="text-2xl font-bold mb-4 text-center">Popular Dishes</h1>
      <p className="text-center mb-4 text-gray-700">Dive into our popular dishes that everyone loves. Order now and enjoy!</p>
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        spaceBetween={10}
        className="mb-6"
      >
        {featuredItems.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="bg-white shadow rounded p-4">
              <img src={item.image} alt={item.dishName} className="w-full h-48 object-cover rounded" />
              <h2 className="text-xl font-semibold mt-2">{item.dishName}</h2>
              <p className="text-gray-600">${item.price}</p>
              <button className="bg-primary text-white px-4 py-2 rounded mt-2 hover:bg-red-700">
                Add to Cart
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-4">
        {Popular.map((popularDish) => (
          <div key={popularDish.id} className="relative shadow-md border-2 rounded-md p-1 md:p-2 bg-white">
            {popularDish.discount && (
              <div className="absolute top-0 left-0 bg-red-500 text-white text-xs font-bold p-1 rounded-tr-md rounded-bl-md">
                {popularDish.discount}% OFF
              </div>
            )}
            <div className="flex flex-col items-center gap-2">
              <img src={popularDish.image} alt={popularDish.dishName} className="rounded-md w-full object-cover h-28 sm:h-36 md:h-40 lg:h-48" />
              <h5 className="text-yellow-800 font-semibold text-[0.70rem] sm:text-[0.90rem] md:text-lg uppercase">{popularDish.dishName}</h5>
              <div className="flex items-center justify-between w-full gap-2">
                <button title="buy now">
                  ${popularDish.price}
                </button>
                <button
                  title="add to cart"
                  className="bg-primary hover:bg-red-700 text-white py-2 px-2 text-xs lg:text-sm rounded-md w-1/2 flex items-center justify-center"
                >
                  <FaCartShopping className="text-lg lg:text-xl" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularDishes;
