import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css"; // Import CSS for default styling
import validator from "validator";

function App() {
  const [phone, setPhone] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handlePhoneChange = (value) => {
    if (typeof value === "string") {
      // Ensure value is a string before validating
      setPhone(value);
      setIsValid(validatePhoneNumber(value));
    }
  };

  const validatePhoneNumber = (number) => {
    const isValidPhoneNumber = validator.isMobilePhone(number);
    return isValidPhoneNumber;
  };

  return (
    <div>
      <label>
        Phone Number:
        <PhoneInput
          value={phone}
          onChange={handlePhoneChange}
          placeholder="Enter phone number"
        />
      </label>
      {!isValid && <p style={{ color: "red" }}>Invalid phone number</p>}
    </div>
  );
}

export default App;
