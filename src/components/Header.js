import React  from "react";
import './Header.css';

export default ({black}) => {
  return(
    <header className={black ? 'black' : ''}>
      <div className="header--logo">
        <a href="/">
          <img src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png" alt="logo da netflix"/>
        </a>
      </div>
      <div className="header--user">
        <img src="https://pro2-bar-s3-cdn-cf.myportfolio.com/dddb0c1b4ab622854dd81280840458d3/877ad1ce3a479ef9498e1efc_rw_600.png?h=794db6a6ae01c539fdfb7ad5e5a89589" alt="usúario"/>
      </div>
    </header>
  )
}