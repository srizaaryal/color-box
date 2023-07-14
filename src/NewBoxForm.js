import { useState } from "react";
import { v4 as uuid } from "uuid";

const NewBoxForm = ({ addBox }) => {
  const INITIAL_STATE = {
    width: "",
    height: "",
    bgColor: ""
  };
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { width, height, bgColor } = formData;
    addBox({ width, height, bgColor, id: uuid() });
    setFormData(INITIAL_STATE);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="width">Width: </label>
      <input
        name="width"
        type="text"
        placeholder="width"
        value={formData.width}
        onChange={handleChange}
      />

      <label htmlFor="height">Height: </label>
      <input
        name="height"
        type="text"
        placeholder="height"
        value={formData.height}
        onChange={handleChange}
      />

      <label htmlFor="bgColor">Background Color: </label>
      <input
        name="bgColor"
        type="text"
        placeholder="background color"
        value={formData.bgColor}
        onChange={handleChange}
      />

      <button>Add me to create a Box!</button>
    </form>
  );
};

export default NewBoxForm;
