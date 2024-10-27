import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Tailwind,
  Text
} from "@react-email/components";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export function Email(props: { url: any }) {
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
            <Heading as="h1">Your password has been changed</Heading>

            <Text className="text-[14px] leading-[24px] text-black">
              Dear customer.
            </Text>

            <Text className="text-[14px] leading-[24px] text-black">
              You can copy the link below to your web browser if the verification
              button is not working
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
