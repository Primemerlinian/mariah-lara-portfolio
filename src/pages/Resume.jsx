function Resume() {
  return (
    <>
      <h1> Click the icon to download my resume</h1>
      <div className="resume-container">
        <p className="resumedownload">
          {" "}
          <a
            href="https://drive.google.com/file/d/1INENN576GTF0GXQ9j0gWOir_mnZ5UyFE/view?usp=sharing"
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
