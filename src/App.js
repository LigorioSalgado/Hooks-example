import React, { Fragment } from "react";
import Card from './Card';
import "./App.css";

function App() {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-info">
        <a className="navbar-brand" href="#">
          Rick & Morty App
        </a>
      </nav>
      <section className="container my-4">
        <div className="row justify-content-center">
          <div className="col-md-7 ">
            <form class="form-inline justify-content-center">
              <div class="form-group mx-sm-3 mb-2">
                <input
                  type="text"
                  class="form-control"
                  name="search"
                  placeholder="Rick"
                />
              </div>
              <button type="submit" class="btn btn-warning mb-2">
                Buscar
              </button>
            </form>
          </div>
        </div>

        <div className="row my-4">
  
        </div>
      </section>
    </Fragment>
  );
}

export default App;
