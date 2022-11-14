import { useState, useEffect } from "react";
import RepoCard from "../components/RepoCard";
import api from '../services/api';
import style from './Card.module.scss';

const Home = () => {
    const [reposAll, setReposAll] = useState('')

    useEffect (() => {
      fetch("https://api.github.com/repositories")
      .then((res) => res.json())
      .then(
        (result) => {
          setReposAll(result)
          console.log(result[1]);
        },
        (error) => {
          console.log(error);
        }
      );
    }, []);
 
      return (
        <div className={style.card}>
            <h2>Repositórios</h2>
            <ul>
            {reposAll.length === 0 && <p>Carregando...</p>}
            {reposAll.length > 0 && reposAll.map((reposAll) => (
                <RepoCard reposAll={reposAll}/>
                ))}
            </ul>
        </div>
      )
};

export default Home;