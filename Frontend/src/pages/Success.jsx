import Header from "../components/Header";

export default function Success() {
  return (
    <div>
      <Header />
      <div className="card" style={{ textAlign: "center" }}>
        <h2>✅ Payment Successful!</h2>
        <p>Thank you for booking with Riget Zoo Adventures.</p>
        <p>Your tickets/hotel stay has been confirmed.</p>
      </div>
    </div>
  );
}