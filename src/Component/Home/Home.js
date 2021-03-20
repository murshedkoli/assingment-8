import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import LeagueCard from '../LeagueCard/LeagueCard';
import './Home.css';

const Home = () => {
    const [leagues, setLeagues] = useState([]);

    useEffect(()=>{

        const url ='https://www.thesportsdb.com/api/v1/json/1/all_leagues.php';
        fetch(url)
        .then(res=> res.json())
        .then(data=> {
            const leaguefirst20 = data.leagues.slice(0, 40);
            return setLeagues(leaguefirst20);
        })

    }, [])


    return (
        <div >
           <Header></Header>
        <div className="home-design">
        {
                leagues.map(leagueName => <LeagueCard data={leagueName}></LeagueCard>)
            }
        </div>
            
        </div>
    );
};

export default Home;