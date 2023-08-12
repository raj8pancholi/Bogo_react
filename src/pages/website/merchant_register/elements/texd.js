// {/* Display selected images */}
// {selectedImages.length > 0 ? (
//     <div style={{ border: '2px dashed #cccccc', minHeight: '60px', width: '100%' ,borderRadius:'5px'}}>

//         <ul style={{ display: 'flex', flexWrap: 'wrap',border: 'none', }}>
//             {selectedImages.map((file, index) => (
//                 <li key={index} style={{ listStyle: 'none', margin: '10px' }}>
//                     <img
//                         src={URL.createObjectURL(file)}
//                         alt={`Selected Image ${index}`}
//                         style={{ height: '100px', width: '100px', objectFit: 'cover', borderRadius: '10px' }}
//                     />
//                     <Link onClick={() => removeImage(index)} style={{ position: 'absolute', marginLeft: -31, backgroundColor: 'transparent', border: 'none', }}>
//                         <Cancel size="20px" color='#fff' />
//                     </Link>
//                 </li>
//             ))}
//         </ul>
//     </div>
// ):<div style={{ border: '2px dashed #cccccc', minHeight: '60px', width: '100%' ,borderRadius:'5px',alignItems:'center',justifyContent:'center',display:'flex'}}>
// <img src="/images/gallery_img.png" alt="Upload Image"  />

// </div>}
// <div {...getRootProps()} style={dropzoneStyle}>
//     <input {...getInputProps()} />
//     <label className="upload__btn">
//         <p >Upload images</p>
//     </label>

// </div>	                                  




// const [selectedImages, setSelectedImages] = useState([]);
// console.log('====', selectedImages);

// const onDrop = useCallback(acceptedFiles => {
// // Update the state with the selected images
// setSelectedImages([...selectedImages, ...acceptedFiles]);
// }, [selectedImages]);

// const removeImage = (index) => {
// setSelectedImages((prevImages) => {
// const updatedImages = [...prevImages];
// updatedImages.splice(index, 1);
// return updatedImages;
// });
// };

// const { getRootProps, getInputProps } = useDropzone({
// accept: 'image/*',
// multiple: true,
// onDrop,
// });


// import React, { useCallback, useState } from 'react';
// import { Cancel } from '@mui/icons-material';

// import { useDropzone } from 'react-dropzone';
// import { Link } from 'react-router-dom';

