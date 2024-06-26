"use client";
import {
  Box,
  Text,
  Flex,
  Button,
  FormLabel,
  Input,
  Link,
} from "@chakra-ui/react";

import { Inter } from "@next/font/google";
import { Formik, Field, Form, FormikHelpers } from "formik";
import * as Yup from "yup";

const inter = Inter({ subsets: ["latin"] });
interface Values {
  username: string;
  password: string;
}
const loginSchema = Yup.object().shape({
  username: Yup.string()
    .required("Required")
    .matches(
      /^(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
      "Incorrect User Name"
    ),
  password: Yup.string()
    .required("Required")
    .min(6, "Too Short!")
    .max(50, "Too Long!"),
});

export default function Home() {
  return (
    <Flex w="full" h="full" bgColor="#fcf4f0" alignItems="center">
      <Box w="50%" bgColor="#fff" m="auto" p="20px">
        <Text
          textAlign="center"
          fontSize="24px"
          fontWeight="600"
          color="#db3529"
        >
          Login
        </Text>
        <Box>
          <Formik
            initialValues={{
              username: "",
              password: "",
            }}
            onSubmit={(
              values: Values,
              { setSubmitting }: FormikHelpers<Values>
            ) => {
              console.log(values);
            }}
            validationSchema={loginSchema}
          >
            {({ values, errors, touched }) => (
              <Form>
                <Box>
                  <FormLabel htmlFor="username">username</FormLabel>
                  <Field
                    id="username"
                    name="username"
                    placeholder="John"
                    border="1px solid #db3529"
                    bgColor=""
                    as={Input}
                    value={values.username}
                  />
                  {errors.username && touched.username ? (
                    <Box
                      ml="1.5"
                      // mt="0.5"
                      color="red"
                      fontSize="sm"
                      textAlign="left"
                      data-testid="usernameError"
                    >
                      {errors.username}
                    </Box>
                  ) : (
                    <Box fontSize="sm" visibility="hidden">
                      Required
                    </Box>
                  )}
                </Box>
                <Box>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Field
                    border="1px solid #db3529"
                    bgColor=""
                    as={Input}
                    id="password"
                    name="password"
                    placeholder="password"
                    type="password"
                    value={values.password}
                  />
                  {errors.password && touched.password ? (
                    <Box
                      ml="1.5"
                      color="red"
                      fontSize="sm"
                      textAlign="left"
                      data-testid="passwordError"
                    >
                      {errors.password}
                    </Box>
                  ) : (
                    <Box fontSize="sm" visibility="hidden">
                      Required
                    </Box>
                  )}
                </Box>
                <Button
                  bgColor="#db3529"
                  color="#fff"
                  variant="solid"
                  type="submit"
                  w="full"
                  mt="20px"
                >
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
        <Text textAlign="center" mt="10px">
          Not having an Account ?{" "}
          <Link href="/signup" color="navy">
            Sign up
          </Link>{" "}
        </Text>
      </Box>
    </Flex>
  );
}
