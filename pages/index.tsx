import { useState } from "react";
import Theme from "../components/Theme";
import { useRouter } from "next/router";

export default function IndexPage() {
  const router = useRouter();
  const [dateOfBirth, setDateOfBirth] = useState("1994-01-01");
  const [age, setAge] = useState("80");

  return (
    <Theme>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          router.push(
            `/calendar?dob=${encodeURIComponent(
              dateOfBirth
            )}&age=${encodeURIComponent(age)}`
          );
        }}
      >
        <div className="container">
          <div className="form-control">
            <label className="label">Date of Birth:</label>
            <input
              className="input"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              type="date"
            ></input>
          </div>
          <div className="form-control">
            <label className="label">Age at Death:</label>
            <input
              className="input"
              type="number"
              min="1"
              max="125"
              value={age}
              step="1"
              onChange={(e) => setAge(e.target.value)}
            ></input>
          </div>
          <button>Go to Calendar</button>
        </div>
      </form>

      <style jsx>
        {`
          .input {
            width: 150px;
          }
          .label {
            padding-right: 16px;
          }
          .form-control {
            padding-bottom: 24px;
          }
          .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 90vh;
          }
        `}
      </style>
    </Theme>
  );
}
