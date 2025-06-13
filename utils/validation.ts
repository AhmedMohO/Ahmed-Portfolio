import { FormData, FormErrors } from "../types/formTypes";

export const validateForm = (formData: FormData): FormErrors => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
        newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
        newErrors.name = "Name must be at least 2 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
        newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
        newErrors.email = "Please enter a valid email";
    }

    if (!formData.subject.trim()) {
        newErrors.subject = "Subject is required";
    } else if (formData.subject.trim().length < 3) {
        newErrors.subject = "Subject must be at least 3 characters";
    }

    if (!formData.message.trim()) {
        newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
        newErrors.message = "Message must be at least 10 characters";
    }

    return newErrors;
};
