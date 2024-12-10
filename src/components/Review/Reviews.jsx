import React, { useEffect, useState } from "react";
import "./Reviews.style.scss";
import { getReviews } from "../../services/review.api";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

const Reviews = ({ recipeId }) => {
  const [reviews, setReviews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 1; // Setează numărul de recenzii pe pagină

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const allReviews = await getReviews();
        const filteredReviews = allReviews.filter(
          (review) => review.RecipeId === recipeId.toString()
        );
        setReviews(filteredReviews);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

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

  return (
    <div className="Reviews">
      <h3>Reviews</h3>
      {reviews.length > 0 ? (
        currentReviews.map((review, index) => (
          <div key={index} className="review">
            <p>
              <strong>User {review.UserId}</strong>
            </p>
            <p>{review.Comment}</p>
            <div className="feedback">
              <span className="like">
                <FaThumbsUp /> {review.NoOfLikes}
              </span>
              <span className="dislike">
                <FaThumbsDown /> {review.NoOfDislikes}
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
