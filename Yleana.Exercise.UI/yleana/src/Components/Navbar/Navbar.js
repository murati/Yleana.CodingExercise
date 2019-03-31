import React from 'react';
import {Link} from 'react-router-dom';

const navbar=()=>{
    return <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="/">Yleana</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" id="titlesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Titles
          </a>
          <div className="dropdown-menu" aria-labelledby="titlesDropdown">
            <Link className="dropdown-item" to="/employees/1">Get Actresses</Link>
            <Link className="dropdown-item" to="/employees/2">Get Directors</Link>
          </div>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" id="actressesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Actresses
          </a>
          <div className="dropdown-menu" aria-labelledby="actressesDropdown">
            <Link className="dropdown-item" to="/titles">Get Job Titles</Link>
            <Link className="dropdown-item" to="/employees/2">Get Directors</Link>
          </div>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle"  id="directorsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Directors
          </a>
          <div className="dropdown-menu" aria-labelledby="directorsDropdown">
            <Link className="dropdown-item" to="/titles">Get Job Titles</Link>
            <Link className="dropdown-item" to="/employees/1">Get Actresses</Link>
          </div>
        </li>
      </ul>
    </div>
  </nav>
}

export default navbar;