import React from "react";

interface PropertyCardProps {
  image: string;
  name: string;
  price: string;
  rating: number;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  image,
  name,
  price,
  rating,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-full sm:w-[300px]">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-blue-600 font-bold">{price}</p>
        <p className="text-sm text-gray-600">⭐ {rating} / 5</p>
      </div>
    </div>
  );
};

export default PropertyCard;
