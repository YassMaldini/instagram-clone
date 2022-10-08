import * as builds from '../../api/samples/builds.json'
import * as devices from '../../api/samples/devices.json'
import { Chance } from 'chance';

const generateDevice = (seed: string) => {
  const chance = new Chance(seed);
  const id = chance.string({
    pool: 'abcdef0123456789',
    length: 16,
  });
  const device = {
    deviceString: chance.pickone(devices),
    deviceId: `android-${id}`,
    uuid: chance.guid(),
    phoneId: chance.guid(),
    adid: chance.guid(),
    build: chance.pickone(builds)
  }
  return device
}

export default generateDevice