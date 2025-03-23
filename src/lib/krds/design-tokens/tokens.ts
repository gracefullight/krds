const TOKENS = {
  primitive: {
    color: {
      light: {
        primary: {
          "5": {
            value: "#ecf2fe",
            type: "color",
          },
          "10": {
            value: "#d8e5fd",
            type: "color",
          },
          "20": {
            value: "#b1cefb",
            type: "color",
          },
          "30": {
            value: "#86aff9",
            type: "color",
          },
          "40": {
            value: "#4c87f6",
            type: "color",
          },
          "50": {
            value: "#256ef4",
            type: "color",
          },
          "60": {
            value: "#0b50d0",
            type: "color",
          },
          "70": {
            value: "#083891",
            type: "color",
          },
          "80": {
            value: "#052561",
            type: "color",
          },
          "90": {
            value: "#03163a",
            type: "color",
          },
          "95": {
            value: "#020f27",
            type: "color",
          },
        },
        secondary: {
          "5": {
            value: "#eef2f7",
            type: "color",
          },
          "10": {
            value: "#d6e0eb",
            type: "color",
          },
          "20": {
            value: "#bacbde",
            type: "color",
          },
          "30": {
            value: "#90b0d5",
            type: "color",
          },
          "40": {
            value: "#6b96c7",
            type: "color",
          },
          "50": {
            value: "#346fb2",
            type: "color",
          },
          "60": {
            value: "#1c589c",
            type: "color",
          },
          "70": {
            value: "#063a74",
            type: "color",
          },
          "80": {
            value: "#052b57",
            type: "color",
          },
          "90": {
            value: "#031f3f",
            type: "color",
          },
          "95": {
            value: "#02162c",
            type: "color",
          },
        },
        gray: {
          "0": {
            value: "#ffffff",
            type: "color",
          },
          "5": {
            value: "#f4f5f6",
            type: "color",
          },
          "10": {
            value: "#e6e8ea",
            type: "color",
          },
          "20": {
            value: "#cdd1d5",
            type: "color",
          },
          "30": {
            value: "#b1b8be",
            type: "color",
          },
          "40": {
            value: "#8a949e",
            type: "color",
          },
          "50": {
            value: "#6d7882",
            type: "color",
          },
          "60": {
            value: "#58616a",
            type: "color",
          },
          "70": {
            value: "#464c53",
            type: "color",
          },
          "80": {
            value: "#33363d",
            type: "color",
          },
          "90": {
            value: "#1e2124",
            type: "color",
          },
          "95": {
            value: "#131416",
            type: "color",
          },
          "100": {
            value: "#000000",
            type: "color",
          },
        },
        alpha: {
          black100: {
            value: "#000000",
            type: "color",
            description: "text-title",
          },
          black75: {
            value: "#000000bf",
            type: "color",
            description: "dimmed",
          },
          black50: {
            value: "#00000080",
            type: "color",
            description: "bg,border",
          },
          black25: {
            value: "#00000040",
            type: "color",
            description: "bg,border",
          },
          black10: {
            value: "#0000001a",
            type: "color",
            description: "bg,border",
          },
          black0: {
            value: "#00000000",
            type: "color",
          },
          white100: {
            value: "#ffffff",
            type: "color",
            description: "text-title",
          },
          white75: {
            value: "#ffffffbf",
            type: "color",
            description: "dimmed",
          },
          white50: {
            value: "#ffffff80",
            type: "color",
            description: "bg,border",
          },
          white25: {
            value: "#ffffff40",
            type: "color",
            description: "bg,border",
          },
          white10: {
            value: "#ffffff1a",
            type: "color",
            description: "bg,border",
          },
          white0: {
            value: "#ffffff00",
            type: "color",
          },
        },
        danger: {
          "5": {
            value: "#fdefec",
            type: "color",
            description: "surface",
          },
          "10": {
            value: "#fcdfd9",
            type: "color",
            description: "border",
          },
          "20": {
            value: "#f7afa1",
            type: "color",
          },
          "30": {
            value: "#f48771",
            type: "color",
          },
          "40": {
            value: "#f05f42",
            type: "color",
          },
          "50": {
            value: "#de3412",
            type: "color",
            description: "base",
          },
          "60": {
            value: "#bd2c0f",
            type: "color",
            description: "text",
          },
          "70": {
            value: "#8a240f",
            type: "color",
          },
          "80": {
            value: "#5c180a",
            type: "color",
          },
          "90": {
            value: "#390d05",
            type: "color",
          },
          "95": {
            value: "#260903",
            type: "color",
          },
        },
        information: {
          "5": {
            value: "#e7f4fe",
            type: "color",
            description: "surface",
          },
          "10": {
            value: "#d3ebfd",
            type: "color",
            description: "border",
          },
          "20": {
            value: "#9ed2fa",
            type: "color",
          },
          "30": {
            value: "#5fb5f7",
            type: "color",
          },
          "40": {
            value: "#2098f3",
            type: "color",
          },
          "50": {
            value: "#0b78cb",
            type: "color",
            description: "base",
          },
          "60": {
            value: "#096ab3",
            type: "color",
            description: "text",
          },
          "70": {
            value: "#085691",
            type: "color",
          },
          "80": {
            value: "#053961",
            type: "color",
          },
          "90": {
            value: "#03253f",
            type: "color",
          },
          "95": {
            value: "#021a2c",
            type: "color",
          },
        },
        warning: {
          "5": {
            value: "#fff3db",
            type: "color",
            description: "surface",
          },
          "10": {
            value: "#ffe0a3",
            type: "color",
            description: "border",
          },
          "20": {
            value: "#ffc95c",
            type: "color",
          },
          "30": {
            value: "#ffb114",
            type: "color",
          },
          "40": {
            value: "#c78500",
            type: "color",
          },
          "50": {
            value: "#9e6a00",
            type: "color",
            description: "base",
          },
          "60": {
            value: "#8a5c00",
            type: "color",
            description: "text",
          },
          "70": {
            value: "#614100",
            type: "color",
          },
          "80": {
            value: "#422c00",
            type: "color",
          },
          "90": {
            value: "#2e1f00",
            type: "color",
          },
          "95": {
            value: "#241800",
            type: "color",
          },
        },
        success: {
          "5": {
            value: "#eaf6ec",
            type: "color",
            description: "surface",
          },
          "10": {
            value: "#d8eedd",
            type: "color",
            description: "border",
          },
          "20": {
            value: "#a9dab4",
            type: "color",
          },
          "30": {
            value: "#7ec88e",
            type: "color",
          },
          "40": {
            value: "#3fa654",
            type: "color",
          },
          "50": {
            value: "#228738",
            type: "color",
            description: "base",
          },
          "60": {
            value: "#267337",
            type: "color",
            description: "text",
          },
          "70": {
            value: "#285d33",
            type: "color",
          },
          "80": {
            value: "#1f4727",
            type: "color",
          },
          "90": {
            value: "#122b18",
            type: "color",
          },
          "95": {
            value: "#0e2012",
            type: "color",
          },
        },
        point: {
          "5": {
            value: "#fbeff0",
            type: "color",
          },
          "10": {
            value: "#f5d6d9",
            type: "color",
          },
          "20": {
            value: "#ebadb2",
            type: "color",
          },
          "30": {
            value: "#e0858c",
            type: "color",
          },
          "40": {
            value: "#d65c66",
            type: "color",
          },
          "50": {
            value: "#d63d4a",
            type: "color",
          },
          "60": {
            value: "#ab2b36",
            type: "color",
          },
          "70": {
            value: "#7a1f26",
            type: "color",
          },
          "80": {
            value: "#521419",
            type: "color",
          },
          "90": {
            value: "#310c0f",
            type: "color",
          },
          "95": {
            value: "#21080a",
            type: "color",
          },
        },
        graphic: {
          "10": {
            value: "#e5ecf9",
            type: "color",
          },
          "30": {
            value: "#98acc5",
            type: "color",
          },
          "50": {
            value: "#61758f",
            type: "color",
          },
          "70": {
            value: "#39506c",
            type: "color",
          },
          "90": {
            value: "#223a58",
            type: "color",
          },
        },
      },
      "high-contrast": {
        gray: {
          "0": {
            value: "#ffffff",
            type: "color",
          },
          "5": {
            value: "#f4f5f6",
            type: "color",
          },
          "10": {
            value: "#e6e8ea",
            type: "color",
          },
          "20": {
            value: "#cdd1d5",
            type: "color",
          },
          "30": {
            value: "#b1b8be",
            type: "color",
          },
          "40": {
            value: "#8a949e",
            type: "color",
          },
          "50": {
            value: "#6d7882",
            type: "color",
          },
          "60": {
            value: "#58616a",
            type: "color",
          },
          "70": {
            value: "#464c53",
            type: "color",
          },
          "80": {
            value: "#33363d",
            type: "color",
          },
          "90": {
            value: "#1e2124",
            type: "color",
          },
          "95": {
            value: "#131416",
            type: "color",
          },
          "100": {
            value: "#000000",
            type: "color",
          },
        },
        primary: {
          "5": {
            value: "#ecf2fe",
            type: "color",
          },
          "10": {
            value: "#d8e5fd",
            type: "color",
          },
          "20": {
            value: "#b1cefb",
            type: "color",
          },
          "30": {
            value: "#86aff9",
            type: "color",
          },
          "40": {
            value: "#4c87f6",
            type: "color",
          },
          "50": {
            value: "#256ef4",
            type: "color",
          },
          "60": {
            value: "#0b50d0",
            type: "color",
          },
          "70": {
            value: "#083891",
            type: "color",
          },
          "80": {
            value: "#052561",
            type: "color",
          },
          "90": {
            value: "#03163a",
            type: "color",
          },
          "95": {
            value: "#020f27",
            type: "color",
          },
        },
        secondary: {
          "5": {
            value: "#edf6f8",
            type: "color",
          },
          "10": {
            value: "#d5ebf1",
            type: "color",
          },
          "20": {
            value: "#abd8e3",
            type: "color",
          },
          "30": {
            value: "#75c0d1",
            type: "color",
          },
          "40": {
            value: "#3d9fb8",
            type: "color",
          },
          "50": {
            value: "#268097",
            type: "color",
          },
          "60": {
            value: "#1f687a",
            type: "color",
          },
          "70": {
            value: "#17505e",
            type: "color",
          },
          "80": {
            value: "#113b45",
            type: "color",
          },
          "90": {
            value: "#0e3139",
            type: "color",
          },
          "95": {
            value: "#091f25",
            type: "color",
          },
        },
        point: {
          "5": {
            value: "#fbeff0",
            type: "color",
          },
          "10": {
            value: "#f5d6d9",
            type: "color",
          },
          "20": {
            value: "#ebadb2",
            type: "color",
          },
          "30": {
            value: "#e0858c",
            type: "color",
          },
          "40": {
            value: "#d65c66",
            type: "color",
          },
          "50": {
            value: "#d63d4a",
            type: "color",
          },
          "60": {
            value: "#ab2b36",
            type: "color",
          },
          "70": {
            value: "#7a1f26",
            type: "color",
          },
          "80": {
            value: "#521419",
            type: "color",
          },
          "90": {
            value: "#310c0f",
            type: "color",
          },
          "95": {
            value: "#21080a",
            type: "color",
          },
        },
        danger: {
          "5": {
            value: "#fdefec",
            type: "color",
            description: "surface",
          },
          "10": {
            value: "#fcdfd9",
            type: "color",
            description: "border",
          },
          "20": {
            value: "#f7afa1",
            type: "color",
          },
          "30": {
            value: "#f48771",
            type: "color",
          },
          "40": {
            value: "#f05f42",
            type: "color",
          },
          "50": {
            value: "#de3412",
            type: "color",
            description: "base",
          },
          "60": {
            value: "#bd2c0f",
            type: "color",
            description: "text",
          },
          "70": {
            value: "#8a240f",
            type: "color",
          },
          "80": {
            value: "#5c180a",
            type: "color",
          },
          "90": {
            value: "#390d05",
            type: "color",
          },
          "95": {
            value: "#260903",
            type: "color",
          },
        },
        warning: {
          "5": {
            value: "#fff3db",
            type: "color",
            description: "surface",
          },
          "10": {
            value: "#ffe0a3",
            type: "color",
            description: "border",
          },
          "20": {
            value: "#ffc95c",
            type: "color",
          },
          "30": {
            value: "#ffb114",
            type: "color",
          },
          "40": {
            value: "#c78500",
            type: "color",
          },
          "50": {
            value: "#9e6a00",
            type: "color",
            description: "base",
          },
          "60": {
            value: "#8a5c00",
            type: "color",
            description: "text",
          },
          "70": {
            value: "#614100",
            type: "color",
          },
          "80": {
            value: "#422c00",
            type: "color",
          },
          "90": {
            value: "#2e1f00",
            type: "color",
          },
          "95": {
            value: "#241800",
            type: "color",
          },
        },
        success: {
          "5": {
            value: "#eaf6ec",
            type: "color",
            description: "surface",
          },
          "10": {
            value: "#d8eedd",
            type: "color",
            description: "border",
          },
          "20": {
            value: "#a9dab4",
            type: "color",
          },
          "30": {
            value: "#7ec88e",
            type: "color",
          },
          "40": {
            value: "#3fa654",
            type: "color",
          },
          "50": {
            value: "#228738",
            type: "color",
            description: "base",
          },
          "60": {
            value: "#267337",
            type: "color",
            description: "text",
          },
          "70": {
            value: "#285d33",
            type: "color",
          },
          "80": {
            value: "#1f4727",
            type: "color",
          },
          "90": {
            value: "#122b18",
            type: "color",
          },
          "95": {
            value: "#0e2012",
            type: "color",
          },
        },
        information: {
          "5": {
            value: "#e7f4fe",
            type: "color",
            description: "surface",
          },
          "10": {
            value: "#d3ebfd",
            type: "color",
            description: "border",
          },
          "20": {
            value: "#9ed2fa",
            type: "color",
          },
          "30": {
            value: "#5fb5f7",
            type: "color",
          },
          "40": {
            value: "#2098f3",
            type: "color",
          },
          "50": {
            value: "#0b78cb",
            type: "color",
            description: "base",
          },
          "60": {
            value: "#096ab3",
            type: "color",
            description: "text",
          },
          "70": {
            value: "#085691",
            type: "color",
          },
          "80": {
            value: "#053961",
            type: "color",
          },
          "90": {
            value: "#03253f",
            type: "color",
          },
          "95": {
            value: "#021a2c",
            type: "color",
          },
        },
        alpha: {
          black100: {
            value: "#000000",
            type: "color",
            description: "text-title",
          },
          black75: {
            value: "#000000bf",
            type: "color",
            description: "dimmed",
          },
          black50: {
            value: "#00000080",
            type: "color",
            description: "bg,border",
          },
          black25: {
            value: "#00000040",
            type: "color",
            description: "bg,border",
          },
          black10: {
            value: "#0000001a",
            type: "color",
            description: "bg,border",
          },
          black0: {
            value: "#00000000",
            type: "color",
          },
          white100: {
            value: "#ffffff",
            type: "color",
            description: "text-title",
          },
          white75: {
            value: "#ffffffbf",
            type: "color",
            description: "dimmed",
          },
          white50: {
            value: "#ffffff80",
            type: "color",
            description: "bg,border",
          },
          white25: {
            value: "#ffffff40",
            type: "color",
            description: "bg,border",
          },
          white10: {
            value: "#ffffff1a",
            type: "color",
            description: "bg,border",
          },
          white0: {
            value: "#ffffff00",
            type: "color",
          },
        },
        graphic: {
          "10": {
            value: "#e5ecf9",
            type: "color",
          },
          "30": {
            value: "#98acc5",
            type: "color",
          },
          "50": {
            value: "#61758f",
            type: "color",
          },
          "70": {
            value: "#39506c",
            type: "color",
          },
          "90": {
            value: "#223a58",
            type: "color",
          },
        },
      },
    },
    typo: {
      font: {
        type: {
          value: "Pretendard GOV",
          type: "text",
        },
      },
      "font-weight": {
        regular: {
          value: "Regular",
          type: "text",
        },
        bold: {
          value: "Bold",
          type: "text",
        },
      },
      "letter-spacing": {
        "0": {
          value: "0rem",
          type: "dimension",
        },
        "1": {
          value: "0.1rem",
          type: "dimension",
        },
      },
    },
    number: {
      "0": {
        value: "0rem",
        type: "dimension",
      },
      "1": {
        value: "0.1rem",
        type: "dimension",
      },
      "2": {
        value: "0.2rem",
        type: "dimension",
      },
      "3": {
        value: "0.4rem",
        type: "dimension",
      },
      "4": {
        value: "0.6rem",
        type: "dimension",
      },
      "5": {
        value: "0.8rem",
        type: "dimension",
      },
      "6": {
        value: "1rem",
        type: "dimension",
      },
      "7": {
        value: "1.2rem",
        type: "dimension",
      },
      "8": {
        value: "1.6rem",
        type: "dimension",
      },
      "9": {
        value: "2rem",
        type: "dimension",
      },
      "10": {
        value: "2.4rem",
        type: "dimension",
      },
      "11": {
        value: "2.8rem",
        type: "dimension",
      },
      "12": {
        value: "3.2rem",
        type: "dimension",
      },
      "13": {
        value: "3.6rem",
        type: "dimension",
      },
      "14": {
        value: "4rem",
        type: "dimension",
      },
      "15": {
        value: "4.4rem",
        type: "dimension",
      },
      "16": {
        value: "4.8rem",
        type: "dimension",
      },
      "17": {
        value: "5.6rem",
        type: "dimension",
      },
      "18": {
        value: "6.4rem",
        type: "dimension",
      },
      "19": {
        value: "7.2rem",
        type: "dimension",
      },
      "20": {
        value: "8rem",
        type: "dimension",
      },
      "21": {
        value: "9.6rem",
        type: "dimension",
      },
      max: {
        value: "100rem",
        type: "dimension",
      },
    },
  },
  "mode-light": {
    color: {
      surface: {
        "gray-subtler": {
          value: "{primitive.color.light.gray.5}",
          type: "color",
        },
        "gray-subtle": {
          value: "{primitive.color.light.gray.10}",
          type: "color",
        },
        disabled: {
          value: "{primitive.color.light.gray.20}",
          type: "color",
          description: "disabled",
        },
        "primary-subtler": {
          value: "{primitive.color.light.primary.5}",
          type: "color",
        },
        "secondary-subtler": {
          value: "{primitive.color.light.secondary.5}",
          type: "color",
        },
        "danger-subtler": {
          value: "{primitive.color.light.danger.5}",
          type: "color",
        },
        "warning-subtler": {
          value: "{primitive.color.light.warning.5}",
          type: "color",
        },
        "success-subtler": {
          value: "{primitive.color.light.success.5}",
          type: "color",
        },
        "information-subtler": {
          value: "{primitive.color.light.information.5}",
          type: "color",
        },
        "point-subtler": {
          value: "{primitive.color.light.point.5}",
          type: "color",
        },
        white: {
          value: "{primitive.color.light.gray.0}",
          type: "color",
          description: "disabled",
        },
        inverse: {
          value: "{primitive.color.light.gray.90}",
          type: "color",
          description: "disabled",
        },
        "white-static": {
          value: "{primitive.color.light.gray.0}",
          type: "color",
          description: "disabled",
        },
        "inverse-static": {
          value: "{primitive.color.light.gray.90}",
          type: "color",
          description: "disabled",
        },
        "white-subtle": {
          value: "{primitive.color.light.gray.0}",
          type: "color",
          description: "disabled",
        },
        "white-subtler": {
          value: "{primitive.color.light.gray.0}",
          type: "color",
          description: "disabled",
        },
      },
      border: {
        "gray-light": {
          value: "{primitive.color.light.gray.20}",
          type: "color",
        },
        gray: {
          value: "{primitive.color.light.gray.30}",
          type: "color",
          description: "disabled",
        },
        "secondary-light": {
          value: "{primitive.color.light.secondary.10}",
          type: "color",
        },
        "danger-light": {
          value: "{primitive.color.light.danger.10}",
          type: "color",
        },
        danger: {
          value: "{primitive.color.light.danger.50}",
          type: "color",
        },
        "warning-light": {
          value: "{primitive.color.light.warning.10}",
          type: "color",
        },
        warning: {
          value: "{primitive.color.light.warning.50}",
          type: "color",
        },
        "success-light": {
          value: "{primitive.color.light.success.10}",
          type: "color",
        },
        success: {
          value: "{primitive.color.light.success.50}",
          type: "color",
        },
        "information-light": {
          value: "{primitive.color.light.information.10}",
          type: "color",
        },
        information: {
          value: "{primitive.color.light.information.50}",
          type: "color",
        },
        "gray-dark": {
          value: "{primitive.color.light.gray.60}",
          type: "color",
          description: "active",
        },
        primary: {
          value: "{primitive.color.light.primary.50}",
          type: "color",
          description: "active/selected",
        },
        disabled: {
          value: "{primitive.color.light.gray.30}",
          type: "color",
          description: "disabled",
        },
        "gray-darker": {
          value: "{primitive.color.light.gray.90}",
          type: "color",
          description: "active",
        },
        secondary: {
          value: "{primitive.color.light.secondary.70}",
          type: "color",
          description: "active/selected",
        },
        inverse: {
          value: "{primitive.color.light.gray.0}",
          type: "color",
          description: "disabled",
        },
        transparency: {
          value: "{primitive.color.light.alpha.black0}",
          type: "color",
          description: "disabled",
        },
        "primary-light": {
          value: "{primitive.color.light.primary.10}",
          type: "color",
          description: "active/selected",
        },
        point: {
          value: "{primitive.color.light.point.50}",
          type: "color",
          description: "active/selected",
        },
        "point-light": {
          value: "{primitive.color.light.point.10}",
          type: "color",
          description: "active/selected",
        },
      },
      divider: {
        "gray-light": {
          value: "{primitive.color.light.gray.20}",
          type: "color",
        },
        gray: {
          value: "{primitive.color.light.gray.40}",
          type: "color",
          description: "disabled",
        },
        "gray-dark": {
          value: "{primitive.color.light.gray.50}",
          type: "color",
          description: "active",
        },
        primary: {
          value: "{primitive.color.light.primary.50}",
          type: "color",
          description: "active/selected",
        },
        "secondary-light": {
          value: "{primitive.color.light.secondary.10}",
          type: "color",
        },
        secondary: {
          value: "{primitive.color.light.secondary.70}",
          type: "color",
          description: "active/selected",
        },
        error: {
          value: "{primitive.color.light.danger.50}",
          type: "color",
        },
        "primary-light": {
          value: "{primitive.color.light.primary.10}",
          type: "color",
          description: "active/selected",
        },
        inverse: {
          value: "{primitive.color.light.gray.0}",
          type: "color",
        },
        "gray-darker": {
          value: "{primitive.color.light.gray.90}",
          type: "color",
          description: "active",
        },
        point: {
          value: "{primitive.color.light.point.50}",
          type: "color",
        },
      },
      text: {
        bolder: {
          value: "{primitive.color.light.gray.95}",
          type: "color",
        },
        subtle: {
          value: "{primitive.color.light.gray.70}",
          type: "color",
        },
        disabled: {
          value: "{primitive.color.light.gray.40}",
          type: "color",
          description: "disabled",
        },
        "disabled-on": {
          value: "{primitive.color.light.gray.50}",
          type: "color",
          description: "active",
        },
        primary: {
          value: "{primitive.color.light.primary.60}",
          type: "color",
          description: "active/selected",
        },
        secondary: {
          value: "{primitive.color.light.secondary.80}",
          type: "color",
          description: "active/selected",
        },
        danger: {
          value: "{primitive.color.light.danger.60}",
          type: "color",
        },
        warning: {
          value: "{primitive.color.light.warning.60}",
          type: "color",
        },
        success: {
          value: "{primitive.color.light.success.60}",
          type: "color",
        },
        information: {
          value: "{primitive.color.light.information.60}",
          type: "color",
        },
        basic: {
          value: "{primitive.color.light.gray.90}",
          type: "color",
        },
        point: {
          value: "{primitive.color.light.point.60}",
          type: "color",
        },
        "bolder-inverse": {
          value: "{primitive.color.light.gray.0}",
          type: "color",
        },
        "basic-inverse": {
          value: "{primitive.color.light.gray.0}",
          type: "color",
        },
        "subtle-inverse": {
          value: "{primitive.color.light.gray.30}",
          type: "color",
        },
        "inverse-static": {
          value: "{primitive.color.light.gray.0}",
          type: "color",
        },
        static: {
          value: "{primitive.color.light.gray.90}",
          type: "color",
        },
      },
      icon: {
        gray: {
          value: "{primitive.color.light.gray.80}",
          type: "color",
        },
        "gray-fill": {
          value: "{primitive.color.light.gray.20}",
          type: "color",
        },
        inverse: {
          value: "{primitive.color.light.gray.0}",
          type: "color",
        },
        primary: {
          value: "{primitive.color.light.primary.50}",
          type: "color",
          description: "active/selected",
        },
        secondary: {
          value: "{primitive.color.light.secondary.80}",
          type: "color",
          description: "active/selected",
        },
        point: {
          value: "{primitive.color.light.point.50}",
          type: "color",
        },
        danger: {
          value: "{primitive.color.light.danger.50}",
          type: "color",
        },
        warning: {
          value: "{primitive.color.light.warning.50}",
          type: "color",
        },
        success: {
          value: "{primitive.color.light.success.50}",
          type: "color",
        },
        information: {
          value: "{primitive.color.light.information.50}",
          type: "color",
        },
        "gray-light": {
          value: "{primitive.color.light.gray.70}",
          type: "color",
        },
        disabled: {
          value: "{primitive.color.light.gray.40}",
          type: "color",
        },
        "disabled-on": {
          value: "{primitive.color.light.gray.50}",
          type: "color",
        },
        "inverse-static": {
          value: "{primitive.color.light.gray.0}",
          type: "color",
        },
        "primary-static": {
          value: "{primitive.color.light.primary.50}",
          type: "color",
          description: "active/selected",
        },
        "secondary-static": {
          value: "{primitive.color.light.secondary.80}",
          type: "color",
          description: "active/selected",
        },
        "point-static": {
          value: "{primitive.color.light.point.50}",
          type: "color",
        },
        "danger-static": {
          value: "{primitive.color.light.danger.50}",
          type: "color",
        },
        "warning-static": {
          value: "{primitive.color.light.warning.50}",
          type: "color",
        },
        "success-static": {
          value: "{primitive.color.light.success.50}",
          type: "color",
        },
        "information-static": {
          value: "{primitive.color.light.information.50}",
          type: "color",
        },
        "gray-static": {
          value: "{primitive.color.light.gray.80}",
          type: "color",
        },
      },
      link: {
        default: {
          value: "{primitive.color.light.primary.50}",
          type: "color",
        },
        hover: {
          value: "{primitive.color.light.primary.60}",
          type: "color",
        },
        pressed: {
          value: "{primitive.color.light.primary.70}",
          type: "color",
        },
        visited: {
          value: "#5917b8",
          type: "color",
        },
      },
      button: {
        "primary-fill": {
          value: "{primitive.color.light.primary.50}",
          type: "color",
        },
        "primary-fill-hover": {
          value: "{primitive.color.light.primary.60}",
          type: "color",
        },
        "primary-fill-pressed": {
          value: "{primitive.color.light.primary.70}",
          type: "color",
        },
        "secondary-fill": {
          value: "{primitive.color.light.primary.5}",
          type: "color",
        },
        "secondary-fill-hover": {
          value: "{primitive.color.light.primary.10}",
          type: "color",
        },
        "secondary-fill-pressed": {
          value: "{primitive.color.light.primary.20}",
          type: "color",
        },
        "secondary-border": {
          value: "{primitive.color.light.primary.50}",
          type: "color",
        },
        "tertiary-fill": {
          value: "{primitive.color.light.alpha.white0}",
          type: "color",
        },
        "tertiary-fill-hover": {
          value: "{primitive.color.light.gray.5}",
          type: "color",
        },
        "tertiary-fill-pressed": {
          value: "{primitive.color.light.gray.10}",
          type: "color",
        },
        "tertiary-border": {
          value: "{primitive.color.light.gray.60}",
          type: "color",
        },
        "disabled-fill": {
          value: "{primitive.color.light.gray.20}",
          type: "color",
        },
        "text-fill-hover": {
          value: "{primitive.color.light.secondary.5}",
          type: "color",
        },
        "text-fill-pressed": {
          value: "{primitive.color.light.secondary.10}",
          type: "color",
        },
        "text-fill": {
          value: "{primitive.color.light.alpha.white0}",
          type: "color",
        },
        "text-border": {
          value: "{primitive.color.light.alpha.black0}",
          type: "color",
        },
        "disabled-border": {
          value: "{primitive.color.light.gray.30}",
          type: "color",
        },
      },
      background: {
        white: {
          value: "{primitive.color.light.gray.0}",
          type: "color",
        },
        inverse: {
          value: "{primitive.color.light.gray.90}",
          type: "color",
        },
        "gray-subtler": {
          value: "{primitive.color.light.gray.5}",
          type: "color",
        },
        "gray-subtle": {
          value: "{primitive.color.light.gray.10}",
          type: "color",
        },
        dim: {
          value: "{primitive.color.light.alpha.black75}",
          type: "color",
        },
      },
      element: {
        "disabled-light": {
          value: "{primitive.color.light.gray.20}",
          type: "color",
          description: "앞에 gray를 붙",
        },
        "disabled-dark": {
          value: "{primitive.color.light.gray.40}",
          type: "color",
          description: "disabled",
        },
        "gray-lighter": {
          value: "{primitive.color.light.gray.5}",
          type: "color",
        },
        "gray-light": {
          value: "{primitive.color.light.gray.10}",
          type: "color",
        },
        gray: {
          value: "{primitive.color.light.gray.50}",
          type: "color",
        },
        "primary-lighter": {
          value: "{primitive.color.light.primary.5}",
          type: "color",
        },
        "primary-light": {
          value: "{primitive.color.light.primary.10}",
          type: "color",
        },
        primary: {
          value: "{primitive.color.light.primary.50}",
          type: "color",
          description: "active/selected",
        },
        "secondary-lighter": {
          value: "{primitive.color.light.secondary.5}",
          type: "color",
        },
        "secondary-light": {
          value: "{primitive.color.light.secondary.10}",
          type: "color",
        },
        secondary: {
          value: "{primitive.color.light.secondary.70}",
          type: "color",
        },
        "point-lighter": {
          value: "{primitive.color.light.point.5}",
          type: "color",
        },
        "point-light": {
          value: "{primitive.color.light.point.10}",
          type: "color",
        },
        point: {
          value: "{primitive.color.light.point.50}",
          type: "color",
        },
        "danger-lighter": {
          value: "{primitive.color.light.danger.5}",
          type: "color",
        },
        danger: {
          value: "{primitive.color.light.danger.50}",
          type: "color",
        },
        "warning-lighter": {
          value: "{primitive.color.light.warning.5}",
          type: "color",
        },
        warning: {
          value: "{primitive.color.light.warning.30}",
          type: "color",
        },
        "success-lighter": {
          value: "{primitive.color.light.success.5}",
          type: "color",
        },
        success: {
          value: "{primitive.color.light.success.50}",
          type: "color",
        },
        "information-lighter": {
          value: "{primitive.color.light.information.5}",
          type: "color",
        },
        information: {
          value: "{primitive.color.light.information.50}",
          type: "color",
        },
        inverse: {
          value: "{primitive.color.light.gray.0}",
          type: "color",
        },
        "gray-dark": {
          value: "{primitive.color.light.gray.60}",
          type: "color",
        },
        "inverse-static": {
          value: "{primitive.color.light.gray.0}",
          type: "color",
        },
      },
      action: {
        white: {
          value: "{primitive.color.light.gray.0}",
          type: "color",
          description: "disabled",
        },
        primary: {
          value: "{primitive.color.light.alpha.white0}",
          type: "color",
        },
        "primary-hover": {
          value: "{primitive.color.light.primary.5}",
          type: "color",
        },
        "primary-pressed": {
          value: "{primitive.color.light.primary.10}",
          type: "color",
        },
        secondary: {
          value: "{primitive.color.light.alpha.white0}",
          type: "color",
        },
        "secondary-hover": {
          value: "{primitive.color.light.secondary.5}",
          type: "color",
        },
        "secondary-pressed": {
          value: "{primitive.color.light.secondary.10}",
          type: "color",
        },
        "secondary-selected": {
          value: "{primitive.color.light.secondary.5}",
          type: "color",
        },
        "secondary-on": {
          value: "{primitive.color.light.alpha.white0}",
          type: "color",
        },
        "secondary-on-hover": {
          value: "{primitive.color.light.gray.0}",
          type: "color",
        },
        "secondary-on-pressed": {
          value: "{primitive.color.light.secondary.10}",
          type: "color",
        },
        "secondary-on-selected": {
          value: "{primitive.color.light.gray.0}",
          type: "color",
        },
        "secondary-active": {
          value: "{primitive.color.light.secondary.70}",
          type: "color",
        },
        "primary-active": {
          value: "{primitive.color.light.primary.50}",
          type: "color",
        },
        disabled: {
          value: "{primitive.color.light.gray.20}",
          type: "color",
        },
        "primary-selected": {
          value: "{primitive.color.light.primary.5}",
          type: "color",
        },
      },
      input: {
        border: {
          value: "{primitive.color.light.gray.60}",
          type: "color",
        },
        "border-disabled": {
          value: "{primitive.color.light.gray.30}",
          type: "color",
        },
        "border-active": {
          value: "{primitive.color.light.primary.50}",
          type: "color",
          description: "active/selected",
        },
        "border-error": {
          value: "{primitive.color.light.danger.50}",
          type: "color",
        },
        surface: {
          value: "{primitive.color.light.gray.0}",
          type: "color",
        },
        "surface-disabled": {
          value: "{primitive.color.light.gray.20}",
          type: "color",
        },
      },
      graphic: {
        "blue-subtler": {
          value: "{primitive.color.light.graphic.10}",
          type: "color",
          description: "disabled",
        },
        "blue-subtle": {
          value: "{primitive.color.light.graphic.30}",
          type: "color",
          description: "disabled",
        },
        blue: {
          value: "{primitive.color.light.graphic.50}",
          type: "color",
          description: "disabled",
        },
        "blue-dark": {
          value: "{primitive.color.light.graphic.70}",
          type: "color",
          description: "disabled",
        },
        "blue-darker": {
          value: "{primitive.color.light.graphic.90}",
          type: "color",
          description: "disabled",
        },
        "red-subtler": {
          value: "{primitive.color.light.point.5}",
          type: "color",
          description: "disabled",
        },
        "red-subtle": {
          value: "{primitive.color.light.point.10}",
          type: "color",
          description: "disabled",
        },
        red: {
          value: "{primitive.color.high-contrast.point.20}",
          type: "color",
          description: "disabled",
        },
        "red-dark": {
          value: "{primitive.color.high-contrast.point.40}",
          type: "color",
          description: "disabled",
        },
        "red-darker": {
          value: "{primitive.color.high-contrast.point.70}",
          type: "color",
          description: "disabled",
        },
        brand: {
          value: "{primitive.color.light.primary.50}",
          type: "color",
          description: "disabled",
        },
      },
      alpha: {
        base100: {
          value: "{primitive.color.light.alpha.white100}",
          type: "color",
        },
        base50: {
          value: "{primitive.color.light.alpha.white50}",
          type: "color",
        },
        base25: {
          value: "{primitive.color.high-contrast.alpha.white25}",
          type: "color",
        },
        base0: {
          value: "{primitive.color.light.alpha.white0}",
          type: "color",
        },
        inverse100: {
          value: "{primitive.color.light.alpha.black100}",
          type: "color",
        },
        inverse50: {
          value: "{primitive.color.light.alpha.black50}",
          type: "color",
        },
        inverse25: {
          value: "{primitive.color.light.alpha.black25}",
          type: "color",
        },
        inverse0: {
          value: "{primitive.color.light.alpha.black0}",
          type: "color",
        },
        base75: {
          value: "{primitive.color.light.alpha.white75}",
          type: "color",
        },
        inverse75: {
          value: "{primitive.color.light.alpha.black75}",
          type: "color",
        },
        inverse10: {
          value: "{primitive.color.light.alpha.black10}",
          type: "color",
        },
        base10: {
          value: "{primitive.color.high-contrast.alpha.white10}",
          type: "color",
        },
        shadow1: {
          value: "#0000000d",
          type: "color",
        },
        shadow2: {
          value: "#00000014",
          type: "color",
        },
        shadow3: {
          value: "#0000001f",
          type: "color",
        },
      },
    },
    "border-width": {
      "variable-regular": {
        value: "0.1rem",
        type: "dimension",
      },
      "variable-medium": {
        value: "0.2rem",
        type: "dimension",
      },
      "static-regular": {
        value: "0.1rem",
        type: "dimension",
      },
      "static-medium": {
        value: "0.2rem",
        type: "dimension",
      },
    },
  },
  "mode-high-contrast": {
    color: {
      surface: {
        "gray-subtler": {
          value: "{primitive.color.high-contrast.gray.95}",
          type: "color",
        },
        "gray-subtle": {
          value: "{primitive.color.high-contrast.gray.90}",
          type: "color",
        },
        disabled: {
          value: "{primitive.color.high-contrast.gray.70}",
          type: "color",
          description: "disabled",
        },
        "primary-subtler": {
          value: "{primitive.color.high-contrast.primary.95}",
          type: "color",
        },
        "secondary-subtler": {
          value: "{primitive.color.high-contrast.secondary.95}",
          type: "color",
        },
        "danger-subtler": {
          value: "{primitive.color.high-contrast.danger.95}",
          type: "color",
        },
        "warning-subtler": {
          value: "{primitive.color.high-contrast.warning.95}",
          type: "color",
        },
        "success-subtler": {
          value: "{primitive.color.high-contrast.success.95}",
          type: "color",
        },
        "information-subtler": {
          value: "{primitive.color.high-contrast.information.95}",
          type: "color",
        },
        "point-subtler": {
          value: "{primitive.color.high-contrast.point.95}",
          type: "color",
        },
        white: {
          value: "{primitive.color.high-contrast.gray.100}",
          type: "color",
          description: "disabled",
        },
        inverse: {
          value: "{primitive.color.high-contrast.gray.10}",
          type: "color",
          description: "disabled",
        },
        "white-static": {
          value: "{primitive.color.high-contrast.gray.0}",
          type: "color",
          description: "disabled",
        },
        "inverse-static": {
          value: "{primitive.color.high-contrast.gray.90}",
          type: "color",
          description: "disabled",
        },
        "white-subtle": {
          value: "{primitive.color.high-contrast.gray.95}",
          type: "color",
          description: "disabled",
        },
        "white-subtler": {
          value: "{primitive.color.high-contrast.gray.90}",
          type: "color",
          description: "disabled",
        },
      },
      border: {
        "gray-light": {
          value: "{primitive.color.high-contrast.gray.80}",
          type: "color",
        },
        gray: {
          value: "{primitive.color.high-contrast.gray.70}",
          type: "color",
          description: "disabled",
        },
        "secondary-light": {
          value: "{primitive.color.high-contrast.secondary.90}",
          type: "color",
        },
        "danger-light": {
          value: "{primitive.color.high-contrast.danger.90}",
          type: "color",
        },
        danger: {
          value: "{primitive.color.high-contrast.danger.50}",
          type: "color",
        },
        "warning-light": {
          value: "{primitive.color.high-contrast.warning.90}",
          type: "color",
        },
        warning: {
          value: "{primitive.color.high-contrast.warning.50}",
          type: "color",
        },
        "success-light": {
          value: "{primitive.color.high-contrast.success.90}",
          type: "color",
        },
        success: {
          value: "{primitive.color.high-contrast.success.50}",
          type: "color",
        },
        "information-light": {
          value: "{primitive.color.high-contrast.information.90}",
          type: "color",
        },
        information: {
          value: "{primitive.color.high-contrast.information.50}",
          type: "color",
        },
        "gray-dark": {
          value: "{primitive.color.high-contrast.gray.40}",
          type: "color",
          description: "active",
        },
        primary: {
          value: "{primitive.color.high-contrast.primary.50}",
          type: "color",
          description: "active/selected",
        },
        disabled: {
          value: "{primitive.color.high-contrast.gray.70}",
          type: "color",
          description: "disabled",
        },
        "gray-darker": {
          value: "{primitive.color.high-contrast.gray.10}",
          type: "color",
          description: "active",
        },
        secondary: {
          value: "{primitive.color.high-contrast.secondary.60}",
          type: "color",
          description: "active/selected",
        },
        inverse: {
          value: "{primitive.color.high-contrast.gray.100}",
          type: "color",
          description: "disabled",
        },
        transparency: {
          value: "{primitive.color.high-contrast.alpha.white25}",
          type: "color",
          description: "disabled",
        },
        "primary-light": {
          value: "{primitive.color.high-contrast.primary.90}",
          type: "color",
          description: "active/selected",
        },
        point: {
          value: "{primitive.color.high-contrast.point.50}",
          type: "color",
          description: "active/selected",
        },
        "point-light": {
          value: "{primitive.color.high-contrast.point.90}",
          type: "color",
          description: "active/selected",
        },
      },
      divider: {
        "gray-light": {
          value: "{primitive.color.high-contrast.gray.80}",
          type: "color",
        },
        gray: {
          value: "{primitive.color.high-contrast.gray.70}",
          type: "color",
          description: "disabled",
        },
        "gray-dark": {
          value: "{primitive.color.high-contrast.gray.50}",
          type: "color",
          description: "active",
        },
        primary: {
          value: "{primitive.color.high-contrast.primary.50}",
          type: "color",
          description: "active/selected",
        },
        "secondary-light": {
          value: "{primitive.color.high-contrast.secondary.90}",
          type: "color",
        },
        secondary: {
          value: "{primitive.color.high-contrast.secondary.60}",
          type: "color",
          description: "active/selected",
        },
        error: {
          value: "{primitive.color.high-contrast.danger.50}",
          type: "color",
        },
        "primary-light": {
          value: "{primitive.color.high-contrast.primary.90}",
          type: "color",
          description: "active/selected",
        },
        inverse: {
          value: "{primitive.color.high-contrast.gray.100}",
          type: "color",
        },
        "gray-darker": {
          value: "{primitive.color.high-contrast.gray.10}",
          type: "color",
          description: "active",
        },
        point: {
          value: "{primitive.color.high-contrast.point.50}",
          type: "color",
        },
      },
      text: {
        bolder: {
          value: "{primitive.color.high-contrast.gray.10}",
          type: "color",
        },
        subtle: {
          value: "{primitive.color.high-contrast.gray.20}",
          type: "color",
        },
        disabled: {
          value: "{primitive.color.high-contrast.gray.60}",
          type: "color",
          description: "disabled",
        },
        "disabled-on": {
          value: "{primitive.color.high-contrast.gray.50}",
          type: "color",
          description: "active",
        },
        primary: {
          value: "{primitive.color.high-contrast.primary.20}",
          type: "color",
          description: "active/selected",
        },
        secondary: {
          value: "{primitive.color.high-contrast.secondary.20}",
          type: "color",
          description: "active/selected",
        },
        danger: {
          value: "{primitive.color.high-contrast.danger.20}",
          type: "color",
        },
        warning: {
          value: "{primitive.color.high-contrast.warning.20}",
          type: "color",
        },
        success: {
          value: "{primitive.color.high-contrast.success.20}",
          type: "color",
        },
        information: {
          value: "{primitive.color.high-contrast.information.20}",
          type: "color",
        },
        basic: {
          value: "{primitive.color.high-contrast.gray.5}",
          type: "color",
        },
        point: {
          value: "{primitive.color.high-contrast.point.20}",
          type: "color",
        },
        "bolder-inverse": {
          value: "{primitive.color.high-contrast.gray.95}",
          type: "color",
        },
        "basic-inverse": {
          value: "{primitive.color.high-contrast.gray.90}",
          type: "color",
        },
        "subtle-inverse": {
          value: "{primitive.color.high-contrast.gray.70}",
          type: "color",
        },
        "inverse-static": {
          value: "{primitive.color.high-contrast.gray.0}",
          type: "color",
        },
        static: {
          value: "{primitive.color.high-contrast.gray.90}",
          type: "color",
        },
      },
      icon: {
        gray: {
          value: "{primitive.color.high-contrast.gray.5}",
          type: "color",
        },
        "gray-fill": {
          value: "{primitive.color.high-contrast.gray.70}",
          type: "color",
        },
        inverse: {
          value: "{primitive.color.high-contrast.gray.90}",
          type: "color",
        },
        primary: {
          value: "{primitive.color.high-contrast.primary.20}",
          type: "color",
          description: "active/selected",
        },
        secondary: {
          value: "{primitive.color.high-contrast.secondary.20}",
          type: "color",
          description: "active/selected",
        },
        point: {
          value: "{primitive.color.high-contrast.point.20}",
          type: "color",
        },
        danger: {
          value: "{primitive.color.high-contrast.danger.20}",
          type: "color",
        },
        warning: {
          value: "{primitive.color.high-contrast.warning.20}",
          type: "color",
        },
        success: {
          value: "{primitive.color.high-contrast.success.20}",
          type: "color",
        },
        information: {
          value: "{primitive.color.high-contrast.information.20}",
          type: "color",
        },
        "gray-light": {
          value: "{primitive.color.high-contrast.gray.20}",
          type: "color",
        },
        disabled: {
          value: "{primitive.color.high-contrast.gray.60}",
          type: "color",
        },
        "disabled-on": {
          value: "{primitive.color.high-contrast.gray.50}",
          type: "color",
        },
        "inverse-static": {
          value: "{primitive.color.high-contrast.gray.0}",
          type: "color",
        },
        "primary-static": {
          value: "{primitive.color.high-contrast.primary.50}",
          type: "color",
          description: "active/selected",
        },
        "secondary-static": {
          value: "{primitive.color.high-contrast.secondary.80}",
          type: "color",
          description: "active/selected",
        },
        "point-static": {
          value: "{primitive.color.high-contrast.point.50}",
          type: "color",
        },
        "danger-static": {
          value: "{primitive.color.high-contrast.danger.50}",
          type: "color",
        },
        "warning-static": {
          value: "{primitive.color.high-contrast.warning.50}",
          type: "color",
        },
        "success-static": {
          value: "{primitive.color.high-contrast.success.50}",
          type: "color",
        },
        "information-static": {
          value: "{primitive.color.high-contrast.information.50}",
          type: "color",
        },
        "gray-static": {
          value: "{primitive.color.high-contrast.gray.80}",
          type: "color",
        },
      },
      link: {
        default: {
          value: "{primitive.color.high-contrast.primary.30}",
          type: "color",
        },
        hover: {
          value: "{primitive.color.high-contrast.primary.20}",
          type: "color",
        },
        pressed: {
          value: "{primitive.color.high-contrast.primary.10}",
          type: "color",
        },
        visited: {
          value: "#c49ff9",
          type: "color",
        },
      },
      button: {
        "primary-fill": {
          value: "{primitive.color.high-contrast.primary.50}",
          type: "color",
        },
        "primary-fill-hover": {
          value: "{primitive.color.high-contrast.primary.60}",
          type: "color",
        },
        "primary-fill-pressed": {
          value: "{primitive.color.high-contrast.primary.70}",
          type: "color",
        },
        "secondary-fill": {
          value: "{primitive.color.high-contrast.primary.95}",
          type: "color",
        },
        "secondary-fill-hover": {
          value: "{primitive.color.high-contrast.primary.90}",
          type: "color",
        },
        "secondary-fill-pressed": {
          value: "{primitive.color.high-contrast.primary.80}",
          type: "color",
        },
        "secondary-border": {
          value: "{primitive.color.high-contrast.primary.50}",
          type: "color",
        },
        "tertiary-fill": {
          value: "{primitive.color.high-contrast.alpha.black0}",
          type: "color",
        },
        "tertiary-fill-hover": {
          value: "{primitive.color.high-contrast.gray.95}",
          type: "color",
        },
        "tertiary-fill-pressed": {
          value: "{primitive.color.high-contrast.gray.80}",
          type: "color",
        },
        "tertiary-border": {
          value: "{primitive.color.high-contrast.gray.40}",
          type: "color",
        },
        "disabled-fill": {
          value: "{primitive.color.high-contrast.gray.80}",
          type: "color",
        },
        "text-fill-hover": {
          value: "{primitive.color.high-contrast.secondary.95}",
          type: "color",
        },
        "text-fill-pressed": {
          value: "{primitive.color.high-contrast.secondary.90}",
          type: "color",
        },
        "text-fill": {
          value: "{primitive.color.high-contrast.alpha.black0}",
          type: "color",
        },
        "text-border": {
          value: "{primitive.color.high-contrast.alpha.white50}",
          type: "color",
        },
        "disabled-border": {
          value: "{primitive.color.high-contrast.gray.70}",
          type: "color",
        },
      },
      background: {
        white: {
          value: "{primitive.color.high-contrast.gray.100}",
          type: "color",
        },
        inverse: {
          value: "{primitive.color.high-contrast.gray.10}",
          type: "color",
        },
        "gray-subtler": {
          value: "{primitive.color.high-contrast.gray.95}",
          type: "color",
        },
        "gray-subtle": {
          value: "{primitive.color.high-contrast.gray.90}",
          type: "color",
        },
        dim: {
          value: "{primitive.color.high-contrast.alpha.black75}",
          type: "color",
        },
      },
      element: {
        "disabled-light": {
          value: "{primitive.color.high-contrast.gray.80}",
          type: "color",
          description: "앞에 gray를 붙",
        },
        "disabled-dark": {
          value: "{primitive.color.high-contrast.gray.60}",
          type: "color",
          description: "disabled",
        },
        "gray-lighter": {
          value: "{primitive.color.high-contrast.gray.95}",
          type: "color",
        },
        "gray-light": {
          value: "{primitive.color.high-contrast.gray.90}",
          type: "color",
        },
        gray: {
          value: "{primitive.color.high-contrast.gray.50}",
          type: "color",
        },
        "primary-lighter": {
          value: "{primitive.color.high-contrast.primary.95}",
          type: "color",
        },
        "primary-light": {
          value: "{primitive.color.high-contrast.primary.90}",
          type: "color",
        },
        primary: {
          value: "{primitive.color.high-contrast.primary.50}",
          type: "color",
          description: "active/selected",
        },
        "secondary-lighter": {
          value: "{primitive.color.high-contrast.secondary.95}",
          type: "color",
        },
        "secondary-light": {
          value: "{primitive.color.high-contrast.secondary.90}",
          type: "color",
        },
        secondary: {
          value: "{primitive.color.high-contrast.secondary.60}",
          type: "color",
        },
        "point-lighter": {
          value: "{primitive.color.high-contrast.point.95}",
          type: "color",
        },
        "point-light": {
          value: "{primitive.color.high-contrast.point.90}",
          type: "color",
        },
        point: {
          value: "{primitive.color.high-contrast.point.50}",
          type: "color",
        },
        "danger-lighter": {
          value: "{primitive.color.high-contrast.danger.95}",
          type: "color",
        },
        danger: {
          value: "{primitive.color.high-contrast.danger.50}",
          type: "color",
        },
        "warning-lighter": {
          value: "{primitive.color.high-contrast.warning.95}",
          type: "color",
        },
        warning: {
          value: "{primitive.color.high-contrast.warning.30}",
          type: "color",
        },
        "success-lighter": {
          value: "{primitive.color.high-contrast.success.95}",
          type: "color",
        },
        success: {
          value: "{primitive.color.high-contrast.success.50}",
          type: "color",
        },
        "information-lighter": {
          value: "{primitive.color.high-contrast.information.95}",
          type: "color",
        },
        information: {
          value: "{primitive.color.high-contrast.information.50}",
          type: "color",
        },
        inverse: {
          value: "{primitive.color.high-contrast.gray.95}",
          type: "color",
        },
        "gray-dark": {
          value: "{primitive.color.high-contrast.gray.40}",
          type: "color",
        },
        "inverse-static": {
          value: "{primitive.color.high-contrast.gray.0}",
          type: "color",
        },
      },
      action: {
        white: {
          value: "{primitive.color.light.gray.100}",
          type: "color",
          description: "disabled",
        },
        primary: {
          value: "{primitive.color.high-contrast.alpha.black0}",
          type: "color",
        },
        "primary-hover": {
          value: "{primitive.color.high-contrast.primary.95}",
          type: "color",
        },
        "primary-pressed": {
          value: "{primitive.color.high-contrast.primary.90}",
          type: "color",
        },
        secondary: {
          value: "{primitive.color.light.alpha.black0}",
          type: "color",
        },
        "secondary-hover": {
          value: "{primitive.color.high-contrast.secondary.95}",
          type: "color",
        },
        "secondary-pressed": {
          value: "{primitive.color.high-contrast.secondary.90}",
          type: "color",
        },
        "secondary-selected": {
          value: "{primitive.color.high-contrast.secondary.95}",
          type: "color",
        },
        "secondary-on": {
          value: "{primitive.color.high-contrast.alpha.black0}",
          type: "color",
        },
        "secondary-on-hover": {
          value: "{primitive.color.high-contrast.gray.100}",
          type: "color",
        },
        "secondary-on-pressed": {
          value: "{primitive.color.high-contrast.secondary.90}",
          type: "color",
        },
        "secondary-on-selected": {
          value: "{primitive.color.high-contrast.gray.95}",
          type: "color",
        },
        "secondary-active": {
          value: "{primitive.color.high-contrast.secondary.60}",
          type: "color",
        },
        "primary-active": {
          value: "{primitive.color.high-contrast.primary.50}",
          type: "color",
        },
        disabled: {
          value: "{primitive.color.high-contrast.gray.80}",
          type: "color",
        },
        "primary-selected": {
          value: "{primitive.color.high-contrast.primary.95}",
          type: "color",
        },
      },
      input: {
        border: {
          value: "{primitive.color.high-contrast.gray.40}",
          type: "color",
        },
        "border-disabled": {
          value: "{primitive.color.high-contrast.gray.70}",
          type: "color",
        },
        "border-active": {
          value: "{primitive.color.high-contrast.primary.50}",
          type: "color",
          description: "active/selected",
        },
        "border-error": {
          value: "{primitive.color.high-contrast.danger.50}",
          type: "color",
        },
        surface: {
          value: "{primitive.color.high-contrast.gray.90}",
          type: "color",
        },
        "surface-disabled": {
          value: "{primitive.color.high-contrast.gray.95}",
          type: "color",
        },
      },
      graphic: {
        "blue-subtler": {
          value: "{primitive.color.high-contrast.graphic.10}",
          type: "color",
          description: "disabled",
        },
        "blue-subtle": {
          value: "{primitive.color.high-contrast.graphic.30}",
          type: "color",
          description: "disabled",
        },
        blue: {
          value: "{primitive.color.high-contrast.graphic.50}",
          type: "color",
          description: "disabled",
        },
        "blue-dark": {
          value: "{primitive.color.high-contrast.graphic.70}",
          type: "color",
          description: "disabled",
        },
        "blue-darker": {
          value: "{primitive.color.high-contrast.graphic.90}",
          type: "color",
          description: "disabled",
        },
        "red-subtler": {
          value: "{primitive.color.high-contrast.point.5}",
          type: "color",
          description: "disabled",
        },
        "red-subtle": {
          value: "{primitive.color.high-contrast.point.10}",
          type: "color",
          description: "disabled",
        },
        red: {
          value: "{primitive.color.high-contrast.point.20}",
          type: "color",
          description: "disabled",
        },
        "red-dark": {
          value: "{primitive.color.high-contrast.point.40}",
          type: "color",
          description: "disabled",
        },
        "red-darker": {
          value: "{primitive.color.high-contrast.point.70}",
          type: "color",
          description: "disabled",
        },
        brand: {
          value: "{primitive.color.high-contrast.primary.50}",
          type: "color",
          description: "disabled",
        },
      },
      alpha: {
        base100: {
          value: "{primitive.color.high-contrast.alpha.black100}",
          type: "color",
        },
        base50: {
          value: "{primitive.color.high-contrast.alpha.black50}",
          type: "color",
        },
        base25: {
          value: "{primitive.color.high-contrast.alpha.black25}",
          type: "color",
        },
        base0: {
          value: "{primitive.color.light.alpha.black0}",
          type: "color",
        },
        inverse100: {
          value: "{primitive.color.high-contrast.alpha.white100}",
          type: "color",
        },
        inverse50: {
          value: "{primitive.color.high-contrast.alpha.white50}",
          type: "color",
        },
        inverse25: {
          value: "{primitive.color.high-contrast.alpha.white25}",
          type: "color",
        },
        inverse0: {
          value: "{primitive.color.high-contrast.alpha.white0}",
          type: "color",
        },
        base75: {
          value: "{primitive.color.high-contrast.alpha.black75}",
          type: "color",
        },
        inverse75: {
          value: "{primitive.color.high-contrast.alpha.white75}",
          type: "color",
        },
        inverse10: {
          value: "{primitive.color.high-contrast.alpha.black25}",
          type: "color",
        },
        base10: {
          value: "{primitive.color.high-contrast.alpha.black10}",
          type: "color",
        },
        shadow1: {
          value: "#0000001f",
          type: "color",
        },
        shadow2: {
          value: "#00000033",
          type: "color",
        },
        shadow3: {
          value: "#00000066",
          type: "color",
        },
      },
    },
    "border-width": {
      "variable-regular": {
        value: "0.2rem",
        type: "dimension",
      },
      "variable-medium": {
        value: "0.3rem",
        type: "dimension",
      },
      "static-regular": {
        value: "0.1rem",
        type: "dimension",
      },
      "static-medium": {
        value: "0.2rem",
        type: "dimension",
      },
    },
  },
  "responsive-pc": {
    "font-size": {
      display: {
        large: {
          value: "6rem",
          type: "dimension",
        },
        medium: {
          value: "4.4rem",
          type: "dimension",
        },
        small: {
          value: "3.6rem",
          type: "dimension",
        },
      },
      body: {
        large: {
          value: "1.9rem",
          type: "dimension",
        },
        medium: {
          value: "1.7rem",
          type: "dimension",
        },
        small: {
          value: "1.5rem",
          type: "dimension",
        },
        xsmall: {
          value: "1.3rem",
          type: "dimension",
        },
      },
      label: {
        large: {
          value: "1.9rem",
          type: "dimension",
        },
        medium: {
          value: "1.7rem",
          type: "dimension",
        },
        small: {
          value: "1.5rem",
          type: "dimension",
        },
        xsmall: {
          value: "1.3rem",
          type: "dimension",
        },
      },
      heading: {
        large: {
          value: "3.2rem",
          type: "dimension",
        },
        medium: {
          value: "2.4rem",
          type: "dimension",
        },
        small: {
          value: "1.9rem",
          type: "dimension",
        },
        xsmall: {
          value: "1.7rem",
          type: "dimension",
        },
        xxsmall: {
          value: "1.5rem",
          type: "dimension",
        },
        xlarge: {
          value: "4rem",
          type: "dimension",
        },
      },
      navigation: {
        "title-medium": {
          value: "2.4rem",
          type: "dimension",
        },
        "title-small": {
          value: "1.9rem",
          type: "dimension",
        },
        "depth-medium-bold": {
          value: "1.7rem",
          type: "dimension",
        },
        "depth-medium": {
          value: "1.7rem",
          type: "dimension",
        },
        "depth-small-bold": {
          value: "1.5rem",
          type: "dimension",
        },
        "depth-small": {
          value: "1.5rem",
          type: "dimension",
        },
      },
    },
    "gap-layout": {
      "header-breadcrumb": {
        value: "{primitive.number.10}",
        type: "dimension",
      },
      "left-contents": {
        value: "{primitive.number.18}",
        type: "dimension",
      },
      "contents-right": {
        value: "{primitive.number.14}",
        type: "dimension",
      },
      "h1-h2": {
        value: "{primitive.number.16}",
        type: "dimension",
      },
      "h2-h2": {
        value: "{primitive.number.20}",
        type: "dimension",
      },
      "h2-h3": {
        value: "{primitive.number.14}",
        type: "dimension",
      },
      "h3-h3": {
        value: "{primitive.number.18}",
        type: "dimension",
      },
      "h3-h4": {
        value: "{primitive.number.10}",
        type: "dimension",
      },
      "h4-h4": {
        value: "{primitive.number.14}",
        type: "dimension",
      },
      "h4-h5": {
        value: "{primitive.number.8}",
        type: "dimension",
      },
      "h5-h5": {
        value: "{primitive.number.12}",
        type: "dimension",
      },
      "title-body-small": {
        value: "{primitive.number.8}",
        type: "dimension",
      },
      "title-body-medium": {
        value: "{primitive.number.9}",
        type: "dimension",
      },
      "title-body-large": {
        value: "{primitive.number.10}",
        type: "dimension",
      },
      "breadcrumb-h1": {
        value: "{primitive.number.14}",
        type: "dimension",
      },
      "contents-footer": {
        value: "{primitive.number.18}",
        type: "dimension",
      },
      "text-text-large": {
        value: "{primitive.number.9}",
        type: "dimension",
      },
      "text-text-medium": {
        value: "{primitive.number.8}",
        type: "dimension",
      },
      "text-text-small": {
        value: "{primitive.number.7}",
        type: "dimension",
      },
      "image-text-small": {
        value: "{primitive.number.9}",
        type: "dimension",
      },
      "image-text-medium": {
        value: "{primitive.number.10}",
        type: "dimension",
      },
      "image-text-large": {
        value: "{primitive.number.12}",
        type: "dimension",
      },
    },
    "padding-card": {
      large: {
        value: "{primitive.number.14}",
        type: "dimension",
      },
      medium: {
        value: "{primitive.number.12}",
        type: "dimension",
      },
      small: {
        value: "{primitive.number.10}",
        type: "dimension",
      },
      xsmall: {
        value: "{primitive.number.8}",
        type: "dimension",
      },
    },
  },
  "responsive-mobile": {
    "font-size": {
      display: {
        large: {
          value: "4.4rem",
          type: "dimension",
        },
        medium: {
          value: "3.2rem",
          type: "dimension",
        },
        small: {
          value: "2.8rem",
          type: "dimension",
        },
      },
      body: {
        large: {
          value: "1.9rem",
          type: "dimension",
        },
        medium: {
          value: "1.7rem",
          type: "dimension",
        },
        small: {
          value: "1.5rem",
          type: "dimension",
        },
        xsmall: {
          value: "1.3rem",
          type: "dimension",
        },
      },
      label: {
        large: {
          value: "1.9rem",
          type: "dimension",
        },
        medium: {
          value: "1.7rem",
          type: "dimension",
        },
        small: {
          value: "1.5rem",
          type: "dimension",
        },
        xsmall: {
          value: "1.3rem",
          type: "dimension",
        },
      },
      heading: {
        large: {
          value: "2.4rem",
          type: "dimension",
        },
        medium: {
          value: "2.2rem",
          type: "dimension",
        },
        small: {
          value: "1.9rem",
          type: "dimension",
        },
        xsmall: {
          value: "1.7rem",
          type: "dimension",
        },
        xxsmall: {
          value: "1.5rem",
          type: "dimension",
        },
        xlarge: {
          value: "2.8rem",
          type: "dimension",
        },
      },
      navigation: {
        "title-medium": {
          value: "2.2rem",
          type: "dimension",
        },
        "title-small": {
          value: "1.9rem",
          type: "dimension",
        },
        "depth-medium-bold": {
          value: "1.7rem",
          type: "dimension",
        },
        "depth-medium": {
          value: "1.7rem",
          type: "dimension",
        },
        "depth-small-bold": {
          value: "1.5rem",
          type: "dimension",
        },
        "depth-small": {
          value: "1.5rem",
          type: "dimension",
        },
      },
    },
    "gap-layout": {
      "header-breadcrumb": {
        value: "{primitive.number.8}",
        type: "dimension",
      },
      "left-contents": {
        value: "0rem",
        type: "dimension",
      },
      "contents-right": {
        value: "0rem",
        type: "dimension",
      },
      "h1-h2": {
        value: "{primitive.number.12}",
        type: "dimension",
      },
      "h2-h2": {
        value: "{primitive.number.14}",
        type: "dimension",
      },
      "h2-h3": {
        value: "{primitive.number.10}",
        type: "dimension",
      },
      "h3-h3": {
        value: "{primitive.number.12}",
        type: "dimension",
      },
      "h3-h4": {
        value: "{primitive.number.8}",
        type: "dimension",
      },
      "h4-h4": {
        value: "{primitive.number.10}",
        type: "dimension",
      },
      "h4-h5": {
        value: "{primitive.number.7}",
        type: "dimension",
      },
      "h5-h5": {
        value: "{primitive.number.8}",
        type: "dimension",
      },
      "title-body-small": {
        value: "{primitive.number.5}",
        type: "dimension",
      },
      "title-body-medium": {
        value: "{primitive.number.7}",
        type: "dimension",
      },
      "title-body-large": {
        value: "{primitive.number.9}",
        type: "dimension",
      },
      "breadcrumb-h1": {
        value: "{primitive.number.12}",
        type: "dimension",
      },
      "contents-footer": {
        value: "{primitive.number.14}",
        type: "dimension",
      },
      "text-text-large": {
        value: "{primitive.number.8}",
        type: "dimension",
      },
      "text-text-medium": {
        value: "{primitive.number.7}",
        type: "dimension",
      },
      "text-text-small": {
        value: "{primitive.number.6}",
        type: "dimension",
      },
      "image-text-small": {
        value: "{primitive.number.8}",
        type: "dimension",
      },
      "image-text-medium": {
        value: "{primitive.number.9}",
        type: "dimension",
      },
      "image-text-large": {
        value: "{primitive.number.10}",
        type: "dimension",
      },
    },
    "padding-card": {
      large: {
        value: "{primitive.number.10}",
        type: "dimension",
      },
      medium: {
        value: "{primitive.number.10}",
        type: "dimension",
      },
      small: {
        value: "{primitive.number.9}",
        type: "dimension",
      },
      xsmall: {
        value: "{primitive.number.7}",
        type: "dimension",
      },
    },
  },
  semantic: {
    gap: {
      "1": {
        value: "{primitive.number.2}",
        type: "dimension",
      },
      "2": {
        value: "{primitive.number.3}",
        type: "dimension",
      },
      "3": {
        value: "{primitive.number.5}",
        type: "dimension",
      },
      "4": {
        value: "{primitive.number.7}",
        type: "dimension",
      },
      "5": {
        value: "{primitive.number.8}",
        type: "dimension",
      },
      "6": {
        value: "{primitive.number.9}",
        type: "dimension",
      },
      "7": {
        value: "{primitive.number.10}",
        type: "dimension",
      },
      "8": {
        value: "{primitive.number.12}",
        type: "dimension",
      },
      "9": {
        value: "{primitive.number.14}",
        type: "dimension",
      },
      "10": {
        value: "{primitive.number.16}",
        type: "dimension",
      },
      "11": {
        value: "{primitive.number.18}",
        type: "dimension",
      },
      "12": {
        value: "{primitive.number.20}",
        type: "dimension",
      },
    },
    padding: {
      "1": {
        value: "{primitive.number.2}",
        type: "dimension",
      },
      "2": {
        value: "{primitive.number.3}",
        type: "dimension",
      },
      "3": {
        value: "{primitive.number.5}",
        type: "dimension",
      },
      "4": {
        value: "{primitive.number.6}",
        type: "dimension",
      },
      "5": {
        value: "{primitive.number.7}",
        type: "dimension",
      },
      "6": {
        value: "{primitive.number.8}",
        type: "dimension",
      },
      "7": {
        value: "{primitive.number.9}",
        type: "dimension",
      },
      "8": {
        value: "{primitive.number.10}",
        type: "dimension",
      },
      "9": {
        value: "{primitive.number.12}",
        type: "dimension",
      },
      "10": {
        value: "{primitive.number.14}",
        type: "dimension",
      },
    },
    "size-height": {
      "1": {
        value: "{primitive.number.5}",
        type: "dimension",
      },
      "2": {
        value: "{primitive.number.8}",
        type: "dimension",
      },
      "3": {
        value: "{primitive.number.9}",
        type: "dimension",
      },
      "4": {
        value: "{primitive.number.10}",
        type: "dimension",
      },
      "5": {
        value: "{primitive.number.12}",
        type: "dimension",
      },
      "6": {
        value: "{primitive.number.14}",
        type: "dimension",
      },
      "7": {
        value: "{primitive.number.16}",
        type: "dimension",
      },
      "8": {
        value: "{primitive.number.17}",
        type: "dimension",
      },
      "9": {
        value: "{primitive.number.18}",
        type: "dimension",
      },
      "10": {
        value: "{primitive.number.19}",
        type: "dimension",
      },
      "11": {
        value: "{primitive.number.20}",
        type: "dimension",
      },
    },
    radius: {
      xsmall1: {
        value: "{primitive.number.2}",
        type: "dimension",
      },
      xsmall2: {
        value: "{primitive.number.2}",
        type: "dimension",
      },
      xsmall3: {
        value: "{primitive.number.2}",
        type: "dimension",
      },
      small1: {
        value: "{primitive.number.3}",
        type: "dimension",
      },
      small2: {
        value: "{primitive.number.3}",
        type: "dimension",
      },
      small3: {
        value: "{primitive.number.3}",
        type: "dimension",
      },
      medium1: {
        value: "{primitive.number.4}",
        type: "dimension",
      },
      medium2: {
        value: "{primitive.number.4}",
        type: "dimension",
      },
      medium3: {
        value: "{primitive.number.5}",
        type: "dimension",
      },
      medium4: {
        value: "{primitive.number.5}",
        type: "dimension",
      },
      large1: {
        value: "{primitive.number.6}",
        type: "dimension",
      },
      large2: {
        value: "{primitive.number.6}",
        type: "dimension",
      },
      xlarge1: {
        value: "{primitive.number.7}",
        type: "dimension",
      },
      xlarge2: {
        value: "{primitive.number.7}",
        type: "dimension",
      },
      max: {
        value: "{primitive.number.max}",
        type: "dimension",
      },
    },
  },
} as const;

export default TOKENS;
