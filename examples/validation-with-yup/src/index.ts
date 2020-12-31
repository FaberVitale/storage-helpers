import * as yup from 'yup';
import {
  getStorageItem,
  setStorageItem,
} from '../public/generated.storage_helpers.esm';

const userSchema = yup.object().shape({
  name: yup.string().defined(),
  age: yup
    .number()
    .integer()
    .min(0)
    .defined(),
});

const userKey = 'user';

const userConf = {
  validateHydrated: val => userSchema.validateSync(val),
  version: 'v1',
};

const invalidUser = { name: 'Frank', age: -1 };

setStorageItem(userKey, invalidUser, userConf);

const hydrated = getStorageItem(userKey, userConf);

console.log(hydrated);
