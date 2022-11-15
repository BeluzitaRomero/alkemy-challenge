import { Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer
      style={{ backgroundColor: "#1976d2", color: "white", padding: "1.5rem" }}
    >
      <ul>
        <li>
          <Typography textAlign="center">
            <a
              style={{ textDecoration: "none", color: "white" }}
              href="https://www.instagram.com/"
              target={"blank"}
              rel="noopener noreferrer"
            >
              <InstagramIcon fontSize="large" />
            </a>
          </Typography>
        </li>
      </ul>
      <Typography textAlign="center">
        COPYRIGHT BELUZITA ALKEMY CHALLENGE
      </Typography>
    </footer>
  );
};
