import { useEffect, useState } from "react";

function Checkout() {
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    // Simulate order processing delay
    setTimeout(() => {
      setShowSuccess(true);
    }, 500); // You can remove the timeout if you want it instant
  }, []);

  return (
    <div className="container mt-5">
      {showSuccess && (
        <div className="alert alert-success text-center fw-bold" role="alert">
          ✅ Order submitted successfully!
        </div>
      )}
      <h2 className="text-center">Checkout Page</h2>
      {/* You can add order details or payment form here */}
    </div>
  );
}

export default Checkout;
