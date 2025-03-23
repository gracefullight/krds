import localFont from "next/font/local";

const pretendardGov = localFont({
  src: [
    {
      path: "../../public/fonts/PretendardGOV-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/fonts/PretendardGOV-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/PretendardGOV-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/PretendardGOV-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/PretendardGOV-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/PretendardGOV-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/PretendardGOV-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/PretendardGOV-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/PretendardGOV-Thin.woff2",
      weight: "100",
      style: "normal",
    },
  ],
  display: "swap",
});

export default pretendardGov;
