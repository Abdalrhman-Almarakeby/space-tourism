/* eslint-disable react/prop-types */
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
        ${destination.name === children ? "border-b-white" : ""}
        py-2 uppercase text-sm border-b-[3px] border-transparent cursor-pointer md:text-base tracking-[2.5px] xl:py-3
        `}
    >
      {children}
    </li>
  );
}
