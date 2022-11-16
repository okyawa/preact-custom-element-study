import register from 'preact-custom-element';

import { HooksForm, CUSTOM_ELEMENT_NAME, observedAttributes } from './components/hooks-form/hooks-form';

register(HooksForm, CUSTOM_ELEMENT_NAME, observedAttributes, { shadow: false });
