import PropTypes from "prop-types";

function Tags({ tags, onFrank }) {
  return (
    <ul className="job__tags flex">
      {tags.map((tag) => (
        <li key={tag} className="job__tag">
          <a href="#" className="job__link" onClick={() => onFrank(tag)}>
            {tag}
          </a>
        </li>
      ))}
    </ul>
  );
}

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  onFrank: PropTypes.func.isRequired,
};

export default Tags;
