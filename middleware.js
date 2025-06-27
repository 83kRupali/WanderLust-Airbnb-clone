// const Listing = require("./models/listing.js")
// const ExpressError = require("./utils/ExpressError.js");
// const {listingSchema, reviewSchema} = require("./schema.js");

// module.exports.isLoggedIn = (req, res, next) =>{
//     //console.log(req.path,"..", req.originalUrl);

//     //console.log(req.user);
//     if(!req.isAuthenticated()){
//         // redirectURL save

//         req.session.redirectUrl = req.originalUrl;
//         req.flash("error", "you must be logged in to create listing!");
//         return res.redirect("/login");
//     }
// }


// // module.exports.saveRedirectUrl = (req, res, next) =>{
// //     if(req.session.redirectUrl){
// //         res.locals.redirectUrl = req.session.redirectUrl;
// //     }
// //     next();
// // }

// module.exports.saveRedirectUrl = (req, res, next) => {
//     if (req.session.redirectUrl) {
//         res.locals.redirectUrl = req.session.redirectUrl;
//     }
//     next();
// };


// // module.exports.isOwner =async (req , res, next) =>{
// //      let { id } = req.params;

// //     let listing = await Listing.findById(id);

// //     if(!listing.owner.equals(res.locals.currUser._id)){
// //         req.flash("error", "you don't have permission to edit");
// //         return res.redirect(`/listings/${id}`);
// //     }
// // }

// module.exports.isOwner = async (req, res, next) => {
//     let { id } = req.params;
//     let listing = await Listing.findById(id);

//     if (!listing.owner.equals(res.locals.currUser._id)) {
//         req.flash("error", "You are not the owner of this listings");
//         return res.redirect(`/listings/${id}`);
//     }

//     // ✅ This line is missing in your code:
//     next();
// };



// module.exports.validateListing = (req, res, next) =>{
//     let {error} = listingSchema.validate(req.body);

//     if(error){
//         let errMsg = error.details.map((el) =>el.message).join(",");
//         throw new ExpressError(400, errMsg);
//     }
//     else{
//         next();
//     }
// };


// module.exports.validateReview = (req, res, next) =>{
//     let {error} = reviewSchema.validate(req.body);

//     if(error){
//         let errMsg = error.details.map((el) =>el.message).join(",");
//         throw new ExpressError(400, errMsg);
//     }
//     else{
//         next();
//     }
// };



// module.exports.isReviewAuthor =async (req, res, next) =>{
//     let {id ,reviewId } = req.params;

//     let review = await Review.findById(reviewId);

//     if (!review.author.equals(res.locals.currUser._id)) {
//         req.flash("error", "You are not the author of this review");
//         return res.redirect(`/listings/${id}`);
//     }

//     // ✅ This line is missing in your code:
//     next();
// };



















const Listing = require("./models/listing.js");
const Review = require("./models/review.js");
const ExpressError = require("./utils/ExpressError.js");
const { listingSchema, reviewSchema } = require("./schema.js");

// ✅ Check if user is logged in
module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.session.redirectUrl = req.originalUrl;
        req.flash("error", "You must be logged in to perform this action!");
        return res.redirect("/login");
    }
    next(); // ✅ MISSING in your code
};

// ✅ Save the original requested URL
module.exports.saveRedirectUrl = (req, res, next) => {
    if (req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
};

// ✅ Check if the current user is the owner of the listing
module.exports.isOwner = async (req, res, next) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);

    if (!listing) {
        req.flash("error", "Listing not found.");
        return res.redirect("/listings");
    }

    if (!listing.owner.equals(res.locals.currUser._id)) {
        req.flash("error", "You don't have permission to modify this listing.");
        return res.redirect(`/listings/${id}`);
    }

    next(); // ✅ MISSING in your original version
};

// ✅ Validate Listing Schema using Joi
module.exports.validateListing = (req, res, next) => {
    const { error } = listingSchema.validate(req.body);
    if (error) {
        const errMsg = error.details.map((el) => el.message).join(", ");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
};

// ✅ Validate Review Schema using Joi
module.exports.validateReview = (req, res, next) => {
    const { error } = reviewSchema.validate(req.body);
    if (error) {
        const errMsg = error.details.map((el) => el.message).join(", ");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
};

// ✅ Check if the current user is the author of the review
module.exports.isReviewAuthor = async (req, res, next) => {
    const { id, reviewId } = req.params;
    const review = await Review.findById(reviewId);

    if (!review) {
        req.flash("error", "Review not found.");
        return res.redirect(`/listings/${id}`);
    }

    if (!review.author.equals(res.locals.currUser._id)) {
        req.flash("error", "You don't have permission to delete this review.");
        return res.redirect(`/listings/${id}`);
    }

    next(); // ✅ MISSING in your code
};
