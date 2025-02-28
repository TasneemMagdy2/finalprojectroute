import React, { useState } from "react";
import axios from "axios";

export default function VerifyCode() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleVerifyEmail(e) {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    setError(null);

    try {
      const { data } = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords",
        { email }
      );
      setMessage("A verification code has been sent to your email.");
    } catch (err) {
      setError("Error: Please check your email and try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="h-screen">
      <h1 className="text-3xl font-bold mb-6">fresh cart</h1>

      <div className="bg-white p-6 rounded-lg ">
        <h2 className="text-xl font-bold mb-4 ">
          Please enter your verification code
        </h2>

        {message && <div className="p-2 mb-4 text-green-600">{message}</div>}
        {error && <div className="p-2 mb-4 text-red-600">{error}</div>}

        <form onSubmit={handleVerifyEmail}>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button
            type="submit"
            className=" bg-white-500 text-green-400 border border-green-300 p-2 rounded"
            disabled={loading}
          >
            {loading ? "Verifying..." : "Verify"}
          </button>
        </form>
      </div>
    </div>
  );
}
