import { React, useState } from "react";

function Cta() {
  const [email, setEmail] = useState("");

  return (
    <div>
      <h3>
        Ready to watch? Enter your email to create or restart your membership.
      </h3>
      <div className="hero-form-container">
        <input
          type="email"
          className="form-input"
          placeholder="Email Address:"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button>
          <span>Get Started</span>

          <svg
            viewBox="0 0 6 12"
            className="chevron-right-arrow"
            xmlns="http://www.w3.org/2000/svg"
          >
            <desc>chevron</desc>
            <path
              d="M.61 1.312l.78-.624L5.64 6l-4.25 5.312-.78-.624L4.36 6z"
              fill="white"
              fill-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Cta;
