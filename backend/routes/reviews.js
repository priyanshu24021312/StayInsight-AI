const express = require("express");

const {
  getReviews,
  getReviewById,
  createReview,
  updateReview,
  deleteReview,
  searchReviews,
} = require("../controllers/reviewController");

const router = express.Router();

// Search reviews
router.get("/search", searchReviews);

// Get all reviews
router.get("/", getReviews);

// Get single review
router.get("/:id", getReviewById);

// Create review
router.post("/", createReview);

// Update review
router.put("/:id", updateReview);

// Delete review
router.delete("/:id", deleteReview);

module.exports = router;