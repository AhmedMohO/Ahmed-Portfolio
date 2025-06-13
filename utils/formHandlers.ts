import emailjs from "@emailjs/browser";
import { FormData } from "../types/formTypes";

export const sendEmail = async (formData: FormData): Promise<void> => {
    await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    );
}; 