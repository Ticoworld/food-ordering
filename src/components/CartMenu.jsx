import { useState } from 'react';
import { FaTrashAlt, FaPlus, FaMinus } from 'react-icons/fa';
import Swal from "sweetalert2";

const CartMenu = () => {
  const initialCarts = [
    {
      id: 1,
      image: '/Bitter leaf soup (Ofe Onugbu).jpeg',
      dishName: 'Onogbu soup',
      price: 30,
      quantity: 1,
      category: 'swallow',
    },
    {
      id: 2,
      image: 'ghana.jpeg',
      dishName: 'Jollof Rice',
      price: 30,
      quantity: 1,
      category: 'swallow',
    },
    {
      id: 3,
      image: '/coconut_rice2.jpeg',
      dishName: 'Coconut Rice',
      price: 30,
      quantity: 1,
      category: 'swallow',
    },
    {
      id: 4,
      image: '/okro.jpeg',
      dishName: 'Okro soup',
      price: 30,
      quantity: 1,
      category: 'swallow',
    },
    {
      id: 5,
      image: '/egusi_soup.jpeg',
      dishName: 'Egusi soup',
      price: 30,
      quantity: 1,
      category: 'swallow',
    },
    {
      id: 6,
      image: '/fried_rice.jpeg',
      dishName: 'Fried Rice',
      price: 30,
      quantity: 1,
      category: 'swallow',
    },
    {
      id: 7,
      image: '/nsala.jpeg',
      dishName: 'Nsala soup',
      price: 30,
      quantity: 1,
      category: 'swallow',
    },
    {
      id: 8,
      image: '/moi.jpeg',
      dishName: 'Moi Moi',
      price: 30,
      quantity: 1,
      category: 'swallow',
    },
  ];

  const [myCarts, setMyCarts] = useState(initialCarts);

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
  const handleRemove = (id) => {
    setMyCarts(myCarts.filter((cart) => cart.id !== id));
    Toast.fire({
      icon: 'success',
      title: 'ITEM REMOVED',
      text: 'Item succesfully removed from cart' 
  })
  };

  const handleIncrement = (id) => {
    setMyCarts(
      myCarts.map((cart) =>
        cart.id === id ? { ...cart, quantity: cart.quantity + 1 } : cart
      )
    );
  };

  const handleDecrement = (id) => {
    setMyCarts(
      myCarts.map((cart) =>
        cart.id === id && cart.quantity > 1
          ? { ...cart, quantity: cart.quantity - 1 }
          : cart
      )
    );
  };

  const totalAmount = myCarts.reduce(
    (total, cart) => total + cart.price * cart.quantity,
    0
  );

  return (
    <div className="bg-Lightwarning min-h-screen p-3 md:p-5">
      <div className="text-2xl font-bold mb-4 px-3 md:px-10">My Cart</div>
      {myCarts.length > 0 ? (
        <>
          <div className="space-y-4 px-3 md:px-10">
            {myCarts.map((cart) => (
              <div
                key={cart.id}
                className="flex items-center bg-white shadow rounded p-4 space-x-4 md:space-x-6"
              >
                <div className="w-16 h-16 md:w-24 md:h-24">
                  <img
                    src={cart.image}
                    alt={cart.dishName}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="text-md md:text-xl font-semibold">
                    {cart.dishName}
                  </h3>
                  <p className="text-gray-600">${cart.price}</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <button
                      onClick={() => handleDecrement(cart.id)}
                      className="bg-gray-300 p-1 rounded"
                    >
                      <FaMinus />
                    </button>
                    <span>{cart.quantity}</span>
                    <button
                      onClick={() => handleIncrement(cart.id)}
                      className="bg-gray-300 p-1 rounded"
                    >
                      <FaPlus />
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => handleRemove(cart.id)}
                  className="bg-red-500 text-white p-2 md:px-4 md:py-2 rounded hover:bg-red-700 flex items-center justify-center"
                >
                  <FaTrashAlt />
                </button>
              </div>
            ))}
          </div>
          <div className="text-xl font-semibold mt-8 px-3 md:px-10">
            Total Amount: ${totalAmount}
          </div>
          <div className="mt-4 px-3 md:px-10">
            <button className="bg-primary text-white w-full md:w-auto px-6 py-3 rounded hover:bg-red-700">
              Pay Now
            </button>
          </div>
        </>
      ) : (
        <div className="text-center text-gray-600 text-xl mt-8 px-3 md:px-10">
          Nothing in cart yet.
        </div>
      )}
    </div>
  );
};

export default CartMenu;
