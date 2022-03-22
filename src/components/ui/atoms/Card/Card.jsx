import { Avatar, Tooltip } from "@mui/material";
import React from "react";
import styles from "./Card.module.css";

export const Card = ({ name, email, city, companyName, phone }) => {
  return (
    <div className={styles.center}>
      <div className={styles.property_card}>
        <Tooltip title={`Avatar de ${name}`}>
          <Avatar
            src={
              "https://avatars.dicebear.com/api/adventurer/:seed.svg"
            }
            style={{ borderRadius: "0" }}
          >
            {name.charAt(0).toUpperCase()}
          </Avatar>
        </Tooltip>
        <div className={styles.property_description}>
          <h5> {name} </h5>
          <p>Email: {email}</p>
          <p>Celular: {phone}</p>
          <p>Ciudad: {city}</p>
          <p>Nombre de la compañia: {companyName}</p>
          <p>Avatar</p>
        </div>
      </div>
    </div>
  );
};
