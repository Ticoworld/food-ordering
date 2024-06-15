import React from 'react';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      customer: 'John Doe',
      review: 'The Onogbu soup was absolutely delicious! Highly recommend trying it.',
      rating: 5
    },
    {
      id: 2,
      customer: 'Jane Smith',
      review: 'Great flavors and excellent service. The Jollof Rice is a must-try!',
      rating: 4
    },
    {
      id: 3,
      customer: 'Alex Johnson',
      review: 'Loved the variety and the taste of the dishes. Will order again!',
      rating: 5
    }
  ];

  return (
    <div className="px-6 py-7 bg-gray-50">
      <h2 className="text-gray-900 text-center font-bold lg:text-2xl text-xl py-7">Customer Reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white shadow-md border-2 rounded-md p-4">
            <p className="text-gray-700">{review.review}</p>
            <div className="flex items-center justify-between mt-2">
              <span className="font-semibold">{review.customer}</span>
              <span className="text-yellow-500">{'⭐'.repeat(review.rating)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
