import propTypes from "prop-types";
export default function CrewMemberInfo({ role, name, bio }) {
  return (
    <div className="text-center">
      <h5 className="text-lg text-white/50">{role}</h5>
      <h4 className="pt-2 pb-4 text-2xl uppercase font-Bellefair">{name}</h4>
      <p className="leading-7 font-Barlow text-light">{bio}</p>
    </div>
  );
}

CrewMemberInfo.propTypes = {
  role: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  bio: propTypes.string.isRequired,
};
