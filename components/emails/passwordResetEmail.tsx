import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export function PasswordResetEmail(props: { url: any; }) {
  const { url } = props;

  return (
    <Html lang="en">
      <Head />

      <Preview>Verify your account</Preview>

      <Tailwind
        config={{
          theme: {
            extend: {
              fontFamily: {
                display: [
                  "Montserrat",
                  '"Google Sans"',
                  '"Segoe UI"',
                  "Roboto",
                  "Arial",
                  "Ubuntu",
                  "sans-serif",
                ],
                body: [
                  "Montserrat",
                  '"Google Sans"',
                  '"Segoe UI"',
                  "Roboto",
                  "Arial",
                  "Ubuntu",
                  "sans-serif",
                ],
              },
            },
          },
        }}
      >
        <Body className="mx-auto bg-white px-2 font-sans">
          <Container className="mx-auto my-[40px] max-w-[465px] p-[20px]">
            <Heading as="h1">Reset your password</Heading>

            <Text className="text-[14px] leading-[24px] text-black">
              click the button below to reset your password.
            </Text>

            <Button
              href={url}
              className="font-montensart inline-block w-auto bg-[#9B8269] px-[20px] py-[10px] text-center text-sm/[17px] font-normal not-italic leading-6 text-[#fcf3ea]"
            >
              Reset your password
            </Button>

            <Section>
              <Hr />
            </Section>

            <Text className="text-[14px] leading-[24px] text-black">
              You can copy the link below to your web browser if the reset password
              button is not working
            </Text>

            <Text className="rounded-md bg-[#DDD4CC] px-2 py-5">{url}</Text>

            <Text>
              if you did not ask for this email please ignore it and delete it.
              please do not share this email to anyone as this could be used by
              anybody.
            </Text>
          </Container>

          <Container className="mx-auto my-[40px] max-w-[465px] bg-[#9B8269] p-[20px]">
            <Text className="text-center text-white">
              © 2024 domclinics, All Rights Reserved <br />
              350 Bush Street, 2nd Floor, twilight saga, CA, 94104 - Kenya
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
