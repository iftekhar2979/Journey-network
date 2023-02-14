import { FaStar } from "react-icons/fa";
function Rating({ filled, onClick }) {
  return (
    <FaStar 
     color={filled ? "orange" : "lightgray"} 
     onClick={onClick} />
  );
}
export default Rating;