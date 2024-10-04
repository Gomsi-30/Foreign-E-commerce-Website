'use client';
import { useState, useEffect } from 'react';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import Image from 'next/image'; // Import Next.js Image component

interface Review {
  rating: number;
  review: string;
  images: string[];
  customer: string;
  date: string;
  verified: boolean;
  location: string;
  helpful: number;
  notHelpful: number;
}

interface RatingData {
  averageRating: number;
  totalRatings: number;
  totalReviews: number;
  customerSentiments: string[];
  reviews: Review[];
}

const Reviews: React.FC = () => {
  const [ratingData, setRatingData] = useState<RatingData | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [newReview, setNewReview] = useState<Review>({
    rating: 0,
    review: '',
    images: [],
    customer: 'Anonymous', // Default value
    date: new Date().toISOString(), // Default to current date
    verified: false, // Default value
    location: 'Unknown', // Default value
    helpful: 0, // Default value
    notHelpful: 0, // Default value
  });

  const [visibleReviews, setVisibleReviews] = useState(3); // Initially show 3 reviews

  // Fetch the review data from the local JSON file
  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data: RatingData) => {
        // Calculate average rating dynamically
        const totalRatings = data.reviews.reduce((sum, review) => sum + review.rating, 0);
        const averageRating = totalRatings / data.reviews.length;
        setRatingData({ ...data, averageRating });
      });
  }, []);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleReviewChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewReview({ ...newReview, review: e.target.value });
  };

  const handleRatingChange = (star: number) => {
    setNewReview({ ...newReview, rating: star });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const imageFiles = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      setNewReview({ ...newReview, images: imageFiles });
    }
  };

  const handleSubmitReview = () => {
    if (ratingData) {
      const updatedReviews = [...ratingData.reviews, newReview];
      const totalRatings = updatedReviews.reduce((sum, review) => sum + review.rating, 0);
      const averageRating = totalRatings / updatedReviews.length;
      
      setRatingData({ ...ratingData, reviews: updatedReviews, averageRating });
    }
    handleCloseModal();
  };

  // Show more reviews (load 3 more)
  const handleViewMore = () => {
    setVisibleReviews((prev) => prev + 3);
  };

  // Function to set background color based on rating
  const getBackgroundColor = (rating: number) => {
    if (rating <= 2) return 'bg-red-600';
    if (rating === 3) return 'bg-yellow-500';
    if (rating >= 4) return 'bg-green-600';
    return '';
  };

  if (!ratingData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6 bg-white rounded-lg">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-gray-800 mb-7">Rating and Reviews</h1>

      {/* Ratings Summary */}
      <div className="flex items-center mb-3">
        <div className="text-3xl font-semibold text-green-600">
          {ratingData.averageRating.toFixed(1)}★
        </div>
        <div className="ml-4 text-gray-600">
          {ratingData.reviews.length} reviews
        </div>
      </div>

      {/* Rate Product Button */}
      <button
        onClick={handleOpenModal}
        className="mt-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-blue-700"
      >
        Rate Product
      </button>

      {/* Reviews Section */}
      <div>
        {ratingData.reviews.slice(0, visibleReviews).map((review, index) => (
          <div key={index} className="mt-4 border-b pb-4">
            {/* Rating and Review */}
            <div className="flex items-center">
              <div className={`${getBackgroundColor(review.rating)} text-white px-2 mt-3 rounded-md`}>
                {review.rating}★
              </div>
              <p className="ml-2 mt-3 text-gray-800">{review.review}</p>
            </div>

            {/* Review Images */}
            <div className="flex mt-4 space-x-2">
              {review.images.map((image, imgIndex) => (
                <Image
                  key={imgIndex}
                  src={image}
                  alt={`review-image-${imgIndex}`}
                  width={64}
                  height={64}
                  className="rounded-lg"
                />
              ))}
            </div>

            {/* Customer Info */}
            <div className="mt-2 text-sm text-gray-500">
              <span>{review.customer}</span> • <span>{review.date}</span>
              {review.verified && <span> • Verified Buyer</span>}
              <span> • {review.location}</span>
            </div>

            {/* Helpful Feedback */}
            <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <FaThumbsUp className="text-green-600" /> {/* Like Icon */}
                <span>{review.helpful}</span>
              </div>
              <div className="flex items-center space-x-1">
                <FaThumbsDown className="text-red-600" /> {/* Dislike Icon */}
                <span>{review.notHelpful}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* "View More" Button */}
      {visibleReviews < ratingData.reviews.length && (
        <button
          onClick={handleViewMore}
          className="mt-4 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
        >
          View More
        </button>
      )}

      {/* Modal Popup */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-bold mb-4">Rate Product</h2>

            {/* Star Rating Input */}
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">Your Rating:</label>
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    onClick={() => handleRatingChange(star)} // Sets rating on click
                    onMouseEnter={() => setHoverRating(star)} // Highlights on hover
                    onMouseLeave={() => setHoverRating(newReview.rating)} // Resets to selected rating on leave
                    className={`w-8 h-8 cursor-pointer ${
                      star <= (hoverRating || newReview.rating)
                        ? 'text-yellow-400'
                        : 'text-gray-300'
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
            </div>

            {/* Review Input */}
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">Your Review:</label>
              <textarea
                value={newReview.review}
                onChange={handleReviewChange}
                className="w-full p-2 border border-gray-300 rounded"
                rows={4}
              ></textarea>
            </div>

            {/* Image Upload */}
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">Upload Images:</label>
              <input type="file" multiple onChange={handleImageChange} className="w-full" />
            </div>

            <div className="flex justify-end space-x-2">
              <button
                onClick={handleCloseModal}
                className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmitReview}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Submit Review
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reviews;
