import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

export default function Footer() {
  const date = new Date().getFullYear();

  return (
    <div className="container fixed-bottom">
      <footer className="page-footer font-small ">
        <div className="footer-copyright text-center py-3">
          <p className="text-muted">© {date} Copyright: Nikson John</p>
          <a href="https://www.linkedin.com/in/nikson-john-6a3a69168/">
            <LinkedInIcon style={{ color: "grey" }} />
          </a>
          <a href="https://github.com/Nikson-bLank">
            <GitHubIcon style={{ color: "grey" }} />
          </a>
        </div>
      </footer>
    </div>
  );
}
