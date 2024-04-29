import { FaCartShopping } from "react-icons/fa6";

const PopularDishesItems = () => {
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
            id:6,
            image: '/fried_rice.jpeg',
            dishName:' Fried Rice',
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
            id:6,
            image: '/fried_rice.jpeg',
            dishName:' Fried Rice',
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
    ]
  return ( 
    <div className="grid gap-2 grid-flow-col">
        {
            Popular.map((popularDish) => (
                
                <div className="lg:w-48 lg:h-58  w-28 border-yellow-600 border-2 rounded-md p-1" key={popularDish.id}>
                    <div className="flex items-center justify-between flex-col gap-0">
                        <div>
                        <img src={popularDish.image} alt=""  className="lg:w-44 w-24 rounded-sm lg:h-36 h-[5rem] object-cover "/>   
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
            ))
        }
    </div>
  );
};

export default PopularDishesItems;
