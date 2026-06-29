const reviews = require("../data/reviews");

// GET all reviews
const getReviews = (req, res) => {
  res.status(200).json(reviews);
};

// GET single review
const getReviewById = (req, res) => {
  const id = parseInt(req.params.id);

  const review = reviews.find((r) => r.id === id);

  if (!review) {
    return res.status(404).json({
      message: "Review not found",
    });
  }

  res.status(200).json(review);
};

// POST new review
const createReview = (req, res) => {
  const { guest, hotel, rating, sentiment, review } = req.body;

  if (!guest || !hotel || !rating || !sentiment || !review) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  const newReview = {
    id: reviews.length + 1,
    guest,
    hotel,
    rating,
    sentiment,
    review,
  };

  reviews.push(newReview);

  res.status(201).json(newReview);
};

// PUT update review
const updateReview = (req, res) => {
  const id = parseInt(req.params.id);

  const index = reviews.findIndex((r) => r.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: "Review not found",
    });
  }

  reviews[index] = {
    ...reviews[index],
    ...req.body,
  };

  res.status(200).json(reviews[index]);
};

// DELETE review
const deleteReview = (req, res) => {
  const id = parseInt(req.params.id);

  const index = reviews.findIndex((r) => r.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: "Review not found",
    });
  }

  reviews.splice(index, 1);

  res.status(204).send();
};

// SEARCH reviews
const searchReviews = (req, res) => {
  const query = req.query.q?.toLowerCase() || "";

  const result = reviews.filter(
    (r) =>
      r.guest.toLowerCase().includes(query) ||
      r.hotel.toLowerCase().includes(query) ||
      r.review.toLowerCase().includes(query)
  );

  res.status(200).json(result);
};

module.exports = {
  getReviews,
  getReviewById,
  createReview,
  updateReview,
  deleteReview,
  searchReviews,
};