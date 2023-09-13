// eslint-disable-next-line react/prop-types
export default function Tab({ href, children, num, ...props }) {
  const path = window.location.pathname;
  return (
    <li className={`tab ${path === href ? "active-tab" : ""}`}>
      <a href={href} {...props}>
        <span className="md:hidden xl:inline">0{num}</span> {children}
      </a>
    </li>
  );
}
