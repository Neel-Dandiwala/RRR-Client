import { Formik, Field } from "formik";
import {
    Box,
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    VStack
} from "@chakra-ui/react";

export default function SignUpUser() {
    return (
        <Flex bg="rgba(0,0,0,0)" align="center" justify="center" >
            <Box bg="rgba(255,255,255,0.1)" p={6} rounded="md" w={64}>
                <Formik
                    initialValues={{
                        username: "",
                        email: "",
                        password: "",
                        rememberMe: false
                    }}
                    onSubmit={(values) => {
                        alert(JSON.stringify(values, null, 2));
                    }}
                >
                    {({ handleSubmit, errors, touched }) => (
                        <form onSubmit={handleSubmit}>
                            <VStack spacing={4} align="flex-start">
                            <FormControl>
                                    <FormLabel color="rgba(255,255,255,1.0)" htmlFor="username">Username</FormLabel>
                                    <Field
                                        bg="gray.200"
                                        as={Input}
                                        id="username"
                                        name="username"
                                        type="username"
                                        variant="filled"
                                        validate={(value) => {
                                            let error;

                                            if (value.length < 6) {
                                                error = "Username must contain at least 6 characters";
                                            }

                                            return error;
                                        }}
                                    />
                                </FormControl>
                                <FormControl>
                                    <FormLabel color="rgba(255,255,255,1.0)" htmlFor="email">Email Address</FormLabel>
                                    <Field
                                        bg="gray.200"
                                        as={Input}
                                        id="email"
                                        name="email"
                                        type="email"
                                        variant="filled"
                                    />
                                </FormControl>
                                <FormControl isInvalid={!!errors.password && touched.password}>
                                    <FormLabel color="rgba(255,255,255,1.0)" htmlFor="password">Password</FormLabel>
                                    <Field
                                        bg="gray.200"
                                        as={Input}
                                        id="password"
                                        name="password"
                                        type="password"
                                        variant="filled"
                                        validate={(value) => {
                                            let error;

                                            if (value.length < 5) {
                                                error = "Password must contain at least 6 characters";
                                            }

                                            return error;
                                        }}
                                    />
                                    <FormErrorMessage>{errors.password}</FormErrorMessage>
                                </FormControl>
                                <Field
                                    as={Checkbox}
                                    id="rememberMe"
                                    name="rememberMe"
                                    colorScheme="purple"
                                >
                                    Remember me?
                                </Field>
                                <Button type="submit" colorScheme="purple" width="full">
                                    Login
                                </Button>
                            </VStack>
                        </form>
                    )}
                </Formik>
            </Box>
        </Flex>
    );
}