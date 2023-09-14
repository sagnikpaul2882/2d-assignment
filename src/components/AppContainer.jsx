import { useRef, useState } from "react";
import { FILTERS } from "../enums/Filters";
import ImageContainer from "./ImageContainer";
import ImageControlsContainer from "./ImageControlsContainer";
import UploadImageContainer from "./UploadImageContainer";

function AppContainer() {
    const [imageLink, setImageLink] = useState(null);
    const [appliedFilter, updateAppliedFilter] = useState(FILTERS.NONE);

    const stageRef = useRef(null);
  
    const handleChange = (e) => {
      if (e.target.files.length === 0) {
        return;
      }

      setImageLink(URL.createObjectURL(e.target.files[0]));
      updateAppliedFilter(FILTERS.NONE);
    }
  
    const onChangeFilter = (selectedFilter) => {
      updateAppliedFilter(selectedFilter);
    }

    const onClickSave = () => {
      const saveImage = stageRef.current.toDataURL();
      downloadURI(saveImage, 'image.png');
    }

    const downloadURI = (uri, name) => {
      let link = document.createElement('a');
      link.download = name;
      link.href = uri;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  
  
    return (
      <div className="app-container">
        {imageLink && ( 
          <>
            <ImageContainer image={imageLink} appliedFilter={appliedFilter} stageRef={stageRef}  />
            <ImageControlsContainer appliedFilter={appliedFilter} onChangeFilter={onChangeFilter} />
          </> 
        )}
        <UploadImageContainer handleChange={handleChange} imageLink={imageLink} onClickSave={onClickSave} />
      </div>
    )
  }

  export default AppContainer