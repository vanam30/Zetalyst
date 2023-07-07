import React, { useState } from "react";
import { BsCircleFill } from "react-icons/bs";
import { VscPassFilled } from "react-icons/vsc";
import "./Details.css";
const Details = () => {
  const [forms, setForms] = useState([{ id: 1 }]);
  const [formData, setFormData] = useState([]);

  const handleInputChange = (event, formId, field) => {
    const { value } = event.target;
    setFormData((prevData) => {
      const existingData = prevData.find((data) => data.id === formId) || {
        id: formId,
      };
      const updatedData = { ...existingData, [field]: value };
      const newData = prevData.filter((data) => data.id !== formId);
      return [...newData, updatedData];
    });
  };

  const handleAddMore = () => {
    const newFormId = forms.length + 1;
    setForms([{ id: newFormId }]);
    setFormData([]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the form data
    console.log(formData);
  };
  return (
    <div className="details">
      <div className="row">
        <div className="column1" style={{ backgroundColor: "#002A5C" }}>
          <div classNameName="line">
            <ol
              style={{
                listStyle: "none",
                color: "#F5F5F5",
                paddingTop: "160px",
              }}
            >
              <li style={{ paddingTop: "40px" }}>
                <VscPassFilled color=" #FF6F00" /> About yourself
              </li>
              <li classNameName="active" style={{ color: "#FFFFFF" }}>
                <BsCircleFill color=" #FF6F00" /> Category Details
              </li>
              <li>
                <BsCircleFill color=" #FF6F00" /> Collaborations
              </li>
              <li>
                <BsCircleFill color=" #FF6F00" /> Achievments
              </li>
              <li>
                <BsCircleFill color=" #FF6F00" padding="2px" /> Portfolio
              </li>
            </ol>
          </div>
        </div>
        <div className="column2">
          <div className="m-box">
            {forms.map((form) => (
              <form key={form.id} onSubmit={handleSubmit}>
                <div>
                  <h1>Category</h1>
                  {/* <label htmlFor={`category-${form.id}`}>Category:</label> */}
                  <select
                    id={`category-${form.id}`}
                    name={`category-${form.id}`}
                    value={
                      (formData.find((data) => data.id === form.id) || {})
                        .category || ""
                    }
                    onChange={(event) =>
                      handleInputChange(event, form.id, "category")
                    }
                  >
                    <option value="">Select a category</option>
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                  </select>
                  {/* <p>
                    Selected category:{" "}
                    {
                      (formData.find((data) => data.id === form.id) || {})
                        .category
                    }
                  </p> */}
                </div>
                <div>
                  {/* <label htmlFor={`subcategory-${form.id}`}>Subcategory:</label> */}
                  <h1> Sub Category</h1>
                  <select
                    id={`subcategory-${form.id}`}
                    name={`subcategory-${form.id}`}
                    value={
                      (formData.find((data) => data.id === form.id) || {})
                        .subcategory || ""
                    }
                    onChange={(event) =>
                      handleInputChange(event, form.id, "subcategory")
                    }
                  >
                    <option value="">Select a subcategory</option>
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                  </select>
                  {/* <p>
                    Selected subcategory:{" "}
                    {
                      (formData.find((data) => data.id === form.id) || {})
                        .subcategory
                    }
                  </p> */}
                </div>
                <div>
                  {/* <label htmlFor={`platform-${form.id}`}>Platform:</label> */}
                  <h1>Platform</h1>
                  <select
                    id={`platform-${form.id}`}
                    name={`platform-${form.id}`}
                    value={
                      (formData.find((data) => data.id === form.id) || {})
                        .platform || ""
                    }
                    onChange={(event) =>
                      handleInputChange(event, form.id, "platform")
                    }
                  >
                    <option value="">Select a platform</option>
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                  </select>
                  {/* <p>
                    Selected platform:{" "}
                    {
                      (formData.find((data) => data.id === form.id) || {})
                        .platform
                    }
                  </p> */}
                </div>
                <div>
                  {/* <label htmlFor={`otherOption-${form.id}`}>
                    Other Option:
                  </label> */}
                  <h1> Platform ID link</h1>
                  <input
                    type="text"
                    id={`otherOption-${form.id}`}
                    name={`otherOption-${form.id}`}
                    value={
                      (formData.find((data) => data.id === form.id) || {})
                        .otherOption || " "
                    }
                    onChange={(event) =>
                      handleInputChange(event, form.id, "otherOption")
                    }
                  />
                  {/* <p>
                    Entered other option:{" "}
                    {
                      (formData.find((data) => data.id === form.id) || {})
                        .otherOption
                    }
                  </p> */}
                </div>
              </form>
            ))}
          </div>
          <div className="container">
            <button className="addmore" onClick={handleAddMore}>Add More</button>
          </div>
          <div className="container">
          <button className="submit" type="submit">Save and Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Details;
