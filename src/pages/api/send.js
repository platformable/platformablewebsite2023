import { Resend } from "resend";

const resendApiKey = "re_Hs5DscfK_HfNQyd1bqJueYjJ8QNRUcRFP";

export default async (req, res) => {
  // Extract data from the request or provide values for firstName, lastName, subject, message, and email
  const { firstName, lastName, subject, message, email } = req.body;

  try {
    const resend = new Resend(resendApiKey);

    await resend.emails.send({
      from: `${firstName} <${email}>`, // Set "from" dynamically
      to: ["accounts@platformable.com"],
      subject: subject,
      text: message,
      html: `<p>${message}</p>`,
      body: JSON.stringify({ firstName, lastName, subject, message }),
      //   tags: [
      //     {
      //       name: "communication",
      //       value: "confirm_email",
      //     },
      //   ],
    });

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Email sending error:", error);
    res.status(500).json({ error: "Email sending failed" });
  }
};
