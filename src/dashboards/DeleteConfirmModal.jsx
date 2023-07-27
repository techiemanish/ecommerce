import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'
import DeleteAccount from './DeleteAccount';
import { useNavigate } from 'react-router-dom';

function DeleteConfirmModal(props) {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState('');
    const isDeleteButtonEnabled = inputValue === 'DELETE';

    const {closeModal} =props
    
    
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isDeleteButtonEnabled) {
        DeleteAccount();
        navigate("/login", { replace: true })
        closeModal();
    }
    
  };

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: '50%',
          bottom: '-10%',
          marginRight: '-40%',
          transform: 'translate(-50%, -50%)',
        },
      };
  return (<>
      <Modal
        isOpen={true}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Delete Account"
      >
        <button className='inline-block float-right -mt-5' onClick={closeModal}>
        <svg class="h-8 w-8 text-red-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="18" y1="6" x2="6" y2="18" />  <line x1="6" y1="6" x2="18" y2="18" /></svg>
        </button>         
      <h2 class="text-2xl md:text-3xl font-semibold text-center mb-4 md:mb-6">Account Deletion Warning</h2>
      <p class="text-sm md:text-base text-gray-700 mb-3">
        You are about to permanently delete your account. This action cannot be undone, and all your data, settings, and content will be permanently lost.
      </p>
      <p class="text-sm md:text-base text-gray-700 mb-3">
        To proceed with the account deletion, please type the word "DELETE" in the input below:
      </p>
      <div class="flex items-center justify-center mb-4">
        <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="text" placeholder="Type 'DELETE' to confirm" class="border border-gray-300 rounded-lg px-3 py-2 md:px-4 md:py-2 w-full md:w-48 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
      </div>
      <p class="text-xs md:text-sm text-red-600 mb-6">
        Warning: Deleting your account will remove all your personal information from our system. You will lose access to your orders, wishlist, and personal details. Your account cannot be recovered once deleted.
      </p>
      <center>
      <button
            className={`px-2 py-1 md:px-4 md:py-2 text-white rounded-md ${
              isDeleteButtonEnabled ? 'bg-red-600 hover:bg-red-700 focus:ring-2 focus:ring-red-600' : 'bg-gray-400 cursor-not-allowed'
            }`}
            onClick={handleSubmit}
            disabled={!isDeleteButtonEnabled} >
                Delete Account
                </button>
      </center>
    </Modal>
  </>
  )
}

export default DeleteConfirmModal