import { render } from "@react-email/components";
import { NextResponse } from "next/server";
import { createTransport } from "nodemailer";
import { EmailTemplate } from "@/components/email-template/EmailTemplate";
import { logger } from "@/utils/logger";

export const POST = async (request: Request) => {
  try {
    const { email, address, fio, price, name } = await request.json();

    const transport = createTransport({
      host: process.env.MAIL_HOST,
      port: Number(process.env.MAIL_PORT),
      secure: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const renderHtml = await render(
      EmailTemplate({ email, address, fio, price, name }),
    );

    await transport.sendMail({
      from: process.env.MAIL_USER,
      to: email,
      subject: `Оплата ${name}, с магазина Watanabe!`,
      html: renderHtml,
    });

    return NextResponse.json({ message: "Заказ успешно оформлен" });
  } catch (error) {
    logger.error("mailer", error);
    return NextResponse.json(
      { error: "Произошла ошибка при обработке заказа" },
      { status: 500 },
    );
  }
};
