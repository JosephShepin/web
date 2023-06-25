import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faMapMarker, faGraduationCap, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
	faTwitter,
	faGithub,
	faLinkedin,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import INFO from "../../data/user";

import "./styles/homesocials.css";

const HomeSocials = () => {
	return (
		<div className="socials">
			<div className="social">
				<a href="https://cs.illinois.edu" target="_blank" rel="noreferrer">
					<div className="social-icon">
						<FontAwesomeIcon
							icon={faGraduationCap}
							className="social-icon"
						/>
					</div>
					<div className="social-text">University of Illinois Urbana-Champaign</div>
				</a>
			</div>

			<div className="social">
				<a href={INFO.socials.github} target="_blank" rel="noreferrer">
					<div className="social-icon">
						<FontAwesomeIcon
							icon={faMapMarker}
							className="social-icon"
						/>
					</div>
					<div className="social-text">Urbana, IL</div>
				</a>
			</div>

			<div className="social">
				<a href={`mailto:${INFO.main.email}`} target="_blank" rel="noreferrer">
					<div className="social-icon">
						<FontAwesomeIcon
							icon={faEnvelope}
							className="social-icon"
						/>
					</div>
					<div className="social-text">{INFO.main.email}</div>
				</a>
			</div>

			<div className="social">
				<a href={`mailto:${INFO.main.email2}`} target="_blank" rel="noreferrer">
					<div className="social-icon">
						<FontAwesomeIcon
							icon={faEnvelope}
							className="social-icon"
						/>
					</div>
					<div className="social-text">{INFO.main.email2}</div>
				</a>
			</div>
			<div className="email">
			<div className="email-wrapper">
				<a
						href={INFO.main.resume}
						target="_blank"
						rel="noreferrer"
					>
						<div className="social-icon">
							<FontAwesomeIcon icon={faLink} />
							<a className="pdflink">Resume</a>
						</div>

					</a>
				</div>
				<div className="email-wrapper">
				<a
						href={INFO.main.cv}
						target="_blank"
						rel="noreferrer"
					>
						<div className="social-icon">
							<FontAwesomeIcon icon={faLink} />
							<a className="pdflink">Curriculum Vitae</a>
						</div>

					</a>
				</div>
			</div>

		</div>
	);
};

export default HomeSocials;
