import React, { useEffect, useState } from "react";
import "./Reviews.style.scss";
import { getReviews, addReview, likeReview, dislikeReview } from "../../services/review.api";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { useAuth } from "../../contexts/authContext";

const Reviews = ({ recipeId }) => {
  const [reviews, setReviews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [newReview, setNewReview] = useState(""); // Stochează textul review-ului nou
  const { token } = useAuth();
  const reviewsPerPage = 1; // Setează numărul de recenzii pe pagină


  const fetchReviews = async () => {
    try {
      const allReviews = await getReviews(recipeId);
      setReviews(allReviews);
      // setReviews(filteredReviews);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, [recipeId]);

  // Calculăm recenziile pentru pagina curentă
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

  // Schimbăm pagina curentă
  const nextPage = () => {
    if (currentPage < Math.ceil(reviews.length / reviewsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Adaugă un nou review
  const handleAddReview = async () => {
    if (!newReview.trim()) {
      alert("Please enter a review!");
      return;
    }
    try {
      await addReview(recipeId, newReview, token); 
      await fetchReviews();

    } catch (error) {
      console.error("Error adding review:", error);
    }
  };

  const handleLike = async (reviewId) => {
    await likeReview(reviewId);
    await fetchReviews();
  };

  const handleDislike = async (reviewId) => {
    await dislikeReview(reviewId);
    await fetchReviews();
  }

  return (
    <div className="Reviews">
      <div className="add-review">
        <h4>Add a Review</h4>
        <textarea
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
          placeholder="Write your review here..."
        />
        <button onClick={handleAddReview}>Submit</button>
      </div>
      <h3>Reviews</h3>
      {reviews.length > 0 ? (
        currentReviews.map((review, index) => (
          <div key={index} className="review">
            <p>
              <strong>User {review.username}</strong>
            </p>
            <p>{review.comment}</p>
            <div className="feedback">
              <span className="like" onClick={()=>handleLike(review.id)}>
                <FaThumbsUp /> {review.number_of_likes}
              </span>
              <span className="dislike" onClick={()=>handleDislike(review.id)}>
                <FaThumbsDown /> {review.number_of_dislikes}
              </span>
            </div>
          </div>
        ))
      ) : (
        <p className="no-reviews">No reviews available for this recipe.</p>
      )}

      <div className="pagination">
        <span
          className={`arrow ${currentPage === 1 ? "disabled" : ""}`}
          onClick={prevPage}
        >
          &#8592;
        </span>
        <span className="pageinfo">
          {currentPage} of {Math.ceil(reviews.length / reviewsPerPage)}
        </span>
        <span
          className={`arrow ${
            currentPage === Math.ceil(reviews.length / reviewsPerPage)
              ? "disabled"
              : ""
          }`}
          onClick={nextPage}
        >
          &#8594;
        </span>
      </div>

      
    </div>
  );
};

export default Reviews;
