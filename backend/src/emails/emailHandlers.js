import { resendClient, sender } from "../lib/resend.js";
import { createWelcomeEmailTemplate } from "../emails/emailTemplates.js";

export const sendWelcomeEmail = async (email, name, clientURL) => {
  if (!email || !name || !clientURL) {
    throw new Error("Email, name, and clientURL are required");
  }

  try {
    const { data, error } = await resendClient.emails.send({
      from: `${sender.name} <${sender.email}>`,
      to: email,
      subject: "Welcome to Chatify 🎉",
      html: createWelcomeEmailTemplate(name, clientURL),
      text: `Hi ${name},

Welcome to Chatify! We're excited to have you on board.

Start chatting here: ${clientURL}

If you need help, just reply to this email.

– Team Chatify`,
    });

    if (error) {
      console.error("Resend error:", error);
      throw new Error("Failed to send welcome email");
    }

    console.log("Welcome email sent successfully", {
      to: email,
      messageId: data?.id,
    });

    return data;
  } catch (err) {
    console.error("sendWelcomeEmail failed:", err.message);
    throw err;
  }
};
