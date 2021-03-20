import React, { useEffect, useState } from 'react';
import './LeagueCard.css';
import { Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';



const LeagueCard = (props) => {

    const { idLeague, strLeague, strSport } = props.data;

        const [league, setLeague] = useState({})

    useEffect(() => {

        const url =`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
            fetch(url)
            .then(res => res.json())
            .then(data => setLeague(data.leagues[0]))
            

    },[idLeague])

    console.log(league)
    return (
        <div className="league-design col ">
            <Card className="text-center" style={{ width: '25rem', margin:'10px', float:'left' }}>
                <Card.Img variant="top" src={league.strBadge} />
                <Card.Body>
                    <Card.Title>{strLeague}</Card.Title>
                    <Card.Text>
                       Sports Type : {strSport} 
                    </Card.Text>
                    <Link to={ `/league/${idLeague}`}><Button  variant="success ">Explore <FontAwesomeIcon icon={faArrowRight} /></Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default LeagueCard;