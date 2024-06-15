import React from 'react';
import { FaCartShopping } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay, Pagination } from 'swiper/modules';

const QuickBites = () => {
  const items = [
    {
      id: 1,
      image: '/burger.jpeg',
      name: 'Burger',
      price: 5,
      category: 'Burgers',
    },
    {
      id: 2,
      image: '/sandwich.jpeg',
      name: 'Sandwich',
      price: 4,
      category: 'Sandwiches',
    },
    {
      id: 3,
      image: '/pizza.jpeg',
      name: 'Pizza',
      price: 8,
      category: 'Pizzas',
    },
    {
      id: 4,
      image: '/shawarma.jpeg',
      name: 'Shawarma',
      price: 6,
      category: 'Shawarma',
    },
    {
      id: 5,
      image: '/doughnut.jpeg',
      name: 'Doughnut',
      price: 2,
      category: 'Doughnuts',
    },
  ];

  const featuredItems = items.slice(0, 3); // Example: First 3 items as featured

  return (
    <div className="p-5 bg-background">
      <h1 className="text-2xl font-bold mb-4 text-center">Quick Bites</h1>
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
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded" />
              <h2 className="text-xl font-semibold mt-2">{item.name}</h2>
              <p className="text-gray-600">${item.price}</p>
              <button className="bg-primary text-white px-4 py-2 rounded mt-2 hover:bg-red-700">
                Add to Cart
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {items.map((item) => (
          <div key={item.id} className="shadow-md border-2 rounded-md p-2 bg-white">
            <div className="flex flex-col items-center gap-2">
              <img src={item.image} alt={item.name} className="rounded-md w-full object-cover h-28 sm:h-36 md:h-40 lg:h-48" />
              <h5 className="text-yellow-800 font-semibold text-[0.70rem] sm:text-[0.90rem] md:text-lg uppercase">{item.name}</h5>
              <div className="flex items-center justify-between w-full gap-2">
                <button title="buy now">
                  ${item.price}
                </button>
                <button title="add to cart" className="bg-primary hover:bg-red-700 text-white py-2 px-2 text-xs lg:text-sm rounded-md w-1/2 flex items-center justify-center">
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

export default QuickBites;
