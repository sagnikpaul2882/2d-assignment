import { FILTERS } from "../enums/Filters";

function ImageControlsContainer(props) {
  return (
    <div className="image-controls">
      {Object.keys(FILTERS).map((filter) => (
        <div
          className={
            "filter" +
            (props.appliedFilter === FILTERS[filter] ? " selected" : "")
          }
          key={filter}
          onClick={() => props.onChangeFilter(FILTERS[filter])}
        >
          {FILTERS[filter]}
        </div>
      ))}
    </div>
  );
}

export default ImageControlsContainer;
