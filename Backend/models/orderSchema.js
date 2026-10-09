const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const orderSchema = new Schema({

    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    name: {
        type: String,
        required: true
    },

    qty: {
        type: Number,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    mode: {
        type: String,
        enum: ["BUY", "SELL"],
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now
    }

});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;