import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import {firestore, storageRef} from "../firebase";

function StoreMain() {
    const [storeList, setStoreList] = useState([]);
    useEffect(() => {
        firestore.collection("m_store").get()
            .then(function (doc) {
                if (doc.size) {
                    setStoreList(Array.from(doc.docs.values()));
                } else {
                }
            })
            .catch(function (error) {
                console.error("Error adding document: ", error);
            });
        return () => {
        };
    }, []);

    const mapToComponent = data => {
        return data.map((store, i) => {
            return (<StoreInfo store={store} key={i}/>);
        });//map end
    };//maptoComponent end

    return (
        <div>
            {mapToComponent(storeList)}
        </div>
    );
}

function StoreInfo({store}) {

    const storeData = store.data();
    const [imageUrl, setImageUrl] = useState('');
    const imgRef = storageRef.child(storeData.image);
    imgRef.getDownloadURL().then(function (url) {
        // Insert url into an <img> tag to "download"
        //console.log(url);
        setImageUrl(url);
    });

    return (
        <Link to={{
            pathname: `/main/store/${store.id}`
            , state: {storeData, imageUrl}
        }}>
            <div className="content__store">
                <div className="store__store">
                    <div className="store__image"><img src={imageUrl}/></div>
                    <div className="store__detail">
                        <div className="detail__title">
                            <div className="detail__name">{storeData.name}</div>
                            <div className="detail__distance">0.7km</div>
                            <div className="detail__likes">좋아요{storeData.likeCount}</div>
                        </div>
                        <div className="detail__description">
                            {storeData.description}
                        </div>
                        <div className="store__review">
                            리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰
                            <div className="review__likes">리뷰 좋아요</div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default StoreMain;
