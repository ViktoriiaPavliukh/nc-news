import React from "react";
import {
  IconButton,
  Stack,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div className="footer">
      <Link
        className="footer-link"
        to="https://github.com/ViktoriiaPavliukh/nc-news.git"
      >
        GitHub Link
      </Link>
      <div className="social-media">
        <Link className="footer-link" to="https://www.instagram.com">
          <InstagramIcon />
        </Link>
        <Link
          className="footer-link"
          to="https://www.telegram.org"
          aria-label="Telegram"
        >
          <TelegramIcon />
        </Link>
        <Link
          className="footer-link"
          to="https://www.facebook.com"
          aria-label="Facebook"
        >
          <FacebookRoundedIcon />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
