import React, { useState } from "react";
import { VStack, Fieldset, Input, Stack, Text, Button } from "@chakra-ui/react";
import { Field } from "../../components/ui/field";
import { PasswordInput } from "../../components/ui/password-input";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  const submithandle = () => {

  }
  return (
    <VStack spacing="5px">
      <Fieldset.Root size="lg" maxW="md">
        <Stack>
          <Fieldset.Legend>Signin</Fieldset.Legend>
        </Stack>

        <Fieldset.Content mt="2em">
          <Field id="name" label="Name">
            <Input
              id="name"
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
            />
          </Field>
          <Field id="email" label="Email">
            <Input
              name="email"
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Field>
          <Field id="password" label="pasword">
            <PasswordInput
              placeholder="Enter your password"
              visible={visible}
              onVisibleChange={setVisible}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Field>
        </Fieldset.Content>

        <Button
          type="submit"
          alignSelf="flex-start"
          onClick={submithandle}
          mb={"2em"}
        >
          Signin
        </Button>
      </Fieldset.Root>
    </VStack>
  );
};

export default Login;
