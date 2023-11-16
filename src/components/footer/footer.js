import React from "react";
import "./footer.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Twitter } from "@mui/icons-material";
import { LINKEDIN_LINK, GITHUB_LINK, TWITTER_LINK} from "../../constants";
const Footer = () => {

    const openSocialLink = (link) => {
        window.location.href=link
    }

    return (
        <div className="footer">
            <div className="footer-links">
                <LinkedInIcon  className="footer-logo" fontSize={"large"} onClick={() => openSocialLink(LINKEDIN_LINK)}/>
                <GitHubIcon className="footer-logo" fontSize={"large"} onClick={() => openSocialLink(GITHUB_LINK)}/>
                <Twitter className="footer-logo" fontSize={"large"}  onClick={() => openSocialLink(TWITTER_LINK)}/>
            </div>
        </div>
    )
}

export default Footer