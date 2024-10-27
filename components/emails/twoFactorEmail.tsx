import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Tailwind,
  Text,
} from "@react-email/components";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export function TwoFactorAuthEmail(props: { token: string }) {
  const { token } = props;

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
            <Heading as="h1">Two factor authentiaction code</Heading>

            <Text className="text-[14px] leading-[24px] text-black">
              This is your your two factor authentication code.
            </Text>

            <Text className="rounded-md bg-[#DDD4CC] px-2 py-5 text-center text-5xl">
              {token}
            </Text>

            <Text className="text-[14px] leading-[24px] text-black">
              Do not share this code with anybody. delete this email as soon as you
              successfully logged in.
            </Text>
          </Container>

          <Container className="mx-auto my-[40px] max-w-[465px] bg-[#9B8269] p-[20px]">
            <Text className="text-center text-white">
              © 2024 domclinics, All Rights Reserved <br />
              350 ORongai Street, 2nd Floor, twilight saga, CA, 94104 - Kenya
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
