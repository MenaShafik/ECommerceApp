import React from 'react'
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import LeftButton from './LeftButton';
import RightButton from './RightButton';
import { useParams } from 'react-router-dom';
import ViewProductDetailsHook from '../../Hook/Products/ViewProductDetailsHook';

export default function ProductGallery() {
const {id} = useParams();
const [item,imgs,cat,brand] =ViewProductDetailsHook(id);
    return (
        <div 
className="product-gallary-card d-flex">
            <ImageGallery items={imgs}
 showFullscreenButton={false}
                isRTL={true}
                showPlayButton={false}
                showThumbnails={false}
                renderRightNav={RightButton}
                renderLeftNav={LeftButton}
            />
        </div>
    )
}
