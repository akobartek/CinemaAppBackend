const { Order, validate } = require("../models/order");
const express = require("express");
const router = express.Router();

/**
 * @api {get} /api/orders/ Get orders from database
 * @apiName GetOrders
 * @apiGroup Orders
 *
 * @apiSuccess {json} Orders Array of orders.
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *          {
 *              "_id": "3ab30d7f1b26580016067995",
 *              "movieId": 343611,
 *              "date": "12.05.2018",
 *              "time": "20:00",
 *              "seats": ["1-1", "1-2", "1-3"],
 *              "ticketType": 0,
 *              "orderDate": "2019-04-14T12:44:36.963Z"
 *              "__v": 0
 *          }
 *      ]
 */
router.get("/", async (req, res) => {
  if (!req.body.movieId) return res.send(await Order.find().sort("orderDate"));
  else
    return res.send(
      await Order.find({
        movieId: req.body.movieId,
        date: req.body.date,
        time: req.body.time
      })
    );
});

/**
 * @api {post} /api/orders/ Add new order to database
 * @apiName AddOrder
 * @apiGroup Orders
 *
 * @apiParam {String} movieId Movie that order was made for.
 * @apiParam {String} date Date of film show.
 * @apiParam {String} time Time of film show.
 * @apiParam {String} seats Seats that was reserved with this order.
 * @apiParam {String} ticketType Type of tickets reserved.
 *
 * @apiSuccess {json} Order Order that was saved.
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *      {
 *          "_id": "3ab30d7f1b26580016067995",
 *          "movieId": 343611,
 *          "date": "12.05.2018",
 *          "time": "20:00",
 *          "seats": ["1-1", "1-2", "1-3"],
 *          "ticketType": 0,
 *          "orderDate": "2019-04-14T12:44:36.963Z"
 *          "__v": 0
 *      }
 *
 * @apiError InvalidParams Invalid params sent.
 */
router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const order = new Order({
    movieId: req.body.movieId,
    date: req.body.date,
    time: req.body.time,
    seats: req.body.seats,
    ticketType: req.body.ticketType
  });
  await order.save();

  res.send(order);
});

/**
 * @api {delete} /api/orders/:id Delete order from database
 * @apiName DeleteOrder
 * @apiGroup Orders
 *
 * @apiParam {String} :id Order id that the user wants to delete.
 *
 * @apiSuccess {json} Order Order that has been deleted.
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *      {
 *          "_id": "3ab30d7f1b26580016067995",
 *          "movieId": 343611,
 *          "date": "12.05.2018",
 *          "time": "20:00",
 *          "seats": ["1-1", "1-2", "1-3"],
 *          "ticketType": 0,
 *          "orderDate": "2019-04-14T12:44:36.963Z"
 *          "__v": 0
 *      }
 *
 * @apiError OrderNotFound The order with the given ID was not found!
 */
router.delete("/:id", async (req, res) => {
  let order = await Order.findByIdAndRemove(req.params.id);
  if (!order)
    return res.status(404).send("The order with the given ID was not found!");
  res.send(order);
});

/**
 * @api {get} /api/orders/:id Get order from database
 * @apiName GetOrder
 * @apiGroup Orders
 *
 * @apiHeader {String} x-auth-token Previously generated JWT.
 *
 * @apiParam {String} :id Order id that the user wants to get.
 *
 * @apiSuccess {json} Order Order that the user want.
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *      {
 *          "_id": "3ab30d7f1b26580016067995",
 *          "movieId": 343611,
 *          "date": "12.05.2018",
 *          "time": "20:00",
 *          "seats": ["1-1", "1-2", "1-3"],
 *          "ticketType": 0,
 *          "orderDate": "2019-04-14T12:44:36.963Z"
 *          "__v": 0
 *      }
 *
 * @apiError OrderNotFound The order with the given ID was not found!
 */
router.get("/:id", async (req, res) => {
  let order = await Order.findById(req.params.id);
  if (!order)
    return res.status(404).send("The order with the given ID was not found!");
  res.send(order);
});

module.exports = router;
