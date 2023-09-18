/* eslint-disable react/prop-types */
export default function Tabs(props) {
  return (
    <ul>
      <li
        onClick={props.handleTabClick}
        className={`${props.destination === "Moon" ? "border-4" : ""}`}
      >
        moon
      </li>
      <li
        onClick={props.handleTabClick}
        className={`${props.destination === "Mars" ? "border-4" : ""}`}
      >
        mars
      </li>
      <li
        onClick={props.handleTabClick}
        className={`${props.destination === "Europa" ? "border-4" : ""}`}
      >
        europa
      </li>
      <li
        onClick={props.handleTabClick}
        className={`${props.destination === "Titan" ? "border-4" : ""}`}
      >
        titan
      </li>
    </ul>
  );
}
