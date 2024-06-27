"use client";

import { AuthContext } from "@/app/providers/AuthProvider";
import Button from "@/components/Button";
import GoogleSignInButton from "@/components/GoogleSignInButton";
import InputGroup from "@/components/input/InputGroup";
import Header from "@/components/typography/Header";
import Text from "@/components/typography/Text";
import useGoogleSignin from "@/lib/auth/useGoogleSignin";
import { Link } from "@chakra-ui/next-js";
import { Container, FormControl, Stack } from "@chakra-ui/react";
import { createFormFactory } from "@tanstack/react-form";
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useContext, useState } from "react";

interface Login {
  email: string;
  password: string;
}

export default function Login() {
  const [view, setView] = useState<"main" | "recovery">("main");

  return view === "main" ? (
    <MainLogin setView={setView} />
  ) : (
    <Recovery setView={setView} />
  );
}

function MainLogin({
  setView,
}: {
  setView: Dispatch<SetStateAction<"main" | "recovery">>;
}) {
  const router = useRouter();
  const auth = useContext(AuthContext);
  const { waitingForGoogle, handleGoogleSignup } = useGoogleSignin();

  if (auth.loggedIn) {
    router.replace("/tavern");
  }

  const formFactory = createFormFactory<Login>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const form = formFactory.useForm({
    onSubmit: async ({ value }) => {
      await signInWithEmailAndPassword(auth.auth!, value.email, value.password)
        .then((userCredential) => {
          router.push("/tavern");
        })
        .catch((err) => {
          console.error(err.message);
        });
    },
  });
  return (
    <>
      <Container as="main" maxWidth="container.lg" pt={12}>
        <div style={{ width: "100%", textAlign: "center" }}>
          <Header as="h1" size="2xl" textAlign="center">
            Welcome back, traveler!
          </Header>
          <Link href="/auth/signup" _hover={{ textDecoration: "unset" }}>
            <Button secondary mb={6}>
              Create an Account
            </Button>
          </Link>
        </div>
        <Container mb={16}>
          {!waitingForGoogle ? (
            <>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  form.handleSubmit();
                }}
              >
                <form.Field
                  name="email"
                  validators={{
                    onChange: ({ value, fieldApi }) =>
                      fieldApi.state.meta.isTouched && !value
                        ? "Please enter your email"
                        : null,
                  }}
                >
                  {(field) => (
                    <FormControl isInvalid={field.state.meta.errors.length > 0}>
                      <InputGroup
                        name="email"
                        leftWidth={140}
                        stackPosition="top"
                        left="Email"
                        autoComplete="email"
                        value={field.state.value}
                        onChange={(e) => field.handleChange(e.target.value)}
                      />
                    </FormControl>
                  )}
                </form.Field>
                <form.Field
                  name="password"
                  validators={{
                    onChange: ({ value, fieldApi }) =>
                      fieldApi.state.meta.isTouched && !value
                        ? "Please enter your password"
                        : null,
                  }}
                >
                  {(field) => (
                    <FormControl isInvalid={field.state.meta.errors.length > 0}>
                      <InputGroup
                        name="password"
                        leftWidth={140}
                        stackPosition="bottom"
                        left="Password"
                        type="password"
                        value={field.state.value}
                        onChange={(e) => field.handleChange(e.target.value)}
                      />
                    </FormControl>
                  )}
                </form.Field>
                <Stack direction="row" justifyContent="center" mt={6}>
                  <form.Subscribe
                    selector={({
                      canSubmit,
                      isSubmitting,
                      isPristine,
                      values,
                    }) => ({ canSubmit, isSubmitting, isPristine, values })}
                  >
                    {({ canSubmit, isSubmitting, isPristine, values }) => (
                      <>
                        <Button
                          type="submit"
                          width={200}
                          isDisabled={
                            isPristine ||
                            !canSubmit ||
                            Object.values(values).some((val) => !val)
                          }
                          isLoading={isSubmitting}
                        >
                          Enter the Tavern
                        </Button>
                        <GoogleSignInButton
                          onClick={handleGoogleSignup}
                          isLoading={isSubmitting}
                        />
                      </>
                    )}
                  </form.Subscribe>
                </Stack>
              </form>
              <Button
                variant="link"
                fontFamily="var(--font-source-sans)"
                color="brand.800"
                bg="unset"
                border="unset"
                fontSize="smaller"
                display="block"
                mx="auto"
                _hover={{ background: "unset" }}
                fontWeight={500}
                textAlign="center"
                mt="6"
                onClick={() => setView("recovery")}
              >
                Forgot your password?
              </Button>
            </>
          ) : (
            <Text textAlign="center">
              Please sign in with the Google authentication pop-up.
            </Text>
          )}
        </Container>
      </Container>
    </>
  );
}

function Recovery({
  setView,
}: {
  setView: Dispatch<SetStateAction<"main" | "recovery">>;
}) {
  const auth = useContext(AuthContext);

  const [emailSendStatus, setEmailSendStatus] = useState<
    "not sent" | "sent" | "error"
  >("not sent");

  const formFactory = createFormFactory<{ email: string }>({
    defaultValues: {
      email: "",
    },
  });
  const form = formFactory.useForm({
    onSubmit: ({ value }) => {
      sendPasswordResetEmail(auth.auth!, value.email)
        .then(() => {
          setEmailSendStatus("sent");
        })
        .catch((err) => {
          console.error(err.message);
          setEmailSendStatus("error");
        });
    },
  });
  return (
    <>
      <Container as="main" maxWidth="container.lg" pt={12}>
        <div
          style={{ width: "100%", textAlign: "center", marginBottom: "1.5em" }}
        >
          <Header as="h1" size="2xl" textAlign="center">
            Password Recovery
          </Header>
          <Text>
            Fear not! Our messengers shall send you a password recovery email
            post haste!
          </Text>
        </div>
        <Container mb={16}>
          {emailSendStatus === "not sent" ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                e.stopPropagation();
                form.handleSubmit();
              }}
            >
              <form.Field
                name="email"
                validators={{
                  onChange: ({ value, fieldApi }) =>
                    fieldApi.state.meta.isTouched && !value
                      ? "Please enter your email"
                      : null,
                }}
              >
                {(field) => (
                  <FormControl isInvalid={field.state.meta.errors.length > 0}>
                    <InputGroup
                      name="email"
                      leftWidth={140}
                      stackPosition="alone"
                      left="Email"
                      autoComplete="email"
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                    />
                  </FormControl>
                )}
              </form.Field>
              <Stack direction="row" justifyContent="center" mt={6}>
                <form.Subscribe
                  selector={({
                    canSubmit,
                    isSubmitting,
                    isPristine,
                    values,
                  }) => ({ canSubmit, isSubmitting, isPristine, values })}
                >
                  {({ canSubmit, isSubmitting, isPristine, values }) => (
                    <Button
                      type="submit"
                      width={200}
                      isDisabled={
                        isPristine ||
                        !canSubmit ||
                        Object.values(values).some((val) => !val)
                      }
                      isLoading={isSubmitting}
                    >
                      Send Password Recovery
                    </Button>
                  )}
                </form.Subscribe>
                <Button secondary width={200} onClick={() => setView("main")}>
                  Cancel
                </Button>
              </Stack>
            </form>
          ) : emailSendStatus === "sent" ? (
            <Stack direction="column" alignItems="center" mt={6}>
              <Text textAlign="center">
                Your password recovery email is on its way! Please look for an
                email from <strong>noreply@legend-mama-tavern.firebaseapp.com</strong>{" "}
                and follow the link to reset your password.
              </Text>
              <Button secondary width={200} onClick={() => setView("main")}>
                Back
              </Button>
            </Stack>
          ) : (
            <Stack direction="column" alignItems="center" mt={6}>
              <Text textAlign="center">
                There has been an error sending your password reset email.
                Please refresh and try again. Make sure you are using a valid
                email.
              </Text>
              <Button secondary width={200} onClick={() => setEmailSendStatus("not sent")}>
                Back
              </Button>
            </Stack>
          )}
        </Container>
      </Container>
    </>
  );
}
