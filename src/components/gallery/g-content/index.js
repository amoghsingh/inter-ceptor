import React from "react";
import "./styles.css";

const Gcontent = ({ gData }) => {
  return (
    <>
      {gData && gData?.length > 0
        ? gData?.map((item) => {
            return (
              <div className="g-card">
                <p>{item.id}</p>
                <p>{item.title}</p>
                <p>{item.body}</p>
              </div>
            );
          })
        : null}
    </>
  );
};

export default Gcontent;
