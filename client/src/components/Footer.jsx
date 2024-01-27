import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import {
	BsInstagram,
	BsTwitter,
	BsGithub,
	BsDribbble,
	BsLinkedin,
} from "react-icons/bs";
export default function FooterCom() {
	return (
		<Footer container className="border border-t-8 border-blue-500">
			<div className="w-full max-w-7xl mx-auto">
				<div className="grid w-full justify-between sm:flex md:grid-cols-1">
					<div className="mt-5">
						<Link
							to="/"
							className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
						>
							<span className="px-2 py-1 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl rounded-lg text-white">
								Insightful
							</span>
							Ink
						</Link>
					</div>
					<div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
						<div>
							<Footer.Title title="About" />
							<Footer.LinkGroup col>
								<Footer.Link
									href="https://www.linkedin.com/in/chetan-joshi-26270328a/"
									target="_blank"
									rel="noopener noreferrer"
								>
									Know More
								</Footer.Link>
								<Footer.Link
									href="/about"
									target="_blank"
									rel="noopener noreferrer"
								>
									InsightfulInk
								</Footer.Link>
							</Footer.LinkGroup>
						</div>
						<div>
							<Footer.Title title="Follow us" />
							<Footer.LinkGroup col>
								<Footer.Link
									href="https://www.github.com/Chetan27801"
									target="_blank"
									rel="noopener noreferrer"
								>
									Github
								</Footer.Link>
								<Footer.Link href="#">Discord</Footer.Link>
							</Footer.LinkGroup>
						</div>
						<div>
							<Footer.Title title="Legal" />
							<Footer.LinkGroup col>
								<Footer.Link href="#">Privacy Policy</Footer.Link>
								<Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
							</Footer.LinkGroup>
						</div>
					</div>
				</div>
				<Footer.Divider />
				<div className="w-full sm:flex sm:items-center sm:justify-between">
					<Footer.Copyright
						href="#"
						by="InsightfulInk"
						year={new Date().getFullYear()}
					/>
					<div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
						<Footer.Icon
							href="https://www.linkedin.com/in/chetan-joshi-26270328a/"
							icon={BsLinkedin}
						/>
						<Footer.Icon href="#" icon={BsInstagram} />
						<Footer.Icon href="#" icon={BsTwitter} />
						<Footer.Icon
							href="https://github.com/Chetan27801"
							icon={BsGithub}
						/>
						<Footer.Icon href="#" icon={BsDribbble} />
					</div>
				</div>
			</div>
		</Footer>
	);
}
