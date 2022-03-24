import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { listOrderMine } from "../actions/orderActions.js";

const OrderHistory = (props) => {
  const orderMineList = useSelector((state) => state.orderMineList);
  // const [isActive, setActive] = useState([false]);
  // var isActive = [];

  const { orders } = orderMineList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listOrderMine());
  }, [dispatch]);
  // isActive = [];
  // isActive = true;
  var i;
  const handleClick = (id) => {
    for (i = 0; i < orders.length; i++) {
      if (orders[i]._id === id) {
        // Document.getElementById(id).classList.remove("none");
        // if (isActive[i] === false) {
        //   isActive[i] = true;
        //   return i;
        // }
        // if (isActive[i] === true) {
        //   isActive[i] = false;
        //   return i;
        // }
        // setActive(!isActive[i]);
        // eslint-disable-next-line no-loop-func
        // setActive((oldIsActive) => {
        // const newIsActive = [...oldIsActive];
        // newIsActive[i] = true;
        // return newIsActive;
        // return i;
        // });
      }
    }
  };
  return (
    <div>
      <h1>Order History</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>DATE</th>
          </tr>
        </thead>
        {orders !== undefined
          ? orders.map((order) => (
              <tbody key={order._id}>
                <tr>
                  <td>{order._id}</td>
                  <td>{order.createdAt.substring(0, 10)}</td>
                  <td>
                    <button
                      type="button"
                      className="small"
                      onClick={handleClick(order._id)}
                      // onClick={}
                    ></button>
                  </td>
                </tr>
                <div id={order._id}>
                  <div>
                    <strong>Name:</strong> {order.shippingAddress.fullName}{" "}
                  </div>
                  <div>
                    <strong>Address: </strong> {order.shippingAddress.address},
                    {order.shippingAddress.city},{" "}
                    {order.shippingAddress.postalCode},
                    {order.shippingAddress.country}
                  </div>
                  <div>
                    <strong>Payment Method:</strong> {order.paymentMethod}{" "}
                  </div>
                  {order.orderItems.map((item) => (
                    <li key={item.product}>
                      <div className="row">
                        <div>
                          <img
                            src={item.image}
                            alt={item.name}
                            className="small"
                          ></img>
                        </div>
                        <div className="min-30">{item.name}</div>

                        <div>
                          {item.qty} x €{item.price} = €{item.qty * item.price}
                        </div>
                      </div>
                    </li>
                  ))}
                </div>
              </tbody>
            ))
          : null}
      </table>
    </div>
  );
};

export default OrderHistory;
