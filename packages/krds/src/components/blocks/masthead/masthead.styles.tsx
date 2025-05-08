import type { BoxProps, TypographyProps } from "@mui/material";
import type { ComponentType } from "react";

import { getPalette, getTypography } from "@gracefullight/krds-tokens";
import { Box, Typography, styled } from "@mui/material";

export function FlagKr() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Korean Flag</title>
      <g clip-path="url(#clip0_887_44027)">
        <path d="M0 4H24V20H0V4Z" fill="white" />
        <path
          d="M8.67188 9.78125C9.26036 8.89858 10.1754 8.28584 11.2157 8.07782C12.2559 7.86979 13.3362 8.08353 14.2189 8.67201C15.1016 9.26048 15.7144 10.1755 15.9224 11.2158C16.1304 12.256 15.9167 13.3363 15.3282 14.219L8.67188 9.78125Z"
          fill="#D0303C"
        />
        <path
          d="M8.67202 9.78127C8.08353 10.6639 7.86979 11.7442 8.07781 12.7845C8.28583 13.8247 8.89858 14.7398 9.78126 15.3282C10.6639 15.9167 11.7442 16.1305 12.7845 15.9224C13.8248 15.7144 14.7398 15.1017 15.3283 14.219C15.6225 13.7777 15.7294 13.2375 15.6254 12.7174C15.5214 12.1973 15.215 11.7398 14.7737 11.4455C14.3323 11.1513 13.7922 11.0444 13.272 11.1484C12.7519 11.2524 12.2944 11.5588 12.0002 12.0001L8.67202 9.78127Z"
          fill="#134A9D"
        />
        <path
          d="M12.0001 12.0001C12.6128 11.0811 12.3645 9.83936 11.4454 9.22664C10.5264 8.61391 9.28467 8.86222 8.67194 9.78125C8.05921 10.7003 8.30752 11.942 9.22656 12.5548C10.1456 13.1675 11.3873 12.9192 12.0001 12.0001Z"
          fill="#D0303C"
        />
        <path
          d="M3.67977 8.85652L5.89858 5.52832L6.45328 5.89812L4.23447 9.22632L3.67977 8.85652ZM4.51182 9.41122L6.73063 6.08302L7.28533 6.45282L5.06652 9.78102L4.51182 9.41122ZM5.34387 9.96592L7.56268 6.63772L8.11738 7.00752L5.89858 10.3357L5.34387 9.96592Z"
          fill="black"
        />
        <path
          d="M19.3038 16.6685L20.3207 15.1431L19.766 14.7733L18.7491 16.2987L19.3038 16.6685Z"
          fill="black"
        />
        <path
          d="M18.4718 16.1138L19.4887 14.5884L18.934 14.2186L17.9171 15.744L18.4718 16.1138Z"
          fill="black"
        />
        <path
          d="M17.7322 16.0213L18.2869 16.3911L17.2699 17.9166L16.7152 17.5468L17.7322 16.0213Z"
          fill="black"
        />
        <path
          d="M17.6397 15.5591L18.6566 14.0337L18.1019 13.6639L17.085 15.1893L17.6397 15.5591Z"
          fill="black"
        />
        <path
          d="M16.9001 15.4666L17.4548 15.8364L16.4378 17.3619L15.8831 16.9921L16.9001 15.4666Z"
          fill="black"
        />
        <path
          d="M18.5642 16.576L19.1189 16.9458L18.1019 18.4713L17.5472 18.1015L18.5642 16.576Z"
          fill="black"
        />
        <path
          d="M17.4547 8.16337L16.4377 6.63789L15.883 7.00769L16.9 8.53317L17.4547 8.16337Z"
          fill="black"
        />
        <path
          d="M17.0849 8.81052L18.1018 10.3359L18.6565 9.96609L17.6396 8.44072L17.0849 8.81052Z"
          fill="black"
        />
        <path
          d="M18.9339 9.78119L16.7151 6.45299L17.2698 6.08319L19.4886 9.41139L18.9339 9.78119Z"
          fill="black"
        />
        <path
          d="M19.7659 9.22649L18.749 7.70109L19.3037 7.33129L20.3206 8.85669L19.7659 9.22649Z"
          fill="black"
        />
        <path
          d="M19.1188 7.05394L18.5641 7.42374L17.5471 5.89829L18.1018 5.52849L19.1188 7.05394Z"
          fill="black"
        />
        <path
          d="M3.67969 15.1433L5.89849 18.4715L6.45319 18.1017L4.23439 14.7735L3.67969 15.1433Z"
          fill="black"
        />
        <path
          d="M5.7136 16.3914L6.73054 17.9168L7.28524 17.547L6.2683 16.0216L5.7136 16.3914Z"
          fill="black"
        />
        <path
          d="M5.5287 16.114L6.0834 15.7442L5.06644 14.2188L4.51174 14.5886L5.5287 16.114Z"
          fill="black"
        />
        <path
          d="M5.34379 14.0339L7.56259 17.3621L8.11729 16.9923L5.89849 13.6641L5.34379 14.0339Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_887_44027">
          <rect
            width="24"
            height="16"
            fill="white"
            transform="translate(0 4)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export const MastheadContainer: ComponentType<BoxProps> = styled(Box)(
  ({ theme }) => ({
    alignItems: "center",
    backgroundColor: getPalette("surface.secondary-subtler"),
    display: "flex",
    gap: "8px",
    justifyContent: "flex-start",
    paddingBottom: "4.5px",
    paddingTop: "4.5px",

    [theme.breakpoints.down("medium")]: {
      paddingLeft: "16px",
      paddingRight: "16px",
    },

    svg: {
      width: "24px",
      height: "24px",
    },
  }),
);

export const MastheadText: ComponentType<TypographyProps> = styled(Typography)(
  ({ theme }) => ({
    ...getTypography("pc.body.small"),

    [theme.breakpoints.down("medium")]: {
      ...getTypography("mobile.body.small"),
    },
  }),
);
