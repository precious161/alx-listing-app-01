import React from "react";
import { CardProps } from "../../interfaces";

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  children,
}) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-200">
    <img src={imageUrl} alt={title} className="h-48 w-full object-cover" />
    <div className="p-4">
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      {children}
    </div>
  </div>
);

export default Card;
