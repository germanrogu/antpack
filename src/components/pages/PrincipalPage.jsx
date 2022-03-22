import React, { useEffect, useState } from "react";
import { ListCardContainer } from "../ui/molecules/ListCardContainer/ListCardContainer";

export const PrincipalPage = () => {
  const [users, setUsers] = useState([]);

  let url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <ListCardContainer items={users} />;
};
