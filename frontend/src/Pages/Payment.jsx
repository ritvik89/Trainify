import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Payment.css";
import Footer from '../component/Footer';
import Navigation from '../component/Navigation';

function generateTxnId() {
  const rand = Math.random().toString(36).slice(2, 10).toUpperCase();
  const ts = Date.now().toString(36).slice(-6).toUpperCase();
  return `DEMO-${rand}-${ts}`;
}

export default function Payment() {
  const location = useLocation();
  const selectedPlan = location.state?.selectedPlan;

  const initialForm = {
    name: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    amount: selectedPlan ? String(selectedPlan.price) : "100",
  };

  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [txnId, setTxnId] = useState(null);

  useEffect(() => {
    if (selectedPlan) {
      setForm((prev) => ({ ...prev, amount: String(selectedPlan.price) }));
    }
  }, [selectedPlan]);

  const validate = (values) => {
    const e = {};
    if (!values.name.trim()) e.name = "Name required";
    const num = values.cardNumber.replace(/\s+/g, "");
    if (!/^\d{16}$/.test(num)) e.cardNumber = "Card number must be 16 digits";
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(values.expiry)) {
      e.expiry = "Expiry must be MM/YY";
    }
    if (!/^\d{3}$/.test(values.cvv)) e.cvv = "CVV must be 3 digits";
    if (!/^\d+(\.\d{1,2})?$/.test(values.amount) || Number(values.amount) <= 0)
      e.amount = "Enter valid amount";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "cardNumber") {
      const digits = value.replace(/\D/g, "").slice(0, 16);
      const parts = digits.match(/.{1,4}/g);
      setForm((f) => ({ ...f, [name]: parts ? parts.join(" ") : "" }));
      return;
    }

    if (name === "expiry") {
      let digits = value.replace(/\D/g, "").slice(0, 4);
      if (digits.length >= 3) {
        digits = `${digits.slice(0, 2)}/${digits.slice(2)}`;
      }
      setForm((f) => ({ ...f, [name]: digits }));
      return;
    }

    if (name === "cvv") {
      const digits = value.replace(/\D/g, "").slice(0, 3);
      setForm((f) => ({ ...f, [name]: digits }));
      return;
    }

    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const v = validate(form);
    setErrors(v);
    if (Object.keys(v).length) return;

    setLoading(true);
    setStatus(null);
    setTxnId(null);

    setTimeout(() => {
      setLoading(false);
      const id = generateTxnId();
      setTxnId(id);
      setStatus("success");
    }, 1500);
  };

  return (
    <>
    <Navigation />
    <div className="payment-wrapper">
      
      <div className="card-demo">
        <div className="card-chip" />
        <div className="card-number">
          {form.cardNumber || "•••• •••• •••• ••••"}
        </div>
        <div className="card-row">
          <div className="card-name">{form.name || "CARDHOLDER NAME"}</div>
          <div className="card-expiry">{form.expiry || "MM/YY"}</div>
        </div>
      </div>

      <form className="payment-form" onSubmit={handleSubmit} noValidate>
        <h2>Payment</h2>

        {selectedPlan && (
          <p style={{ color: "#6b7280" }}>
            You selected: <strong>{selectedPlan.duration}</strong> — ₹
            {selectedPlan.price}
          </p>
        )}

        <label>
          Name on Card
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Full name"
            aria-invalid={!!errors.name}
          />
          {errors.name && <div className="err">{errors.name}</div>}
        </label>

        <label>
          Card Number
          <input
            name="cardNumber"
            value={form.cardNumber}
            onChange={handleChange}
            placeholder="1234 5678 9012 3456"
            inputMode="numeric"
            aria-invalid={!!errors.cardNumber}
          />
          {errors.cardNumber && <div className="err">{errors.cardNumber}</div>}
        </label>

        <div className="row">
          <label className="half">
            Expiry (MM/YY)
            <input
              name="expiry"
              value={form.expiry}
              onChange={handleChange}
              placeholder="MM/YY"
              inputMode="numeric"
              aria-invalid={!!errors.expiry}
            />
            {errors.expiry && <div className="err">{errors.expiry}</div>}
          </label>

          <label className="half">
            CVV
            <input
              name="cvv"
              value={form.cvv}
              onChange={handleChange}
              placeholder="123"
              inputMode="numeric"
              aria-invalid={!!errors.cvv}
            />
            {errors.cvv && <div className="err">{errors.cvv}</div>}
          </label>
        </div>

        <label>
          Amount (INR)
          <input
            name="amount"
            value={form.amount}
            readOnly // prevent user from changing
            placeholder="Amount"
          />
          {errors.amount && <div className="err">{errors.amount}</div>}
        </label>

        <div className="actions">
          <button type="submit" className="pay-btn" disabled={loading}>
            {loading ? "Processing..." : `Pay ₹${form.amount}`}
          </button>
        </div>

        {status === "success" && txnId && (
          <div className="success-box" role="status">
            <h3>✅ Payment Successful</h3>
            <p>
              Transaction ID: <strong>{txnId}</strong>
            </p>
          </div>
        )}
      </form>
     
    </div>

     <Footer />
     </>
  );
  
}
