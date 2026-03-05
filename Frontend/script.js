const API = "http://localhost:5000/api";

let token = "";

// Register
async function register() {
    await fetch(`${API}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            name: name.value,
            email: email.value,
            password: password.value
        })
    });
    alert("Registered!");
}

// Login
async function login() {
    const res = await fetch(`${API}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            email: loginEmail.value,
            password: loginPassword.value
        })
    });

    const data = await res.json();
    token = data.token;
    alert("Logged in!");
}

// Book Ticket
async function bookTicket() {
    await fetch(`${API}/bookings/ticket`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            userId: "123",
            date: date.value,
            ticketType: ticketType.value,
            quantity: quantity.value
        })
    });
    alert("Ticket Booked!");
}

// Book Hotel
async function bookHotel() {
    await fetch(`${API}/bookings/hotel`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            userId: "123",
            roomType: roomType.value,
            checkIn: checkIn.value,
            checkOut: checkOut.value
        })
    });
    alert("Hotel Booked!");
}
