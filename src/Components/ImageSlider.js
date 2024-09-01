import React from 'react'
import { useEffect, useState } from 'react'

const ImageSlider = () => {

    const [images, setImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

   

    useEffect( () =>{
            const fetchImages = async () => {
                const accessKey = 'ykSlbTB79Cx6nQ0Qgr5VJAGpjJUbtrfUhi5ie8XOFNA'; // Use the access key directly
                try{
                        const response =await fetch( 
                            `https://api.unsplash.com/photos/random?count=5&client_id=${accessKey}`
                        );
                        if(!response.ok){
                            throw new Error('Failed to fetch images');
                        }

                        const data = await response.json();
                        setImages(data.map(img => img.urls.full));

                }
                catch(error){
                    console.log('Error fetching images:', error);

                }
            };

            fetchImages();
    }, []);
  return (

    <div className='slider'>

        {images.length > 0 ? (
             <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
         ) : (
              <p>Loading images...</p>
      )}
      
    </div>
  )
}

export default ImageSlider
