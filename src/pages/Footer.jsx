import React from 'react';

const Footer = () => {
    return (
        <div>
<footer className="bg-dark text-white pt-5 pb-3">
  <div className="container">
    <div className="row">
      {/* <!-- About Section --> */}
      <div className="col-md-3">
        <h5 className="fw-bold">BET SLOTS</h5>
        <p>Free Slot Machines & Casino Reviews by Certified iGaming Experts in 2024.</p>
        <p><i className="bi bi-star-fill text-success"></i> Trustpilot</p>
        <div>
          <a href="#" className="text-white me-2"><i className="bi bi-youtube"></i></a>
          <a href="#" className="text-white me-2"><i className="bi bi-twitter"></i></a>
          <a href="#" className="text-white me-2"><i className="bi bi-linkedin"></i></a>
          <a href="#" className="text-white"><i className="bi bi-geo-alt"></i></a>
        </div>
      </div>

      {/* <!-- Play Responsibly Section --> */}
      {/* <div className="col-md-3">
        <h5>18+ Play With Care</h5>
        <ul className="list-unstyled">
          <li><a href="#" className="text-white">BeGambleAware</a></li>
          <li><a href="#" className="text-white">GamCare</a></li>
          <li><a href="#" className="text-white">GAMSTOP</a></li>
          <li><a href="#" className="text-white">Take Time to Think</a></li>
        </ul>
      </div> */}

      {/* <!-- Navigation Links --> */}
      <div className="col-md-3">
        <h5>Explore BET SLOTS</h5>
        <ul className="list-unstyled">
          <li><a href="/free" className="text-white">Free Slots</a></li>
          <li><a href="/casino" className="text-white">Casinos</a></li>
          <li><a href="/welcome" className="text-white">Welcome Bonus</a></li>
          <li><a href="/freeSpin" className="text-white">Free Spins Guide</a></li>
          <li><a href="/deposit" className="text-white">No Deposit Bonus</a></li>
        </ul>
      </div>

      {/* <!-- Casino Games Section --> */}
      <div className="col-md-3">
        <h5>Casino Games</h5>
        <ul className="list-unstyled">
          <li><a href="/free" className="text-white">Free Slots Guide</a></li>
          <li><a href="/Blackjack" className="text-white">Blackjack Guide</a></li>
          <li><a href="/Baccarat" className="text-white">Baccarat Guide</a></li>
        </ul>
      </div>

      {/* <!-- Disclaimer Section --> */}
      <div className="col-md-3">
        <h5>Legal Disclaimer</h5>
        <p>
          BET SLOTS is an independent slot and casino review portal providing objective overviews. It’s your responsibility to access legal online casinos in your jurisdiction.
        </p>
      </div>
    </div>

    {/* <!-- Footer Bottom --> */}
    <div className="row mt-4">
      <div className="col-md-12 text-center">
        <p>BET SLOTS | Tower Business Centre, 2nd floor | Swatar BKR 4013 | Malta | +356 2144 2245</p>
        <p>Copyright 1999 - 2024. All Rights Reserved.</p>
      </div>
    </div>
  </div>
</footer>


        </div>
    );
};

export default Footer;