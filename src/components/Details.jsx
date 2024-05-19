import PropTypes from "prop-types";

function Details({ conditions, onFrank }) {
  return (
    <ul className="job__details flex">
      {conditions.map((detail) => (
        <li key={detail} className="job__detail">
          <a
            href="#"
            className="job__condition"
            onClick={() => onFrank(detail)}
          >
            {detail}
          </a>
        </li>
      ))}
    </ul>
  );
}

Details.propTypes = {
  conditions: PropTypes.arrayOf(PropTypes.string).isRequired,
  onFrank: PropTypes.func.isRequired,
};

export default Details;
