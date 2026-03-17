import { useState } from "react";
import ForgotPassword from "./ForgotPassword";

const Login = ({ setIsLoggedIn }) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showForgot, setShowForgot] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "1234") {
      localStorage.setItem("isLoggedIn", "true");
      setIsLoggedIn(true);
    } else {
      setError("Invalid username or password");
    }
  };

  // 👉 If forgot password clicked → show new page
  if (showForgot) {
    return <ForgotPassword setShowForgot={setShowForgot} />;
  }

  return (
    <div className="flex items-center justify-center h-screen bg-green-50">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow-lg w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-green-700">
          PassOP Login
        </h2>

        <input
          type="text"
          placeholder="Username"
          className="w-full mb-4 p-2 border rounded-lg"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-2 p-2 border rounded-lg"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="text-right mb-3">
          <button
            type="button"
            onClick={() => setShowForgot(true)}
            className="text-blue-500 text-sm hover:underline"
          >
            Forgot Password?
          </button>
        </div>

        {error && (
          <p className="text-red-500 text-sm mb-3 text-center">{error}</p>
        )}

        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-400 text-white py-2 rounded-lg"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;