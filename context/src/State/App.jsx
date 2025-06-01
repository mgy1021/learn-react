import { useState } from "react";
import "./index.css";

export default function () {
  const [isActive, setIsActive] = useState(false);

  let backgroundClassName = "background";
  let pictrueClassName = "picture";

  if (isActive) {
    pictrueClassName += " picture--active";
  } else {
    backgroundClassName += " background--active";
  }

  return (
    <div onClick={(e) => setIsActive(false)} className={backgroundClassName}>
      <img
        onClick={(e) => {
          e.stopPropagation();
          setIsActive(true);
        }}
        className={pictrueClassName}
        src="https://i.imgur.com/5qwVYb1.jpeg"
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
      />
    </div>
  );
}
