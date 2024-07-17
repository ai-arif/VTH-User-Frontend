import { AuthContext } from "@/contexts/AuthProvider";
import axiosInstance from "@/utils/axiosInstance";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const { user } = useContext(AuthContext);

  const handleReviews = async (event) => {
    event.preventDefault();
    const form = event.target;
    const feedback = form.feedback.value;

    if (rating <= 0) {
      return toast.error("select Rating!");
    }

    const newReview = {
      user: user?._id,
      name: user?.fullName,
      rating,
      feedback,
    };

    try {
      const response = await axiosInstance.post("/user-feedback", newReview);
      if (response.data.success) {
        toast.success(response?.data?.message);
        setRating(0);
        form.reset();
      } else {
        toast.error(response?.data?.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="tw-mx-4 tw-my-4">
      <h5>Please Feel Free to your feedback</h5>
      <form onSubmit={handleReviews}>
        <div>
          <Rating
            className="tw-mb-5"
            style={{ maxWidth: 150 }}
            value={rating}
            onChange={setRating}
            isRequired
          />
        </div>
        <div className="tw-pb-6">
          <textarea
            required
            placeholder="Your Feedback"
            className="tw-border-gray-3 p-2 tw-w-full tw-rounded tw-border-[1px] tw-outline-primary lg:tw-rounded-md"
            name="feedback"
            rows="4"
          />
        </div>
        <input
          type="submit"
          className="tw-rounded tw-border-0 tw-bg-primary tw-px-3 tw-py-2 tw-text-sm tw-font-medium tw-text-white tw-no-underline lg:tw-rounded-md lg:tw-px-4 lg:tw-py-3"
          value="Submit Your Review"
        />
      </form>
    </section>
  );
};

export default Feedback;
