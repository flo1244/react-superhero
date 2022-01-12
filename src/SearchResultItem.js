import React from 'react';

function SearchResultItem(props) {
  const {data} = props;

  console.log('data', data);
  return (
    <div className="search-result">
      <div className="left">
        <img src={data.image.url} alt="super pic" />
      </div>
      <div className="right">
        <h1>{data.name}</h1>
              <span className="full-name">{data.biography['full-name']}</span>
              
        <div className="stats">
          <div>Strength: {data.powerstats.strength}</div>
          <div>Speed: {data.powerstats.speed}</div>
          <div>Power: {data.powerstats.power}</div>
          <div>Intelligence: {data.powerstats.intelligence}</div>
          <div>Combat: {data.powerstats.combat}</div>
          <div>Durability: {data.powerstats.durability}</div>
        </div>
      </div>
    </div>
  );
}

export default SearchResultItem;
