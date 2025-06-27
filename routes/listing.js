const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");

const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const Listing = require("../models/listing.js");

const multer = require('multer');
const { storage } = require('../CloudConfig');
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
});

const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({accessToken:mapToken}); 

// ========================
// INDEX Route - All listings
// ========================
router.get(
  "/",
  wrapAsync(async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index", { allListings });
  })
);

// ========================
// NEW Route - Form to create new listing
// ========================
router.get("/new", isLoggedIn, (req, res) => {
  res.render("listings/new");
});

// ========================
// CREATE Route - Add listing to DB
// ========================

router.post('/', isLoggedIn, upload.single('image'), async (req, res) => {

  let response = await geocodingClient
    .forwardGeocode({
      query: req.body.listing.location,
      limit: 1
  })
  .send();

  //console.log(response.body.features[0].geometry);
  //res.send("done!");

  try {
    const listingData = req.body.listing;

    // ✅ Add image if uploaded
    if (req.file) {
      listingData.image = {
        url: req.file.path,
        filename: req.file.filename
      };
    }

    // ✅ Set the currently logged-in user as owner
    listingData.owner = req.user._id;

    // ✅ Initialize reviews as an empty array
    listingData.reviews = [];

    // ✅ Create and save the new listing
    const newListing = new Listing(listingData);
    newListing.geometry = response.body.features[0].geometry;

    let savelisting = await newListing.save();
    
    console.log(savelisting);

    req.flash("success", "✅ New listing created!");
    res.redirect("/listings");
  } catch (err) {
    console.error("❌ Error creating listing:", err);
    res.status(500).send('❌ Server error: ' + err.message);
  }
});






// ========================
// SHOW Route - Show details of one listing
// ========================
router.get(
  "/:id",
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id)
      .populate({
        path: "reviews",
        populate: { path: "author" }, // spelling must be `author`, not `auther`
      })
      .populate("owner");

    if (!listing) {
      req.flash("error", "Listing you requested does not exist!");
      return res.redirect("/listings");
    }

    res.render("listings/show", { listing});
  })
);

// ========================
// EDIT Route - Form to edit listing
// ========================
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);

    if (!listing) {
      req.flash("error", "Listing you requested does not exist!");
      return res.redirect("/listings");
    }

    let originalImageUrl  = listing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_250");

    res.render("listings/edit", { listing , originalImageUrl});
  })
);

// ========================
// UPDATE Route - Update listing in DB
// ========================
router.put(
  "/:id",
  isLoggedIn,
  isOwner,
  upload.single('image'),
  validateListing,
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

    if(typeof req.file !== "undefined"){
      let url = req.file.path;
      let filename = req.file.filename;
      listing.image={url, filename};
      await listing.save();
    }
    req.flash("success", "Listing Updated");
    res.redirect(`/listings/${id}`);

  })
);  

// ========================
// DELETE Route - Delete a listing
// ========================
router.delete(
  "/:id",
  isLoggedIn,
  isOwner,
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing Deleted!");
    res.redirect("/listings");
  })
);

module.exports = router;
