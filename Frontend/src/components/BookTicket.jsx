import { useState } from "react";
import Payment from "./Payment";

export default function BookTicket() {
  const [date, setDate] = useState("");
  const [ticketType, setTicketType] = useState("Adult");
  const [quantity, setQuantity] = useState(1);

  return (
    <div>
      <h2>Book Zoo Ticket</h2>

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <select
        value={ticketType}
        onChange={(e) => setTicketType(e.target.value)}
      >
        <option value="Adult">Adult</option>
        <option value="Child">Child</option>
      </select>

      <input
        type="number"
        min="1"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      />

      {/* Stripe Payment Button */}
      <Payment ticketType={ticketType} quantity={quantity} />
    </div>
  );
}
