import cn from 'classnames';
import { ButtonVariants } from '../../@types/button';

const DEFAULT_BUTTON_CLASSNAME = 'rounded-20 text-sm font-semibold';

export const BUTTON_STYLE_VARIANTS = {
  [ButtonVariants.PRIMARY]: cn(
    'bg-brand-orange text-white hover:bg-[#d94d1f] px-6 py-3 text-[18px] font-[600]  items-center',
    DEFAULT_BUTTON_CLASSNAME
  ),
  [ButtonVariants.SECONDARY]: cn(
    'bg-brand-blue border border-brand-blue text-white px-6 py-3 hover:bg-[#4568B9] text-[18px] font-[600]',
    DEFAULT_BUTTON_CLASSNAME
  ),
  [ButtonVariants.PRIMARY_SQUARE]:
    'bg-purple-base text-white-base text-sm rounded px-6 py-3 text-[18px] font-[600]',
  [ButtonVariants.SECONDARY_SQUARE]:
    'bg-white border border-brand-blue text-brand-blue text-sm rounded px-6 py-3   text-[18px] font-[600]',
};
