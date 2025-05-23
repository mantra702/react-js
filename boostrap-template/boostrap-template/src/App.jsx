import React from "react";
import { Container, Row, Col, Button, Navbar, Nav, Image} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MaterialKitClone() {
  return (
    <>
      {/* Navigation Bar */}
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Mantra Tilva</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <div className="bg-light text-center py-5">
        <Container>
          <h1 className="display-4 mb-3">Welcome To React-Bootstrap-Template</h1>
          <p className="lead mb-4">A modern React UI Kit based on React-Bootstrap</p>
        </Container>
      </div>

      {/* Features Section */}
      <Container className="text-center py-5" id="features">
        <Row>
          <h1 className="text-primary mb-3 mt-3">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</h1>
          <h2 className="text-secondary mb-3 mt-3">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</h2>
          <h3 className="text-success mb-3 mt-3">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</h3>
          <h4 className="text-danger mb-3 mt-3">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</h4>
          <h5 className="text-warning mb-3 mt-3">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</h5>
          <h6 className="text-info mb-3 mt-3">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</h6>
        </Row>
        <Row>
           <div>
             <div>
              <button className="me-2 pb-1" type="button">
                <span>Default</span>
              </button>
              <button className="me-2 rounded-pill" type="button">
                 <span className="p-2">round</span>
              </button>
              <button className="me-2 rounded-pill" type="button">
                 <span>
                   <svg width={"25px"} height={"25px"}>
                     <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
                   </svg> with icon
                 </span>
              </button>
              <button  className="me-2 rounded-circle" type="button">
                 <span >
                   <svg className="p-0" width={"25px"} height={"25px"}>
                     <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
                   </svg>
                 </span>
              </button>
              <button className="me-2 pb-1 border-0" type="button">
                <span>simple</span>
              </button>
            </div>
          </div>
        </Row>
        <Row>
            <div>
              <button type="button" className="btn btn-primary btn-lg mt-2 mb-2 me-3">Large button</button>
               <button type="button" className="btn btn-primary btn-xs mt-2 mb-2 me-3">medium button</button>
              <button type="button" className="btn btn-primary btn-sm mt-2 mb-2 me-3">Small button</button>
              
           </div>
        </Row>
        <Row>
          <div className="d-flex justify-content-center"> 
             <button type="button" className="btn btn-primary mt-4 mb-5 me-3">Primary</button>
             <button type="button" className="btn btn-secondary mt-4 mb-5 me-3">Secondary</button>
             <button type="button" className="btn btn-success mt-4 mb-5 me-3">Success</button>
             <button type="button" className="btn btn-danger mt-4 mb-5 me-3">Danger</button>
             <button type="button" className="btn btn-warning mt-4 mb-5 me-3">Warning</button>
             <button type="button" className="btn btn-info mt-4 mb-5 me-3">Info</button>
             <button type="button" className="btn btn-light mt-4 mb-5 me-3">Light</button>
             <button type="button" className="btn btn-dark mt-4 mb-5 me-3">Dark</button>
           </div>
        </Row>
        <Row>
          <Col md={4}>
          <h3 className="mb-3">Checkboxes</h3>
           <div className="htmlForm-check mb-3">
             <input className="htmlForm-check-input" type="checkbox" value="" id="checkDefault0"/>
             <label className="htmlForm-check-label" htmlFor="checkDefault">Un-Checked checkbox</label>
           </div>
           <div className="htmlForm-check mb-3">
             <input className="htmlForm-check-input" type="checkbox" value="" id="checkChecked" checked />
             <label className="htmlForm-check-label" htmlFor="checkChecked">Checked checkbox</label>
           </div>
           <div className="htmlForm-check mb-3">
             <input className="htmlForm-check-input" type="checkbox" value="" id="checkDisabled" disabled />
             <label className="htmlForm-check-label" htmlFor="checkDisabled">Disabled checkbox</label>
           </div>
           <div className="htmlForm-check mb-3">
             <input className="htmlForm-check-input" type="checkbox" value="" id="checkCheckedDisabled" checked disabled />
             <label className="htmlForm-check-label" htmlFor="checkCheckedDisabled">Disabled checked checkbox</label>
           </div>
          </Col>
          <Col md={4}>
           <h3 className="mb-3">Radio Buttons</h3>
           <div className="htmlForm-check mb-3">
             <input className="htmlForm-check-input" type="radio" name="radioDefault" id="radioDefault1" />
             <label className="htmlForm-check-label" htmlFor="radioDefault1">Default radio</label>
           </div>
           <div className="htmlForm-check mb-3">
             <input className="htmlForm-check-input" type="radio" name="radioDefault" id="radioDefault2" checked/>
             <label className="htmlForm-check-label" htmlFor="radioDefault2">Default checked radio</label>
           </div>
           <div className="htmlForm-check mb-3">
             <input className="htmlForm-check-input" type="radio" name="radioDisabled" id="radioDisabled" disabled />
             <label className="htmlForm-check-label" htmlFor="radioDisabled">Disabled radio</label>
           </div>
           <div className="htmlForm-check mb-3">
             <input className="htmlForm-check-input" type="radio" name="radioDisabled" id="radioCheckedDisabled" checked disabled />
             <label className="htmlForm-check-label" htmlFor="radioCheckedDisabled">Disabled checked radio</label>
          </div>
          </Col>
          <Col md={4}>
           <h3 className="mb-3">Toggle Buttons</h3>
           <div className="form-check form-switch mb-3">
             <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault"/>
             <label className="form-check-label" htmlFor="switchCheckDefault">Default Un-checked Toggle Buttons</label>
           </div>
           <div className="form-check form-switch mb-3">
             <input className="form-check-input" type="checkbox" role="switch" id="switchCheckChecked" checked />
             <label className="form-check-label" htmlFor="switchCheckChecked">Checked Toggle Buttons</label>
           </div>
           <div className="form-check form-switch mb-3">
             <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDisabled" disabled/>
             <label className="form-check-label" htmlFor="switchCheckDisabled">Disabled Un-checked Toggle Buttons</label>
           </div>
           <div className="form-check form-switch mb-3">
             <input className="form-check-input" type="checkbox" role="switch" id="switchCheckCheckedDisabled" checked disabled/>
             <label className="form-check-label" htmlFor="switchCheckCheckedDisabled">Disabled checked Toggle Buttons</label>
           </div>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
          <h3 className="mt-5 mb-5">RoundedCircle</h3>
            <Image src="https://img.freepik.com/premium-photo/morskie-oko-tatry_1045114-186.jpg?semt=ais_hybrid&w=740" width="100%" roundedCircle />
          </Col>
          <Col md={4}>
          <h3 className="mt-5 mb-5">Rounded</h3>
            <Image src="https://img.freepik.com/premium-photo/morskie-oko-tatry_1045114-186.jpg?semt=ais_hybrid&w=740" width="100%" rounded />
          </Col>
          <Col md={4}>
            <h3 className="mt-5 mb-5">Thumbnail</h3>
            <Image src="https://img.freepik.com/premium-photo/morskie-oko-tatry_1045114-186.jpg?semt=ais_hybrid&w=740" width="100%" thumbnail />
          </Col>
        </Row>
        
        <Row className="mb-5">
          <h2 className="col-2 mb-4">Notifications</h2>
          <div className="text-bg-primary p-3 d-flex"><h1 className="me-5">Primary with contrasting color. </h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span className="ms-5 pt-3">✖️</span>
          </div>
           <div className="text-bg-success p-3 d-flex"><h1 className="me-5">Success with contrasting color </h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span className="ms-5 pt-3">✖️</span>
          </div>
           <div className="text-bg-danger p-3 d-flex"><h1 className="me-5">Danger with contrasting color. </h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span className="ms-5 pt-3">✖️</span>
          </div>
           <div className="text-bg-warning p-3 d-flex"><h1 className="me-5">Warning with contrasting color. </h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span className="ms-5 pt-3">✖️</span>
          </div> 
        </Row>
        <Row>
          <Col md={12}>
           <h4 className="mb-3">Or Be classNameical</h4>
           <div className="mb-3">

            <label  className="htmlForm-label">Enter Your Name : </label> &nbsp; &nbsp;
           <input type="text" className="htmlForm-control" placeholder="Enter Your Name"/> <br/>

           <label className="htmlForm-label">Enter Your Email : </label> &nbsp; &nbsp;
           <input type="email" className="htmlForm-control"  placeholder="Enter your Email"/> <br/>

           <label htmlFor="examplehtmlFormControlInput1" className="htmlForm-label">Enter Your Password : </label> &nbsp; &nbsp;
           <input type="email" className="htmlForm-control" id="examplehtmlFormControlInput1" placeholder="Password"/> <br/>

         </div>        
         <Button> Get Started</Button>
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <footer className="bg-dark text-bg-primary text-center py-3">
       <div className="d-flex justify-content-center">
           <p className="ms-0 me-5"> 
             <span className="me-3">CREATIVE TIM</span>
             <span className="me-3">ABOUT US</span> 
             <span className="me-3">BLOG</span> 
             <span className="me-5">LICENSES</span> 
            </p>
           <p className="ms-5 mb-0"> &copy; 2025 Created By Mantra Tilva</p>
       </div>
      </footer>
    </>
  );
}
