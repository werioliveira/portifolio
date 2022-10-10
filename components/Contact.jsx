import React from "react";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";

function Contact() {
	const { register, handleSubmit } = useForm();
	const onSubmit = (formData) => {
		window.location.href = `mailto:werioliveira@hotmail.?subject=${formData.subject}&body=hi mi name is ${formData.name}. ${formData.message} (${formData.email})`;
	};
	return (
		<div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
			<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-400 text-2xl">
				Contact
			</h3>
			<div className="flex flex-col space-y-10">
				<h4 className="text-4xl font-semibold text-center">
					I have got just what you need
				</h4>
				<div className="space-y-10">
					<div className="flex items-center space-x-5 justify-center">
						<PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
						<p className="text-2xl">+1234567890</p>
					</div>
					<div className="flex items-center space-x-5 justify-center">
						<EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
						<p className="text-2xl">werioliveira@hotmail.com </p>
					</div>
					<div className="flex items-center space-x-5 justify-center">
						<MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
						<p className="text-2xl">123 Developer </p>
					</div>
				</div>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="flex flex-col space-y-2 w-fit mx-auto"
					action=""
					method="post">
					<div className="flex space-x-2">
						<input
							{...register("name")}
							className="contactInput"
							type="text"
							placeholder="Name"
						/>
						<input
							{...register("email")}
							className="contactInput"
							type="email"
							placeholder="Email"
						/>
					</div>
					<input
						{...register("subject")}
						className="contactInput"
						type="text"
						placeholder="Subject"
					/>
					<textarea
						{...register("message")}
						className="contactInput"
						placeholder="Message"
						name=""></textarea>
					<button className="bg-[#F7AB0A] py-5 px-10 rounded-sm text-black font-bold text-lg">
						Submit
					</button>
				</form>
			</div>
		</div>
	);
}

export default Contact;
