import { FaCartShopping } from "react-icons/fa6";
import Swal from "sweetalert2";

const Soups = () => {
  const Popular = [
    {
      id: 1,
      image: '/Bitter leaf soup (Ofe Onugbu).jpeg',
      dishName: 'Onogbu soup',
      price: 30,
      category: "swallow"
    },
    {
      id: 2,
      image: 'ghana.jpeg',
      dishName: 'Jollof Rice',
      price: 30,
      category: "swallow"
    },
    {
      id: 3,
      image: `/coconut_rice2.jpeg`,
      dishName: 'Coconut Rice',
      price: 30,
      category: "swallow"
    },
    {
      id: 4,
      image: '/okro.jpeg',
      dishName: 'Okro soup',
      price: 30,
      category: "swallow"
    },
    {
      id: 5,
      image: '/egusi_soup.jpeg',
      dishName: 'Egusi soup',
      price: 30,
      category: "swallow"
    },
    {
      id: 6,
      image: '/fried_rice.jpeg',
      dishName: 'Fried Rice',
      price: 30,
      category: "swallow"
    },
    {
      id: 7,
      image: '/nsala.jpeg',
      dishName: 'Nsala soup',
      price: 30,
      category: "swallow"
    },
    {
      id: 8,
      image: '/moi.jpeg',
      dishName: 'Moi Moi',
      price: 30,
      category: "swallow"
    }
  ];

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
    <div className="px-6 py-7 bg-background">
      <h2 className="text-gray-900 text-center font-bold lg:text-2xl text-xl py-7">Soups</h2>
      <p className="text-center mb-4 text-gray-700">Experience the warmth and richness of our delectable soups. Order your favorite now!</p>
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-4">
        {Popular.map((popularDish) => (
          <div key={popularDish.id} className="shadow-md border-2 rounded-md p-1 md:p-2 bg-white">
            <div className="flex flex-col items-center gap-2">
              <img src={popularDish.image} alt={popularDish.dishName} className="rounded-md w-full object-cover h-28 sm:h-36 md:h-40 lg:h-48" />
              <h5 className="text-yellow-800 font-semibold text-[0.70rem] sm:text-[0.90rem] md:text-lg  uppercase">{popularDish.dishName}</h5>
              <div className="flex items-center justify-between w-full gap-2">
                <button title="buy now">
                  ${popularDish.price}
                </button>
                <button title="add to cart" className="bg-primary hover:bg-red-700  text-white py-2 px-2 text-xs lg:text-sm rounded-md w-1/2 flex items-center justify-center">
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

export default Soups;
