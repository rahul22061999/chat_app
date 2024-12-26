import { VStack, Fieldset, Input, Stack, Text, Button } from "@chakra-ui/react";
import { Field } from "../../components/ui/field";
import React, { useState } from "react";
import { PasswordInput } from "../../components/ui/password-input";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  const [pic, setPic] = useState(null);
  const [visible, setVisible] = useState(false);
  const [postdetails, setpostdetails] = useState(null);

  const submithandle = () => {};
  return (
    <VStack spacing="5px">
      <Fieldset.Root size="lg" maxW="md">
        <Stack>
          <Fieldset.Legend>Lets Signup</Fieldset.Legend>
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
          <Field id="password" label="confirm pasword">
            <PasswordInput
              placeholder="Confirm password"
              visible={visible}
              onVisibleChange={setVisible}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Field>
          <Field id="pic" label="upload an image" mt="3">
            <Input
              p={1.5}
              type="file"
              accept="image/*"
              onChange={(e) => setpostdetails(e.target.files[0])}
            />
          </Field>
        </Fieldset.Content>

        <Button
          type="submit"
          alignSelf="flex-start"
          onClick={submithandle}
          mb={"2em"}
        >
          Signup
        </Button>
      </Fieldset.Root>
    </VStack>
  );
};

export default Signup;
