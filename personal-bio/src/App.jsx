import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './navbar';

const Bio = () => {
  return (
    <>
      <NavBar title="Mantra`s Profile" />
      
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow-lg p-4">
              <div className="card-body">
                <div className="text-center mb-4">
                  {/* Replace with actual image URL */}
                  <img 
                    src="/profile.jpg" 
                    alt="Profile" 
                    className="rounded-circle mb-3" 
                    style={{ width: '150px', height: '150px', objectFit: 'cover' }} 
                  />
                  <h2 className="text-primary font-weight-bold">Mantra Tilva</h2>
                </div>

                {/* Father's Name */}
                <div className="mb-3">
                  <h5 className="text-muted">Father's Name:</h5>
                  <p className="lead">{`Sandip Bhai Tilva`}</p>
                  <hr />
                </div>
                
                {/* Mother's Name */}
                <div className="mb-3">
                  <h5 className="text-muted">Mother's Name:</h5>
                  <p className="lead">{`Heena Ben Tilva`}</p>
                  <hr />
                </div>

                {/* More Details */}
                <div className="mb-3">
                  <h5 className="text-muted">Date of Birth:</h5>
                  <p className="lead">March 3, 2004</p>
                  <hr />
                </div>

                <div className="mb-3">
                  <h5 className="text-muted">Location:</h5>
                  <p className="lead">surat, India</p>
                  <hr />
                </div>

                <div className="mb-3">
                  <h5 className="text-muted">Occupation:</h5>
                  <p className="lead">Full Stack Developer</p>
                  <p className="lead">I am  familiar with : html-5, css, tailwind css, j-Qurey, bootstrap, javascript, nord js, react js ,...</p>
                  <hr />
                </div>

                {/* Personal Interests */}
                <div className="mb-3">
                  <h5 className="text-muted">Interests:</h5>
                  <p className="lead">
                    Coding, Traveling, Photography, Reading Tech Blogs, Playing Football
                  </p>
                </div>

                {/* Contact Section */}
                <div className="mb-3">
                  <h5 className="text-muted">Contact:</h5>
                  <p className="lead">
                    Email: mantra.tilva.7324@example.com<br />
                    Phone: +912345678902
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bio;

