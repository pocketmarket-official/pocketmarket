import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import { firestore} from "../firebase";

function Festival() {
    const [festivalList, setFestivalList] = useState([]);
    useEffect(() => {
        console.log('마운트됨');
        firestore.collection("m_festival").get()
            .then(function(doc) {
                if (doc.size) {
                    setFestivalList(Array.from(doc.docs.values()));
                } else {
                    console.log("no data");
                }
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });
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
    console.log(festival.data());
    const festivalData = festival.data();
    return (
        <Link to={{
            pathname : `/main/festival/${festival.id}`
            ,state : { festival : festivalData }
        }}>
            <div className="content__festival">
                <div>image</div>
                <div className="festival__detail">
                    <div className="detail__name">{festivalData.name}</div>
                    <div className="detail__description">{festivalData.description}</div>
                    <div className="detail__address">{festivalData.address}</div>
                </div>
            </div>
        </Link>
    );
}
export default Festival;