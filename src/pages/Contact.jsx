import { useState } from "react";
export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleBlur = (e) => {
    if (!e.target.value) {
      setError(`${e.target.name} is required`);
    } else if (e.target.name === "email" && !validateEmail(e.target.value)) {
      setError("Invalid email address");
    } else {
      setError("");
    }
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <section>
      <form>
        <input name="name" placeholder="Name" onBlur={handleBlur} onChange={handleChange} />
        <input name="email" placeholder="Email" onBlur={handleBlur} onChange={handleChange} />
        <textarea name="message" placeholder="Message" onBlur={handleBlur} onChange={handleChange} />
        {error && <p className="error">{error}</p>}
        <button type="submit">Send</button>
      </form>
      <p>Email: nina.dev@email.com</p>
      <p>Phone: 555-123-4567</p>
    </section>
  );
}
