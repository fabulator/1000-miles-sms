import { removeEmojis } from '@caijs/emoji';
import { replace, strip } from 'clean-text-utils';

export const sanitizeMessage = (message: string) => {
  return strip.nonASCII(
    replace.smartChars(
      replace.exoticChars(replace.diacritics(removeEmojis(message))),
    ),
  );
};
