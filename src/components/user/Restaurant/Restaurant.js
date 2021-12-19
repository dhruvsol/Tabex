import React from "react";
import { Cards } from "./Cards";
import { Navbarone } from "./Navbarone";
export const Restaurant = () => {
  return (
    <>
    <Navbarone/>
      <>
        <div className="form" style={{marginTop:"4rem"}} >
          <Cards />
        </div>
      </>
    </>
  );
};
