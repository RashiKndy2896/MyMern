import React from 'react'
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Knock Doctor</h1>
          <p className="lead">
            Block your date for the Doctor's Appointment
          </p>
          <div className="buttons">
            <Link to='/patient' className="btn btn-primary">User</Link>
            <Link to='/doctor' className="btn btn-light">Doctor</Link>
          </div>
        </div>
      </div>
    </section>
    )
}

export default Landing;
