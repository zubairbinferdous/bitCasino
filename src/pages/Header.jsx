import React from 'react';
import BONUSES from '../assets/icon-craps.svg';
import CASINOS from '../assets/icon-poker-chip.svg';
import SLOTS from '../assets/icon-slots.svg';
import GAMES from '../assets/money-bag.svg';

const Header = () => {
    return (
        <div>
              <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <a className="navbar-brand" href="/"><strong>BET SLOTS</strong></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
             <a className="nav-link" href="/free"><img src={SLOTS} alt="" />  FREE SLOTS</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/casino"> <img src={CASINOS} alt="" /> CASINOS</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="bonusesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img src={BONUSES} alt="" />  BONUSES
            </a>
            <ul className="dropdown-menu" aria-labelledby="bonusesDropdown">
              <li><a className="dropdown-item" href="/welcome">Welcome Bonus </a></li>
              <li><a className="dropdown-item" href="/freeSpin">Free Spins Guid</a></li>
              <li><a className="dropdown-item" href="/deposit">No Deposit Bonus</a></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="casinoGamesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img src={GAMES} alt="" />  CASINO GAMES
            </a>
            <ul className="dropdown-menu" aria-labelledby="casinoGamesDropdown">
              <li><a className="dropdown-item" href="/free">Free Slots Guide</a></li>
              <li><a className="dropdown-item" href="/Blackjack">Blackjack Guide</a></li>
              <li><a className="dropdown-item" href="/Baccarat">Baccarat Guid</a></li>
            </ul>
          </li>
          
        </ul>
      
      </div>
    </div>
  </nav>

        </div>
    );
};

export default Header;