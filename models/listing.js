const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	description: String,
	image: {
		filename: String,
		url: {
			type: String,
			default:
				"https://cdn.pixabay.com/photo/2018/08/16/08/39/hallstatt-3609863_1280.jpg",
		},
	},
	price: Number,
	location: String,
	country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
