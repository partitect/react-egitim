import PropTypes from "prop-types";

/**
 * A component that renders a red box with customizable height.
 *
 * @component
 * @param {string} color - The background color of the box. Default value is "red".
 * @param {number} height - The height of the box. Default value is 200.
 * @returns {JSX.Element} The rendered red box component.
 */
export default function KirmiziKutu({ color = "red", height = 200 }) {
  return (
    <div style={{ width: 100, height: height, backgroundColor: color }}></div>
  );
}
KirmiziKutu.propTypes = {
  color: PropTypes.string,
  height: PropTypes.number,
};
