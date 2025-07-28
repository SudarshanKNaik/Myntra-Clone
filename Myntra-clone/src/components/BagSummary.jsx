import { useSelector } from "react-redux";

const BagSummary = () => {
  const bagItems = useSelector((state) => state.bag); // ['001', '002', ...]
  const items = useSelector((state) => state.item) || [];

  // Get full item details for bag items
  const finalItems = items.filter((item) => bagItems.includes(item.id));

  const CONVENIENCE_FEE = 99;

  let totalItem = finalItems.length;
  let totalMRP = 0;
  let totalDiscount = 0;
  let totalCurrentPrice = 0;

  finalItems.forEach((item) => {
    totalMRP += item.original_price;
    totalCurrentPrice += item.current_price;
    totalDiscount += item.original_price - item.current_price;
  });

  let finalPayment = totalCurrentPrice + CONVENIENCE_FEE;

  return (
    <div className="bag-summary">
      <h2>Bag Summary</h2>
      <div className="bag-details-container">
        <div className="price-header">PRICE DETAILS ({totalItem} Items)</div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹{totalDiscount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">₹{CONVENIENCE_FEE}</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{finalPayment}</span>
        </div>
      </div>
      <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </div>
  );
};

export default BagSummary;
