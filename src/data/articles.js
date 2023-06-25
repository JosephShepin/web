import React from "react";

function cmmvt() {
	return {
		date: "April 21, 2021",
		title: "Contrastive Multi-Model Video Transformer",
		location: "Talk, Illinois Mathematics and Science Academy, IMSAloquium 2021, Aurora, Illinois",
		description:
			"Transformer networks have shown great promise in video classification and understanding tasks by reducing the dependency on recurrent networks, and instead using self-attention techniques. Recurrent techniques are often not suitable for videos/data with long-term temporal dependencies due to the vanishing gradient problem, as well as the inability to fully backpropagate due to computational power restrictions. By using self-attention, a neural network can learn long-term dependencies with lower computational requirements and higher accuracy. We aim to increase the performance of self-supervised video transformer networks by contrasting frame-level local representations with the video-level global representations and determining how contrasting different representations from different data modalities may increase accuracy.",
		keywords: [
			"Transformer Model",
			"Contrastive Learning",
			"Deep Learning",
			"Semi-Supervised Learning",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
					Transformer networks have shown great promise in video classification and understanding tasks by reducing the dependency on recurrent networks, and instead using self-attention techniques. Recurrent techniques are often not suitable for videos/data with long-term temporal dependencies due to the vanishing gradient problem, as well as the inability to fully backpropagate due to computational power restrictions. By using self-attention, a neural network can learn long-term dependencies with lower computational requirements and higher accuracy. We aim to increase the performance of self-supervised video transformer networks by contrasting frame-level local representations with the video-level global representations and determining how contrasting different representations from different data modalities may increase accuracy.
					</div>
				</div>
				<br></br>
				<a href="/files/cmmvt-presentation.pdf">View Slides</a>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "7 May 2023",
		title: "Artificial Intelligence in Healthcare",
		description:
			"AI is transforming the healthcare industry, from improving patient outcomes to streamlining operations. Discover the latest applications of this game-changing technology.",
		style: ``,
		keywords: [
			"Artificial Intelligence in Healthcare",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

const myArticles = [cmmvt];

export default myArticles;
