import {
  Html,
  Body,
  Container,
  Text,
  Heading,
  Tailwind,
  Section,
  Hr,
  Row,
  Column,
} from "@react-email/components";

interface IEmailTemplateProps {
  email: string;
  address: string;
  fio: string;
  price: number;
  name: string;
}

// const PreviewProps: IEmailTemplateProps = {
//   email: "customer@example.com",
//   address: "г. Москва, ул. Пушкина, д. 10, кв. 42",
//   fio: "Александр Пушкин",
//   price: 15000,
//   name: "Кимоно Watanabe Special Edition",
// };

export const EmailTemplate = ({
  email,
  address,
  fio,
  price,
  name,
}: IEmailTemplateProps) => {
  return (
    <Html>
      <Tailwind>
        <Body className="bg-gray-50 my-auto mx-auto font-sans">
          <Container className="border border-solid border-[#eaeaea] rounded my-10 mx-auto p-5 w-[465px] bg-white">
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0 uppercase tracking-widest">
              Watanabe
            </Heading>

            <Text className="text-black text-[14px] leading-6">
              Здравствуйте, <strong>{fio}</strong>!
            </Text>
            <Text className="text-black text-[14px] leading-6">
              Благодарим за заказ на нашем сайте. Мы подготовили детали для
              оплаты.
            </Text>

            <Section className="bg-gray-50 rounded-lg p-5 my-6">
              <Text className="text-[12px] font-bold uppercase tracking-wider text-gray-500 m-0 mb-3">
                Детали заказа
              </Text>
              <Row>
                <Column>
                  <Text className="m-0 text-[14px] text-gray-700">{name}</Text>
                </Column>
                <Column align="right">
                  <Text className="m-0 font-bold text-[14px]">{price} ₽</Text>
                </Column>
              </Row>
              <Hr className="border-[#e5e7eb] my-3" />
              <Text className="text-[13px] text-gray-600 mb-1">
                <strong>Почта:</strong> {email}
              </Text>
              <Text className="text-[13px] text-gray-600 m-0">
                <strong>Адрес:</strong> {address}
              </Text>
            </Section>

            <Section className="my-6">
              <Text className="text-center font-bold text-[14px] mb-4">
                Реквизиты для оплаты:
              </Text>
              <div className="bg-slate-900 rounded-lg p-5 text-white">
                <Text className="m-0 text-[13px] opacity-70">
                  Банк: ПАО Сбербанк
                </Text>
                <Text className="m-0 text-[13px] mt-1">
                  ИНН: 1234567890 / КПП: 123456789
                </Text>
                <Text className="m-0 text-[13px] mt-1">БИК: 123456789</Text>
                <Hr className="border-gray-700 my-3" />
                <Text className="m-0 text-[14px] font-mono tracking-wider text-sky-400">
                  Р/С: 40702810123456789012
                </Text>
              </div>
            </Section>

            <Text className="text-gray-400 text-[12px] text-center mt-8">
              Если у вас возникли вопросы, просто ответьте на это письмо. <br />
              Команда Watanabe
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

// EmailTemplate.PreviewProps = PreviewProps;
// export default EmailTemplate;