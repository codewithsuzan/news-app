import React from "react";
import image from "../assets/image.png"

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className="card bg-dark text-light  d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"320px"}}>
      <img src={src?src:image} style={{height:"200px",width:"310px" }} className="card-img-top " alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0,60)+" (see more)....."}</h5>
        <p className="card-text">{description? description.slice(0, 100) : "Loading..."}</p>
        <a href={url} className="btn btn-primary "  target="_blank" >Read More...</a>
      </div>
    </div>
  );
};

export default NewsItem;