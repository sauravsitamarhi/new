import { useState } from "react";
import { FiLock, FiLogIn, FiLogOut } from "react-icons/fi";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setFormData({ email: "", password: "" });
  };

  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8 space-y-6">
        <header className="text-center space-y-2">
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 text-orange-600">
            <FiLock size={22} />
          </span>
          <h1 className="text-2xl font-semibold text-gray-900">
            {isAuthenticated ? "You are signed in" : "Welcome back"}
          </h1>
          <p className="text-gray-500">
            {isAuthenticated
              ? "Start exploring new arrivals or manage your cart."
              : "Sign in to access your cart, saved items, and more."}
          </p>
        </header>

        {!isAuthenticated ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="••••••••"
                className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-orange-600 px-4 py-3 text-white font-semibold shadow-md hover:bg-orange-500 transition"
            >
              <FiLogIn />
              Sign In
            </button>
          </form>
        ) : (
          <div className="space-y-4">
            <div className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-green-800">
              You’re now logged in with {formData.email || "your account"}.
            </div>
            <button
              onClick={handleLogout}
              className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 px-4 py-3 font-semibold text-gray-700 hover:bg-gray-50 transition"
            >
              <FiLogOut />
              Sign Out
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Login;

