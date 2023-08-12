// import React, { useState, useEffect } from 'react';

// function Counter() {
//   const [count, setCount] = useState(27);

//   useEffect(() => {
//     // console.log('useEffect called' + count);
//     const interval = setInterval(() => {
//         setCount(count + 1);

        
//     }, 2000);

//     // if count is 5, stop the interval
//     if (count === 30) {
//         clearInterval(interval);
//         //count value now is again set 27
//         setCount(20);
//     }
//   })

  

//   return (
//     <div>
//       <p>Count: {count}</p>
//       {/* <button onClick={() => setCount(count + 1)}>Increment</button> */}
//     </div>
//   );
// }

// export default Counter;




// import React, { useState } from 'react';
// import { Button, Modal } from 'react-bootstrap';

// export default function CompareOffer() {
//   const [showModal, setShowModal] = useState(false);

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   const handleOpenModal = () => {
//     setShowModal(true);
//   };

//   return (
//     <>
//       <div className="compare-text-box">
//         <h4 onClick={handleOpenModal}>COMPARE OFFER TYPES</h4>
//       </div>

//       <Modal show={showModal} onHide={handleCloseModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>Compare Offer Types</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {/* Add your modal content here */}
//           {/* For example: */}
//           <p>This is the content of the modal.</p>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleCloseModal}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

