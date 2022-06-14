import React, { useState, useEffect, useReducer, useRef } from 'react';

const Modal = () => {
  const [isShown, setIsShown] = useState(false);

  const showModal = () => {
    setIsShown(true);
  };

  const closeModal = () => {
    setIsShown(false);
  };

  const dynammicModalClass = () => (isShown ? { display: 'block' } : '');

  useEffect(() => {
    if (!sessionStorage.popupModal) {
      const timer = setTimeout(() => {
        setIsShown(true);
        sessionStorage.popupModal = 1;
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);


  const modalClose  = useRef();
  const modalBox = useRef();

  useEffect(() => {
    if(modalClose.current){        
          modalClose.current.addEventListener("click", function() {
            modalBox.current.classList.add('hidden')
          });
    }
    return () => {
      if(modalClose.current){  
          modalClose.current.removeEventListener("click", function() {
            modalBox.current.classList.remove('hidden')
          });
        }
        }});


  

  // return isShown ? <h3>Modal content</h3> : null;
  return isShown ? (
    <>
  <div ref={modalBox} className="min-w-[80vw] md:min-w-[30vh] min-h-max grid grid-rows-3 items-center -translate-y-1/2 p-6 bg-white rounded-lg top-1/2 left-1/2 -translate-x-1/2 absolute z-50 shadow-2xl">
    <span className="text-2xl text-center font-bold underline">Development Build</span>
    <p className="text-center">NOTE: This is a development build and is not a true representation of the final product!</p>
    <button ref={modalClose} className="p-3 bg-error rounded-lg w-full text-white">Proceed</button>
  </div>
 </>
  ) :    null ;
};

export default Modal;