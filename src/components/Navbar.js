import { Link } from 'react-router-dom';
import { BiSearchAlt2 } from 'react-icons/bi'
import style from './Navbar.module.scss';


const Navbar = () => {
  return (
        <nav className={style.inputContainer}>
            <h1> 
            <Link to="/">Repos Search</Link>
            </h1>
            <h2> Pesquise os repositórios do Github por linguagem:</h2>
            <form>
                <input 
                    type="text"
                    placeholder="Exemplo: Java"
                    // value={input}
                    // onChange={(e) => setInput(e.target.value)}
                    />
                    {/* onClick={handleSearch} */}
                <button type="submit">
                    <BiSearchAlt2 />
                </button>
            </form>
        </nav>
    );
};

export default Navbar;


