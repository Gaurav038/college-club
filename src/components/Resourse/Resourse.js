import React from 'react';
import { Link } from 'react-router-dom';

function Resourse() {
  return <div
  className="home-container container mt-54 animate__animated animate__fadeIn animate__slow"
  style={{marginTop: '100px'}}
>
  

<div className="row">
      <h1 className="text-center">WebDev Project List</h1>
  </div>
  <div className="row">
      <div className="col">
          <table
              className="customers-table table table-dark table-striped table-bordered border-dark mt-4"
          >
              <thead className="text-center fs-6">
              <tr style={{fontSize: '2rem'}}>
                      <th>Project Name</th>
                      <th>Name</th>
                      <th>Link</th>
                    
                  </tr>
              </thead>
              <tbody className="text-center fs-6" >
                      <tr style={{fontSize: '2rem'}}>
                          <td className="fw-bold">hvhgvhgv</td>
                          <td>bnn hvkjhvkjh  vv</td>
                          <td><button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/edit/`}>linnk </button></td>
                      </tr>
              </tbody>
          </table>

      </div>
  </div>

  <div className="row">
      <h1 className="text-center">Machine learning List</h1>
  </div>
  <div className="row">
      <div className="col">
          <table
              className="customers-table table table-dark table-striped table-bordered border-dark mt-4"
          >
              <thead className="text-center fs-6">
              <tr style={{fontSize: '2rem'}}>
                      <th>Project Name</th>
                      <th>Name</th>
                      <th>Link</th>
                    
                  </tr>
              </thead>
              <tbody className="text-center fs-6" >
                      <tr style={{fontSize: '2rem'}}>
                          <td className="fw-bold">hvhgvhgv</td>
                          <td>bnn hvkjhvkjh  vv</td>
                          <td><button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/edit/`}>linnk </button></td>
                      </tr>
              </tbody>
          </table>
    <h1> data Will updated Soon..........</h1>
      </div>
  </div>
</div>
}

export default Resourse;
