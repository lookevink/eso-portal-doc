import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>ESO</span>,
  project: {
    link: "https://esoagentportal.mykajabi.com/",
    icon: (
      <svg
        width="24"
        height="21"
        viewBox="0 0 24 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.3729 17.19V19.4565H5.58829V9.07884H3.83639L6.82564 6.4528V3.27677H7.70002V5.6847L11.9806 1.92446L17.6026 6.863H19.7932L11.9806 0L9.14584 2.49011V1.83095H5.38006V5.79846L0 10.5247H4.14248V20.9023H19.8187V17.19H18.3729Z"
          fill="currentColor"
        />
        <path
          d="M8.13625 8.94484H11.721V10.0547H9.4136V11.5873H11.501V12.6969H9.4136V14.4056H11.7914V15.5152H8.13625V8.9446V8.94484Z"
          fill="currentColor"
        />
        <path
          d="M15.9052 10.1075C15.597 9.98407 15.1214 9.89635 14.7337 9.89635C14.0027 9.89635 13.7033 10.1427 13.7033 10.5215C13.7033 10.8739 14.0468 11.1645 14.8481 11.7193C15.8081 12.3889 16.3985 12.9613 16.3985 13.7629C16.3985 14.8462 15.447 15.6211 14.0116 15.6211C13.5713 15.6211 12.8138 15.5155 12.4968 15.4184L12.5144 14.2646C12.814 14.3791 13.5185 14.5377 14.0911 14.5377C14.7693 14.5377 15.1041 14.1943 15.1041 13.8154C15.1041 13.4365 14.7517 13.1461 13.9504 12.5998C12.7964 11.8071 12.4265 11.2785 12.4265 10.53C12.4265 9.64931 13.096 8.81228 14.7341 8.81228C15.1393 8.81228 15.5974 8.8829 15.9233 8.97111L15.9054 10.1072L15.9052 10.1075Z"
          fill="currentColor"
        />
        <path
          d="M24 12.2216C24 14.1593 22.4322 15.7271 20.4152 15.7271C18.3982 15.7271 16.8218 14.1593 16.8218 12.2216C16.8218 10.2839 18.3806 8.73347 20.4152 8.73347C22.4498 8.73347 24 10.2926 24 12.2216ZM18.1078 12.2216C18.1078 13.5076 19.1029 14.5558 20.4152 14.5558C21.7275 14.5558 22.7142 13.5076 22.7142 12.2216C22.7142 10.9356 21.7191 9.90502 20.4152 9.90502C19.1114 9.90502 18.1078 10.9532 18.1078 12.2216Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  head: (
    <script
      lang="javascript"
      dangerouslySetInnerHTML={{
        __html: `document.addEventListener("DOMContentLoaded", function() {
      const navElement = document.querySelector("nav");
      if (navElement) {
        navElement.style.display = "none";
      }
    });`,
      }}
    />
  ),
  docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",
  nextThemes: {
    defaultTheme: "light",
  },
  footer: {
    text: "Easy Street Offers © 2023 Documentation",
  },
  useNextSeoProps() {
    return {
      titleTemplate: `%s | ESO`,
      description: "Easy Street Offers Solutions",
      openGraph: {
        images: [
          {
            url: "https://uvaqjfxzlpgvwyaylghu.supabase.co/storage/v1/object/public/misx/eso-logo-dark.png?t=2023-08-30T14%3A14%3A37.399Z",
          },
        ],
      },
    };
  },
};

export default config;
