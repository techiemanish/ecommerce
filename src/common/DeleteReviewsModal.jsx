import React from "react";
import Modal from "react-modal";
import { useLocation, useNavigate } from "react-router-dom";
import Loader from "../utils/Loader";
import axios from "axios";
import { toast } from "react-hot-toast";

function DeleteReviewsModal(props) {
  let data = JSON.parse(localStorage.getItem("loggedInUser"));
  let token = data.jwtToken.token;

  const location = useLocation();
  const reviewId = props.data.reviewId;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    const newUrl = `${location.pathname}?reviewId=${reviewId}`;
    window.history.replaceState(null, null, newUrl);
  }

  function closeModal() {
    setIsOpen(false);
    const newUrl = location.pathname;
    window.history.replaceState(null, null, newUrl);
  }

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const handleDelete = () =>{
    axios.delete(`https://ecommerce-api-4fpf.onrender.com/api/reviews/${reviewId}`,{headers}).
    then((res)=>{
      toast.success(res)
      closeModal();
    })
  }

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "50%",
      bottom: "-10%",
      marginRight: "-40%",
      transform: "translate(-50%, -50%)",
    },
  };
  return (
    <>
      <div>
        <button
          onClick={openModal}
          type="button"
          className=" inline-block px-6 py-2.5 float-right my-3 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Delete
        </button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Edit Address"
        >
          <button
            className="inline-block float-right -mt-5"
            onClick={closeModal}
          >
            <svg
              class="h-8 w-8 text-red-500"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <line x1="18" y1="6" x2="6" y2="18" />{" "}
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <div class="mt-4 flex justify-center">
            <p class="mr-4 text-gray-600">
              Are you sure you want to delete this review?
            </p>
          </div>
          <center>
            <button onClick={handleDelete} class="mt-5 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
              Delete
            </button>
          </center>
        </Modal>
      </div>
    </>
  );
}

export default DeleteReviewsModal;
