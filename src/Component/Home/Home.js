import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Header from '../Header/Header';
import LeagueCard from '../LeagueCard/LeagueCard';
import './Home.css';

const Home = () => {
    const [leagues, setLeagues] = useState([]);
   const [count, setCount] = useState(4);

    useEffect(()=>{

        const url ='https://www.thesportsdb.com/api/v1/json/1/all_leagues.php';
        fetch(url)
        .then(res=> res.json())
        .then(data=> {
            const leaguefirst20 = data.leagues.slice(0, count);
            return setLeagues(leaguefirst20);
        })

    }, [count])


    return (
        <div >
           <Header count={count} setCount={setCount}></Header>
        <div className="home-design">
        {
                leagues.map(leagueName => <LeagueCard data={leagueName}></LeagueCard>)
            }
        </div>

        <div style={{padding:'20px'}} className="text-center idBtn">
        <Button  variant="success " onClick={()=>setCount (count +1)}> Increase 1</Button>
        <Button  variant="success " onClick={()=>setCount (count +5)}> Increase 5</Button>
        <Button  variant="success " onClick={()=>setCount (count -1)}> Decrease 1</Button>
        <Button  variant="success " onClick={()=>setCount (count -5)}> Decrease 5</Button>
         <h2>Total : {count}</h2>
        </div>
            
        </div>
    );
};

export default Home;