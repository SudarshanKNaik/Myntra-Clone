import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bagActions } from '../Store/BagSlice';
import { BsFillBagPlusFill, BsBagXFill } from 'react-icons/bs';


const HomeItem = ({ item }) => {
  const dispatch = useDispatch();
  const BagItems = useSelector((state) => state.bag); 
  console.log("Current Bag Items from Redux:", BagItems);
  const elementFound = BagItems.indexOf(item.id) >= 0;

  const handleAddToBag = () => {
    console.log("Add to Bag clicked:", item.id);
    dispatch(bagActions.addToBag(item.id));
  };
  const handleRemoveFromBag = () => {
    dispatch(bagActions.removeFromBag(item.id));
  }

  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>

      {
        elementFound ? (
          <button type="button" className="btn btn-danger btn-add-bag" onClick={handleRemoveFromBag}>
            <span className="icon-spacing"><BsBagXFill /></span>
            Remove
          </button>
        ) : (
          <button type="button" className="btn btn-success btn-add-bag" onClick={handleAddToBag}>
            <span className="icon-spacing"><BsFillBagPlusFill /></span>
            Add to Bag
          </button>
        )
      }
    </div>
  );
};

export default HomeItem;
