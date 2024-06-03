import home from "../../assets/home.png";

const Hero = () => {
  return (
    <section className="d-flex p-5 bg-body-tertiary">
      <div className="text-button-area">
        <h1 className="mb-3">Elevate Your Photography</h1>
        <p className="mb-5">
          Discover tips, techniques, and tutorials to help you become a better
          photographer.
        </p>
        <a href="#" className={`btn btn-primary`}>
          Explore Services
        </a>
      </div>
      <div className="ms-5 content-right"> 
        <img
          className="img-fluid rounded"
          src={home}
          alt="An image on the home page"
          width={"70%"}
          height={"auto"}
        />
      </div>
    </section>
  );
};

export default Hero;
