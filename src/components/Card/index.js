import React from "react";
import { useState } from "react";
import styles from "./Card.module.css";

export const Card = ({
  ad,
  boy,
  ceki,
  biceps_hecmi,
  image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzqosavkLVGnUnD6uY71Cg59z9mzAc_ptihw&usqp=CAU",
  card,
  text = "bagl aynani",
}) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className={card}>
      <img width={350} height={250} src={image} />
      <p className={`${styles.color}`}>Ad:{ad} </p>
      <p className={`${styles.color}`}>Boy:{boy} </p>
      <p className={`${styles.color}`}> Ceki:{ceki} </p>
      <p className={`${styles.color}`}>Bicepsin hecmi:{biceps_hecmi} </p>
      <button
        className="btn-primary btn"
        onClick={() => setReadMore((prev) => !prev)}
      >
        {readMore ? "Close" : "More"}
      </button>
      {readMore && (
        <>
          <p>{text}</p>
        </>
      )}
    </div>
  );
};
