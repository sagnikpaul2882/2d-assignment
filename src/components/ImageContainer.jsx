import { useEffect, useRef } from "react";
import { Stage, Layer, Image } from "react-konva";
import useImage from "use-image";
import { getFilterProps } from "../helpers/filterHelpers";

function ImageContainer(props) {
  const [image] = useImage(props.image);
  const imageRef = useRef();

  useEffect(() => {
    if (image) {
      imageRef.current.cache();
    }
  }, [image]);

  const filterObj = getFilterProps(props.appliedFilter);

  return (
    <Stage width="600" height="400" ref={props.stageRef}>
      <Layer>
        <Image
          ref={imageRef}
          image={image}
          crop={false}
          height={400}
          width={600}
          {...filterObj}
        />
      </Layer>
    </Stage>
  );
}

export default ImageContainer;
