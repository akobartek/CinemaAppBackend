const Joi = require("joi");
const mongoose = require("mongoose");

mongoose.Schema.Types.String.checkRequired(v => v != null);
const Order = mongoose.model(
  "Orders",
  new mongoose.Schema({
    movieId: {
      type: Number,
      required: true
    },
    date: {
      type: String,
      required: true,
      trim: true,
      minlength: 8,
      maxlength: 10
    },
    time: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 5
    },
    seats: [
      {
        type: String,
        required: true,
        trim: true
      }
    ],
    ticketType: {
      type: Number,
      required: true
    },
    orderDate: {
      type: Date,
      default: Date.now
    }
  })
);

function validateOrder(order) {
  const schema = {
    movieId: Joi.number().required(),
    date: Joi.string()
      .min(8)
      .max(10)
      .required(),
    time: Joi.string()
      .min(3)
      .max(5)
      .required(),
    seats: Joi.required(),
    ticketType: Joi.number().required(),
    orderDate: Joi.date()
  };

  return Joi.validate(order, schema);
}

exports.Order = Order;
exports.validate = validateOrder;
