import BagSummary from "../components/BagSummary";
import BagItem from "../components/BagItem";
import { useSelector } from "react-redux";

const Bag = () => {
  const bagItems = useSelector((state) => state.bag || []);
  const items = useSelector((state) => state.item) || [];
  const bagItemSet = new Set(bagItems.map(String));
  const finalItems = items.filter((item) => bagItemSet.has(String(item.id)));

  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {finalItems.map((item) => (
            <BagItem key={item.id} item={item} />
          ))}
        </div>
        <BagSummary />
      </div>
    </main>
  );
};

export default Bag;
