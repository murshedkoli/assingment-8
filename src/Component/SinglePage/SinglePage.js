import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './SinglePage.css';
import malePhoto from '../../Photo/male.png';
import femalePhoto from '../../Photo/female.png';
import genderimg from '../../Icon/male-gender-sign 1.png';
import sportimg from '../../Icon/football (1) 1.png';
import countryimg from '../../Icon/flag (1) 1.png';
import foundimg from '../../Icon/found 1.png';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import facebook from '../../Icon/Facebook.png';
import twitter from '../../Icon/Twitter.png';
import youtube from '../../Icon/YouTube.png';

const SinglePage = () => {

    const { idLeague } = useParams();

    const [league, setLeague] = useState({});
    const { strBadge,strYoutube, strLeague, strLeagueAlternate, strTwitter, strSport, strFacebook, strGender, strDescriptionEN, strCountry, intFormedYear, dateFirstEvent, strDescriptionFR } = league;

    useEffect(() => {

        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setLeague(data.leagues[0]))


    }, [idLeague])
    console.log(league)
    let rightImage;

    if (strGender === "Male") {
        rightImage = malePhoto;
    } else {
        rightImage = femalePhoto;
    }

    return (
        <Container>
            <Row className="main-header">
                <Link to="/"><div className="colorLayer"><img className="logoImage" src={strBadge} alt="" /></div></Link>
            </Row>

            <Row>
                <Col className="info-box">

                    <Col className="nameAndOthers">
                        <h2>{strLeague}</h2>
                        <Col className="flex-child">
                            <img src={foundimg} alt="" />
                            <p>Founded : {intFormedYear}</p>
                        </Col>
                        <Col className="flex-child">
                            <img src={countryimg} alt="" />
                            <p>Contry : {strCountry}</p>
                        </Col>
                        <Col className="flex-child">
                            <img src={sportimg} alt="" />
                            <p>Sport Type : {strSport}</p>
                        </Col>
                        <Col className="flex-child">
                            <img src={genderimg} alt="" />
                            <p>Gender : {strGender}</p>
                        </Col>
                    </Col>
                    <Col className="photoBanner">
                        <img src={rightImage} alt="" />
                    </Col>
                </Col>

            </Row>
            <Col>
                <h3>Description:</h3>
                <p>{strDescriptionEN}</p>
            </Col>
            <Col>
                <p>{strDescriptionFR}</p>
            </Col>


           <div style={{display:'flex', justifyContent: 'center'}}>
           <Row className="social-icon">
            <a href={`https://${strTwitter}`}><img src={twitter} alt="Our Twitter Page"/></a>
            <a href={`https://${strFacebook}`}><img src={facebook} alt="Our Facebook Page"/></a>
            <a href={`https://${strYoutube}`}><img src={youtube} alt=" Our Youtube Channel"/></a>
            </Row>
           </div>


        </Container>

    );
};

export default SinglePage;