import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(
  email: string,
  subject: string,
  bodyHtml: string
) {
  const { error } = await resend.emails.send({
    from: "support@nex-tri.com",
    to: email,
    subject,
    html: bodyHtml,
  });

  if (error) {
    throw error;
  }
}
