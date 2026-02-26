import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    hometown: "",
  });
  const [nametag, setNametag] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = {
      firstName: formData.firstName.trim(),
      lastName: formData.lastName.trim(),
      jobTitle: formData.jobTitle.trim(),
      hometown: formData.hometown.trim(),
    };
    console.log("Submitted:", trimmed);
    setNametag(trimmed);
  };

  return (
    <div className="page-wrapper">
      <h1>Simple Form</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            required
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            required
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </label>
        <label>
          Job Title:
          <input
            type="text"
            required
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
          />
        </label>
        <label>
          Hometown:
          <input
            type="text"
            required
            name="hometown"
            value={formData.hometown}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {nametag && (
        <div className="nametag">
          <div className="nametag-banner">Hello, my name is</div>
          <p className="nametag-name">{nametag.firstName} {nametag.lastName}</p>
          <hr className="nametag-divider" />
          <div className="nametag-field">
            <span className="nametag-field-label">Job Title:</span>
            <span className="nametag-field-value">{nametag.jobTitle}</span>
          </div>
          <div className="nametag-field">
            <span className="nametag-field-label">Hometown:</span>
            <span className="nametag-field-value">{nametag.hometown}</span>
          </div>
          <div className="nametag-footer" />
        </div>
      )}
    </div>
  );
}

export default App;
