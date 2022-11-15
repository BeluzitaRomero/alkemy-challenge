import { Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer
      style={{ backgroundColor: "#1976d2", color: "white", padding: "1.5rem" }}
    >
      <Typography textAlign="center">
        <ul>
          <li>
            <a
              style={{ textDecoration: "none", color: "white" }}
              href="https://www.instagram.com/"
              target={"blank"}
              rel="noopener noreferrer"
            >
              <InstagramIcon fontSize="large" />
            </a>
          </li>
        </ul>
      </Typography>
      <Typography textAlign="center">
        <p>COPYRIGHT BELUZITA ALKEMY CHALLENGE</p>
      </Typography>
    </footer>
  );
};
