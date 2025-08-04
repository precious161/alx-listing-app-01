import React, { useState } from "react";
import {
  HERO_BACKGROUND,
  FILTER_OPTIONS,
  PROPERTY_LISTING_SAMPLE,
} from "@/constants";
import Pill from "@/components/common/Pill";
import PropertyCard from "@/components/common/PropertyCard";

const Home = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[80vh] flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${HERO_BACKGROUND})` }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-lg text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find your favorite place here!
          </h1>
          <p className="text-lg md:text-xl">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-6 px-4 md:px-8 bg-gray-50">
        <div className="flex flex-wrap gap-3">
          {FILTER_OPTIONS.map((label) => (
            <Pill
              key={label}
              label={label}
              isActive={activeFilter === label}
              onClick={() =>
                setActiveFilter(activeFilter === label ? null : label)
              }
            />
          ))}
        </div>
      </section>

      {/* Listing Section */}
      <section className="py-8 px-4 md:px-8 bg-white">
        <h2 className="text-2xl font-bold mb-6">Recommended Stays</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROPERTY_LISTING_SAMPLE.map((property) => (
            <PropertyCard
              key={property.id}
              image={property.image}
              name={property.name}
              price={property.price}
              rating={property.rating}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
