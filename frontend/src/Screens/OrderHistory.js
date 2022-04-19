import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";

import { listOrderMine } from "../actions/orderActions.js";

const OrderHistory = (props) => {
  const orderMineList = useSelector((state) => state.orderMineList);
  console.log("orderMineList");
  console.log(orderMineList);

  const { orders } = orderMineList;
  console.log("orders");
  console.log(orders);

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
        {orders !== undefined
          ? orders.map((order) => (
              <tbody key={order._id}>
                {order.user === user_id ? (
                  <div id={order._id}>
                    <tr className="long">
                      <th>ID</th>
                      <td>{order._id}</td>
                    </tr>
                    <tr>
                      <th>Date</th>
                      <td>{order.createdAt.substring(0, 10)}</td>
                    </tr>
                    <tr>
                      <th>Full Name</th>
                      <td>{order.shippingAddress.fullName}</td>
                    </tr>
                    <tr>
                      <th>Address</th>
                      <td>{order.shippingAddress.address}</td>
                    </tr>
                    <tr>
                      <th>Payment Method</th>
                      <td>{order.paymentMethod}</td>
                    </tr>
                    <tr>
                      <th>Total Price</th>
                      <td>{order.totalPrice} €</td>
                    </tr>
                    <div className="order">
                      {order.orderItems.map((item) => (
                        <li key={item.product} className="order">
                          <div className="">
                            <div>
                              <img
                                src={item.image}
                                alt={item.name}
                                className="small"
                              ></img>
                            </div>
                            <tr>
                              <th>Item Name</th>
                              <td>{item.name}</td>
                            </tr>
                            <tr>
                              <th>Quantity</th>
                              <td>{item.qty}</td>
                            </tr>
                            <tr>
                              <th>Item Price</th>
                              <td>{item.price} €</td>
                            </tr>
                          </div>
                        </li>
                      ))}
                    </div>
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
