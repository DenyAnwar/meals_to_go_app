import React, { useState, useContext } from "react";
import { ActivityIndicator, TextInput } from "react-native-paper";
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  AuthInput,
  ErrorContainer,
  Title,
} from "../components/account.styles";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { colors } from "../../../infrastructure/theme/colors";

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const { onRegister, error, isLoading, onClearError } = useContext(
    AuthenticationContext
  );
  const [secureTextEntryPassword, setSecureTextEntryPassword] = useState(true);
  const [secureTextEntryRepeatPassword, setSecureTextEntryRepeatPassword] =
    useState(true);

  return (
    <AccountBackground>
      <AccountCover />
      <Title>Meals To Go</Title>
      <AccountContainer>
        <AuthInput
          label="Email"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={setEmail}
        />
        <Spacer size="large">
          <AuthInput
            label="Password"
            value={password}
            textContentType="password"
            secureTextEntry={secureTextEntryPassword}
            autoCapitalize="none"
            right={
              <TextInput.Icon
                icon="eye"
                onPress={() => {
                  setSecureTextEntryPassword((prev) => !prev);
                }}
              />
            }
            onChangeText={setPassword}
          />
        </Spacer>
        <Spacer size="large">
          <AuthInput
            label="Repeated Password"
            value={repeatedPassword}
            textContentType="password"
            secureTextEntry={secureTextEntryRepeatPassword}
            autoCapitalize="none"
            right={
              <TextInput.Icon
                icon="eye"
                onPress={() => {
                  setSecureTextEntryRepeatPassword((prev) => !prev);
                }}
              />
            }
            onChangeText={setRepeatedPassword}
          />
        </Spacer>
        {error && (
          <ErrorContainer>
            <Text variant="error">{error}</Text>
          </ErrorContainer>
        )}
        <Spacer size="large">
          {!isLoading ? (
            <AuthButton
              icon="lock-open-outline"
              mode="contained"
              onPress={() => onRegister(email, password, repeatedPassword)}
            >
              Register
            </AuthButton>
          ) : (
            <ActivityIndicator animating={true} color={colors.brand.primary} />
          )}
        </Spacer>
        <Spacer size="large">
          <AuthButton
            mode="contained"
            onPress={() => {
              onClearError();
              navigation.goBack();
            }}
          >
            Back
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  );
};
