import React from "react";

import Card from "./Card";

const CardList = ({ users }) => {
  const cardArray = users.map((user, index) => {
    return (
      <Card
        key={index}
        id={users[index].id}
        name={users[index].name}
        email={users[index].email}
        website={users[index].website}
      />
    );
  });
  return <div className="cardList">{cardArray}</div>;
};

export default CardList;
