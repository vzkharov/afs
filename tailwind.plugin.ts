import plugin from 'tailwindcss/plugin';

/** @internal */
const internalPlugin = () =>
  plugin(({ addUtilities }) => {
    addUtilities({
      '.w-unset': {
        width: 'unset',
      },
      '.h-unset': {
        height: 'unset',
      },
      '.line-clamp-none': {
        '-webkit-line-clamp': 'unset',
      },
      '.flex-center': {
        alignItems: 'center',
        justifyContent: 'center',
      },
    });
  });

export default internalPlugin();
