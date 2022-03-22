import { Grid } from "@mui/material";
import React from "react";
import { Card } from "../../atoms/Card/Card";

export const ListCardContainer = ({ items }) => {
  return (
    <Grid container spacing={1}>
      {items.map((item) => (
        <Grid item xs={12} md={3} key={item.id}>
          <Card
            name={item.name}
            email={item.email}
            city={item.address.city}
            companyName={item.company.name}
            phone={item.phone}
          />
        </Grid>
      ))}
    </Grid>
  );
};
