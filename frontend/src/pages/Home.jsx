import React from 'react';
import HeroImg from '../assets/Hero.svg';

const Home = () => {
  const bannerCards = [
    {
      id: 1,
      users: 100,
      rides: 1000,
    },
  ];

  return (
    <section className="overflow-hidden px-6 py-12">
      <div className="flex flex-col lg:flex-row items-center gap-8">
        {/* Text Content */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">Together, We Make a Ride</h2>
          <p className="text-gray-700 mb-6">
            Whether you're commuting to work, meeting friends, or exploring new places, our service offers a smart, safe, and friendly way to get around.
          </p>

          {/* Banner Cards */}
          <div className="flex gap-6">
            {bannerCards.map((card) => (
              <article
                key={card.id}
                className="bg-blue-50 p-4 rounded-xl shadow-md flex flex-col items-center"
              >
                <span className="text-lg font-semibold">Users: {card.users}</span>
                <span className="text-lg font-semibold">Rides: {card.rides}</span>
              </article>
            ))}
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex-1">
          <img src={HeroImg} alt="Hero" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default Home;
