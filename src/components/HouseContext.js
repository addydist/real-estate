import React, { useState, createContext, useEffect } from "react";

import { housesData } from "../data";

export const HouseContext = createContext();
const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [city, setCity] = useState('Location (any)');
  const [cities, setCities] = useState([]);
  const [property, setProperty] = useState('Property type (any)');
  const [properties, setProperties] = useState([]);
  const [surface,setSurface]=useState('Surface Area (any)');
  const [price, setPrice] = useState('Price range (any)');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
      const allCities = houses.map((house) => {
      return house.city;
    });
    
    const uniqueCities = ['Location (any)', ...new Set(allCities)];
    setCities(uniqueCities);
  },[]);
  useEffect(() => {
    const allProperties = houses.map((house) => {
      return house.type;
    });
    const uniqueProperties = ['Property type (any)', ...new Set(allProperties)];
    setProperties(uniqueProperties);
  }, []);
  const handleClick=()=>{
    setLoading(true);
    const isDefault = (str) => {
      return str.split(' ').includes('(any)');
    };
    const minPrice = parseInt(price.split(' ')[0]);
    const maxPrice = parseInt(price.split(' ')[2]);
    const newHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price);
    
      if (
        house.city === city &&
        house.type === property &&
        house.surface===surface &&
        housePrice >= minPrice &&
        housePrice <= maxPrice
      ) {
        return house;
      }
      
      if (isDefault(city) && isDefault(property) && isDefault(price)) {
        return house;
      }
     
      if (!isDefault(city) && isDefault(property) && isDefault(price)) {
        return house.city === city;
      }
   
      if (!isDefault(property) && isDefault(city) && isDefault(price)) {
        return house.type === property;
      }
    
      if (!isDefault(price) && isDefault(city) && isDefault(property)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house;
        }
      }
     
      if (!isDefault(city) && !isDefault(property) && isDefault(price)) {
        return house.city === city && house.type === property;
      }
 
      if (!isDefault(city) && isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.city === city;
        }
      }
     
      if (isDefault(city) && !isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.type === property;
        }
      }
    });
    
    setTimeout(() => {
      return (
        newHouses.length < 1 ? setHouses([]) : setHouses(newHouses),
        setLoading(false)
      );
    }, 1000);
  }
    return (
    <HouseContext.Provider value={{
      city,
      setCity,
      cities,
      property,
      setProperty,
      properties,
      price,
      setPrice,
      surface,
      setSurface,
      handleClick,
      houses,
      loading,
    }}>
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
