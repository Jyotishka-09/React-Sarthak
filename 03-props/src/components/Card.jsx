// import React from 'react'

const Card = (props) => {
  return (
    <div className="card">
      <h1>{props.user}</h1>
      <br></br>
      <h2>Age is {props.age} </h2>
      <img>{props.img}</img>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, facere.
        Aspernatur quibusdam dolorum accusamus aliquam eaque modi at, commodi
        maiores error rerum eos temporibus aut ipsa adipisci perferendis
        reprehenderit consectetur.
      </p>

      <button>View Profile</button>
    </div>
  );
};

export default Card;
