import React, { useEffect, useState } from "react";
import Fake from "../Fake/Fake";

const Cosmetics = () => {
  const [cosmetics, setCosmetics] = useState([]);
  useEffect(() => {
    fetch("./cosmetics.json")
      .then((res) => res.json())
      .then((data) => setCosmetics(data));
  }, []);

  const ageReducer = (previous, current) =>previous+current.age;
  const ageTotal = cosmetics.reduce(ageReducer, 0)

  return (
    <div>
        <h1>Total Age:{ageTotal}</h1>
        
      {cosmetics.map((cosmetic) => (
        <Fake key={cosmetic._id} cosmetic={cosmetic}></Fake>
      ))}
    </div>
  );
};

export default Cosmetics;
