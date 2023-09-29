import propTypes from "prop-types";

export default function Tab({
  children,
  tabData,
  setFunc,
  objectsArr,
  ...props
}) {
  return (
    <li
      {...props}
      data-tab={tabData}
      onClick={(e) =>
        setFunc(
          objectsArr.find(
            (obj) => obj.name === e.target.getAttribute("data-tab")
          )
        )
      }
    >
      {children}
    </li>
  );
}

Tab.propTypes = {
  children: propTypes.node,
  tabData: propTypes.string.isRequired,
  setFunc: propTypes.func.isRequired,
  objectsArr: propTypes.arrayOf(
    propTypes.shape({ name: propTypes.string.isRequired })
  ).isRequired,
};
