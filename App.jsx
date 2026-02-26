import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    hometown: "",
  });
  const [submitted, setSubmitted] = useState(false);

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
    setSubmitted(true);
  };

  return (
    <div>
      <h1>Simple Form</h1>
      <form onSubmit={handleSubmit}>
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
      {submitted && <p>Nametag goes here</p>}
    </div>
  );
}

export default App;