import PropTypes from "prop-types";
import Details from "./Details";
import Tags from "./Tags";

function JobItem({ item, onKiki, onBallads }) {
  const handleEvent = (e) => {
    onKiki(e);
  };

  const handleDetail = (e) => {
    onBallads(e);
  };

  return (
    <div className="job__item flex">
      <div data-id="0" className="job__left flex">
        <div className="job__avatar">
          <img
            className="img"
            src={item.avatarUrl}
            alt={`Avatar for ${item.company}`}
          />
        </div>
        <div className="data">
          <div className="job__top flex">
            <h2 className="job__company">{item.company}</h2>

            {item.featured && <div className="job__featured">FEATURED</div>}
          </div>
          <div className="job__center">
            <h2 className="job__title">{item.title}</h2>
          </div>
          <div className="job__bottom">
            <Details onFrank={handleDetail} conditions={item.conditions} />
          </div>
        </div>
      </div>
      <div className="job__right">
        <Tags onFrank={handleEvent} tags={item.tags} />
      </div>
    </div>
  );
}

JobItem.propTypes = {
  item: PropTypes.shape({
    avatarUrl: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    featured: PropTypes.bool,
    conditions: PropTypes.arrayOf(PropTypes.string).isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  onKiki: PropTypes.func.isRequired,
  onBallads: PropTypes.func.isRequired,
};

export default JobItem;
