import { Button } from "flowbite-react";

export default function CallToAction() {
	return (
		<div className="flex flex-col sm:flex-row p-3 border border-blue-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
			<div className="flex-1 justify-center flex flex-col">
				<h2 className="text-2xl">Want to learn more about React?</h2>
				<p className="text-gray-500 my-2">
					Checkout these resources with React Projects
				</p>
				<Button
					gradientDuoTone="pinkToOrange"
					className="rounded-tl-xl rounded-bl-none"
				>
					<a
						href="https://contactmentor.com/best-react-projects-for-beginners-easy/#google_vignette"
						target="_blank"
						rel="noopener noreferrer"
					>
						React Projects
					</a>
				</Button>
			</div>
			<div className="p-7 flex-1">
				<img src="https://img-c.udemycdn.com/course/750x422/5192168_27b9.jpg" />
			</div>
		</div>
	);
}
