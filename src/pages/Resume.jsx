function Resume() {
  return (
    <>
      <h1>My Resume</h1>
      <div className="resume-container">
        <p className="resumedownload">
          {" "}
          Like what you see?
          <a
            href="https://drive.google.com/file/d/1thB1z1RqZlqUCRwfPLDtfNUhJgSN7beQ/view?usp=sharing"
            download
          >
            <span className="downloadmyresumebutton">Download my resume.</span>
          </a>
        </p>
        <img
          src="https://i.imgur.com/5FP5L9m.png"
          className="resumeimg"
          alt=""
        />
      </div>
    </>
  );
}

export default Resume;
