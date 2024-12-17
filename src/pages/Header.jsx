import React from 'react';

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
            <a className="nav-link" href="/free">FREE SLOTS</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/casino">CASINOS</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="bonusesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              BONUSES
            </a>
            <ul className="dropdown-menu" aria-labelledby="bonusesDropdown">
              <li><a className="dropdown-item" href="/welcome">Welcome Bonus </a></li>
              <li><a className="dropdown-item" href="/freeSpin">Free Spins Guid</a></li>
              <li><a className="dropdown-item" href="/deposit">No Deposit Bonus</a></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="casinoGamesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              CASINO GAMES
            </a>
            <ul className="dropdown-menu" aria-labelledby="casinoGamesDropdown">
              <li><a className="dropdown-item" href="/Blackjack">Blackjack Guide</a></li>
              <li><a className="dropdown-item" href="/Baccarat">Baccarat Guid</a></li>
            </ul>
          </li>
          
        </ul>
        {/* <div className="d-flex align-items-center">
          <button className="btn btn-dark me-2" id="themeToggle"><i className="bi bi-moon"></i></button>
          <button className="btn btn-dark me-2"><i className="bi bi-search"></i></button>
          <select className="form-select bg-dark text-white" style="width: auto;">
            <option value="us" selected>🇺🇸</option>
            <option value="uk">🇬🇧</option>
            <option value="fr">🇫🇷</option>
          </select>
        </div> */}
      </div>
    </div>
  </nav>

        </div>
    );
};

export default Header;