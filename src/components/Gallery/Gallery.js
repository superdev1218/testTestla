import React from 'react'
import ImageGallery from 'react-image-gallery'
import {Link} from 'react-router-dom'

import "react-image-gallery/styles/css/image-gallery.css";
import style from './Gallery.module.scss'
import './Gallery.module.scss'

const image1 = 'images/audio.jpg';
const image2 = 'images/model-3.jpg';
const image3 = 'images/model-x.jpg';


const images = [
    {
        original: image1,
        thumbnail: image1,
    },
    {
        original: image2,
        thumbnail: image2,
    },
    {
        original: image3,
        thumbnail: image3,
    }
];

const Gallery = () => {
    return (
        <div className={style.gcontainer}>
            <ImageGallery items={images} thumbnailPosition='left' showFullscreenButton={false} showPlayButton={false} showNav={false} className={style.gallery}/>
            <Link to="/" className={style.close}>&times;</Link>
        </div>
    )
}

export default Gallery
