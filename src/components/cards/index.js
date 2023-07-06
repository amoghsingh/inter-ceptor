import React, { useEffect } from "react";
import { cardData } from "../../services/cardData";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQty,
  fetchCards,
  getAllCards,
  incrementQty,
} from "../../features/card-slice";

const Cards = () => {
  const dispatch = useDispatch();
  let data = useSelector(getAllCards);
  //   data = data.payload;

  useEffect(() => {
    if (data === undefined || data.length === 0) {
      let cardInfo = cardData.data;
      dispatch(fetchCards(cardInfo));
    }
  }, [dispatch, data]);

  return (
    <>
      {data?.length > 0
        ? data.map((item) => {
            return (
              <div key={item.id}>
                <p>Name : {item.name}</p>
                <button
                  onClick={() => {
                    dispatch(decrementQty(item.id));
                  }}
                >
                  -
                </button>
                {item.qty}
                <button
                  onClick={() => {
                    dispatch(incrementQty(item.id));
                  }}
                >
                  +
                </button>
              </div>
            );
          })
        : null}
    </>
  );
};

export default Cards;
