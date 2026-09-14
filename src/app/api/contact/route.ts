import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, subject, message } = await req.json();

    if (!name || !message) {
      return NextResponse.json(
        { error: "Name and message are required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: "parisafauzan@gmail.com",
      subject: subject || `New message from ${name} via Portfolio`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #7c3aed; padding-bottom: 10px;">
            New Portfolio Contact
          </h2>
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0 0 10px;"><strong>From:</strong> ${name}</p>
            <p style="margin: 0 0 10px;"><strong>Subject:</strong> ${subject || "No subject"}</p>
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 15px 0;" />
            <p style="margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="color: #9ca3af; font-size: 12px;">
            Sent from your portfolio website contact form
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
