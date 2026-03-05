import Header from "../components/Header";

export default function Cancel() {
  return (
    <div>
      <Header />
      <div className="card" style={{ textAlign: "center" }}>
        <h2>❌ Payment Cancelled</h2>
        <p>Your payment was not completed.</p>
        <p>Please try again if you want to book your tickets or hotel stay.</p>
      </div>
    </div>
  );
}
