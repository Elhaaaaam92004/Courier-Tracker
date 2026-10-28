// Array storing all parcels (like your Google Sheet)
const parcels = [
  {
    trackingID: "TRK1001",
    qrCodeID: "QR1001",
    sender: "Ali Hassan",
    receiver: "Sarah Wanjiru",
    origin: "Nairobi",
    destination: "Mombasa",
    currentLocation: "Nairobi Sorting Hub",
    status: "In Transit",
    lastUpdated: "10 Feb 2026 – 09:30 AM",
    handledBy: "Hub Scanner 01",
    remarks: "Dispatched from Nairobi"
  },
  {
    trackingID: "TRK1002",
    qrCodeID: "QR1002",
    sender: "John Mwangi",
    receiver: "Grace Atieno",
    origin: "Kisumu",
    destination: "Nakuru",
    currentLocation: "Kisumu Dispatch Center",
    status: "Awaiting Dispatch",
    lastUpdated: "10 Feb 2026 – 08:45 AM",
    handledBy: "Admin Clerk",
    remarks: "Label generated and awaiting pickup"
  },
  {
    trackingID: "TRK1003",
    qrCodeID: "QR1003",
    sender: "Fatima Noor",
    receiver: "David Ochieng",
    origin: "Eldoret",
    destination: "Nairobi",
    currentLocation: "Eldoret Transit Hub",
    status: "In Transit",
    lastUpdated: "10 Feb 2026 – 07:20 AM",
    handledBy: "Hub Scanner 02",
    remarks: "Left Eldoret hub"
  }
  // Add more parcel objects here as needed
];

// Function to search parcel and update HTML
function trackParcel() {
  const input = document.getElementById("trackingID").value.toUpperCase();
  const resultDiv = document.getElementById("result");
  const parcel = parcels.find(p => p.trackingID === input);

  if (parcel) {
    resultDiv.innerHTML = `
      <div class="parcel">
        <strong>Tracking ID:</strong> ${parcel.trackingID}<br>
        <strong>Sender:</strong> ${parcel.sender}<br>
        <strong>Receiver:</strong> ${parcel.receiver}<br>
        <strong>Origin:</strong> ${parcel.origin}<br>
        <strong>Destination:</strong> ${parcel.destination}<br>
        <strong>Current Location:</strong> ${parcel.currentLocation}<br>
        <strong>Status:</strong> ${parcel.status}<br>
        <strong>Last Updated:</strong> ${parcel.lastUpdated}<br>
        <strong>Handled By:</strong> ${parcel.handledBy}<br>
        <strong>Remarks:</strong> ${parcel.remarks}
      </div>
    `;
  } else {
    resultDiv.innerHTML = "<p>Parcel not found!</p>";
  }
}
