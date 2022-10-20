import { useEffect, useState } from 'react';
import { Keyboard } from 'react-native';

export const useIsKeyboardOpened = () => {
  const [isOpened, setIsOpened] = useState<boolean>();

  useEffect(() => {
    const onShowSubscription = Keyboard.addListener('keyboardDidShow', () => setIsOpened(true));
    const onHideSubscription = Keyboard.addListener('keyboardDidHide', () => setIsOpened(false));

    return () => {
      onShowSubscription.remove();
      onHideSubscription.remove();
    };
  }, []);

  return isOpened;
};
