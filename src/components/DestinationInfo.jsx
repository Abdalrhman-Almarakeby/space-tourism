/* eslint-disable react/prop-types */
export default function DestinationInfo(props) {
  return (
    <div className="border p-5">
      <h3>{props.name}</h3>
      <p>{props.description}</p>

      <hr />
      <div>
        <div>
          <span>Avg. distance</span>
          <p>{props.distance}</p>
        </div>
        <div>
          <span>Est. travel time</span>
          <p>{props.travel}</p>
        </div>
      </div>
    </div>
  );
}
