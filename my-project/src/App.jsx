import { useState } from "react";
import "./App.css";

import axios from "axios";

const App = () => {
  const [universityName, setUniversityName] = useState("");
  const [universityAddress, setUniversityAddress] = useState("");
  const [universityType, setUniversityType] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [startingDate, setStartingDate] = useState("");
  const [casuallyOpensAt, setCasuallyOpensAt] = useState("");
  const [establishedYear, setEstablishedYear] = useState("");
  const [totalStudents, setTotalStudents] = useState("");
  const [coursesOffer, setCoursesOffer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let stateObj = {
      universityName,
      universityAddress,
      universityType,
      rating,
      description,
      image,
      startingDate,
      casuallyOpensAt,
      value: {
        establishedYear,
        totalStudents,
        coursesOffer,
      },
    };

    axios
      .post("http://localhost:8080/v1/university/university-infos", {
        stateObj,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    console.log(stateObj);
  };

  return (
    <div className="">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li></li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#" aria-disabled="true">
                  Disabled
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div className="container-fluid">
        <div className=" mt-5 justify-content-center m-5">
          <form onSubmit={handleSubmit} className="  shadow rounded-3">
            <h1 className=" text-center pt-4"> Registration Form</h1>
            <div className="row m-5">
              <div className="  col-md-6 mb-2">
                <input
                  type="text"
                  className=" form-control"
                  name="universityName"
                  placeholder=" University Name : "
                  onChange={(e) => setUniversityName(e.target.value)}
                />
              </div>
              <div className="  col-md-6 mb-4">
                <input
                  onChange={(e) => setUniversityAddress(e.target.value)}
                  type="text"
                  className=" form-control "
                  name="universityAddress"
                  placeholder=" University Address : "
                />
              </div>

              <div className=" col-md-3 mb-4">
                <input
                  onChange={(e) => setUniversityType(e.target.value)}
                  type="text"
                  className=" form-control "
                  name="universityType"
                  placeholder=" University Type : "
                />
              </div>
              <div className=" col-md-3 mb-2">
                <input
                  onChange={(e) => setRating(e.target.value)}
                  type="text"
                  className=" form-control "
                  name="rating"
                  placeholder=" Rating : "
                />
              </div>

              <div className=" col-md-6 mb-2">
                <input
                  onChange={(e) => setImage(e.target.value)}
                  type="file"
                  name="image"
                  className=" form-control "
                />
              </div>
              <div className=" col-md-6 mb-2">
                <label htmlFor="" className=" form-label ms-2">
                  StartingDate
                </label>
                <input
                  onChange={(e) => setStartingDate(e.target.value)}
                  type="date"
                  name="startingDate"
                  className=" form-control "
                />
              </div>
              <div className=" col-md-6 mb-2">
                <label htmlFor="" className=" form-label ms-2">
                  Casually OpensAt
                </label>
                <input
                  onChange={(e) => setCasuallyOpensAt(e.target.value)}
                  type="date"
                  name="casuallyOpensAt"
                  className=" form-control "
                />
              </div>

              <div className=" col-md-6 mb-2">
                <label htmlFor="" className=" form-label ms-2">
                  Established Year
                </label>
                <input
                  onChange={(e) => setEstablishedYear(e.target.value)}
                  type="date"
                  name="establishedYear"
                  className=" form-control "
                />
              </div>
              <div className=" col-md-6 mb-4">
                <label htmlFor="" className=" form-label ms-2">
                  Total Students
                </label>
                <input
                  onChange={(e) => setTotalStudents(e.target.value)}
                  type="text"
                  name="totalStudents"
                  className=" form-control "
                />
              </div>

              <div className=" col-md-6 mb-4">
                <label>Course Offer:</label>
                <select
                  onChange={(e) => setCoursesOffer(e.target.value)}
                  name="coursesOffer"
                  id="course"
                >
                  <option value="Culinary Arts">Culinary Arts</option>
                  <option value="Pastry Arts">Pastry Arts</option>
                  <option value="Food Science">Food Science</option>
                </select>
              </div>
              <div className=" col-12 mb-2">
                <textarea
                  onChange={(e) => setDescription(e.target.value)}
                  name="description"
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder=" University Description : "
                ></textarea>
              </div>
              <button
                type="submit"
                className=" btn btn-lg btn-primary mt-3 mb-3"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
