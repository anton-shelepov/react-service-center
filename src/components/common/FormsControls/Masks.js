import { createTextMask } from "redux-form-input-masks";

export const phoneMask = createTextMask({
    pattern: '9 999 999 99 99',
});