// TRACKING FUNCTIONALITY
document.addEventListener("DOMContentLoaded", () => {
  const trackForm = document.getElementById("track-form");
  const trackResult = document.getElementById("track-result");

  if (trackForm) {
    trackForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const trackingNumber = trackForm.querySelector("input").value;

      // Simulated response
      trackResult.innerHTML = `
        <div class="result-card">
          <h3>Tracking Number: ${trackingNumber}</h3>
          <p>Status: <strong>In Transit</strong></p>
          <p>Current Location: Accra → New York</p>
          <p>Estimated Delivery: 3 Days</p>
        </div>
      `;
    });
  }

  // BOOKING FUNCTIONALITY
  const bookForm = document.getElementById("book-form");

  if (bookForm) {
    bookForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const inputs = bookForm.querySelectorAll("input");
      const values = Array.from(inputs).map(input => input.value);

      alert(`Shipment booked successfully for:\nFrom: ${values[2]}\nTo: ${values[3]}\nWeight: ${values[4]}kg`);
      bookForm.reset();
    });
  }
});
