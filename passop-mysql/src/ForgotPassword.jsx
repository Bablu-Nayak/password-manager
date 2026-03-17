import { useState } from "react";

const ForgotPassword = ({ setShowForgot }) => {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.length > 3) {
      setMessage("Verification code sent successfully!");
    } else {
      setMessage("Please enter valid email or phone number");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-green-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-green-700">
          Forgot Password
        </h2>

        <input
          type="text"
          placeholder="Enter Email or Phone"
          className="w-full mb-4 p-2 border rounded-lg"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        {message && (
          <p className="text-green-600 text-sm mb-3 text-center">
            {message}
          </p>
        )}

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-lg"
        >
          Submit
        </button>

        <button
          type="button"
          onClick={() => setShowForgot(false)}
          className="w-full mt-3 text-blue-500 underline"
        >
          Back to Login
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;