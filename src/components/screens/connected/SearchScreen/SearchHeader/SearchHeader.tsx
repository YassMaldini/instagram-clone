import { useTheme } from '@shopify/restyle';
import { useRef, useState } from 'react';
import { KeyboardAccessoryView } from 'react-native-keyboard-accessory';
import { Theme } from '../../../../../utils/theme/theme';
import Box from '../../../../designSystem/Box/Box';
import Text from '../../../../designSystem/Text/Text';
import { TextInput as RNTextInput } from 'react-native';
import TextInput from '../../../../designSystem/TextInput/TextInput';
import Button from '../../../../designSystem/Button/Button';
import { ButtonColors } from '../../../../designSystem/Button/Button.types';
import SearchIcon from '../../../../../../assets/images/instagram_search_outline_16.png';
import Image from '../../../../designSystem/Image/Image';
import Pressable from '../../../../designSystem/Pressable/Pressable';

const SearchHeader = () => {
  const theme = useTheme<Theme>();
  const textInputRef = useRef<RNTextInput>(null);
  const [value, setValue] = useState('');

  return (
    <KeyboardAccessoryView
      style={{ backgroundColor: theme.colors.primaryBackground }}
      alwaysVisible={true}
      androidAdjustResize>
      {({ isKeyboardVisible }) => (
        <Box>
          <Box flexDirection="row" alignItems="center" paddingVertical="s" paddingHorizontal="m">
            <Box
              flex={1}
              flexDirection="row"
              alignItems="center"
              backgroundColor="highlightBackground"
              paddingHorizontal="m"
              borderRadius="s">
              <Image source={SearchIcon} width={16} height={16} />
              <TextInput
                flex={1}
                ref={textInputRef}
                onChangeText={(text) => setValue(text)}
                color="primaryText"
                placeholder="Search"
                placeholderTextColor={theme.colors.secondaryText}
                paddingVertical="s"
                {...{ value }}
              />
            </Box>
            {(isKeyboardVisible || value.length > 0) && (
              <Pressable
                height="100%"
                justifyContent="center"
                paddingHorizontal="sToM"
                onPress={() => textInputRef.current?.blur()}>
                <Text>Cancel</Text>
              </Pressable>
            )}
          </Box>
        </Box>
      )}
    </KeyboardAccessoryView>
  );
};

export default SearchHeader;
