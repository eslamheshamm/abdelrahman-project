import portrait from "../../components/assets/portrait.png";
import documentary from "../../components/assets/documentary.png";
import cinematography from "../../components/assets/cinematography.png";
import street from "../../components/assets/street.png";
import commercialShots from "../../components/assets/commercial-shots.png";
import { Gallery } from "./types";
export const galleries: Gallery[] = [
	{
		title: "portrait",
		id: "portrait",
		alt: "portrait",
		img: portrait,
	},
	{
		title: "documentary",
		id: "documentary",
		alt: "documentary",
		img: documentary,
	},

	{
		title: "cinematography",
		id: "cinematography",
		alt: "cinematography",
		img: cinematography,
	},
	{
		title: "street",
		id: "street",
		alt: "street",
		img: street,
	},
	{
		title: "commercial shots",
		id: "commercial-shots",
		alt: "commercial-shots",
		img: commercialShots,
	},
];
