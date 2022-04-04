import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";

import { listOrderMine } from "../actions/orderActions.js";

const OrderHistory = (props) => {
  const orderMineList = useSelector((state) => state.orderMineList);

  const { orders } = orderMineList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listOrderMine({ userId: userId }));
  }, [dispatch]);

  var user_id = JSON.parse(localStorage.getItem("userInfo"))._id;
  var userId = JSON.parse(localStorage.getItem("userInfo"))._id;

  return (
    <div className="App">
      <Header></Header>
      <input type="text" hidden={true} name="_id" value={userId}></input>

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
                {/* <div> */}
                {order.user === user_id ? (
                  <div id={order._id}>
                    <tr>
                      <td>{order._id}</td>
                      <td>{order.createdAt.substring(0, 10)}</td>
                    </tr>
                    <div>
                      <strong>Name:</strong> {order.shippingAddress.fullName}{" "}
                    </div>
                    <div>
                      <strong>Address: </strong> {order.shippingAddress.address}
                      ,{order.shippingAddress.city},{" "}
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
                            {item.qty} x €{item.price} = €
                            {item.qty * item.price}
                          </div>
                        </div>
                      </li>
                    ))}
                  </div>
                ) : null}
              </tbody>
            ))
          : null}
      </table>
    </div>
  );
};

export default OrderHistory;
