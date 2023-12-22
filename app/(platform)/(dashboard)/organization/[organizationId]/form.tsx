'use client';

import { create } from '@/actions/create-board';
import { useFormState } from 'react-dom';
import { FormButton } from './form-button';
import { FormInput } from './form-input';

export const Form = () => {
  const initialState = { errors: {}, message: '' };
  const [state, dispatch] = useFormState(create, initialState);

  return (
    <div>
      <form action={dispatch}>
        <div className="flex flex-col space-y-2">
          <FormInput errors={state?.errors} />
        </div>
        <FormButton />
      </form>
    </div>
  );
};
