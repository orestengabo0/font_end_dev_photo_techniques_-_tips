import ServiceHeading from "./Heading/ServiceHeading";
import Cards from "./ServicesCards/Cards";
import { ImVideoCamera } from "react-icons/im";
import { FiBook } from "react-icons/fi";
import { CiEdit } from "react-icons/ci";
import { BiCertification, BiSupport, BiPhotoAlbum } from "react-icons/bi";

const Services = () => {
  return (
    <div>
      <ServiceHeading />
      <div className="row">
        <Cards
          cardIcon={<ImVideoCamera color="#007bff" size={40} />}
          photographicHeading="Photographic Workshops"
          photographicParagraphy="Join our interactive workshops led by experienced photographers. Learn hands-on techniques and enhance your skills."
          buttonText="Learn More"
        />
        <Cards
          cardIcon={<FiBook color="#007bff" size={40} />}
          photographicHeading="Tutorials and Guides"
          photographicParagraphy="Explore our extensive library of tutorials and guides covering a wide range of photographic topics, from beginner to advanced."
          buttonText="Browse Tutorials"
        />
        <Cards
          cardIcon={<BiPhotoAlbum color="#007bff" size={40} />}
          photographicHeading="Photography Portfolio Review"
          photographicParagraphy="Get personalized feedback and advice on improving your photography portfolio from our expert team."
          buttonText="Request Review"
        />
      </div>
      <div className="row">
        <Cards
          cardIcon={<CiEdit color="#007bff" size={40} />}
          photographicHeading="Post-Processing Assistance"
          photographicParagraphy="Learn advanced post-processing techniques to elevate your images. Our experts will guide you through the editing process."
          buttonText="Get started"
        />
        <Cards
          cardIcon={<BiCertification color="#007bff" size={40} />}
          photographicHeading="Certification Programs"
          photographicParagraphy="Earn industry-recognized certifications in various photographic specializations through our comprehensive training programs."
          buttonText="Explore Certficates"
        />
        <Cards
          cardIcon={<BiSupport color="#007bff" size={40} />}
          photographicHeading="Personalized Consulting"
          photographicParagraphy="Receive one-on-one support from our photography experts. Get tailored advice to help you achieve your creative goals."
          buttonText="Book a Session"
        />
      </div>
    </div>
  );
};

export default Services;
