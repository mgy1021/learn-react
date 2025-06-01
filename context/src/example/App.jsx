import { places } from "./data";
import { getImageUrl } from "./utils";
import { useState, useContext } from "react";
import { ImageSizeCentext } from "./ImageSizeCentext";

export default function App() {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 150 : 100;

  return (
    <ImageSizeCentext value={imageSize}>
      <label>
        <input
          type="checkbox"
          checked={isLarge}
          onChange={(e) => {
            setIsLarge(e.target.checked);
          }}
        />
        Use large images
      </label>
      <hr />
      <List data={places} />
    </ImageSizeCentext>
  );
}

function List({ data }) {
  const listItems = data.map((place) => (
    <li key={place.id}>
      <Place place={place}></Place>
    </li>
  ));

  return <ul>{listItems}</ul>;
}

function Place({ place }) {
  return (
    <div className="place">
      <PlaceImage place={place} />
      <PlaceContent place={place} />
    </div>
  );
}

function PlaceContent({ place }) {
  return (
    <p>
      <b>{place.name}</b>
      {"：" + place.description}
    </p>
  );
}

function PlaceImage({ place }) {
  const imageSize = useContext(ImageSizeCentext);

  return (
    <img
      src={getImageUrl(place)}
      alt={place.name}
      width={imageSize}
      height={imageSize}
    />
  );
}

// function List({ imageSize }) {
//   const listItems = places.map((place) => (
//     <li key={place.id}>
//       <Place place={place} imageSize={imageSize} />
//     </li>
//   ));

//   return <ul>{listItems}</ul>;
// }

// function Place({ place, imageSize }) {
//   return (
//     <div className="place">
//       <PlaceImage place={place} imageSize={imageSize} />
//       <p>
//         <b>{place.name}</b>
//         {"：" + place.description}
//       </p>
//     </div>
//   );
// }

// function PlaceImage({ place, imageSize }) {
//   return (
//     <img
//       src={getImageUrl(place)}
//       alt={place.name}
//       width={imageSize}
//       height={imageSize}
//     />
//   );
// }
