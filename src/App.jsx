import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.scss';
import Villagers from './assets/Components/Villagers';
import Species from './assets/Components/Species';
import Personality from './assets/Components/Personality';
import Gender from './assets/Components/Gender';
import User from './assets/Components/User';
import Filters from './assets/Components/Filters';
import { ThemeContext } from './contexts/theme-context';
import ToggleTheme from './assets/Components/ToggleTheme';
import Home from './assets/Components/Home';


function App() {
  const isBrowserDefaultDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches;
  const getDefaultTheme = () => {
    const localStorageTheme = localStorage.getItem('default-theme');
    const browserDefault = isBrowserDefaultDark() ? 'dark' : 'light';
    return localStorageTheme || browserDefault;
  };
  const [theme, setTheme] = useState(getDefaultTheme());
  const [changeSel, setChangeSel] = useState("");

  return (
    <>
      <BrowserRouter>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <div className={`theme-${theme}`}>
            <div className="body">
              <header>
                <h1 className='titulo'>Nookapedia</h1>
                <nav>
                  <ul>
                    <li>
                      <Link className='linkVillagers' to={'/villagers'}>Villagers</Link>
                    </li>
                  </ul>
                </nav>
                <div>
                  <Link className='linkUser' to={'/user'}>Login</Link>
                </div>
              </header>
              <ToggleTheme />
              <main >
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/villagers' element={<>
                    <Filters changeSel={changeSel} setChangeSel={setChangeSel} /> <Villagers changeSel={changeSel} setChangeSel={setChangeSel} /></>} />
                  <Route path='/species/:specie' element={<><Filters changeSel={changeSel} setChangeSel={setChangeSel} /><Species changeSel={changeSel} setChangeSel={setChangeSel} /></>} />
                  <Route path='/personality/:personality' element={<><Filters changeSel={changeSel} setChangeSel={setChangeSel} /> <Personality changeSel={changeSel} setChangeSel={setChangeSel} /></>} />
                  <Route path='/gender/:gender' element={<><Filters changeSel={changeSel} setChangeSel={setChangeSel} /><Gender changeSel={changeSel} setChangeSel={setChangeSel} /></>} />
                  <Route path='/user' element={<User />} />
                </Routes>
              </main>
              <div className='ola'><img src="../public/bgFooter.png" alt="" /></div>
              <footer className='footer'>
                <p>2023©</p>
                <p>Made with MUCHISIMA anxiety y ayuda de Peio ♡</p>
                <img className='iconoFooter' src="../public/ico.png" alt="Icono Juego" />
              </footer>
              <div><a className='up' href="#">TOP</a></div>
            </div>
          </div>
        </ThemeContext.Provider>
      </BrowserRouter>
    </>
  );
};

export default App;