import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();
    const data = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: ['your-email@gmail.com'],
      subject: `New Message from ${name}`,
      text: `Email: ${email}\n\nMessage: ${message}`,
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}