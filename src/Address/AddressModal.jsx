import React, { useEffect } from 'react'
import Modal from 'react-modal'
import { Link, useLocation } from 'react-router-dom';

function AddressModal(props) {
  // console.log(props);
  const location = useLocation();
  const addressId = props.data.addressId;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    const newUrl = `${location.pathname}?addressId=${addressId}`;
    window.history.replaceState(null, null, newUrl);
  }

  function closeModal() {
    setIsOpen(false);
    const newUrl = location.pathname;
    window.history.replaceState(null, null, newUrl);
  }

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
  return (
    <>
    <div>
        <button onClick={openModal} type="button" className=" inline-block px-6 py-2.5 float-right my-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
            edit
        </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Edit Address"
      >
        <button className='inline-block float-right -mt-5' onClick={closeModal}>
        <svg class="h-8 w-8 text-red-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="18" y1="6" x2="6" y2="18" />  <line x1="6" y1="6" x2="18" y2="18" /></svg>
        </button>        
    <form >
      <div class="grid md:grid-cols-2 grid-cols-1">
        <div>
            <label for="first_name" class="mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">First name</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={props.data.firstName}/>
        </div>
        <div>
            <label for="last_name" class=" mb-1 text-sm font-medium text-gray-900 dark:text-gray-300 md:ml-3">Last name</label>
            <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:ml-3 p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={props.data.lastName}/>
        </div>
        <div>
            <label for="phone" class="mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Phone</label>
            <input type="phone" id="street" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={props.data.mobile}/>
        </div>
        <div>
            <label for="street" class="mb-1 text-sm font-medium text-gray-900 dark:text-gray-300 md:ml-3">Street</label>
            <input type="text" id="street" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:ml-3 p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={props.data.street}/>
        </div>
        <div>
            <label for="landmark" class="mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Landmark</label>
            <input type="text" id="landmark" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={props.data.landmark}/>
        </div>
        <div>
            <label for="city" class="mb-1 text-sm font-medium text-gray-900 dark:text-gray-300 md:ml-3">City</label>
            <input type="text" id="city" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:ml-3 p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={props.data.city}/>
        </div>
        <div>
            <label for="pincode" class="mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Pin Code</label>
            <input type="text" id="pincode" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={props.data.pincode}/>
        </div>
        <div>
            <label for="state" class="mb-1 text-sm font-medium text-gray-900 dark:text-gray-300 md:ml-3">State</label>
            <input type="text" id="state" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:ml-3 p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={props.data.state}/>
        </div>
        <div>
            <label for="country" class="mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Country</label>
            <input type="text" id="country" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={props.data.country}/>
        </div>
        </div>
    <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-2">Update</button>
    </form>

      </Modal>
    </div>
    </>
  )
}

export default AddressModal