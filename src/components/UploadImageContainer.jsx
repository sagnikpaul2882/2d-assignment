function UploadImageContainer(props) {
  return (
    <div className="upload-image-container">
      <label htmlFor="file">Upload Image</label>
      <input type="file" id="file" onChange={props.handleChange} />

      {props.imageLink && (
        <button className="save-button" onClick={() => props.onClickSave()}>Save Image</button>
      )}
    </div>
  );
}

export default UploadImageContainer;
