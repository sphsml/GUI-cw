import React, { useState } from 'react';

const LogWorkStatus = () => {
  const [image, setImage] = useState<File | null>(null);
  const [status, setStatus] = useState<string>('');

  //allows for replacement of default image
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
    }
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission (e.g., upload image and data to server)
    console.log({image});
    // Reset form values
    setImage(null);
  };

  return (
    <div>
      <h2>LOG WORK STATUS</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '20px' }}>
          <label>
            <input type="radio" name="status" value="WFH" checked={status === 'WFH'} onChange={handleStatusChange} />
            WFH
          </label>
          <label style={{ marginLeft: '20px' }}>
            <input type="radio" name="status" value="Off Sick" checked={status === 'Off Sick'} onChange={handleStatusChange} />
            Off Sick
          </label>
          <label style={{ marginLeft: '20px' }}>
            <input type="radio" name="status" value="Log COVID Status" checked={status === 'Log COVID Status'} onChange={handleStatusChange} />
            Log COVID Status
          </label>
        </div>
        <div>
            <textarea
                name="postContent"
                defaultValue="Any important details to note"
                rows={6}
                cols={15}
            />
        </div>
        <label htmlFor="imageUpload">Upload COVID test status Image here:</label>
        <div style={{ marginTop: '10px', marginBottom: '20px' }}>
          <input type="file" id="imageUpload" accept="image/jpeg" onChange={handleImageChange} />
        </div>
        <button type="submit" onClick={() => window.history.back()}>Submit</button>
      </form>
    </div>
  );
};

export default LogWorkStatus;