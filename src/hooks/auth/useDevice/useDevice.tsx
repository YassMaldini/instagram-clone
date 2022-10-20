import { Chance } from 'chance';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { deviceSelector } from '../../../store/authentication/authenticationReducerSelectors';

export const generateTemporaryGuid = (seed: string, deviceId: string, lifetime: number) => {
  return new Chance(`${seed}${deviceId}${Math.round(Date.now() / lifetime)}`).guid();
};

const useDevice = () => {
  const device = useSelector(deviceSelector);

  return useMemo(() => device, [device]);
};

export default useDevice;
