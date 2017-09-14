import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Spacer from './Spacer';

export default class AboutSection extends Component {
  render() {
    let style = {
      minHeight: '50vh',
      position: 'relative'
    };
    return (
      <div className="container">
        <div className="row" style={style}>
          <div>
            <h3 className="text-center" style={{textTransform: "uppercase"}}>About Jones Drones</h3>
            <div className="col-md-4">
              <img src="/inspire.png" alt="inspire" style={{
              maxHeight: "200px",
              maxWidth: "100%",
              height: "auto",
              width: "auto",
              position: "relative"
              }} />
            </div>
            <div className="col-md-8">
              <p>
                Based in Rochester, Jones Drones provides commercial drone videography and photography throughout Western New York.
                All of our pilots are certified with the FAA part 107 UAS licensure, and have extensive experience with both photography and drone operations.
              </p>
              <div>
                <Link className="btn btn-primary" to="meet-the-team">
                  Meet the Team
                </Link>
              </div>
            </div>
            <Spacer />
          </div>
        </div>
        <div className="row" style={style}>
          <div className="col-md-9">
            <p>
              Aerial photography allows us to capture our environment from a perspective that is usually not accessible or seen.
              This makes wedding footage timeless and cinematic, residential photography appealing and interesting, and landscape footage beautiful and seemingly endless.
              In the commercial sector, drones are being used more and more for industrial inspections - reducing risk for technicians and engineers.
            </p>
          </div>
          <div className="col-md-3">
            <img src="/faa.png" alt="faa" />
          </div>
          <Spacer />
        </div>
      </div>
    );
  }
}