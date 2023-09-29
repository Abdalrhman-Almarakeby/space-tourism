import propTypes from "prop-types";

export default function Tab({
  children,
  handleTabClick,
  destination,
  ...props
}) {
  return (
    <li
      {...props}
      data-tab={children}
      onClick={handleTabClick}
      className={`
        ${destination.name === children ? "active" : ""}
        tab
        `}
    >
      {children}
    </li>
  );
}

Tab.propTypes = {
  children: propTypes.string.isRequired,
  handleTabClick: propTypes.func.isRequired,
  destination: propTypes.shape({
    name: propTypes.string.isRequired,
  }),
};
