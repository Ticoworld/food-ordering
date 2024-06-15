import React from 'react';
import { FaCartShopping } from 'react-icons/fa6';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay, Pagination } from 'swiper/modules';

const SpecialOffers = () => {
  const items = [
    {
      id: 1,
      image: '/burger.jpeg',
      name: 'Burger',
      price: 5,
      discount: 20,
      category: 'Burgers',
    },
    {
      id: 2,
      image: '/sandwich.jpeg',
      name: 'Sandwich',
      price: 4,
      discount: 15,
      category: 'Sandwiches',
    },
    {
      id: 3,
      image: '/pizza.jpeg',
      name: 'Pizza',
      price: 8,
      discount: 10,
      category: 'Pizzas',
    },
    {
      id: 4,
      image: '/shawarma.jpeg',
      name: 'Shawarma',
      price: 6,
      discount: 5,
      category: 'Shawarma',
    },
    {
      id: 5,
      image: '/doughnut.jpeg',
      name: 'Doughnut',
      price: 2,
      discount: 25,
      category: 'Doughnuts',
    },
    {
      id: 6,
      image: '/doughnut.jpeg',
      name: 'Doughnut',
      price: 2,
      discount: 25,
      category: 'Doughnuts',
    },
    {
      id: 7,
      image: '/doughnut.jpeg',
      name: 'Doughnut',
      price: 2,
      discount: 25,
      category: 'Doughnuts',
    },
    {
      id: 8,
      image: '/doughnut.jpeg',
      name: 'Doughnut',
      price: 2,
      discount: 25,
      category: 'Doughnuts',
    },
  ];

  const featuredItems = items.slice(0, 3); // Example: First 3 items as featured

  return (
    <div className="p-5 bg-background">
      <h1 className="text-2xl font-bold mb-4 text-center">Special Offers</h1>
      <p className="text-center mb-4 text-gray-700">Take advantage of our special offers and save big on your favorite meals!</p>

      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        spaceBetween={10}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
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

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={10}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        breakpoints={{
          350: {
            slidesPerView: 3,
            spaceBetween: 12,
          },
          720: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 6,
            spaceBetween: 30,
          },
        }}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id} className='sm:h-72 h-56 lg:h-80'>
            <div className="shadow-md border-2 rounded-md p-2 relative bg-white">
              {item.discount && (
                <div className="absolute top-0 left-0 bg-red-500 text-white text-xs font-bold p-1 rounded-tr-md rounded-bl-md">
                  {item.discount}% OFF
                </div>
              )}
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SpecialOffers;
