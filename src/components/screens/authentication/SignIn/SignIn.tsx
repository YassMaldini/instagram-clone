import { TouchableOpacity } from 'react-native';
import Box from '../../../designSystem/Box/Box';
import Text from '../../../designSystem/Text/Text';
import SignInForm from './SignInForm/SignInForm';
import { useTranslation } from 'react-i18next';
import SignInLanguagePicker from './SignInLanguagePicker/SignInLanguagePicker';
import { useEffect } from 'react';
import { JSHmac, CONSTANTS } from "react-native-hash";
import CryptoJS from "react-native-crypto-js"
import { useSelector } from 'react-redux';
import { deviceSelector } from '../../../../store/authentication/authenticationReducerSelectors';
import { SIGNATURE_VERSION } from 'instagram-private-api/dist/core/constants';
import generateDevice from '../../../../utils/authentication/generateDevice/generateDevice';
import { getRandomBytes } from 'expo-random';
import { RSA } from 'react-native-rsa-native';
import AesGcmCrypto from 'react-native-aes-gcm-crypto';

const SignIn = () => {
  const { t } = useTranslation('authentication', { keyPrefix: 'signIn' });
  const device = generateDevice('seed')

  return (
    <Box flex={1} style={{ backgroundColor: '#000' }}>
      <SignInLanguagePicker />
      <Text
        marginTop="xxxl"
        marginBottom="l"
        textAlign="center"
        fontSize={44}
        fontFamily="Font-Spring"
        // style={{color: '#bd0202'}}
      >
        Instaclone
      </Text>
      <SignInForm />
      <Box marginTop="m" alignSelf="center" flexDirection="row">
        <Text color="secondaryText">{t('forgotDetails.question')}</Text>
        <TouchableOpacity>
          <Text color="primaryButton" fontWeight={'800'}>
            {' '}
            {t('forgotDetails.link')}
          </Text>
        </TouchableOpacity>
      </Box>
      <Box paddingVertical={'l'} flex={1} justifyContent="flex-end" width="100%">
        <Box alignSelf="center" flexDirection="row">
          <Text color="secondaryText" textAlign="center">
            {t('bottom.dontHaveAccount')}
          </Text>
          <TouchableOpacity>
            <Text color="primaryButton" fontFamily="Roboto-Bold">
              {' '}
              {t('bottom.signUp')}
            </Text>
          </TouchableOpacity>
        </Box>
      </Box>
    </Box>
  );
};

export default SignIn;
