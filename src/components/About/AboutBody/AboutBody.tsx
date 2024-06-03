import React from "react";
import photography from "../../../assets/photography.png";
import team from "../../../assets/team.png";

const AboutBody = () => {
  return (
    <div>
      <div className="row mt-5 p-5">
        <div className="col-md">
          <img
            src={photography}
            alt="A photographic image"
            className="rounded"
          />
        </div>
        <div className="col">
          <h4 className="fw-bold">My story</h4>
          <p className="text-secondary">
            Photographic Techniques and Tips was founded by a group of
            passionate photographers who wanted to share their knowledge and
            expertise with the world. I believe that photography is an art form
            that can be learned and perfected through practice and dedication.
          </p>
          <p className="text-secondary">
            My mission is to provide a comprehensive resource for photographers
            of all skill levels, from beginners to professionals. I offer a wide
            range of services, including workshops, tutorials, and personalized
            consulting, to help you develop your skills and take your
            photography to the next level.
          </p>
        </div>
      </div>
      <div className="row mt-5 p-5">
        <div className="col">
          <h4 className="fw-bold">My Team</h4>
          <p className="text-secondary">
            My name is NGABO Oreste, I'm dedicated to helping you achieve your
            photography goals. I rely have a deep understanding of the art of
            photography.
          </p>
          <p className="text-secondary">
            I believe in the power of collaboration and encourage with you will
            allows me to provide my clients with the most up-to-date and
            effective techniques and strategies.
          </p>
        </div>
        <div className="col-md">
          <img src="" alt="A photographic image" className="rounded" />
        </div>
      </div>
      <div className="row mt-5 p-5">
        <div className="col-md">
          <img src={team} alt="A photographic image" className="rounded" />
        </div>
        <div className="col">
          <h4 className="fw-bold">My Values</h4>
          <p className="text-secondary">
            At Photographic Techniques and Tips, I'm guided by a set of core
            values that inform everything I do. These values include:
          </p>
          <ul className="text-secondary">
            <li>Passion for Photography</li>
            <li>Commitment to excellence</li>
            <li>Respect for all arts</li>
            <li>Dedication to Continuous Learning</li>
            <li>Team working</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutBody;
