import React from "react";
import Card from "./Card";
import camera from "../../assets/camera-settings.png";
import composition from "../../assets/composition.png";
import light from "../../assets/light.png";

const Tips = () => {
  return (
    <div>
      <h2 className="text-center">Featured Photographic tips</h2>
      <div className="cards d-flex">
        <Card
          image={light}
          description={"Learn more about light"}
          headerCard={"Mastering Lighting"}
          paragraph="Learn how to use natural and artificial light to create stunning photographs."
        />
        <Card
          image={composition}
          description="Learn more about composition"
          headerCard="Effective Composition"
          paragraph="Discover the principles of composition to elevate your photographic skills."
        />
        <Card
          image={camera}
          description={
            "An image showing the description of the camera-settings"
          }
          headerCard="Understand Camera Settings"
          paragraph="Explore the key camera settings and how to use them to your advantage."
        />
      </div>
    </div>
  );
};

export default Tips;
