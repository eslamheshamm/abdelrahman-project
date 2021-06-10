import React from "react";
interface LinkProps {
	text: string;
	link: string;
}
const Link: React.FC<LinkProps> = (props) => {
	const { link, text } = props;
	return (
		<a
			href={link}
			target="_blank"
			rel="noopener noreferrer"
			className="flex items-center uppercase"
		>
			<span className="mr-2 text-sm">{text}</span>

			<svg
				width="18"
				height="18"
				viewBox="0 0 18 18"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M9.79163 3.19279L14.5628 3.73254C14.8556 3.76567 15.1198 4.02987 15.1529 4.32265L15.6926 9.09381C15.7258 9.38659 15.5153 9.59709 15.2225 9.56396C14.9297 9.53084 14.6655 9.26664 14.6324 8.97386L14.2374 5.48255L4.40161 15.3184L3.56708 14.4838L13.4029 4.64802L9.91158 4.25305C9.61879 4.21992 9.3546 3.95573 9.32147 3.66295C9.28835 3.37016 9.49885 3.15967 9.79163 3.19279Z"
					fill="black"
				/>
			</svg>
		</a>
	);
};
const Footer: React.FC = () => {
	return (
		<footer className="font-inter absolute bottom-0 left-0 right-0 w-11/12 mx-auto  pb-6 ">
			<div className="flex flex-col md:flex-row items-center justify-between w-full">
				<a
					href="http://google.com"
					target="_blank"
					rel="noopener noreferrer"
					className="mb-2 md:mb-0"
				>
					@Abdelrahman
				</a>
				<ul className="flex">
					<li>
						<Link text="facebook" link="https://eslamheshamm.githab.io" />
					</li>
					<li className="border-l h-4 mx-4 "></li>
					<li>
						<Link text="instagram" link="https://eslamheshamm.githab.io" />
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
