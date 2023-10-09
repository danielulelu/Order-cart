import {
  extendTheme,
  theme as base,
  withDefaultVariant,
  withDefaultColorScheme,
} from "@chakra-ui/react";

import { mode } from "@chakra-ui/theme-tools";

const inputSelectStyles = {
  variants: {
    filled: {
      field: {
        _focus: {
          borderColor: "brand.500",
        },
      },
    },
  },
  sizes: {
    md: {
      field: {
        borderRadius: "none",
      },
    },
  },
};

const brandRing = {
  _focus: {
    ring: 2,
    ringColor: "brand.400",
  },
};

const theme = extendTheme(
  {
    colors: {
      brand: {
        50: "#f5fee5",
        100: "#e1fbb2",
        200: "#cdf781",
        300: "#b8ee56",
        400: "#a2e032",
        500: "#8ac919",
        600: "#71ab09",
        700: "#578602",
        800: "#3c5e00",
        900: "#203300",
      },
    },

    fonts: {
      heading: `Montserat, ${base.fonts?.heading}`,
      body: `Inter, ${base.fonts?.body}`,
    },

    components: {
      Input: { ...inputSelectStyles },
      Select: { ...inputSelectStyles },
      Button: {
        variants: {
          primary: (props) => ({
            rounded: "none",
            ...brandRing,
            backgroundColor: mode("brand.500", "brand.300")(props),
            _hover: {
              backgroundColor: mode("brand.600", "brand.400")(props),
            },
            _active: {
              backgroundColor: mode("brand.700", "brand.400")(props),
            }
          }),
        },
      },
      Checkbox: {
        baseStyle: {
          control: {
            borderRaidus: "none",
            ...brandRing,
          },
        },
      },
    },
  },

  withDefaultVariant({
    variant: "filled",
    components: ["Input", "Select"],
  }),

  withDefaultColorScheme({
    colorScheme: "brand.100",
    components: ["Checkbox"],
  })
);

export default theme;
