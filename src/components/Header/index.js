import React from "react";
import styles from "./Header.module.css";

const imgUrl =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ7fROxJHWd9g74A8N8tfAvlDfEA_D12rfWw&usqp=CAU";

export const Header = () => {
  return (
    <header className="container">
      <h1 className="badge bg-primary text-wrap fs-1 font-monospace">Mr.Olympia</h1>
      <img className={styles.foto} src={imgUrl} />
    </header>
  );
};
