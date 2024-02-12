import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateAvatarThunk } from 'services/fetchAuth';

const Update = () => {
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();

  const handleChange = event => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(updateAvatarThunk(file));
  };
  return (
    <div style={{ marginTop: 60 }}>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleChange} />
        <button>Upload</button>
      </form>
    </div>
  );
};

export default Update;
