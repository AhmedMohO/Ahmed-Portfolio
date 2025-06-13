import { useState, FormEvent } from "react";
import { NextPage } from "next";
import Curve from "@/components/Curve";
import Button from "@/components/UI/Button";
import Head from "next/head";
import { FormData, FormErrors } from "../../../types/formTypes";
import { validateForm } from "../../../utils/validation";
import { sendEmail } from "../../../utils/formHandlers";
import { motion } from "framer-motion";

const Contact: NextPage = () => {
	const [formData, setFormData] = useState<FormData>({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const [errors, setErrors] = useState<FormErrors>({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<
		"idle" | "success" | "error"
	>("idle");

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));

		// Clear error when user starts typing
		if (errors[name as keyof FormErrors]) {
			setErrors((prev) => ({ ...prev, [name]: undefined }));
		}
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const newErrors = validateForm(formData);
		setErrors(newErrors);

		if (Object.keys(newErrors).length > 0) return;

		setIsSubmitting(true);
		setSubmitStatus("idle");

		try {
			await sendEmail(formData);
			setSubmitStatus("success");
			setFormData({ name: "", email: "", subject: "", message: "" });
		} catch (error) {
			console.error("Email send failed:", error);
			setSubmitStatus("error");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<>
			<Head>
				<title>Contact Me</title>
				<meta name="description" content="Contact Me" />
			</Head>
			<Curve>
				<main className="h-full">
					<motion.div
						initial={{ y: -20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ delay: 0.78, duration: 0.6 }}
						className="text-center mb-4 md:mb-8 lg:mb-12">
						<h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent sm:mb-4">
							Let&apos;s Connect
						</h1>
						<p className="text-gray-400 text-lg max-w-2xl mx-auto">
							Have a project in mind or just want to say hello? I&apos;d love to
							hear from you.
						</p>
					</motion.div>

					<motion.div
						initial={{ y: 20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ delay: 0.76, duration: 0.6 }}
						className="max-w-2xl mx-auto">
						<form onSubmit={handleSubmit} className="space-y-2 md:space-y-6">
							<div className="flex items-center gap-4">
								<div className="w-1/2">
									<label
										htmlFor="name"
										className="block text-sm font-medium text-gray-300 mb-2">
										Name
									</label>
									<input
										type="text"
										id="name"
										name="name"
										value={formData.name}
										onChange={handleInputChange}
										className={`w-full px-4 py-3 bg-gray-900 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
											errors.name ? "border-red-500" : "border-gray-700"
										}`}
										placeholder="Your full name"
									/>
									{errors.name && (
										<p className="text-red-400 text-sm mt-1">{errors.name}</p>
									)}
								</div>
								<div className="w-1/2">
									<label
										htmlFor="email"
										className="block text-sm font-medium text-gray-300 mb-2">
										Email
									</label>
									<input
										type="email"
										id="email"
										name="email"
										value={formData.email}
										onChange={handleInputChange}
										className={`w-full px-4 py-3 bg-gray-900 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
											errors.email ? "border-red-500" : "border-gray-700"
										}`}
										placeholder="your.email@example.com"
									/>
									{errors.email && (
										<p className="text-red-400 text-sm mt-1">{errors.email}</p>
									)}
								</div>
							</div>

							<div>
								<label
									htmlFor="subject"
									className="block text-sm font-medium text-gray-300 mb-2">
									Subject
								</label>
								<input
									type="text"
									id="subject"
									name="subject"
									value={formData.subject}
									onChange={handleInputChange}
									className={`w-full px-4 py-3 bg-gray-900 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
										errors.subject ? "border-red-500" : "border-gray-700"
									}`}
									placeholder="What's this about?"
								/>
								{errors.subject && (
									<p className="text-red-400 text-sm mt-1">{errors.subject}</p>
								)}
							</div>

							{/* Message Input */}
							<div>
								<label
									htmlFor="message"
									className="block text-sm font-medium text-gray-300 mb-2">
									Message
								</label>
								<textarea
									id="message"
									name="message"
									rows={6}
									value={formData.message}
									onChange={handleInputChange}
									className={`w-full px-4 py-3 bg-gray-900 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none ${
										errors.message ? "border-red-500" : "border-gray-700"
									}`}
									placeholder="Tell me more about your project or just say hello..."
								/>
								{errors.message && (
									<p className="text-red-400 text-sm mt-1">{errors.message}</p>
								)}
							</div>

							{/* Submit Button */}
							<Button
								classNameProps="justify-center cursor-pointer"
								type="submit"
								disabled={isSubmitting}>
								{isSubmitting ? (
									<span className="flex items-center justify-center">
										<svg
											className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24">
											<circle
												className="opacity-25"
												cx="12"
												cy="12"
												r="10"
												stroke="currentColor"
												strokeWidth="4"></circle>
											<path
												className="opacity-75"
												fill="currentColor"
												d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
										</svg>
										Sending...
									</span>
								) : (
									"Send Message"
								)}
							</Button>

							{submitStatus === "success" && (
								<div className="bg-green-900/20 border border-green-500/20 text-green-400 px-4 py-3 rounded-lg">
									✅ Message sent successfully! I&apos;ll get back to you soon.
								</div>
							)}

							{submitStatus === "error" && (
								<div className="bg-red-900/20 border border-red-500/20 text-red-400 px-4 py-3 rounded-lg">
									❌ Failed to send message. Please try again later.
								</div>
							)}
						</form>
					</motion.div>
				</main>
			</Curve>
		</>
	);
};

export default Contact;
