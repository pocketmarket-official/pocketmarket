import React, {useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

const temp = [
    {
        id: 1
        ,address: "서울시 송파구 문정동"
        ,description: "귤 맛있징~"
        ,image: "festival/festival1.jpeg"
        ,name: "귤축제"
    },
    {
        id: 2
        ,address: "서울시 강남구 서초동"
        ,description :"고양이들아 모여라"
        ,image: "festival/festival2.jpeg"
        ,name: "고양이축제"
    }
];

function Festival() {
    const [festivalList, setFestivalList] = useState([]);
    useEffect(() => {
        console.log('마운트됨');
        axios.get('http://localhost:3001')
            .then(res => {
                console.log(res);
            })

        setFestivalList(temp);
        /*firestore.collection("m_festival").get()
            .then(function(doc) {
                if (doc.size) {
                    setFestivalList(Array.from(doc.docs.values()));
                } else {
                    console.log("no data");
                }
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });*/
        return () => {
            console.log('언마운트..');
        };
    },[]);

    const mapToComponent = data => {
        return data.map((festival, i) => {
            return (<FestivalInfo festival={festival} key={i}/>);
        });//map end
    };//maptoComponent end

    return (
        <div>
            {mapToComponent(festivalList)}
        </div>
    );
}

function FestivalInfo({ festival }) {

    //const festivalData = festival;
    //const [imageUrl, setImageUrl] = useState('');
    /*const imgRef = storageRef.child(festivalData.image);
    imgRef.getDownloadURL().then(function(url) {
        // Insert url into an <img> tag to "download"
        //console.log(url);
        setImageUrl(url);
    });*/

    return (
        <Link to={{
            pathname : `/main/festival/${festival.id}`
            ,state : { festival }
        }}>
            <div className="content__festival">
                <div><img src={festival.imageUrl} alt="image" /></div>
                <div className="festival__detail">
                    <div className="detail__name">{festival.name}</div>
                    <div className="detail__description">{festival.description}</div>
                    <div className="detail__address">{festival.address}</div>
                </div>
            </div>
        </Link>
    );
}
export default Festival;
