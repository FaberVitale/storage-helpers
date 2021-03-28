import * as yup from 'yup';
import {
  getStorageItem,
  setStorageItem,
  StorageConfig,
} from 'storage-helpers';

const userSchema = yup.object().shape({
  name: yup.string().defined().min(3),
  age: yup
    .number()
    .integer()
    .min(0)
    .defined(),
});

const userKey = 'user';

function init() {
  const hydratedElem = document.getElementById('result');
  const errors = document.getElementById('errors');
  const persistedElem = document.getElementById('persisted');

  const form = document.forms[0] ?? null;
  const ageInput = document.querySelector('#user-form input[name="age"]') as HTMLInputElement | null;
  const nameInput = document.querySelector('#user-form input[name="name"]') as HTMLInputElement | null;

  if(hydratedElem && form && ageInput && nameInput && errors && persistedElem) {
    const userConf: StorageConfig<unknown> = {
      validateHydrated: (val: any) => userSchema.validateSync(val),
      version: 'v1',
      onError: (raisedError) => {
        errors.textContent = (raisedError as { message?: string })?.message ?? 'error';
      }
    };


    const updateDisplayedValues = () => {
      const age =  Number(ageInput.value);
      const name = nameInput.value;

      const persisted = { age, name};

      setStorageItem(userKey, { age, name }, userConf);

      const hydrated = getStorageItem(userKey, userConf);
      console.debug('persisted', persisted);
      console.debug('hydrated', hydrated);

      if(hydrated) {
        errors.textContent = 'none';
      }

      persistedElem.textContent = JSON.stringify(persisted);
      hydratedElem.textContent = JSON.stringify(hydrated);
    }


    form.addEventListener('change', updateDisplayedValues);

    updateDisplayedValues();
  } else {
    throw new Error('missing domIds');
  }

}

window.addEventListener('load', init);