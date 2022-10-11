import { useEffect, useRef, useState } from "react";
import { Button, TouchableOpacity, View } from "react-native";
import { useQueryClient } from "react-query";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setSecrets, signOut } from "../../../../store/authentication/authenticationActions/authenticationActions";
import { secretsSelector, profileSelector, deviceSelector } from "../../../../store/authentication/authenticationReducerSelectors";
import api from "../../../../utils/api/api";
import Box from "../../../designSystem/Box/Box";
import Text from "../../../designSystem/Text/Text";
import SignInForm from "./SignInForm/SignInForm";
import { useTranslation } from 'react-i18next';
import SignInLanguagePicker from "./SignInLanguagePicker/SignInLanguagePicker";

const SignIn = () => {
  const { t } = useTranslation('authentication', { keyPrefix: 'signIn' });

  return (
    <Box flex={1} style={{backgroundColor: '#000'}}>
      <SignInLanguagePicker />
      <Text 
        marginTop="xxxl"
        marginBottom="l"
        textAlign="center"
        fontSize={44} 
        fontFamily='Font-Spring'
        // style={{color: '#bd0202'}}
      >Instaclone</Text>
      <SignInForm />
      <Box marginTop="m" alignSelf="center" flexDirection="row">
        <Text color="secondaryText">{t("forgotDetails.question")}</Text>
        <TouchableOpacity>
          <Text color="primaryButton" fontWeight={"800"}> {t("forgotDetails.link")}</Text>
        </TouchableOpacity>
      </Box>
      <Box 
        paddingVertical={"l"} 
        flex={1}
        justifyContent="flex-end"
        width='100%'
      >
        <Box alignSelf="center" flexDirection="row">
          <Text color="secondaryText" textAlign="center">{t("bottom.dontHaveAccount")}</Text>
          <TouchableOpacity>
            <Text color="primaryButton" fontFamily="Roboto-Bold"> {t("bottom.signUp")}</Text>
          </TouchableOpacity>
        </Box>
      </Box>
    </Box>
  )
}

export default SignIn;