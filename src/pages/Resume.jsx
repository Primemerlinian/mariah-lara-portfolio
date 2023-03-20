function Resume() {
  return (
    <>
      <h1> Click the icon to download my resume</h1>
      <div className="resume-container">
        <p className="resumedownload">
          {" "}
          <a
            href="https://docs.google.com/document/d/1MsdxRnaXlY0byGYJfVuSgYPBcwBIL6ihFefZi0q2pUE/edit?usp=sharing"
            download
          >
            <span className="downloadmyresumebutton">
        <img
          src="https://www.svgrepo.com/show/266221/resume-portfolio.svg"
          className="resumeimg"
          alt=""
          />
          </span>
          </a>
        </p>
      </div>
    </>
  );
}

export default Resume;
