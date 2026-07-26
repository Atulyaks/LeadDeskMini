import { useState } from "react";
import toast from "react-hot-toast";
import API from "../services/api";

function LeadForm() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validateForm = () => {
    if (formData.name.trim().length < 3) {
      toast.error("Name must be at least 3 characters");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email");
      return false;
    }

    if (!formData.budget) {
      toast.error("Please select a budget");
      return false;
    }

    if (formData.message.trim().length < 10) {
      toast.error("Message should be at least 10 characters");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      setLoading(true);

      await API.post("/leads", formData);

      toast.success("Lead submitted successfully!");

      setFormData({
        name: "",
        email: "",
        budget: "",
        message: "",
      });
    } catch (err) {
  console.error(err);

  toast.error(
    err.response?.data?.errors?.[0]?.msg ||
    err.response?.data?.message ||
    "Unable to submit lead"
  );
}
  };

  return (
    <div className="w-full max-w-xl">

      <div className="rounded-3xl border border-white/15 bg-white/10 backdrop-blur-2xl p-8 shadow-[0_20px_80px_rgba(0,0,0,0.45)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(59,130,246,0.25)]">

        <h2 className="text-3xl font-bold text-white">
          Start Your Journey
        </h2>

        <p className="text-gray-300 mt-2 mb-8">
          Fill in the details below and we'll reach out shortly.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder-gray-400 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder-gray-400 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-500"
          />

          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-white outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-500"
          >
            <option value="" className="text-black">
              Select Budget
            </option>

            <option className="text-black">
              $500 - $1000
            </option>

            <option className="text-black">
              $1000 - $5000
            </option>

            <option className="text-black">
              $5000+
            </option>

          </select>

          <textarea
            rows={5}
            name="message"
            placeholder="Tell us about your project..."
            value={formData.message}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder-gray-400 outline-none resize-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full rounded-xl py-4 text-lg font-semibold transition ${
              loading
                ? "cursor-not-allowed bg-gray-500"
                : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl"
            } text-white`}
          >
            {loading ? "Submitting..." : "Submit Lead"}
          </button>

        </form>

      </div>

    </div>
  );
}

export default LeadForm;