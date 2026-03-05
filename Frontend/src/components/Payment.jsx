import API from "../api/api";

export default function Payment({ ticketType, quantity }) {
  const handlePayment = async () => {
    try {
      const res = await API.post("/payment/create-checkout-session", {
        ticketType,
        quantity,
      });

      window.location.href = res.data.url;
    } catch (err) {
      alert("Payment error");
    }
  };

  return (
    <button onClick={handlePayment}>
      Pay for {quantity} {ticketType} Ticket(s)
    </button>
  );
}