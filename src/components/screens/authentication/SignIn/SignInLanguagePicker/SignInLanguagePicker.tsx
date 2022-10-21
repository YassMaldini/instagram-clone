import { Modal, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import Box from '../../../../designSystem/Box/Box';
import Text from '../../../../designSystem/Text/Text';
import i18n from '../../../../../utils/i18n/i18n';
import { LANGUAGES } from './SignInLanguagePicker.data';
import { useEffect, useState } from 'react';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../../../../utils/theme/theme';
import DownArrowIcon from '../../../../../../assets/vectors/down-arrow.svg';
import CheckIcon from '../../../../../../assets/vectors/check.svg';
import { SvgIcon } from '../../../../designSystem/SvgIcon/SvgIcon';
import { useTranslation } from 'react-i18next';

const SignInLanguagePicker = () => {
  const theme = useTheme<Theme>();
  const { t } = useTranslation('authentication', { keyPrefix: 'languagePicker' });
  const [modalVisible, setModalVisible] = useState(false);

  const LanguagesByKey = Object.entries(LANGUAGES).reduce(
    (acc, [language, languageKey]) => ({
      ...acc,
      [languageKey]: language,
    }),
    {}
  );

  const ChangeLanguage = (languageKey: 'fr' | 'en') => {
    i18n.changeLanguage(languageKey);
    setModalVisible(false);
  };

  useEffect(() => {
    Object.entries(LANGUAGES).map((l) => console.log(l));
  });

  return (
    <Box>
      <TouchableOpacity
        style={{ marginTop: theme.spacing.s, marginBottom: theme.spacing.xxl }}
        onPress={() => setModalVisible(true)}>
        <Box flexDirection="row" alignItems="center" justifyContent="center">
          <Text color="secondaryText" fontSize={16} textAlign="center">
            {/* @ts-ignore */}
            {LanguagesByKey[i18n.language]}
          </Text>
          <SvgIcon icon={DownArrowIcon} color="secondaryText" marginLeft="xs" />
        </Box>
      </TouchableOpacity>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <TouchableWithoutFeedback onPressOut={() => setModalVisible(false)}>
          <Box flex={1} paddingHorizontal="xl" paddingVertical="s">
            <TouchableWithoutFeedback>
              <Box flex={1} backgroundColor={'highlightBackground'}>
                <Box
                  paddingHorizontal="m"
                  paddingVertical="sToM"
                  marginBottom="sToM"
                  borderBottomWidth={0.5}
                  borderBottomColor="secondaryText">
                  <Text fontSize={20} fontWeight="bold">
                    {t('header')}
                  </Text>
                </Box>
                {Object.entries(LANGUAGES).map((item) => {
                  const language = item[0];
                  const languageKey = item[1];
                  return (
                    <TouchableOpacity key={languageKey} onPress={() => ChangeLanguage(languageKey)}>
                      <Box
                        paddingVertical="sToM"
                        paddingHorizontal="l"
                        flexDirection="row"
                        alignItems="center">
                        <Text fontSize={18}>{language}</Text>
                        {languageKey === i18n.language && (
                          <SvgIcon
                            icon={CheckIcon}
                            width={22}
                            height={22}
                            color="primaryButtonBackground"
                            marginLeft="s"
                          />
                        )}
                      </Box>
                    </TouchableOpacity>
                  );
                })}
              </Box>
            </TouchableWithoutFeedback>
          </Box>
        </TouchableWithoutFeedback>
      </Modal>
    </Box>
  );
};

export default SignInLanguagePicker;
