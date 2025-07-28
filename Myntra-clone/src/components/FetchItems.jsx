import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchStatusActions } from "../Store/fetStatusSlice"; // ✅ Correct import
import itemsSlice, { itemsActions } from "../Store/itemSlice"; // ✅ Correct import



const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(fetchStatusActions.markFetchingStarted()); // ✅ Correct usage

    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({items}) => {
        dispatch(fetchStatusActions.markFetchingFinished()); // ✅ Correct usage
        dispatch(fetchStatusActions.markFetchDone()); // ✅ Correct usage
        dispatch(itemsActions.addInitialItems(items)); // ✅ Correct usage
      })
      
    return () => {
      controller.abort();
    };
  }, [fetchStatus]);

  return (
    <>
    <div>
      
    </div>
    </>
  );
};

export default FetchItems;
