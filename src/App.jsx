import Header from "./components/Header";
import Item from "./components/Item";
import { useDispatch, useSelector } from "react-redux";

import { searchJobs, filterByTag, filterByCondition } from "./main";

function App() {
  const dispatch = useDispatch();
  const filteredJobs = useSelector((state) => state.filteredJobs);
  const handleKiki = (tag) => {
    dispatch(filterByTag(tag));
  };

  const handleBallads = (condition) => {
    dispatch(filterByCondition(condition));
  };

  const handleSearch = (e) => {
    dispatch(searchJobs(e.target.value));
  };
  return (
    <>
      <Header />
      <section className="job">
        <div className="container">
          <input
            className="searchBar"
            onChange={handleSearch}
            type="text"
            placeholder="Search Your Job"
          />
          <div className="job__content">
            {filteredJobs.map((job, i) => (
              <Item
                key={i}
                item={job}
                onKiki={handleKiki}
                onBallads={handleBallads}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
