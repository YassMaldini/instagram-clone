import { yupResolver } from '@hookform/resolvers/yup';
import { useTheme } from '@shopify/restyle';
import { Controller, useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Theme } from '../../../../../utils/theme/theme';
import Box from '../../../../designSystem/Box/Box';
import Text from '../../../../designSystem/Text/Text';
import TextInput from '../../../../designSystem/TextInput/TextInput';
import signInWithUsernameAndPasswordMutation from './SignInForm.actions';
import getSignInFormSchema from './SignInForm.schema';
import {
  SignInFormSchema,
  SignInWithUsernameAndPasswordMutation,
  SignInWithUsernameAndPasswordMutationVariables,
} from './SignInForm.types';
import Button from '../../../../designSystem/Button/Button';
import { encrypt as aesEncrypt, randomKey, hmac256 } from 'react-native-aes-crypto';
import { RSA } from 'react-native-rsa-native';

const encryptPassword = async (
  { password, passwordEncryptionKeyId, passwordEncryptionPubKey }:
    { password: string, passwordEncryptionKeyId: number, passwordEncryptionPubKey: string }
) => {
  // Generate a random AES key (256-bit)
  const randKey = await randomKey(32);
  const iv = await randomKey(12);

  // Encrypt AES key using RSA public key
  const rsaEncrypted = await RSA.encrypt(randKey, passwordEncryptionPubKey);

  // Encrypt the password using AES-256-GCM
  const time = Math.floor(Date.now() / 1000).toString();
  const aesEncrypted = await aesEncrypt(password, randKey, iv, 'aes-256-cbc');

  return {
    time,
    encrypted: Buffer.concat([
      Buffer.from([1, passwordEncryptionKeyId]),
      Buffer.from(iv, 'base64'),
      Buffer.from(rsaEncrypted, 'base64'),
      Buffer.from(aesEncrypted, 'base64'),
    ]).toString('base64'),
  };
};


const SignInForm = () => {
  const theme = useTheme<Theme>();
  const { t } = useTranslation('authentication', { keyPrefix: 'signIn' });
  const dispatch = useDispatch();

  const formProps = useForm<SignInFormSchema>({
    resolver: yupResolver(getSignInFormSchema()),
    mode: 'onChange',
    reValidateMode: 'onSubmit',
  });

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = formProps;

  const {
    mutate,
    isLoading,
    error: mutationError,
  } = useMutation<
    Awaited<ReturnType<SignInWithUsernameAndPasswordMutation>>,
    Error,
    SignInWithUsernameAndPasswordMutationVariables
  >(signInWithUsernameAndPasswordMutation, {
    onSuccess: async (user) => console.log('user', user),
    onError: async (error) => console.log('error', error.message),
  });

  const onSubmit = handleSubmit((data) => mutate({ ...data, dispatch }));

  return (
    <Box marginHorizontal="l">
      <Controller
        name="username"
        render={({ field: { onChange, value } }) => (
          <TextInput
            onChangeText={onChange}
            placeholder={t('form.placeholder.username')}
            placeholderTextColor={theme.colors.secondaryText}
            color="primaryText"
            backgroundColor="highlightBackground"
            marginBottom="m"
            paddingVertical="sToM"
            {...{ value }}
          />
        )}
        {...{ control }}
      />
      <Controller
        name="password"
        render={({ field: { onChange, value } }) => (
          <TextInput
            secureTextEntry
            onChangeText={onChange}
            placeholder={t('form.placeholder.password')}
            placeholderTextColor={theme.colors.secondaryText}
            color="primaryText"
            backgroundColor="highlightBackground"
            marginBottom="m"
            paddingVertical="sToM"
            {...{ value }}
          />
        )}
        {...{ control }}
      />
      {mutationError && <Text>{mutationError.message}</Text>}
      <Button onPress={onSubmit} loading={isLoading} disabled={!isValid}>
        Log in
      </Button>
      <Button onPress={async () => {
        console.log('eee')
        const pw = await encryptPassword({
          password: 'Eponge00',
          passwordEncryptionKeyId: 186,
          passwordEncryptionPubKey: 'LS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS0KTUlJQklqQU5CZ2txaGtpRzl3MEJBUUVGQUFPQ0FROEFNSUlCQ2dLQ0FRRUF3bWpvOGVOeitzb1RBcThwRTFsdgo2OGNsbWQzZ3R1NEZzN2FMOElsRXRUMFBFdEovRnJSd1JMOTVQY2QzL2VZNTBJY0h1emV4VmxpanJsbGVmV1UrCnpiQ0c5eHUxUE1aYS8zZFEyS3diZU9rM2VBSjlWZzhLK0N1aTlod1Z0cTcxNmJUMXowOUVsanhUZFpldklWSDYKNUlTZUNDVTRCSDZCbHZ2UjdCY2RyNHBNY3p5bS9ZZmR3NVJYdU8xc29YREd6R2U2NU9lckdkYk1QVlkxTU1GKwo3V2ZYVUFmZjAzWDdWMTZXSGlYMWZFZlF3emk3ZldrUVVlb2FLbmNwbjdUTjRVWlFST2RrSnovZkNDb1JwSGlwCjNGZjNpbktobHR4bjFUNmgzYW1aMEZpSkNkQkJYZjJCblc5WkVWc1dkeGExQkljcUdXSTV4eTV1enM2aExyQTAKT3dJREFRQUIKLS0tLS1FTkQgUFVCTElDIEtFWS0tLS0tCg=='
        })
        console.log(pw)
      }}>
        Click
      </Button>
    </Box>
  );
};

export default SignInForm;
