import React, { useState } from "react";
import Accordion from "./components/Accordion/Accordion";

import Button from "./components/Button";
import Input from "./components/Input";
import SwiperCarousel from "./components/SwiperCarousel";
import "./style.scss";

export default function Home() {
  const { isOpen, setIsOpen } = useState(true);

  return (
    <div className="home">
      <div className="form-elements">
        {" "}
        Form Elements
        {/* <div className="buttons">
          Buttons
          <Button label="Basic" variant="basic" />
          <Button label="Link" variant="link" />
          <Button label="Secondary" variant="secondary" />
          <Button label="Danger" variant="danger" />
          <Button label="Disabled" disabled={true} />
          <Button label="Primary" variant="primary" />
          <Button label="Outline" variant="outline" />
          <Button label="Medium" variant="primary" size="medium" />
          <Button label="Large" variant="outline" size="large" />
        </div>
        <div className="input elements">
          <Input
            type="text"
            placeholder="Enter Text"
            label="Input Box"
            helperText="I am a text type input box"
            name="typeText"
          />
          <hr />
          <Input
            type="email"
            placeholder="Enter Email Address"
            label="Email Box"
            helperText="I am an email type box"
            name="typeEmail"
          />
          <hr />
          <Input
            type="password"
            placeholder="Enter Password"
            label="Password Box"
            helperText="I am a password type box"
            name="typePassword"
          />
          <hr />
          <Input
            type="date"
            placeholder="Enter date"
            label="Date Box"
            helperText="I am a Date type input box"
            name="typeDate"
          />
          <hr />
          <Input
            type="tel"
            placeholder="Enter Telephone Number"
            label="Telephone Box"
            helperText="I am a Telephone type input box"
            name="typeTel"
          />
          <hr />
        </div> */}
      </div>
      {/* <div className="carousel">
        <Carousel />
      </div> */}
      <div>{/* <SwiperCarousel /> */}</div>
    </div>
  );
}
