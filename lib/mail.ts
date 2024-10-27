import { render } from "@react-email/render";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import type { MailOptions } from "nodemailer/lib/json-transport";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const SendMail = async (email: string, subject: string, message: any) => {
  try {
    const transport = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const emailHtml = await render(message, { pretty: true });
    const mailOptions = {
      from: process.env.SMTP_DEFAULT_EMAIL,
      to: email,
      subject: subject,
      html: emailHtml, // html body
    } as MailOptions;

    return await transport.sendMail(mailOptions);
  } catch (error) {
    return NextResponse.json(
      { error: `Something went wrong: ${error}` },
      { status: 500 },
    );
  }
};
