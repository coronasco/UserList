import React from "react";

export default function Card(props) {
  const { id, name, email, website } = props;

  return (
    <div className="pa3 card">
      <img src={`https://robohash.org/${id}?size=150x150`} alt="avatar" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
        <p>{website}</p>
      </div>
    </div>
  );
}
