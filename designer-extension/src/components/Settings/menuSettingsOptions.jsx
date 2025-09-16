import React from "react";

export const settingsOptions = [
  {
    title: "General",
    description: "Manage the general settings for the widget.",
    options: [
      {
        id: "reset",
        title: "Reset Button",
        description: "Resets the widget settings in website.",
        svg: "",
        proFeature: false,
        name: "reset",
      },
      {
        id: "mission",
        title: "Our Mission",
        description: "Displays mission statements",
        svg: "",
        proFeature: false,
        name: "mission",
        compliance: {
          WCAG: {
            versions: ["Conformance"],
            description:
              "Documents conformance level and provides contact information for accessibility feedback",
            color: "rgb(245, 158, 11)",
          },
          ADA: {
            versions: ["Title III"],
            description:
              "Demonstrates good faith effort toward accessibility and provides communication channels for accommodation requests",
            color: "rgb(59, 130, 246)",
          },
          AODA: {
            versions: ["Section 14.1"],
            description:
              "Required accessibility statement describing accessibility features and how to request alternative formats",
            color: "rgb(16, 185, 129)",
          },
          EAA: {
            versions: ["Article 7"],
            description:
              "Mandatory detailed accessibility statement describing compliance measures and feedback mechanisms",
            color: "rgb(139, 92, 246)",
          },
          WAD: {
            versions: ["Article 7"],
            description:
              "Mandatory detailed accessibility statement for public sector websites with compliance status and feedback mechanisms",
            color: "rgb(239, 68, 68)",
          },
        },
      },
      {
        id: "languages",
        title: "Languages",
        description:
          "Lists the languages the widget content can be changed to.",
        svg: "",
        proFeature: false,
        name: "languages",
        compliance: {
          WCAG: {
            versions: ["3.1.1", "3.1.2"],
            description:
              "Supports language of page and language of parts",
            color: "rgb(245, 158, 11)",
          },
          ADA: {
            versions: ["Title III"],
            description: "Accommodates users with language barriers",
            color: "rgb(59, 130, 246)",
          },
          AODA: {
            versions: ["Section 14"],
            description: "Provides accessible language formats",
            color: "rgb(16, 185, 129)",
          },
          EAA: {
            versions: ["Annex I, Section III"],
            description:
              "Improves comprehension for users with different language preferences",
            color: "rgb(139, 92, 246)",
          },
          WAD: {
            versions: ["Article 4", "EN 301 549"],
            description:
              "Mandatory language accessibility for public sector websites",
            color: "rgb(239, 68, 68)",
          },
        },
      },
      {
        id: "keyboardshortcuts",
        title: "Keyboard Shortcuts",
        description: "Enables the keyboard shortcuts for the widget.",
        svg: "",
        proFeature: false,
        name: "keyboardshortcuts",
        compliance: {
          WCAG: {
            versions: ["2.1.1", "2.1.2", "2.5.1"],
            description:
              "Enables keyboard functionality and pointer alternatives",
            color: "rgb(245, 158, 11)",
          },
          ADA: {
            versions: ["Title III"],
            description:
              "Provides accommodation for users with motor impairments",
            color: "rgb(59, 130, 246)",
          },
          AODA: {
            versions: ["Section 14(3)"],
            description:
              "Provides accessible formats for motor disabilities",
            color: "rgb(16, 185, 129)",
          },
          EAA: {
            versions: ["Annex I, Section III"],
            description:
              "Ensures content is operable for users with motor impairments",
            color: "rgb(139, 92, 246)",
          },
          WAD: {
            versions: ["Article 4", "EN 301 549"],
            description:
              "Mandatory keyboard accessibility support for public sector websites",
            color: "rgb(239, 68, 68)",
          },
        },
      },
      {
        id: "widgetsize",
        title: "Widget Size",
        description: "Allows the user to change the widget size.",
        svg: "",
        proFeature: false,
        name: "widgetsize",
        compliance: {
          WCAG: {
            versions: ["1.4.4", "1.4.10"],
            description:
              "Provides text resizing without loss of content or functionality",
            color: "rgb(245, 158, 11)",
          },
          ADA: {
            versions: ["Title III"],
            description: "Accommodates users with low vision",
            color: "rgb(59, 130, 246)",
          },
          AODA: {
            versions: ["Section 14(2)"],
            description: "Ensures accessible text formats",
            color: "rgb(16, 185, 129)",
          },
          EAA: {
            versions: ["Annex I, Section III"],
            description:
              "Improves text perception for users with visual impairments",
            color: "rgb(139, 92, 246)",
          },
          WAD: {
            versions: ["Article 4", "EN 301 549"],
            description:
              "Mandatory text magnification for public sector websites",
            color: "rgb(239, 68, 68)",
          },
        },
      },
      {
        id: "hidewidget",
        title: "Hide Widget Button",
        description: "Allows the user to hide the widget if they want to.",
        svg: "",
        proFeature: false,
        name: "hidewidget",
        compliance: {
          WCAG: {
            versions: ["2.2.1", "2.2.2"],
            description:
              "Provides user control over timing and interruption",
            color: "rgb(245, 158, 11)",
          },
          ADA: {
            versions: ["Title III"],
            description:
              "Accommodates users with cognitive disabilities and attention issues",
            color: "rgb(59, 130, 246)",
          },
          AODA: {
            versions: ["Section 14(4)"],
            description:
              "Ensures content doesn't cause sensory discomfort",
            color: "rgb(16, 185, 129)",
          },
          EAA: {
            versions: ["Annex I, Section IV"],
            description: "Prevents unwanted sensory experiences",
            color: "rgb(139, 92, 246)",
          },
          WAD: {
            versions: ["Article 4", "EN 301 549"],
            description:
              "Mandatory user control features for public sector websites",
            color: "rgb(239, 68, 68)",
          },
        },
      },
      {
        id: "profiles",
        title: "Profiles",
        description: "Shows different profiles",
        svg: "",
        proFeature: false,
        name: "profiles",
        children: [
          {
            id: "readerprofile",
            title: "Reader Profile",
            description: "Helps users focus on text content.",
            svg: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M24,7V5H4v18c0,2.209,1.791,4,4,4h16c2.209,0,4-1.791,4-4V7H24z M26,23c0,1.105-0.895,2-2,2H8	c-1.105,0-2-0.895-2-2V7h16v16h2V9h2V23z M14,9H8v6h6V9z M12,13h-2v-2h2V13z M16,9h4v2h-4V9z M16,13h4v2h-4V13z M8,17h12v2H8V17z M8,21h12v2H8V21z"
                  fill="black"
                />
              </svg>
            ),
            proFeature: false,
            name: "readerprofile",
            compliance: {
              WCAG: {
                versions: ["1.4.8", "2.4.6"],
                description:
                  "Enhances readability and visual presentation to make content more perceivable",
                color: "rgb(245, 158, 11)",
              },
              ADA: {
                versions: ["Title III"],
                description:
                  "Provides effective communication for individuals with disabilities",
                color: "rgb(59, 130, 246)",
              },
              AODA: {
                versions: ["Section 14"],
                description:
                  "Enables accessible formats and communication supports",
                color: "rgb(16, 185, 129)",
              },
              EAA: {
                versions: ["Annex I, Section III"],
                description:
                  "Improves information perception and operability",
                color: "rgb(139, 92, 246)",
              },
              WAD: {
                versions: ["Article 4", "EN 301 549"],
                description:
                  "Ensures public sector websites provide accessible reading experiences",
                color: "rgb(239, 68, 68)",
              },
            },
          },
          {
            id: "blindprofile",
            title: "Blind Users Profile",
            description:
              "Helps blind users to navigate the website using screen readers.",
            svg: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#000000"
              >
                <path d="m320-40-64-48 104-139v-213q0-31 5-67.5t15-67.5l-60 33v142h-80v-188l176-100q25-14 43.5-21.5T494-717q25 0 45.5 21.5T587-628q32 54 58 81t56 41q11-8 19-11t19-3q25 0 43 18t18 42v420h-40v-420q0-8-6-14t-14-6q-8 0-14 6t-6 14v50h-40v-19q-54-23-84-51.5T543-557q-11 28-17.5 68.5T521-412l79 112v260h-80v-200l-71-102-9 142L320-40Zm220-700q-33 0-56.5-23.5T460-820q0-33 23.5-56.5T540-900q33 0 56.5 23.5T620-820q0 33-23.5 56.5T540-740Z" />
              </svg>
            ),
            proFeature: true,
            name: "blindprofile",
            onEnableAlsoEnable: ["text2speech"],
            compliance: {
              WCAG: {
                versions: ["1.1.1", "1.3.1", "2.1.1", "2.4.1"],
                description:
                  "Provides text alternatives and keyboard accessibility",
                color: "rgb(245, 158, 11)",
              },
              ADA: {
                versions: ["Title III"],
                description:
                  "Ensures equal access to web content for visually impaired individuals",
                color: "rgb(59, 130, 246)",
              },
              AODA: {
                versions: ["Section 14(2)"],
                description:
                  "Provides accessible formats for users with visual disabilities",
                color: "rgb(16, 185, 129)",
              },
              EAA: {
                versions: ["Annex I, Section II"],
                description:
                  "Ensures content is perceivable and operable for blind users",
                color: "rgb(139, 92, 246)",
              },
              WAD: {
                versions: ["Article 4", "EN 301 549"],
                description:
                  "Mandatory accessibility for public sector websites serving blind users",
                color: "rgb(239, 68, 68)",
              },
            },
          },
          {
            id: "seizureprofile",
            title: "Seizure Safe Profile",
            description:
              "Helps epileptic and seizure prone users to browse safely.",
            svg: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
              >
                <mask
                  id="mask0_949_139"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="35"
                  height="36"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="35"
                    height="35"
                    fill="#D9D9D9"
                  />
                </mask>
                <g mask="url(#mask0_949_139)">
                  <path
                    d="M15.8855 27.0417L23.4323 18H17.599L18.6563 9.72396L11.9115 19.4583H16.9792L15.8855 27.0417ZM13.625 22.375H9.1042C8.52087 22.375 8.08945 22.1137 7.80993 21.5912C7.53042 21.0686 7.5608 20.5642 7.90108 20.0781L18.8021 4.40105C19.0452 4.06077 19.3611 3.82379 19.75 3.69011C20.1389 3.55643 20.54 3.5625 20.9532 3.70834C21.3664 3.85417 21.6702 4.10938 21.8646 4.47396C22.0591 4.83855 22.132 5.22744 22.0834 5.64063L20.9167 15.0833H26.5677C27.1997 15.0833 27.6433 15.3629 27.8985 15.9219C28.1537 16.4809 28.0747 17.0035 27.6615 17.4896L15.6667 31.8542C15.3993 32.1701 15.0712 32.3767 14.6823 32.474C14.2934 32.5712 13.9167 32.5347 13.5521 32.3646C13.1875 32.1944 12.9019 31.9332 12.6953 31.5807C12.4888 31.2283 12.4098 30.8455 12.4584 30.4323L13.625 22.375Z"
                    fill="black"
                  />
                </g>
              </svg>
            ),
            proFeature: false,
            name: "seizureprofile",
            compliance: {
              WCAG: {
                versions: ["2.3.1", "2.3.2"],
                description:
                  "Prevents content that could cause seizures or physical reactions",
                color: "rgb(245, 158, 11)",
              },
              ADA: {
                versions: ["Title III"],
                description:
                  "Provides accommodation for users with photosensitive epilepsy",
                color: "rgb(59, 130, 246)",
              },
              AODA: {
                versions: ["Section 14(4)"],
                description:
                  "Ensures content doesn't cause physical discomfort",
                color: "rgb(16, 185, 129)",
              },
              EAA: {
                versions: ["Annex I, Section IV"],
                description:
                  "Reduces risks for users with seizure disorders",
                color: "rgb(139, 92, 246)",
              },
              WAD: {
                versions: ["Article 4", "EN 301 549"],
                description:
                  "Mandatory seizure prevention for public sector websites",
                color: "rgb(239, 68, 68)",
              },
            },
          },
          {
            id: "adhdprofile",
            title: "ADHD Friendly Profile",
            description:
              "Helps users with ADHD to focus on the essential.",
            svg: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
              >
                <mask
                  id="mask0_949_169"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="35"
                  height="36"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="35"
                    height="35"
                    fill="#D9D9D9"
                  />
                </mask>
                <g mask="url(#mask0_949_169)">
                  <path
                    d="M6.33333 31.125C5.92014 31.125 5.57378 30.9852 5.29427 30.7057C5.01476 30.4262 4.875 30.0799 4.875 29.6667C4.875 29.2535 5.01476 28.9071 5.29427 28.6276C5.57378 28.3481 5.92014 28.2083 6.33333 28.2083H7.79167C8.20486 28.2083 8.55122 28.3481 8.83073 28.6276C9.11024 28.9071 9.25 29.2535 9.25 29.6667C9.25 30.0799 9.11024 30.4262 8.83073 30.7057C8.55122 30.9852 8.20486 31.125 7.79167 31.125H6.33333ZM6.33333 25.2917C5.92014 25.2917 5.57378 25.1519 5.29427 24.8724C5.01476 24.5929 4.875 24.2465 4.875 23.8333C4.875 23.4201 5.01476 23.0738 5.29427 22.7943C5.57378 22.5148 5.92014 22.375 6.33333 22.375H15.0833C15.4965 22.375 15.8429 22.5148 16.1224 22.7943C16.4019 23.0738 16.5417 23.4201 16.5417 23.8333C16.5417 24.2465 16.4019 24.5929 16.1224 24.8724C15.8429 25.1519 15.4965 25.2917 15.0833 25.2917H6.33333ZM6.33333 19.4583C5.92014 19.4583 5.57378 19.3186 5.29427 19.0391C5.01476 18.7596 4.875 18.4132 4.875 18C4.875 17.5868 5.01476 17.2405 5.29427 16.9609C5.57378 16.6814 5.92014 16.5417 6.33333 16.5417H29.6667C30.0799 16.5417 30.4262 16.6814 30.7057 16.9609C30.9852 17.2405 31.125 17.5868 31.125 18C31.125 18.4132 30.9852 18.7596 30.7057 19.0391C30.4262 19.3186 30.0799 19.4583 29.6667 19.4583H6.33333ZM6.33333 13.625C5.92014 13.625 5.57378 13.4852 5.29427 13.2057C5.01476 12.9262 4.875 12.5799 4.875 12.1667C4.875 11.7535 5.01476 11.4071 5.29427 11.1276C5.57378 10.8481 5.92014 10.7083 6.33333 10.7083H15.0833C15.4965 10.7083 15.8429 10.8481 16.1224 11.1276C16.4019 11.4071 16.5417 11.7535 16.5417 12.1667C16.5417 12.5799 16.4019 12.9262 16.1224 13.2057C15.8429 13.4852 15.4965 13.625 15.0833 13.625H6.33333ZM6.33333 7.79167C5.92014 7.79167 5.57378 7.65191 5.29427 7.3724C5.01476 7.09288 4.875 6.74653 4.875 6.33333C4.875 5.92014 5.01476 5.57378 5.29427 5.29427C5.57378 5.01476 5.92014 4.875 6.33333 4.875H7.79167C8.20486 4.875 8.55122 5.01476 8.83073 5.29427C9.11024 5.57378 9.25 5.92014 9.25 6.33333C9.25 6.74653 9.11024 7.09288 8.83073 7.3724C8.55122 7.65191 8.20486 7.79167 7.79167 7.79167H6.33333ZM13.625 31.125C13.2118 31.125 12.8655 30.9852 12.5859 30.7057C12.3064 30.4262 12.1667 30.0799 12.1667 29.6667C12.1667 29.2535 12.3064 28.9071 12.5859 28.6276C12.8655 28.3481 13.2118 28.2083 13.625 28.2083H15.0833C15.4965 28.2083 15.8429 28.3481 16.1224 28.6276C16.4019 28.9071 16.5417 29.2535 16.5417 29.6667C16.5417 30.0799 16.4019 30.4262 16.1224 30.7057C15.8429 30.9852 15.4965 31.125 15.0833 31.125H13.625ZM13.625 7.79167C13.2118 7.79167 12.8655 7.65191 12.5859 7.3724C12.3064 7.09288 12.1667 6.74653 12.1667 6.33333C12.1667 5.92014 12.3064 5.57378 12.5859 5.29427C12.8655 5.01476 13.2118 4.875 13.625 4.875H15.0833C15.4965 4.875 15.8429 5.01476 16.1224 5.29427C16.4019 5.57378 16.5417 5.92014 16.5417 6.33333C16.5417 6.74653 16.4019 7.09288 16.1224 7.3724C15.8429 7.65191 15.4965 7.79167 15.0833 7.79167H13.625ZM20.9167 31.125C20.5035 31.125 20.1571 30.9852 19.8776 30.7057C19.5981 30.4262 19.4583 30.0799 19.4583 29.6667C19.4583 29.2535 19.5981 28.9071 19.8776 28.6276C20.1571 28.3481 20.5035 28.2083 20.9167 28.2083H22.375C22.7882 28.2083 23.1346 28.3481 23.4141 28.6276C23.6936 28.9071 23.8333 29.2535 23.8333 29.6667C23.8333 30.0799 23.6936 30.4262 23.4141 30.7057C23.1346 30.9852 22.7882 31.125 22.375 31.125H20.9167ZM20.9167 25.2917C20.5035 25.2917 20.1571 25.1519 19.8776 24.8724C19.5981 24.5929 19.4583 24.2465 19.4583 23.8333C19.4583 23.4201 19.5981 23.0738 19.8776 22.7943C20.1571 22.5148 20.5035 22.375 20.9167 22.375H29.6667C30.0799 22.375 30.4262 22.5148 30.7057 22.7943C30.9852 23.0738 31.125 23.4201 31.125 23.8333C31.125 24.2465 30.9852 24.5929 30.7057 24.8724C30.4262 25.1519 30.0799 25.2917 29.6667 25.2917H20.9167ZM20.9167 13.625C20.5035 13.625 20.1571 13.4852 19.8776 13.2057C19.5981 12.9262 19.4583 12.5799 19.4583 12.1667C19.4583 11.7535 19.5981 11.4071 19.8776 11.1276C20.1571 10.8481 20.5035 10.7083 20.9167 10.7083H29.6667C30.0799 10.7083 30.4262 10.8481 30.7057 11.1276C30.9852 11.4071 31.125 11.7535 31.125 12.1667C31.125 12.5799 30.9852 12.9262 30.7057 13.2057C30.4262 13.4852 30.0799 13.625 29.6667 13.625H20.9167ZM20.9167 7.79167C20.5035 7.79167 20.1571 7.65191 19.8776 7.3724C19.5981 7.09288 19.4583 6.74653 19.4583 6.33333C19.4583 5.92014 19.5981 5.57378 19.8776 5.29427C20.1571 5.01476 20.5035 4.875 20.9167 4.875H22.375C22.7882 4.875 23.1346 5.01476 23.4141 5.29427C23.6936 5.57378 23.8333 5.92014 23.8333 6.33333C23.8333 6.74653 23.6936 7.09288 23.4141 7.3724C23.1346 7.65191 22.7882 7.79167 22.375 7.79167H20.9167ZM28.2083 31.125C27.7951 31.125 27.4488 30.9852 27.1693 30.7057C26.8898 30.4262 26.75 30.0799 26.75 29.6667C26.75 29.2535 26.8898 28.9071 27.1693 28.6276C27.4488 28.3481 27.7951 28.2083 28.2083 28.2083H29.6667C30.0799 28.2083 30.4262 28.3481 30.7057 28.6276C30.9852 28.9071 31.125 29.2535 31.125 29.6667C31.125 30.0799 30.9852 30.4262 30.7057 30.7057C30.4262 30.9852 30.0799 31.125 29.6667 31.125H28.2083ZM28.2083 7.79167C27.7951 7.79167 27.4488 7.65191 27.1693 7.3724C26.8898 7.09288 26.75 6.74653 26.75 6.33333C26.75 5.92014 26.8898 5.57378 27.1693 5.29427C27.4488 5.01476 27.7951 4.875 28.2083 4.875H29.6667C30.0799 4.875 30.4262 5.01476 30.7057 5.29427C30.9852 5.57378 31.125 5.92014 31.125 6.33333C31.125 6.74653 30.9852 7.09288 30.7057 7.3724C30.4262 7.65191 30.0799 7.79167 29.6667 7.79167H28.2083Z"
                    fill="black"
                  />
                </g>
              </svg>
            ),
            proFeature: true,
            name: "adhdprofile",
            compliance: {
              WCAG: {
                versions: ["1.4.8", "2.2.2"],
                description:
                  "Supports readability and provides sufficient time to read content",
                color: "rgb(245, 158, 11)",
              },
              ADA: {
                versions: ["Title III"],
                description:
                  "Accommodates users with attention disorders",
                color: "rgb(59, 130, 246)",
              },
              AODA: {
                versions: ["Section 14"],
                description:
                  "Supports accessible formats for cognitive disabilities",
                color: "rgb(16, 185, 129)",
              },
              EAA: {
                versions: ["Annex I, Section III"],
                description:
                  "Enhances clarity and reduces cognitive load",
                color: "rgb(139, 92, 246)",
              },
              WAD: {
                versions: ["Article 4", "EN 301 549"],
                description:
                  "Ensures public sector websites accommodate attention disorders",
                color: "rgb(239, 68, 68)",
              },
            },
          },
          {
            id: "cognitiveprofile",
            title: "Cognitive Disability Profile",
            description:
              "Helps users with cognitive disabilities to focus on the essential.",
            svg: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
              >
                <mask
                  id="mask0_949_184"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="35"
                  height="36"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="35"
                    height="35"
                    fill="#D9D9D9"
                  />
                </mask>
                <g mask="url(#mask0_949_184)">
                  <path
                    d="M18 20.9167C17.1979 20.9167 16.5113 20.6311 15.9401 20.0599C15.3689 19.4887 15.0833 18.8021 15.0833 18C15.0833 17.1979 15.3689 16.5113 15.9401 15.9401C16.5113 15.3689 17.1979 15.0833 18 15.0833C18.8021 15.0833 19.4887 15.3689 20.0599 15.9401C20.6311 16.5113 20.9167 17.1979 20.9167 18C20.9167 18.8021 20.6311 19.4887 20.0599 20.0599C19.4887 20.6311 18.8021 20.9167 18 20.9167ZM16.5417 10.7083V6.33333C16.5417 5.92014 16.6814 5.57378 16.9609 5.29427C17.2405 5.01476 17.5868 4.875 18 4.875C18.4132 4.875 18.7596 5.01476 19.0391 5.29427C19.3186 5.57378 19.4583 5.92014 19.4583 6.33333V10.7083C19.4583 11.1215 19.3186 11.4679 19.0391 11.7474C18.7596 12.0269 18.4132 12.1667 18 12.1667C17.5868 12.1667 17.2405 12.0269 16.9609 11.7474C16.6814 11.4679 16.5417 11.1215 16.5417 10.7083ZM16.5417 29.6667V25.2917C16.5417 24.8785 16.6814 24.5321 16.9609 24.2526C17.2405 23.9731 17.5868 23.8333 18 23.8333C18.4132 23.8333 18.7596 23.9731 19.0391 24.2526C19.3186 24.5321 19.4583 24.8785 19.4583 25.2917V29.6667C19.4583 30.0799 19.3186 30.4262 19.0391 30.7057C18.7596 30.9852 18.4132 31.125 18 31.125C17.5868 31.125 17.2405 30.9852 16.9609 30.7057C16.6814 30.4262 16.5417 30.0799 16.5417 29.6667ZM25.2917 16.5417H29.6667C30.0799 16.5417 30.4262 16.6814 30.7057 16.9609C30.9852 17.2405 31.125 17.5868 31.125 18C31.125 18.4132 30.9852 18.7596 30.7057 19.0391C30.4262 19.3186 30.0799 19.4583 29.6667 19.4583H25.2917C24.8785 19.4583 24.5321 19.3186 24.2526 19.0391C23.9731 18.7596 23.8333 18.4132 23.8333 18C23.8333 17.5868 23.9731 17.2405 24.2526 16.9609C24.5321 16.6814 24.8785 16.5417 25.2917 16.5417ZM6.33333 16.5417H10.7083C11.1215 16.5417 11.4679 16.6814 11.7474 16.9609C12.0269 17.2405 12.1667 17.5868 12.1667 18C12.1667 18.4132 12.0269 18.7596 11.7474 19.0391C11.4679 19.3186 11.1215 19.4583 10.7083 19.4583H6.33333C5.92014 19.4583 5.57378 19.3186 5.29427 19.0391C5.01476 18.7596 4.875 18.4132 4.875 18C4.875 17.5868 5.01476 17.2405 5.29427 16.9609C5.57378 16.6814 5.92014 16.5417 6.33333 16.5417Z"
                    fill="black"
                  />
                </g>
              </svg>
            ),
            proFeature: true,
            name: "cognitiveprofile",
            compliance: {
              WCAG: {
                versions: ["1.4.8", "2.4.6", "3.1.5"],
                description:
                  "Supports readability, focus, and comprehension of content",
                color: "rgb(245, 158, 11)",
              },
              ADA: {
                versions: ["Title III"],
                description:
                  "Provides effective communication for individuals with cognitive disabilities",
                color: "rgb(59, 130, 246)",
              },
              AODA: {
                versions: ["Section 14"],
                description:
                  "Supports accessible formats for cognitive disabilities",
                color: "rgb(16, 185, 129)",
              },
              EAA: {
                versions: ["Annex I, Section III"],
                description:
                  "Enhances usability for users with cognitive limitations",
                color: "rgb(139, 92, 246)",
              },
              WAD: {
                versions: ["Article 4", "EN 301 549"],
                description:
                  "Mandatory cognitive accessibility support for public sector websites",
                color: "rgb(239, 68, 68)",
              },
            },
          },
          {
            id: "visuallyimpairedprofile",
            title: "Visually Impaired Profile",
            description:
              "Improves accessibility for visually impaired users.",
            svg: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#000000"
              >
                <path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" />
              </svg>
            ),
            proFeature: true,
            name: "visuallyimpairedprofile",
            compliance: {
              WCAG: {
                versions: ["1.4.3", "1.4.4", "1.4.6", "1.4.8"],
                description:
                  "Enhances contrast and text resizing for visual impairments",
                color: "rgb(245, 158, 11)",
              },
              ADA: {
                versions: ["Title III"],
                description:
                  "Provides reasonable accommodations for visually impaired individuals",
                color: "rgb(59, 130, 246)",
              },
              AODA: {
                versions: ["Section 14(2)"],
                description:
                  "Provides accessible formats for users with visual disabilities",
                color: "rgb(16, 185, 129)",
              },
              EAA: {
                versions: ["Annex I, Section IV"],
                description:
                  "Improves perception of content for visually impaired users",
                color: "rgb(139, 92, 246)",
              },
              WAD: {
                versions: ["Article 4", "EN 301 549"],
                description:
                  "Ensures public sector websites serve visually impaired users",
                color: "rgb(239, 68, 68)",
              },
            },
          },
          {
            id: "motorimpairedprofile",
            title: "Motor Impairment Profile",
            description:
              "Provides content that is easier to interact with.",
            svg: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#000000"
              >
                <path d="M480-720q-33 0-56.5-23.5T400-800q0-33 23.5-56.5T480-880q33 0 56.5 23.5T560-800q0 33-23.5 56.5T480-720ZM680-80v-200H480q-33 0-56.5-23.5T400-360v-240q0-33 23.5-56.5T480-680q24 0 41.5 10.5T559-636q55 66 99.5 90.5T760-520v80q-53 0-107-23t-93-55v138h120q33 0 56.5 23.5T760-300v220h-80Zm-280 0q-83 0-141.5-58.5T200-280q0-72 45.5-127T360-476v82q-35 14-57.5 44.5T280-280q0 50 35 85t85 35q39 0 69.5-22.5T514-240h82q-14 69-69 114.5T400-80Z" />
              </svg>
            ),
            proFeature: true,
            name: "motorimpairedprofile",
            compliance: {
              WCAG: {
                versions: ["2.1.1", "2.1.2", "2.5.1"],
                description:
                  "Enables keyboard accessibility and pointer gesture alternatives",
                color: "rgb(245, 158, 11)",
              },
              ADA: {
                versions: ["Title III"],
                description:
                  "Ensures usability for people with limited manual dexterity",
                color: "rgb(59, 130, 246)",
              },
              AODA: {
                versions: ["Section 14(3)"],
                description:
                  "Provides accessible formats for motor disabilities",
                color: "rgb(16, 185, 129)",
              },
              EAA: {
                versions: ["Annex I, Section III"],
                description:
                  "Ensures content is operable for users with motor impairments",
                color: "rgb(139, 92, 246)",
              },
              WAD: {
                versions: ["Article 4", "EN 301 549"],
                description:
                  "Mandatory motor accessibility support for public sector websites",
                color: "rgb(239, 68, 68)",
              },
            },
          },

          {
            id: "elderlyprofile",
            title: "Elderly Profile",
            description:
              "Facilitates the access to the content for the elderly.",
            svg: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#000000"
              >
                <path d="m320-40-64-48 84-112H240q0-35 19.5-120.5T313-495q34-90 80.5-157.5T494-720q37 0 51.5 23t41.5 69q32 54 58 81t56 41q11-8 19-11t19-3q25 0 43 18t18 42v420h-40v-420q0-8-6-14t-14-6q-8 0-14 6t-6 14v50h-40v-19q-38-21-78-54.5T543-557l-23 117 80 239v161h-80v-160h-80L320-40Zm220-700q-33 0-56.5-23.5T460-820q0-8 4-24-11-5-17.5-14.5T440-880q0-17 11.5-28.5T480-920q12 0 21.5 6.5T516-896q6-2 12-3t12-1q33 0 56.5 23.5T620-820q0 33-23.5 56.5T540-740Z" />
              </svg>
            ),
            proFeature: true,
            name: "elderlyprofile",
            compliance: {
              WCAG: {
                versions: ["1.4.4", "1.4.8", "2.4.6"],
                description:
                  "Supports resizing, readability, and navigation assistance",
                color: "rgb(245, 158, 11)",
              },
              ADA: {
                versions: ["Title III"],
                description:
                  "Provides accommodations for age-related disabilities",
                color: "rgb(59, 130, 246)",
              },
              AODA: {
                versions: ["Section 14"],
                description:
                  "Supports accessible formats for age-related disabilities",
                color: "rgb(16, 185, 129)",
              },
              EAA: {
                versions: ["Annex I, Section III"],
                description: "Enhances usability for elderly users",
                color: "rgb(139, 92, 246)",
              },
              WAD: {
                versions: ["Article 4", "EN 301 549"],
                description:
                  "Ensures public sector websites accommodate aging-related needs",
                color: "rgb(239, 68, 68)",
              },
            },
          },

          {
            id: "colorblindprofile",
            title: "Color Blind Profile",
            description:
              "Adjusts the website to be more accessible to color blind people.",
            svg: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#000000"
              >
                <path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 32.5-156t88-127Q256-817 330-848.5T488-880q80 0 151 27.5t124.5 76q53.5 48.5 85 115T880-518q0 115-70 176.5T640-280h-74q-9 0-12.5 5t-3.5 11q0 12 15 34.5t15 51.5q0 50-27.5 74T480-80Zm0-400Zm-220 40q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm120-160q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm200 0q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm120 160q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17ZM480-160q9 0 14.5-5t5.5-13q0-14-15-33t-15-57q0-42 29-67t71-25h70q66 0 113-38.5T800-518q0-121-92.5-201.5T488-800q-136 0-232 93t-96 227q0 133 93.5 226.5T480-160Z" />
              </svg>
            ),
            proFeature: true,
            name: "colorblindprofile",
            compliance: {
              WCAG: {
                versions: ["1.4.1", "1.4.3", "1.4.11"],
                description:
                  "Ensures content is distinguishable regardless of color perception",
                color: "rgb(245, 158, 11)",
              },
              ADA: {
                versions: ["Title III"],
                description:
                  "Provides accommodation for users with color vision deficiencies",
                color: "rgb(59, 130, 246)",
              },
              AODA: {
                versions: ["Section 14(2)"],
                description:
                  "Ensures accessible formats for users with color blindness",
                color: "rgb(16, 185, 129)",
              },
              EAA: {
                versions: ["Annex I, Section III"],
                description:
                  "Improves content perception for color blind users",
                color: "rgb(139, 92, 246)",
              },
              WAD: {
                versions: ["Article 4", "EN 301 549"],
                description:
                  "Mandatory color accessibility for public sector websites",
                color: "rgb(239, 68, 68)",
              },
            },
          },
        ],
      },
    ],
  },

  {
    title: "Text adjustments",
    description:
      "Modify text appearance to improve readability and accessibility.",
    options: [
      {
        id: "fontscale",
        title: "Font Scale",
        description: "Adjusts Text Size in the website.",
        svg: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="36"
            viewBox="0 0 35 36"
            fill="none"
          >
            <mask
              id="mask0_884_405"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="35"
              height="36"
            >
              <rect
                y="0.572906"
                width="35"
                height="34.8542"
                fill="#D9D9D9"
              />
            </mask>
            <g mask="url(#mask0_884_405)">
              <path
                d="M12.3958 29.618C11.7882 29.618 11.2717 29.4062 10.8463 28.9827C10.421 28.5591 10.2083 28.0448 10.2083 27.4397V10.7387H5.10413C4.49649 10.7387 3.97999 10.5269 3.55465 10.1033C3.1293 9.67976 2.91663 9.16542 2.91663 8.56031C2.91663 7.95521 3.1293 7.44086 3.55465 7.01729C3.97999 6.59371 4.49649 6.38193 5.10413 6.38193H19.6875C20.2951 6.38193 20.8116 6.59371 21.2369 7.01729C21.6623 7.44086 21.875 7.95521 21.875 8.56031C21.875 9.16542 21.6623 9.67976 21.2369 10.1033C20.8116 10.5269 20.2951 10.7387 19.6875 10.7387H14.5833V27.4397C14.5833 28.0448 14.3706 28.5591 13.9453 28.9827C13.5199 29.4062 13.0034 29.618 12.3958 29.618ZM25.5208 29.618C24.9132 29.618 24.3967 29.4062 23.9713 28.9827C23.546 28.5591 23.3333 28.0448 23.3333 27.4397V18H21.1458C20.5382 18 20.0217 17.7882 19.5963 17.3646C19.171 16.941 18.9583 16.4267 18.9583 15.8216C18.9583 15.2165 19.171 14.7021 19.5963 14.2786C20.0217 13.855 20.5382 13.6432 21.1458 13.6432H29.8958C30.5034 13.6432 31.0199 13.855 31.4453 14.2786C31.8706 14.7021 32.0833 15.2165 32.0833 15.8216C32.0833 16.4267 31.8706 16.941 31.4453 17.3646C31.0199 17.7882 30.5034 18 29.8958 18H27.7083V27.4397C27.7083 28.0448 27.4956 28.5591 27.0703 28.9827C26.6449 29.4062 26.1284 29.618 25.5208 29.618Z"
                fill="black"
              />
            </g>
          </svg>
        ),
        proFeature: false,
        name: "fontscale",
        compliance: {
          WCAG: {
            versions: ["1.4.4"],
            description:
              "Allows resizing text without loss of content or functionality",
            color: "rgb(245, 158, 11)",
          },
          ADA: {
            versions: ["Title III"],
            description:
              "Provides reasonable modification for visual disabilities",
            color: "rgb(59, 130, 246)",
          },
          AODA: {
            versions: ["Section 14(2)"],
            description: "Ensures accessible text formats",
            color: "rgb(16, 185, 129)",
          },
          EAA: {
            versions: ["Annex I, Section III"],
            description:
              "Ensures text is perceivable for users with different visual needs",
            color: "rgb(139, 92, 246)",
          },
          WAD: {
            versions: ["Article 4", "EN 301 549"],
            description:
              "Mandatory text resizing support for public sector websites",
            color: "rgb(239, 68, 68)",
          },
        },
      },
      {
        id: "linespacing",
        title: "Increase Line Spacing",
        description: "Increases gap between lines of text.",
        svg: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="36"
            viewBox="0 0 35 36"
            fill="none"
          >
            <mask
              id="mask0_912_12"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="35"
              height="36"
            >
              <rect y="0.5" width="35" height="35" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_912_12)">
              <path
                d="M7.29162 11.9479L5.97912 13.224C5.71176 13.4913 5.37756 13.625 4.97652 13.625C4.57548 13.625 4.22912 13.4792 3.93746 13.1875C3.67009 12.9201 3.53641 12.5799 3.53641 12.1667C3.53641 11.7535 3.67009 11.4132 3.93746 11.1458L7.72912 7.35417C7.87496 7.20833 8.03294 7.10503 8.20308 7.04427C8.37322 6.98351 8.55551 6.95312 8.74996 6.95312C8.9444 6.95312 9.12669 6.98351 9.29683 7.04427C9.46697 7.10503 9.62496 7.20833 9.77079 7.35417L13.5625 11.1458C13.8298 11.4132 13.9696 11.7474 13.9817 12.1484C13.9939 12.5495 13.8541 12.8958 13.5625 13.1875C13.2951 13.4549 12.9609 13.5946 12.5599 13.6068C12.1588 13.6189 11.8125 13.4913 11.5208 13.224L10.2083 11.9479V24.0521L11.5208 22.776C11.7882 22.5087 12.1224 22.375 12.5234 22.375C12.9244 22.375 13.2708 22.5208 13.5625 22.8125C13.8298 23.0799 13.9635 23.4201 13.9635 23.8333C13.9635 24.2465 13.8298 24.5868 13.5625 24.8542L9.77079 28.6458C9.62496 28.7917 9.46697 28.895 9.29683 28.9557C9.12669 29.0165 8.9444 29.0469 8.74996 29.0469C8.55551 29.0469 8.37322 29.0165 8.20308 28.9557C8.03294 28.895 7.87496 28.7917 7.72912 28.6458L3.93746 24.8542C3.67009 24.5868 3.53034 24.2526 3.51819 23.8516C3.50603 23.4505 3.64579 23.1042 3.93746 22.8125C4.20482 22.5451 4.53902 22.4054 4.94006 22.3932C5.3411 22.3811 5.68746 22.5087 5.97912 22.776L7.29162 24.0521V11.9479ZM18.9583 28.2083C18.5451 28.2083 18.1987 28.0686 17.9192 27.7891C17.6397 27.5095 17.5 27.1632 17.5 26.75C17.5 26.3368 17.6397 25.9904 17.9192 25.7109C18.1987 25.4314 18.5451 25.2917 18.9583 25.2917H30.625C31.0382 25.2917 31.3845 25.4314 31.664 25.7109C31.9435 25.9904 32.0833 26.3368 32.0833 26.75C32.0833 27.1632 31.9435 27.5095 31.664 27.7891C31.3845 28.0686 31.0382 28.2083 30.625 28.2083H18.9583ZM18.9583 19.4583C18.5451 19.4583 18.1987 19.3186 17.9192 19.0391C17.6397 18.7595 17.5 18.4132 17.5 18C17.5 17.5868 17.6397 17.2405 17.9192 16.9609C18.1987 16.6814 18.5451 16.5417 18.9583 16.5417H30.625C31.0382 16.5417 31.3845 16.6814 31.664 16.9609C31.9435 17.2405 32.0833 17.5868 32.0833 18C32.0833 18.4132 31.9435 18.7595 31.664 19.0391C31.3845 19.3186 31.0382 19.4583 30.625 19.4583H18.9583ZM18.9583 10.7083C18.5451 10.7083 18.1987 10.5686 17.9192 10.2891C17.6397 10.0095 17.5 9.66319 17.5 9.25C17.5 8.83681 17.6397 8.49045 17.9192 8.21094C18.1987 7.93142 18.5451 7.79167 18.9583 7.79167H30.625C31.0382 7.79167 31.3845 7.93142 31.664 8.21094C31.9435 8.49045 32.0833 8.83681 32.0833 9.25C32.0833 9.66319 31.9435 10.0095 31.664 10.2891C31.3845 10.5686 31.0382 10.7083 30.625 10.7083H18.9583Z"
                fill="black"
              />
            </g>
          </svg>
        ),
        proFeature: false,
        name: "linespacing",
        compliance: {
          WCAG: {
            versions: ["1.4.8"],
            description:
              "Supports visual presentation for better readability",
            color: "rgb(245, 158, 11)",
          },
          ADA: {
            versions: ["Title III"],
            description:
              "Accommodates users with reading and visual processing disorders",
            color: "rgb(59, 130, 246)",
          },
          AODA: {
            versions: ["Section 14"],
            description: "Provides accessible text formats",
            color: "rgb(16, 185, 129)",
          },
          EAA: {
            versions: ["Annex I, Section III"],
            description:
              "Ensures public sector websites provide accessible line spacing",
            color: "rgb(139, 92, 246)",
          },
        },
      },
      {
        id: "letterspacing",
        title: "Increase Letter Spacing",
        description: "Increase the gap between letters.",
        svg: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="36"
            viewBox="0 0 35 36"
            fill="none"
          >
            <mask
              id="mask0_884_626"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="35"
              height="36"
            >
              <rect y="0.5" width="35" height="35" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_884_626)">
              <path
                d="M8.74996 32.5833L2.91663 26.75L8.74996 20.9167L10.8281 22.9583L8.49475 25.2917H26.5052L24.2083 22.9583L26.25 20.9167L32.0833 26.75L26.25 32.5833L24.1718 30.5417L26.5052 28.2083H8.49475L10.7916 30.5417L8.74996 32.5833ZM10.0625 19.4583L16.0416 3.41666H18.9583L24.9375 19.4583H22.1666L20.7812 15.375H14.2916L12.8333 19.4583H10.0625ZM15.0937 13.0417H19.9062L17.5729 6.40624H17.427L15.0937 13.0417Z"
                fill="black"
              />
            </g>
          </svg>
        ),
        proFeature: false,
        name: "letterspacing",
        compliance: {
          WCAG: {
            versions: ["1.4.8"],
            description:
              "Enhances visual presentation for improved readability",
            color: "rgb(245, 158, 11)",
          },
          ADA: {
            versions: ["Title III"],
            description:
              "Provides accommodation for visual processing disorders",
            color: "rgb(59, 130, 246)",
          },
          AODA: {
            versions: ["Section 14"],
            description: "Supports accessible text formats",
            color: "rgb(16, 185, 129)",
          },
          EAA: {
            versions: ["Annex I, Section III"],
            description: "Improves readability for various user needs",
            color: "rgb(139, 92, 246)",
          },
          WAD: {
            versions: ["Article 4", "EN 301 549"],
            description:
              "Mandatory text spacing support for public sector websites",
            color: "rgb(239, 68, 68)",
          },
        },
      },
      {
        id: "fontweight",
        title: "Increase Font Weight",
        description: "Increases the thickness of letters.",
        svg: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="36"
            viewBox="0 0 35 36"
            fill="none"
          >
            <mask
              id="mask0_912_18"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="35"
              height="36"
            >
              <rect y="0.5" width="35" height="35" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_912_18)">
              <path
                d="M12.8334 28.2084C12.0313 28.2084 11.3447 27.9228 10.7735 27.3516C10.2023 26.7804 9.91675 26.0938 9.91675 25.2917V10.7084C9.91675 9.90627 10.2023 9.21964 10.7735 8.64846C11.3447 8.07728 12.0313 7.79169 12.8334 7.79169H17.974C19.5539 7.79169 21.0122 8.2778 22.349 9.25002C23.6858 10.2222 24.3542 11.5712 24.3542 13.2969C24.3542 14.5365 24.0747 15.4905 23.5157 16.1589C22.9567 16.8273 22.4341 17.3073 21.948 17.599C22.5556 17.8663 23.2301 18.3646 23.9714 19.0938C24.7128 19.8229 25.0834 20.9167 25.0834 22.375C25.0834 24.5382 24.2935 26.0512 22.7136 26.9141C21.1338 27.7769 19.6511 28.2084 18.2657 28.2084H12.8334ZM14.3282 24.125H18.1199C19.2865 24.125 19.9975 23.8273 20.2527 23.2318C20.5079 22.6363 20.6355 22.2049 20.6355 21.9375C20.6355 21.6702 20.5079 21.2387 20.2527 20.6432C19.9975 20.0478 19.2501 19.75 18.0105 19.75H14.3282V24.125ZM14.3282 15.8125H17.7188C18.5209 15.8125 19.1042 15.6059 19.4688 15.1927C19.8334 14.7795 20.0157 14.3177 20.0157 13.8073C20.0157 13.224 19.8091 12.75 19.3959 12.3854C18.9827 12.0209 18.448 11.8386 17.7917 11.8386H14.3282V15.8125Z"
                fill="black"
              />
            </g>
          </svg>
        ),
        proFeature: false,
        name: "fontweight",
        compliance: {
          WCAG: {
            versions: ["1.4.3", "1.4.6"],
            description: "Enhances contrast and visibility of text",
            color: "rgb(245, 158, 11)",
          },
          ADA: {
            versions: ["Title III"],
            description: "Provides accommodation for visual impairments",
            color: "rgb(59, 130, 246)",
          },
          AODA: {
            versions: ["Section 14(2)"],
            description: "Ensures accessible text formats",
            color: "rgb(16, 185, 129)",
          },
          EAA: {
            versions: ["Annex I, Section III"],
            description:
              "Improves text perception for users with visual needs",
            color: "rgb(139, 92, 246)",
          },
          WAD: {
            versions: ["Article 4", "EN 301 549"],
            description:
              "Mandatory font weight adjustments for public sector websites",
            color: "rgb(239, 68, 68)",
          },
        },
      },
      {
        id: "alignment",
        title: "Text Alignment",
        description:
          "Changes if the text should be in left, center or right.",
        svg: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="36"
            viewBox="0 0 35 36"
            fill="none"
          >
            <mask
              id="mask0_884_764"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="35"
              height="36"
            >
              <rect
                y="0.572876"
                width="35"
                height="34.8542"
                fill="#D9D9D9"
              />
            </mask>
            <g mask="url(#mask0_884_764)">
              <path
                d="M7.29171 28.1658C6.87851 28.1658 6.53216 28.0266 6.25264 27.7482C5.97313 27.4699 5.83337 27.125 5.83337 26.7135C5.83337 26.302 5.97313 25.9571 6.25264 25.6788C6.53216 25.4004 6.87851 25.2612 7.29171 25.2612H18.9584C19.3716 25.2612 19.7179 25.4004 19.9974 25.6788C20.277 25.9571 20.4167 26.302 20.4167 26.7135C20.4167 27.125 20.277 27.4699 19.9974 27.7482C19.7179 28.0266 19.3716 28.1658 18.9584 28.1658H7.29171ZM7.29171 22.3567C6.87851 22.3567 6.53216 22.2176 6.25264 21.9392C5.97313 21.6609 5.83337 21.316 5.83337 20.9045C5.83337 20.493 5.97313 20.1481 6.25264 19.8697C6.53216 19.5914 6.87851 19.4522 7.29171 19.4522H27.7084C28.1216 19.4522 28.4679 19.5914 28.7474 19.8697C29.027 20.1481 29.1667 20.493 29.1667 20.9045C29.1667 21.316 29.027 21.6609 28.7474 21.9392C28.4679 22.2176 28.1216 22.3567 27.7084 22.3567H7.29171ZM7.29171 16.5477C6.87851 16.5477 6.53216 16.4085 6.25264 16.1302C5.97313 15.8518 5.83337 15.5069 5.83337 15.0955C5.83337 14.684 5.97313 14.3391 6.25264 14.0607C6.53216 13.7824 6.87851 13.6432 7.29171 13.6432H27.7084C28.1216 13.6432 28.4679 13.7824 28.7474 14.0607C29.027 14.3391 29.1667 14.684 29.1667 15.0955C29.1667 15.5069 29.027 15.8518 28.7474 16.1302C28.4679 16.4085 28.1216 16.5477 27.7084 16.5477H7.29171ZM7.29171 10.7387C6.87851 10.7387 6.53216 10.5995 6.25264 10.3212C5.97313 10.0428 5.83337 9.6979 5.83337 9.28642C5.83337 8.87495 5.97313 8.53004 6.25264 8.25169C6.53216 7.97334 6.87851 7.83417 7.29171 7.83417H27.7084C28.1216 7.83417 28.4679 7.97334 28.7474 8.25169C29.027 8.53004 29.1667 8.87495 29.1667 9.28642C29.1667 9.6979 29.027 10.0428 28.7474 10.3212C28.4679 10.5995 28.1216 10.7387 27.7084 10.7387H7.29171Z"
                fill="black"
              />
            </g>
          </svg>
        ),
        proFeature: false,
        name: "alignment",
        compliance: {
          WCAG: {
            versions: ["1.4.8"],
            description:
              "Enhances visual presentation for improved readability",
            color: "rgb(245, 158, 11)",
          },
          ADA: {
            versions: ["Title III"],
            description: "Accommodates users with reading difficulties",
            color: "rgb(59, 130, 246)",
          },
          AODA: {
            versions: ["Section 14"],
            description: "Provides accessible text formats",
            color: "rgb(16, 185, 129)",
          },
          EAA: {
            versions: ["Annex I, Section III"],
            description: "Improves readability for various user needs",
            color: "rgb(139, 92, 246)",
          },
          WAD: {
            versions: ["Article 4", "EN 301 549"],
            description:
              "Ensures public sector websites provide accessible text alignment",
            color: "rgb(239, 68, 68)",
          },
        },
      },
    ],
  },
  {
    title: "Visual Adjustments",
    description:
      "Change the visual presentation of the website to enhance visibility and user experience.",
    options: [
      {
        id: "contrast",
        title: "Contrast Mode",
        description: "Adjusts contrast levels of the website.",
        svg: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="36"
            viewBox="0 0 35 36"
            fill="none"
          >
            <mask
              id="mask0_884_764"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="35"
              height="36"
            >
              <rect
                y="0.572876"
                width="35"
                height="34.8542"
                fill="#D9D9D9"
              />
            </mask>
            <g mask="url(#mask0_884_764)">
              <path
                d="M17.5 32.5226C15.4826 32.5226 13.5868 32.1413 11.8125 31.3789C10.0382 30.6165 8.49475 29.5817 7.18225 28.2747C5.86975 26.9677 4.83069 25.4307 4.06506 23.6638C3.29944 21.8969 2.91663 20.0089 2.91663 18C2.91663 15.991 3.29944 14.1031 4.06506 12.3362C4.83069 10.5693 5.86975 9.0323 7.18225 7.72527C8.49475 6.41824 10.0382 5.3835 11.8125 4.62107C13.5868 3.85863 15.4826 3.47742 17.5 3.47742C19.5173 3.47742 21.4132 3.85863 23.1875 4.62107C24.9618 5.3835 26.5052 6.41824 27.8177 7.72527C29.1302 9.0323 30.1692 10.5693 30.9349 12.3362C31.7005 14.1031 32.0833 15.991 32.0833 18C32.0833 20.0089 31.7005 21.8969 30.9349 23.6638C30.1692 25.4307 29.1302 26.9677 27.8177 28.2747C26.5052 29.5817 24.9618 30.6165 23.1875 31.3789C21.4132 32.1413 19.5173 32.5226 17.5 32.5226ZM18.9583 29.5091C21.8507 29.1461 24.2751 27.8814 26.2317 25.7151C28.1883 23.5488 29.1666 20.9771 29.1666 18C29.1666 15.0229 28.1883 12.4512 26.2317 10.2849C24.2751 8.11859 21.8507 6.85391 18.9583 6.49085V29.5091Z"
                fill="black"
              />
            </g>
          </svg>
        ),
        proFeature: false,
        name: "contrast",
        compliance: {
          WCAG: {
            versions: ["1.4.3", "1.4.6", "1.4.11"],
            description:
              "Supports contrast requirements for text and non-text content",
            color: "rgb(245, 158, 11)",
          },
          ADA: {
            versions: ["Title III"],
            description:
              "Provides accommodation for low vision and contrast sensitivity",
            color: "rgb(59, 130, 246)",
          },
          AODA: {
            versions: ["Section 14(2)"],
            description: "Ensures accessible visual presentation",
            color: "rgb(16, 185, 129)",
          },
          EAA: {
            versions: ["Annex I, Section III"],
            description:
              "Improves perception of content through contrast enhancement",
            color: "rgb(139, 92, 246)",
          },
          WAD: {
            versions: ["Article 4", "EN 301 549"],
            description:
              "Mandatory contrast adjustments for public sector websites",
            color: "rgb(239, 68, 68)",
          },
        },
      },
      {
        id: "saturation",
        title: "Color Saturation",
        description: "Adjusts color intensity of the website.",
        svg: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="36"
            viewBox="0 0 35 36"
            fill="none"
          >
            <mask
              id="mask0_884_809"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="35"
              height="36"
            >
              <rect
                y="0.572876"
                width="35"
                height="34.8542"
                fill="#D9D9D9"
              />
            </mask>
            <g mask="url(#mask0_884_809)">
              <path
                d="M12.6145 30.3442L3.64579 21.4128C3.40274 21.1707 3.22045 20.9045 3.09892 20.614C2.97739 20.3236 2.91663 20.021 2.91663 19.7064C2.91663 19.3917 2.97739 19.0892 3.09892 18.7987C3.22045 18.5083 3.40274 18.242 3.64579 18L12.0312 9.68581L9.29683 6.96283C8.98086 6.64818 8.8168 6.27301 8.80465 5.83733C8.79249 5.40165 8.9444 5.01439 9.26038 4.67553C9.57635 4.33667 9.96524 4.16724 10.427 4.16724C10.8888 4.16724 11.2899 4.33667 11.6302 4.67553L25.0104 18C25.2534 18.242 25.4296 18.5083 25.539 18.7987C25.6484 19.0892 25.7031 19.3917 25.7031 19.7064C25.7031 20.021 25.6484 20.3236 25.539 20.614C25.4296 20.9045 25.2534 21.1707 25.0104 21.4128L16.0416 30.3442C15.7986 30.5862 15.5312 30.7677 15.2395 30.8888C14.9479 31.0098 14.6441 31.0703 14.3281 31.0703C14.0121 31.0703 13.7083 31.0098 13.4166 30.8888C13.125 30.7677 12.8576 30.5862 12.6145 30.3442ZM14.3281 11.9731L6.526 19.7427H22.1302L14.3281 11.9731ZM28.875 31.0703C28 31.0703 27.2586 30.7617 26.651 30.1445C26.0434 29.5273 25.7395 28.7709 25.7395 27.8753C25.7395 27.2218 25.9036 26.6046 26.2317 26.0237C26.5599 25.4428 26.9305 24.874 27.3437 24.3173L28.0364 23.4459C28.2552 23.1797 28.5408 23.0405 28.8932 23.0284C29.2456 23.0163 29.5312 23.1434 29.75 23.4096L30.4791 24.3173C30.868 24.874 31.2326 25.4428 31.5729 26.0237C31.9132 26.6046 32.0833 27.2218 32.0833 27.8753C32.0833 28.7709 31.7673 29.5273 31.1354 30.1445C30.5034 30.7617 29.75 31.0703 28.875 31.0703Z"
                fill="black"
              />
            </g>
          </svg>
        ),
        proFeature: false,
        name: "saturation",
        compliance: {
          WCAG: {
            versions: ["1.4.3", "1.4.11"],
            description: "Enhances visual presentation of content",
            color: "rgb(245, 158, 11)",
          },
          ADA: {
            versions: ["Title III"],
            description:
              "Accommodates users with visual processing needs",
            color: "rgb(59, 130, 246)",
          },
          AODA: {
            versions: ["Section 14(2)"],
            description: "Provides accessible visual formats",
            color: "rgb(16, 185, 129)",
          },
          EAA: {
            versions: ["Annex I, Section III"],
            description:
              "Improves content perception through color adjustments",
            color: "rgb(139, 92, 246)",
          },
          WAD: {
            versions: ["Article 4", "EN 301 549"],
            description:
              "Ensures public sector websites provide color saturation controls",
            color: "rgb(239, 68, 68)",
          },
        },
      },
      {
        id: "invertcolors",
        title: "Invert Colors",
        description: "Inverts the colors of the website.",
        svg: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 512 512"
          >
            <circle
              fill="none"
              stroke="#000000"
              strokeMiterlimit="10"
              strokeWidth="32"
              cx="256"
              cy="256"
              r="208"
            />
            <path d="M256,176V336a80,80,0,0,0,0-160Z" />
            <path d="M256,48V176a80,80,0,0,0,0,160V464C141.12,464,48,370.88,48,256S141.12,48,256,48Z" />
          </svg>
        ),
        proFeature: false,
        name: "invertcolors",
        compliance: {
          WCAG: {
            versions: ["1.4.3", "1.4.6"],
            description:
              "Provides alternative color scheme with sufficient contrast",
            color: "rgb(245, 158, 11)",
          },
          ADA: {
            versions: ["Title III"],
            description:
              "Accommodates users with specific visual processing needs",
            color: "rgb(59, 130, 246)",
          },
          AODA: {
            versions: ["Section 14(2)"],
            description: "Ensures accessible visual presentation",
            color: "rgb(16, 185, 129)",
          },
          EAA: {
            versions: ["Annex I, Section III"],
            description:
              "Improves content perception for users with specific visual needs",
            color: "rgb(139, 92, 246)",
          },
          WAD: {
            versions: ["Article 4", "EN 301 549"],
            description:
              "Mandatory color inversion support for public sector websites",
            color: "rgb(239, 68, 68)",
          },
        },
      },
      {
        id: "headings",
        title: "Highlight Headings",
        description: "Highlights Headings for easy navigation.",
        svg: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="36"
            viewBox="0 0 35 36"
            fill="none"
          >
            <mask
              id="mask0_912_6"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="35"
              height="36"
            >
              <rect y="0.5" width="35" height="35" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_912_6)">
              <path
                d="M14.0001 15.0833L21.8751 22.9583L14.5834 30.25C14.0001 30.8333 13.3195 31.125 12.5417 31.125C11.7639 31.125 11.0834 30.8333 10.5001 30.25L10.4271 30.1771L10.3178 30.2865C10.0504 30.5538 9.74051 30.7604 9.38808 30.9063C9.03565 31.0521 8.66499 31.125 8.2761 31.125H3.93755C3.59728 31.125 3.36637 30.9792 3.24485 30.6875C3.12332 30.3958 3.18408 30.1285 3.42714 29.8854L6.7813 26.5313L6.70839 26.4583C6.12505 25.875 5.83339 25.1944 5.83339 24.4167C5.83339 23.6389 6.12505 22.9583 6.70839 22.375L14.0001 15.0833ZM16.0782 13.0052L23.3334 5.75C23.9167 5.16667 24.5973 4.875 25.3751 4.875C26.1528 4.875 26.8334 5.16667 27.4167 5.75L31.2084 9.54167C31.7917 10.125 32.0834 10.8056 32.0834 11.5833C32.0834 12.3611 31.7917 13.0417 31.2084 13.625L23.9532 20.8802L16.0782 13.0052Z"
                fill="black"
              />
            </g>
          </svg>
        ),
        proFeature: false,
        name: "headings",
        compliance: {
          WCAG: {
            versions: ["1.3.1", "2.4.6", "2.4.10"],
            description:
              "Enhances structure perception and section headings",
            color: "rgb(245, 158, 11)",
          },
          ADA: {
            versions: ["Title III"],
            description: "Accommodates users with cognitive disabilities",
            color: "rgb(59, 130, 246)",
          },
          AODA: {
            versions: ["Section 14"],
            description: "Enhances content structure perception",
            color: "rgb(16, 185, 129)",
          },
          EAA: {
            versions: ["Annex I, Section III"],
            description:
              "Improves navigation and understanding of content structure",
            color: "rgb(139, 92, 246)",
          },
          WAD: {
            versions: ["Article 4", "EN 301 549"],
            description:
              "Mandatory heading identification for public sector websites",
            color: "rgb(239, 68, 68)",
          },
        },
      },
      {
        id: "links",
        title: "Highlight Links",
        description: "Highlights Links for easy navigation.",
        svg: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="36"
            viewBox="0 0 35 36"
            fill="none"
          >
            <mask
              id="mask0_912_240"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="35"
              height="36"
            >
              <rect y="0.5" width="35" height="35" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_912_240)">
              <path
                d="M10.2083 25.2917C8.19093 25.2917 6.47131 24.5808 5.04944 23.1589C3.62756 21.737 2.91663 20.0174 2.91663 18C2.91663 15.9827 3.62756 14.2631 5.04944 12.8412C6.47131 11.4193 8.19093 10.7084 10.2083 10.7084H14.5833C14.9965 10.7084 15.3428 10.8481 15.6224 11.1276C15.9019 11.4072 16.0416 11.7535 16.0416 12.1667C16.0416 12.5799 15.9019 12.9263 15.6224 13.2058C15.3428 13.4853 14.9965 13.625 14.5833 13.625H10.2083C8.99301 13.625 7.96003 14.0504 7.10933 14.9011C6.25864 15.7518 5.83329 16.7848 5.83329 18C5.83329 19.2153 6.25864 20.2483 7.10933 21.099C7.96003 21.9497 8.99301 22.375 10.2083 22.375H14.5833C14.9965 22.375 15.3428 22.5148 15.6224 22.7943C15.9019 23.0738 16.0416 23.4202 16.0416 23.8334C16.0416 24.2466 15.9019 24.5929 15.6224 24.8724C15.3428 25.152 14.9965 25.2917 14.5833 25.2917H10.2083ZM13.125 19.4584C12.7118 19.4584 12.3654 19.3186 12.0859 19.0391C11.8064 18.7596 11.6666 18.4132 11.6666 18C11.6666 17.5868 11.8064 17.2405 12.0859 16.961C12.3654 16.6815 12.7118 16.5417 13.125 16.5417H21.875C22.2882 16.5417 22.6345 16.6815 22.914 16.961C23.1935 17.2405 23.3333 17.5868 23.3333 18C23.3333 18.4132 23.1935 18.7596 22.914 19.0391C22.6345 19.3186 22.2882 19.4584 21.875 19.4584H13.125ZM20.4166 25.2917C20.0034 25.2917 19.6571 25.152 19.3776 24.8724C19.098 24.5929 18.9583 24.2466 18.9583 23.8334C18.9583 23.4202 19.098 23.0738 19.3776 22.7943C19.6571 22.5148 20.0034 22.375 20.4166 22.375H24.7916C26.0069 22.375 27.0399 21.9497 27.8906 21.099C28.7413 20.2483 29.1666 19.2153 29.1666 18C29.1666 16.7848 28.7413 15.7518 27.8906 14.9011C27.0399 14.0504 26.0069 13.625 24.7916 13.625H20.4166C20.0034 13.625 19.6571 13.4853 19.3776 13.2058C19.098 12.9263 18.9583 12.5799 18.9583 12.1667C18.9583 11.7535 19.098 11.4072 19.3776 11.1276C19.6571 10.8481 20.0034 10.7084 20.4166 10.7084H24.7916C26.809 10.7084 28.5286 11.4193 29.9505 12.8412C31.3724 14.2631 32.0833 15.9827 32.0833 18C32.0833 20.0174 31.3724 21.737 29.9505 23.1589C28.5286 24.5808 26.809 25.2917 24.7916 25.2917H20.4166Z"
                fill="black"
              />
            </g>
          </svg>
        ),
        proFeature: false,
        name: "links",
        compliance: {
          WCAG: {
            versions: ["2.4.4", "2.4.9"],
            description:
              "Enhances link purpose identification and navigation",
            color: "rgb(245, 158, 11)",
          },
          ADA: {
            versions: ["Title III"],
            description:
              "Ensures accessible navigation for users with visual or cognitive disabilities",
            color: "rgb(59, 130, 246)",
          },
          AODA: {
            versions: ["Section 14"],
            description: "Provides accessible link identification",
            color: "rgb(16, 185, 129)",
          },
          EAA: {
            versions: ["Annex I, Section III"],
            description: "Improves link identification and navigation",
            color: "rgb(139, 92, 246)",
          },
          WAD: {
            versions: ["Article 4", "EN 301 549"],
            description:
              "Ensures public sector websites provide enhanced link visibility",
            color: "rgb(239, 68, 68)",
          },
        },
      },

      {
        id: "customcolors",
        title: "Custom Colors",
        description:
          "Customize the color scheme of the website like text, background and titles.",
        svg: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#000000"
          >
            <path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 32.5-156t88-127Q256-817 330-848.5T488-880q80 0 151 27.5t124.5 76q53.5 48.5 85 115T880-518q0 115-70 176.5T640-280h-74q-9 0-12.5 5t-3.5 11q0 12 15 34.5t15 51.5q0 50-27.5 74T480-80Zm0-400Zm-220 40q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm120-160q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm200 0q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm120 160q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17ZM480-160q9 0 14.5-5t5.5-13q0-14-15-33t-15-57q0-42 29-67t71-25h70q66 0 113-38.5T800-518q0-121-92.5-201.5T488-800q-136 0-232 93t-96 227q0 133 93.5 226.5T480-160Z" />
          </svg>
        ),
        proFeature: false,
        name: "customcolors",
        compliance: {
          WCAG: {
            versions: ["1.4.3", "1.4.6", "1.4.8"],
            description:
              "Enables customization of text and background colors for contrast",
            color: "rgb(245, 158, 11)",
          },
          ADA: {
            versions: ["Title III"],
            description:
              "Provides color customization for users with visual impairments",
            color: "rgb(59, 130, 246)",
          },
          AODA: {
            versions: ["Section 14(2)"],
            description: "Ensures accessible color presentation",
            color: "rgb(16, 185, 129)",
          },
          EAA: {
            versions: ["Annex I, Section III"],
            description: "Enables personalization of visual presentation",
            color: "rgb(139, 92, 246)",
          },
          WAD: {
            versions: ["Article 4", "EN 301 549"],
            description:
              "Mandatory color customization for public sector websites",
            color: "rgb(239, 68, 68)",
          },
        },
      },
    ],
  },
  // {
  //    title: 'Specialized Fonts',
  //    description: 'Use specific fonts designed to improve readability for users with dyslexia.',
  //    options: [

  //    ]
  // },
  {
    title: "Reading Aids",
    description:
      "Provide tools to assist users in focusing on and navigating through text.",
    options: [
      {
        id: "dyslexic",
        title: "Use Dyslexic Font",
        description: "Changes text into Dyslexic font.",
        svg: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="36"
            viewBox="0 0 35 36"
            fill="none"
          >
            <mask
              id="mask0_912_232"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="35"
              height="36"
            >
              <rect y="0.5" width="35" height="35" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_912_232)">
              <path
                d="M20.5625 28.5L27.7812 21.2812C28.0486 21.0139 28.3889 20.8802 28.8021 20.8802C29.2152 20.8802 29.5555 21.0139 29.8229 21.2812C30.0902 21.5486 30.2239 21.8889 30.2239 22.3021C30.2239 22.7153 30.0902 23.0556 29.8229 23.3229L22.6406 30.5052C22.3489 30.7969 22.0208 31.0156 21.6562 31.1615C21.2916 31.3073 20.9271 31.3802 20.5625 31.3802C20.1979 31.3802 19.8333 31.3073 19.4687 31.1615C19.1041 31.0156 18.776 30.7969 18.4843 30.5052L15.3854 27.4063C15.118 27.1389 14.9843 26.7986 14.9843 26.3854C14.9843 25.9722 15.118 25.6319 15.3854 25.3646C15.6527 25.0972 15.993 24.9635 16.4062 24.9635C16.8194 24.9635 17.1597 25.0972 17.4271 25.3646L20.5625 28.5ZM9.26038 19.0208L7.91143 22.849C7.7899 23.1406 7.60761 23.3776 7.36455 23.5599C7.1215 23.7422 6.84198 23.8333 6.52601 23.8333C5.99129 23.8333 5.57809 23.6146 5.28643 23.1771C4.99476 22.7396 4.94615 22.2778 5.14059 21.7917L11.0468 5.93229C11.1684 5.61632 11.3689 5.36111 11.6484 5.16667C11.9279 4.97222 12.2378 4.875 12.5781 4.875H13.7448C14.085 4.875 14.3949 4.97222 14.6744 5.16667C14.954 5.36111 15.1545 5.61632 15.276 5.93229L21.1823 21.7552C21.3767 22.2656 21.322 22.7396 21.0182 23.1771C20.7144 23.6146 20.283 23.8333 19.7239 23.8333C19.3836 23.8333 19.0798 23.7361 18.8125 23.5417C18.5451 23.3472 18.3507 23.092 18.2291 22.776L16.9166 19.0208H9.26038ZM10.2812 16.25H15.9687L13.1979 8.375H13.0521L10.2812 16.25Z"
                fill="black"
              />
            </g>
          </svg>
        ),
        proFeature: false,
        name: "dyslexic",
        compliance: {
          WCAG: {
            versions: ["1.4.8"],
            description:
              "Provides specialized font for improved readability",
            color: "rgb(245, 158, 11)",
          },
          ADA: {
            versions: ["Title III"],
            description:
              "Accommodates users with dyslexia and reading difficulties",
            color: "rgb(59, 130, 246)",
          },
          AODA: {
            versions: ["Section 14"],
            description: "Ensures accessible text presentation",
            color: "rgb(16, 185, 129)",
          },
          EAA: {
            versions: ["Annex I, Section III"],
            description:
              "Improves text readability for users with dyslexia",
            color: "rgb(139, 92, 246)",
          },
          WAD: {
            versions: ["Article 4", "EN 301 549"],
            description:
              "Ensures public sector websites support dyslexic users",
            color: "rgb(239, 68, 68)",
          },
        },
      },
      {
        id: "magnifier",
        title: "Text Magnifier",
        description: "Magnifies text when hover over them.",
        svg: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="36"
            viewBox="0 0 35 36"
            fill="none"
          >
            <mask
              id="mask0_884_978"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="35"
              height="36"
            >
              <rect y="0.5" width="35" height="35" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_884_978)">
              <path
                d="M28.5833 31.125L19.3958 21.9375C18.6667 22.5208 17.8281 22.9826 16.8802 23.3229C15.9323 23.6632 14.9236 23.8333 13.8542 23.8333C11.2049 23.8333 8.96267 22.9158 7.1276 21.0807C5.29253 19.2457 4.375 17.0035 4.375 14.3542C4.375 11.7049 5.29253 9.46267 7.1276 7.6276C8.96267 5.79253 11.2049 4.875 13.8542 4.875C16.5035 4.875 18.7457 5.79253 20.5807 7.6276C22.4158 9.46267 23.3333 11.7049 23.3333 14.3542C23.3333 15.4236 23.1632 16.4323 22.8229 17.3802C22.4826 18.3281 22.0208 19.1667 21.4375 19.8958L30.625 29.0833L28.5833 31.125ZM13.8542 20.9167C15.6771 20.9167 17.2266 20.2786 18.5026 19.0026C19.7786 17.7266 20.4167 16.1771 20.4167 14.3542C20.4167 12.5312 19.7786 10.9818 18.5026 9.70573C17.2266 8.42969 15.6771 7.79167 13.8542 7.79167C12.0312 7.79167 10.4818 8.42969 9.20573 9.70573C7.92969 10.9818 7.29167 12.5312 7.29167 14.3542C7.29167 16.1771 7.92969 17.7266 9.20573 19.0026C10.4818 20.2786 12.0312 20.9167 13.8542 20.9167Z"
                fill="black"
              />
            </g>
          </svg>
        ),
        proFeature: false,
        name: "magnifier",
        compliance: {
          WCAG: {
            versions: ["1.4.4", "1.4.10"],
            description:
              "Enables text resizing without loss of functionality",
            color: "rgb(245, 158, 11)",
          },
          ADA: {
            versions: ["Title III"],
            description:
              "Provides magnification for users with visual impairments",
            color: "rgb(59, 130, 246)",
          },
          AODA: {
            versions: ["Section 14(2)"],
            description: "Ensures accessible text presentation",
            color: "rgb(16, 185, 129)",
          },
          EAA: {
            versions: ["Annex I, Section III"],
            description:
              "Improves content visibility for users with visual needs",
            color: "rgb(139, 92, 246)",
          },
          WAD: {
            versions: ["Article 4", "EN 301 549"],
            description:
              "Mandatory text magnification for public sector websites",
            color: "rgb(239, 68, 68)",
          },
        },
      },
      {
        id: "readingguide",
        title: "Reading Guide",
        description:
          "Creates reading guide to help users navigate through lines.",
        svg: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="36"
            viewBox="0 0 35 36"
            fill="none"
          >
            <mask
              id="mask0_884_995"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="35"
              height="36"
            >
              <rect y="0.5" width="35" height="35" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_884_995)">
              <path
                d="M10.9375 32.5833C9.52782 32.5833 8.32469 32.085 7.32817 31.0885C6.33164 30.092 5.83337 28.8888 5.83337 27.4791V8.52079C5.83337 7.11107 6.33164 5.90795 7.32817 4.91142C8.32469 3.91489 9.52782 3.41663 10.9375 3.41663H29.1667V25.2916C28.5591 25.2916 28.0426 25.5043 27.6172 25.9296C27.1919 26.355 26.9792 26.8715 26.9792 27.4791C26.9792 28.0868 27.1919 28.6033 27.6172 29.0286C28.0426 29.454 28.5591 29.6666 29.1667 29.6666V32.5833H10.9375ZM8.75004 22.8489C9.09032 22.6788 9.44275 22.5572 9.80733 22.4843C10.1719 22.4114 10.5487 22.375 10.9375 22.375H11.6667V6.33329H10.9375C10.3299 6.33329 9.81341 6.54597 9.38806 6.97131C8.96271 7.39666 8.75004 7.91315 8.75004 8.52079V22.8489ZM14.5834 22.375H26.25V6.33329H14.5834V22.375ZM10.9375 29.6666H24.5365C24.3907 29.3263 24.2752 28.98 24.1901 28.6276C24.1051 28.2751 24.0625 27.8923 24.0625 27.4791C24.0625 27.0902 24.099 26.7135 24.1719 26.3489C24.2448 25.9843 24.3664 25.6319 24.5365 25.2916H10.9375C10.3056 25.2916 9.78303 25.5043 9.36983 25.9296C8.95664 26.355 8.75004 26.8715 8.75004 27.4791C8.75004 28.1111 8.95664 28.6336 9.36983 29.0468C9.78303 29.46 10.3056 29.6666 10.9375 29.6666Z"
                fill="black"
              />
            </g>
          </svg>
        ),
        proFeature: false,
        name: "readingguide",
        compliance: {
          WCAG: {
            versions: ["2.4.8", "3.2.3"],
            description:
              "Provides reading assistance and consistent navigation",
            color: "rgb(245, 158, 11)",
          },
          ADA: {
            versions: ["Title III"],
            description:
              "Assists users with reading and focus difficulties",
            color: "rgb(59, 130, 246)",
          },
          AODA: {
            versions: ["Section 14"],
            description: "Provides accessible reading support",
            color: "rgb(16, 185, 129)",
          },
          EAA: {
            versions: ["Annex I, Section III"],
            description:
              "Enhances reading experience for users with cognitive needs",
            color: "rgb(139, 92, 246)",
          },
          WAD: {
            versions: ["Article 4", "EN 301 549"],
            description:
              "Ensures public sector websites provide reading assistance",
            color: "rgb(239, 68, 68)",
          },
        },
      },
      {
        id: "readingmask",
        title: "Reading Mask",
        description: "Creates mask on the page for focus.",
        svg: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="36"
            viewBox="0 0 35 36"
            fill="none"
            style={{ color: "black" }}
          >
            <mask
              id="mask0_884_1012"
              style={{ maskType: "alpha", color: "black" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="35"
              height="36"
            >
              <rect
                y="0.5"
                width="35"
                height="35"
                fill="#D9D9D9"
                style={{ color: "black" }}
              ></rect>
            </mask>
            <g mask="url(#mask0_884_1012)" style={{ color: "black" }}>
              <path
                d="M7.29163 20.9167H20.4166V10.7084H7.29163V20.9167ZM5.83329 29.6667C5.03121 29.6667 4.34458 29.3811 3.7734 28.8099C3.20222 28.2388 2.91663 27.5521 2.91663 26.75V9.25004C2.91663 8.44796 3.20222 7.76133 3.7734 7.19014C4.34458 6.61896 5.03121 6.33337 5.83329 6.33337H29.1666C29.9687 6.33337 30.6553 6.61896 31.2265 7.19014C31.7977 7.76133 32.0833 8.44796 32.0833 9.25004V26.75C32.0833 27.5521 31.7977 28.2388 31.2265 28.8099C30.6553 29.3811 29.9687 29.6667 29.1666 29.6667H5.83329ZM5.83329 26.75H29.1666V9.25004H5.83329V26.75Z"
                fill="black"
                style={{ fill: "black", color: "black" }}
              ></path>
            </g>
          </svg>
        ),
        proFeature: false,
        name: "readingmask",
        compliance: {
          WCAG: {
            versions: ["2.4.8", "3.2.3"],
            description:
              "Provides focus assistance and reduces visual distractions",
            color: "rgb(245, 158, 11)",
          },
          ADA: {
            versions: ["Title III"],
            description:
              "Assists users with attention and focus difficulties",
            color: "rgb(59, 130, 246)",
          },
          AODA: {
            versions: ["Section 14"],
            description: "Provides accessible reading support",
            color: "rgb(16, 185, 129)",
          },
          EAA: {
            versions: ["Annex I, Section III"],
            description: "Enhances focus and reduces cognitive load",
            color: "rgb(139, 92, 246)",
          },
          WAD: {
            versions: ["Article 4", "EN 301 549"],
            description:
              "Mandatory reading focus tools for public sector websites",
            color: "rgb(239, 68, 68)",
          },
        },
      },
    ],
  },
  {
    title: "Media Control",
    description:
      "Control various types of media to minimize distractions and enhance focus.",
    options: [
      {
        id: "animation",
        title: "Stop Animation",
        description: "Stops animation from distracting.",
        svg: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="36"
            viewBox="0 0 35 36"
            fill="none"
          >
            <mask
              id="mask0_884_1029"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="35"
              height="36"
            >
              <rect y="0.5" width="35" height="35" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_884_1029)">
              <path
                d="M13.125 22.375H16.0416V13.625H13.125V22.375ZM18.9583 22.375H21.875V13.625H18.9583V22.375ZM17.5 32.5833C15.4826 32.5833 13.5868 32.2005 11.8125 31.4349C10.0382 30.6692 8.49475 29.6302 7.18225 28.3177C5.86975 27.0052 4.83069 25.4618 4.06506 23.6875C3.29944 21.9132 2.91663 20.0173 2.91663 18C2.91663 16.9548 3.026 15.9279 3.24475 14.9192C3.4635 13.9105 3.77947 12.9323 4.19267 11.9843L6.45308 14.2448C6.25864 14.8767 6.10673 15.5026 5.99735 16.1224C5.88798 16.7421 5.83329 17.368 5.83329 18C5.83329 21.2569 6.9635 24.0156 9.22392 26.276C11.4843 28.5364 14.243 29.6666 17.5 29.6666C20.7569 29.6666 23.5156 28.5364 25.776 26.276C28.0364 24.0156 29.1666 21.2569 29.1666 18C29.1666 14.743 28.0364 11.9843 25.776 9.72392C23.5156 7.4635 20.7569 6.33329 17.5 6.33329C16.8437 6.33329 16.2057 6.38798 15.5859 6.49735C14.9661 6.60673 14.3524 6.75864 13.7448 6.95308L11.5208 4.72913C12.493 4.29163 13.4652 3.9635 14.4375 3.74475C15.4097 3.526 16.4305 3.41663 17.5 3.41663C19.5173 3.41663 21.4132 3.79944 23.1875 4.56506C24.9618 5.33069 26.5052 6.36975 27.8177 7.68225C29.1302 8.99475 30.1692 10.5382 30.9349 12.3125C31.7005 14.0868 32.0833 15.9826 32.0833 18C32.0833 20.0173 31.7005 21.9132 30.9349 23.6875C30.1692 25.4618 29.1302 27.0052 27.8177 28.3177C26.5052 29.6302 24.9618 30.6692 23.1875 31.4349C21.4132 32.2005 19.5173 32.5833 17.5 32.5833ZM8.02079 10.7083C7.41315 10.7083 6.89666 10.4956 6.47131 10.0703C6.04597 9.64492 5.83329 9.12843 5.83329 8.52079C5.83329 7.91315 6.04597 7.39666 6.47131 6.97131C6.89666 6.54597 7.41315 6.33329 8.02079 6.33329C8.62843 6.33329 9.14492 6.54597 9.57027 6.97131C9.99562 7.39666 10.2083 7.91315 10.2083 8.52079C10.2083 9.12843 9.99562 9.64492 9.57027 10.0703C9.14492 10.4956 8.62843 10.7083 8.02079 10.7083Z"
                fill="black"
              />
            </g>
          </svg>
        ),
        proFeature: false,
        name: "animation",
        compliance: {
          WCAG: {
            versions: ["2.2.2", "2.3.3"],
            description: "Prevents interruption and motion animation",
            color: "rgb(245, 158, 11)",
          },
          ADA: {
            versions: ["Title III"],
            description:
              "Accommodates users with vestibular disorders and attention issues",
            color: "rgb(59, 130, 246)",
          },
          AODA: {
            versions: ["Section 14(4)"],
            description:
              "Ensures content doesn’t cause sensory discomfort",
            color: "rgb(16, 185, 129)",
          },
          EAA: {
            versions: ["Annex I, Section III"],
            description: "Prevents motion that could cause discomfort",
            color: "rgb(139, 92, 246)",
          },
          WAD: {
            versions: ["Article 4", "EN 301 549"],
            description:
              "Mandatory animation control for public sector websites",
            color: "rgb(239, 68, 68)",
          },
        },
      },
      {
        id: "sounds",
        title: "Mute Sounds",
        description: "Mutes  all sounds in the page.",
        svg: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="36"
            viewBox="0 0 35 36"
            fill="none"
          >
            <mask
              id="mask0_884_1046"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="35"
              height="36"
            >
              <rect y="0.5" width="35" height="35" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_884_1046)">
              <path
                d="M28.875 33.4584L24.4635 29.0469C23.8559 29.4358 23.2118 29.77 22.5312 30.0495C21.8507 30.329 21.1458 30.5539 20.4166 30.724V27.7344C20.7569 27.6129 21.0911 27.4914 21.4192 27.3698C21.7474 27.2483 22.0573 27.1025 22.3489 26.9323L17.5 22.0834V29.6667L10.2083 22.375H4.37496V13.625H9.04163L2.04163 6.62504L4.08329 4.58337L30.9166 31.4167L28.875 33.4584ZM28.5833 25L26.4687 22.8855C26.8819 22.132 27.1918 21.3421 27.3984 20.5157C27.605 19.6893 27.7083 18.8386 27.7083 17.9636C27.7083 15.6789 27.0399 13.6372 25.7031 11.8386C24.3663 10.04 22.6041 8.82469 20.4166 8.19275V5.20317C23.4305 5.88372 25.8854 7.4089 27.7812 9.77869C29.677 12.1485 30.625 14.8768 30.625 17.9636C30.625 19.2518 30.4487 20.4914 30.0963 21.6823C29.7439 22.8733 29.2395 23.9792 28.5833 25ZM23.6979 20.1146L20.4166 16.8334V12.0938C21.559 12.6285 22.4522 13.4306 23.0963 14.5C23.7404 15.5695 24.0625 16.7362 24.0625 18C24.0625 18.3646 24.0321 18.7231 23.9713 19.0756C23.9106 19.428 23.8194 19.7743 23.6979 20.1146ZM17.5 13.9167L13.7083 10.125L17.5 6.33337V13.9167ZM14.5833 22.5938V19.1667L11.9583 16.5417H7.29163V19.4584H11.4479L14.5833 22.5938Z"
                fill="black"
              />
            </g>
          </svg>
        ),
        proFeature: false,
        name: "sounds",
        compliance: {
          WCAG: {
            versions: ["1.4.2", "2.2.2"],
            description:
              "Provides audio control and prevents interruption",
            color: "rgb(245, 158, 11)",
          },
          ADA: {
            versions: ["Title III"],
            description: "Accommodates users with auditory sensitivities",
            color: "rgb(59, 130, 246)",
          },
          AODA: {
            versions: ["Section 14(4)"],
            description:
              "Ensures content doesn’t cause sensory discomfort",
            color: "rgb(16, 185, 129)",
          },
          EAA: {
            versions: ["Annex I, Section III"],
            description: "Prevents unwanted sensory experiences",
            color: "rgb(139, 92, 246)",
          },
          WAD: {
            versions: ["Article 4", "EN 301 549"],
            description:
              "Mandatory audio control for public sector websites",
            color: "rgb(239, 68, 68)",
          },
        },
      },
      {
        id: "images",
        title: "Hide Images",
        description: "Hides images from the page.",
        svg: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="36"
            viewBox="0 0 35 36"
            fill="none"
          >
            <mask
              id="mask0_884_1063"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="35"
              height="36"
            >
              <rect y="0.5" width="35" height="35" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_884_1063)">
              <path
                d="M30.625 26.9688L27.7083 24.0521V7.79171H11.4479L8.53121 4.87504H27.7083C28.5104 4.87504 29.197 5.16063 29.7682 5.73181C30.3394 6.30299 30.625 6.98962 30.625 7.79171V26.9688ZM28.875 33.4584L26.5416 31.125H7.29163C6.48954 31.125 5.80291 30.8395 5.23173 30.2683C4.66055 29.6971 4.37496 29.0105 4.37496 28.2084V8.95837L2.04163 6.62504L4.08329 4.58337L30.9166 31.4167L28.875 33.4584ZM8.74996 25.2917L13.125 19.4584L16.4062 23.8334L17.6093 22.2292L7.29163 11.9115V28.2084H23.5885L20.6718 25.2917H8.74996Z"
                fill="black"
              />
            </g>
          </svg>
        ),
        proFeature: false,
        name: "images",
        compliance: {
          WCAG: {
            versions: ["1.1.1", "1.4.8"],
            description:
              "Ensures content is accessible without images and reduces visual complexity",
            color: "rgb(245, 158, 11)",
          },
          ADA: {
            versions: ["Title III"],
            description:
              "Accommodates users with cognitive disabilities or restricted bandwidth",
            color: "rgb(59, 130, 246)",
          },
          AODA: {
            versions: ["Section 14(4)"],
            description: "Provides accessible alternative presentations",
            color: "rgb(16, 185, 129)",
          },
          EAA: {
            versions: ["Annex I, Section III"],
            description:
              "Reduces cognitive load and simplifies content perception",
            color: "rgb(139, 92, 246)",
          },
          WAD: {
            versions: ["Article 4", "EN 301 549"],
            description:
              "Ensures public sector websites provide image-free content options",
            color: "rgb(239, 68, 68)",
          },
        },
      },
      {
        id: "videos",
        title: "Hide Videos",
        description: "Hides video in the page.",
        svg: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="36"
            viewBox="0 0 25 25"
            fill="none"
          >
            <path
              d="M5.58578644,7 L3,7 L3,17 L15,17 L15,16.4142136 L5.58578644,7 Z M16.6766123,18.0908259 C16.3197659,18.6381832 15.7021364,19 15,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,7 C1,5.8954305 1.8954305,5 3,5 L3.58578644,5 L0.292893219,1.70710678 L1.70710678,0.292893219 L23.7071068,22.2928932 L22.2928932,23.7071068 L16.6766123,18.0908259 Z M17,8.38196601 L23,5.38196601 L23,18.370101 L21,16.370101 L21,8.61803399 L17,10.618034 L17,13.0007865 L15,11.0007865 L15,7 L10.9992135,7 L8.99921354,5 L15,5 C16.1045695,5 17,5.8954305 17,7 L17,8.38196601 Z"
              fill="black"
            />
          </svg>
        ),
        proFeature: false,
        name: "videos",
        compliance: {
          WCAG: {
            versions: ["1.2.1", "2.2.2", "1.4.8"],
            description:
              "Ensures content is accessible without videos and prevents interruption",
            color: "rgb(245, 158, 11)",
          },
          ADA: {
            versions: ["Title III"],
            description:
              "Accommodates users with visual and cognitive processing needs",
            color: "rgb(59, 130, 246)",
          },
          AODA: {
            versions: ["Section 14"],
            description: "Provides accessible alternative presentations",
            color: "rgb(16, 185, 129)",
          },
          EAA: {
            versions: ["Annex I, Section III"],
            description:
              "Reduces cognitive load and prevents unwanted motion content",
            color: "rgb(139, 92, 246)",
          },
          WAD: {
            versions: ["Article 4", "EN 301 549"],
            description:
              "Ensures public sector websites provide video-free content options",
            color: "rgb(239, 68, 68)",
          },
        },
      },
    ],
  },
  {
    title: "Assistive Technology",
    description:
      "Provide additional tools to support users with specific accessibility needs.",
    options: [
      {
        id: "cursor",
        title: "Cursor",
        description: "Increases cursor size.",
        svg: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="36"
            viewBox="0 0 35 36"
            fill="none"
          >
            <mask
              id="mask0_884_1093"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="35"
              height="36"
            >
              <rect
                y="0.572876"
                width="35"
                height="34.8542"
                fill="#D9D9D9"
              />
            </mask>
            <g mask="url(#mask0_884_1093)">
              <path
                d="M22.0938 31.6148C21.5347 31.8811 20.9757 31.9113 20.4167 31.7056C19.8576 31.4999 19.4444 31.1186 19.1771 30.5619L14.8021 21.1949L11.4115 25.9147C10.9983 26.4956 10.4514 26.6772 9.77083 26.4593C9.09028 26.2415 8.75 25.7816 8.75 25.0797V6.45448C8.75 5.84937 9.02344 5.41369 9.57031 5.14745C10.1172 4.8812 10.6337 4.94171 11.1198 5.32898L25.849 16.8744C26.408 17.2859 26.572 17.8184 26.3411 18.4719C26.1102 19.1254 25.6424 19.4522 24.9375 19.4522H18.8125L23.151 28.7103C23.4184 29.267 23.4488 29.8237 23.2422 30.3804C23.0356 30.9371 22.6528 31.3486 22.0938 31.6148Z"
                fill="#1C1B1F"
              />
            </g>
          </svg>
        ),
        proFeature: false,
        name: "cursor",
        compliance: {
          WCAG: {
            versions: ["2.4.7", "2.5.1"],
            description: "Enhances cursor visibility and pointer control",
            color: "rgb(245, 158, 11)",
          },
          ADA: {
            versions: ["Title III"],
            description:
              "Accommodates users with visual and motor impairments",
            color: "rgb(59, 130, 246)",
          },
          AODA: {
            versions: ["Section 14(2)"],
            description: "Ensures visible focus indicators",
            color: "rgb(16, 185, 129)",
          },
          EAA: {
            versions: ["Annex I, Section III"],
            description: "Improves pointer visibility and control",
            color: "rgb(139, 92, 246)",
          },
          WAD: {
            versions: ["Article 4", "EN 301 549"],
            description:
              "Mandatory language accessibility for public sector websites",
            color: "rgb(239, 68, 68)",
          },
        },
      },
      {
        id: "textsummary",
        title: "Text Summary",
        description: "Summarizes and reads the text in the page.",
        svg: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="36"
            viewBox="0 0 35 36"
            fill="none"
          >
            <mask
              id="mask0_884_1074"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="35"
              height="36"
            >
              <rect y="0.5" width="35" height="35" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_884_1074)">
              <path
                d="M5.83329 32.5833C5.03121 32.5833 4.34458 32.2977 3.7734 31.7266C3.20222 31.1554 2.91663 30.4688 2.91663 29.6667V6.33333C2.91663 5.53125 3.20222 4.84462 3.7734 4.27344C4.34458 3.70226 5.03121 3.41667 5.83329 3.41667H18.9583L16.0416 6.33333H5.83329V29.6667H21.875V25.2917H24.7916V29.6667C24.7916 30.4688 24.506 31.1554 23.9349 31.7266C23.3637 32.2977 22.677 32.5833 21.875 32.5833H5.83329ZM8.74996 26.75V23.8333H18.9583V26.75H8.74996ZM8.74996 22.375V19.4583H16.0416V22.375H8.74996ZM21.875 22.375L16.0416 16.5417H11.6666V9.25H16.0416L21.875 3.41667V22.375ZM24.7916 17.9271V7.86458C25.6666 8.375 26.3715 9.06771 26.9062 9.94271C27.4409 10.8177 27.7083 11.8021 27.7083 12.8958C27.7083 13.9896 27.4409 14.974 26.9062 15.849C26.3715 16.724 25.6666 17.4167 24.7916 17.9271ZM24.7916 24.1979V21.1354C26.493 20.5278 27.8906 19.4766 28.9843 17.9818C30.0781 16.487 30.625 14.7917 30.625 12.8958C30.625 11 30.0781 9.30469 28.9843 7.8099C27.8906 6.3151 26.493 5.26389 24.7916 4.65625V1.59375C27.3194 2.25 29.4097 3.61719 31.0625 5.69531C32.7152 7.77344 33.5416 10.1736 33.5416 12.8958C33.5416 15.6181 32.7152 18.0182 31.0625 20.0964C29.4097 22.1745 27.3194 23.5417 24.7916 24.1979Z"
                fill="black"
              />
            </g>
          </svg>
        ),
        proFeature: true,
        name: "textsummary",
        compliance: {
          WCAG: {
            versions: ["3.1.5"],
            description:
              "Provides reading level and text comprehension support",
            color: "rgb(245, 158, 11)",
          },
          ADA: {
            versions: ["Title III"],
            description:
              "Assists users with cognitive and reading difficulties",
            color: "rgb(59, 130, 246)",
          },
          AODA: {
            versions: ["Section 14"],
            description: "Enhances text comprehension",
            color: "rgb(16, 185, 129)",
          },
          EAA: {
            versions: ["Annex I, Section III"],
            description:
              "Improves content understanding through summarization",
            color: "rgb(139, 92, 246)",
          },
          WAD: {
            versions: ["Article 4", "EN 301 549"],
            description:
              "Ensures public sector websites provide content summarization",
            color: "rgb(239, 68, 68)",
          },
        },
      },
      {
        id: "virtualkeyboard",
        title: "Virtual Keyboard",
        description: "Enable Virtual Keyboard.",
        svg: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#000000"
          >
            <path d="M120-160q-33 0-56.5-23.5T40-240v-480q0-33 23.5-56.5T120-800h720q33 0 56.5 23.5T920-720v480q0 33-23.5 56.5T840-160H120Zm0-80h720v-480H120v480Zm200-40h320v-80H320v80ZM200-420h80v-80h-80v80Zm160 0h80v-80h-80v80Zm160 0h80v-80h-80v80Zm160 0h80v-80h-80v80ZM200-560h80v-80h-80v80Zm160 0h80v-80h-80v80Zm160 0h80v-80h-80v80Zm160 0h80v-80h-80v80ZM120-240v-480 480Z" />
          </svg>
        ),
        proFeature: true,
        name: "virtualkeyboard",
        compliance: {
          WCAG: {
            versions: ["2.1.1", "2.1.3"],
            description:
              "Provides alternative input method for keyboard functionality",
            color: "rgb(245, 158, 11)",
          },
          ADA: {
            versions: ["Title III"],
            description: "Accommodates users with motor impairments",
            color: "rgb(59, 130, 246)",
          },
          AODA: {
            versions: ["Section 14(3)"],
            description: "Ensures accessible input methods",
            color: "rgb(16, 185, 129)",
          },
          EAA: {
            versions: ["Annex I, Section II"],
            description:
              "Enables alternative input methods for users with motor limitations",
            color: "rgb(139, 92, 246)",
          },
          WAD: {
            versions: ["Article 4", "EN 301 549"],
            description:
              "Mandatory virtual keyboard support for public sector websites",
            color: "rgb(239, 68, 68)",
          },
        },
      },
      {
        id: "dictionary",
        title: "Dictionary",
        description: "Enable Dictionary.",
        svg: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#000000"
          >
            <path d="M160-391h45l23-66h104l24 66h44l-97-258h-46l-97 258Zm81-103 38-107h2l38 107h-78Zm319-70v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-600q-38 0-73 9.5T560-564Zm0 220v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-380q-38 0-73 9t-67 27Zm0-110v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-490q-38 0-73 9.5T560-454ZM260-320q47 0 91.5 10.5T440-278v-394q-41-24-87-36t-93-12q-36 0-71.5 7T120-692v396q35-12 69.5-18t70.5-6Zm260 42q44-21 88.5-31.5T700-320q36 0 70.5 6t69.5 18v-396q-33-14-68.5-21t-71.5-7q-47 0-93 12t-87 36v394Zm-40 118q-48-38-104-59t-116-21q-42 0-82.5 11T100-198q-21 11-40.5-1T40-234v-482q0-11 5.5-21T62-752q46-24 96-36t102-12q58 0 113.5 15T480-740q51-30 106.5-45T700-800q52 0 102 12t96 36q11 5 16.5 15t5.5 21v482q0 23-19.5 35t-40.5 1q-37-20-77.5-31T700-240q-60 0-116 21t-104 59ZM280-499Z" />
          </svg>
        ),
        proFeature: true,
        name: "dictionary",
        compliance: {
          WCAG: {
            versions: ["3.1.3", "3.1.4"],
            description:
              "Provides definitions and explanations for complex words",
            color: "rgb(245, 158, 11)",
          },
          ADA: {
            versions: ["Title III"],
            description:
              "Assists users with cognitive and language difficulties",
            color: "rgb(59, 130, 246)",
          },
          AODA: {
            versions: ["Section 14"],
            description: "Enhances text comprehension",
            color: "rgb(16, 185, 129)",
          },
          EAA: {
            versions: ["Annex I, Section III"],
            description:
              "Improves content understanding through word definitions",
            color: "rgb(139, 92, 246)",
          },
          WAD: {
            versions: ["Article 4", "EN 301 549"],
            description:
              "Ensures public sector websites provide language comprehension support",
            color: "rgb(239, 68, 68)",
          },
        },
      },
      // {
      //    id: "describeimages",
      //    title: "Describe Images",
      //    description: "Generates image description using AI.",
      //    svg: (
      //       <svg
      //          xmlns="http://www.w3.org/2000/svg"
      //          width="35"
      //          height="36"
      //          viewBox="0 0 35 36"
      //          fill="none"
      //       >
      //          <mask
      //             id="mask0_912_352"
      //             style={{ maskType: "alpha" }}
      //             maskUnits="userSpaceOnUse"
      //             x="0"
      //             y="0"
      //             width="35"
      //             height="36"
      //          >
      //             <rect y="0.5" width="35" height="35" fill="#D9D9D9" />
      //          </mask>
      //          <g mask="url(#mask0_912_352)">
      //             <path
      //                d="M5.83329 29.6667C5.03121 29.6667 4.34458 29.3811 3.7734 28.8099C3.20222 28.2388 2.91663 27.5521 2.91663 26.75V9.25004C2.91663 8.44796 3.20222 7.76133 3.7734 7.19014C4.34458 6.61896 5.03121 6.33337 5.83329 6.33337H29.1666C29.9687 6.33337 30.6553 6.61896 31.2265 7.19014C31.7977 7.76133 32.0833 8.44796 32.0833 9.25004V26.75C32.0833 27.5521 31.7977 28.2388 31.2265 28.8099C30.6553 29.3811 29.9687 29.6667 29.1666 29.6667H5.83329ZM16.4062 22.375L13.7083 18.7657C13.5625 18.5712 13.368 18.474 13.125 18.474C12.8819 18.474 12.6875 18.5712 12.5416 18.7657L9.62496 22.6667C9.43051 22.9098 9.40621 23.165 9.55204 23.4323C9.69788 23.6997 9.91663 23.8334 10.2083 23.8334H24.7916C25.0833 23.8334 25.302 23.6997 25.4479 23.4323C25.5937 23.165 25.5694 22.9098 25.375 22.6667L21.3645 17.3073C21.2187 17.1129 21.0243 17.0157 20.7812 17.0157C20.5382 17.0157 20.3437 17.1129 20.1979 17.3073L16.4062 22.375Z"
      //                fill="black"
      //             />
      //          </g>
      //       </svg>
      //    ),
      //    proFeature: true,
      //    name: "describeimages",
      // },
      {
        id: "text2speech",
        title: "Screen Reader",
        description: "Reads the text in the page.",
        svg: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="36"
            viewBox="0 0 35 36"
            fill="none"
          >
            <mask
              id="mask0_884_1074"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="35"
              height="36"
            >
              <rect y="0.5" width="35" height="35" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_884_1074)">
              <path
                d="M5.83329 32.5833C5.03121 32.5833 4.34458 32.2977 3.7734 31.7266C3.20222 31.1554 2.91663 30.4688 2.91663 29.6667V6.33333C2.91663 5.53125 3.20222 4.84462 3.7734 4.27344C4.34458 3.70226 5.03121 3.41667 5.83329 3.41667H18.9583L16.0416 6.33333H5.83329V29.6667H21.875V25.2917H24.7916V29.6667C24.7916 30.4688 24.506 31.1554 23.9349 31.7266C23.3637 32.2977 22.677 32.5833 21.875 32.5833H5.83329ZM8.74996 26.75V23.8333H18.9583V26.75H8.74996ZM8.74996 22.375V19.4583H16.0416V22.375H8.74996ZM21.875 22.375L16.0416 16.5417H11.6666V9.25H16.0416L21.875 3.41667V22.375ZM24.7916 17.9271V7.86458C25.6666 8.375 26.3715 9.06771 26.9062 9.94271C27.4409 10.8177 27.7083 11.8021 27.7083 12.8958C27.7083 13.9896 27.4409 14.974 26.9062 15.849C26.3715 16.724 25.6666 17.4167 24.7916 17.9271ZM24.7916 24.1979V21.1354C26.493 20.5278 27.8906 19.4766 28.9843 17.9818C30.0781 16.487 30.625 14.7917 30.625 12.8958C30.625 11 30.0781 9.30469 28.9843 7.8099C27.8906 6.3151 26.493 5.26389 24.7916 4.65625V1.59375C27.3194 2.25 29.4097 3.61719 31.0625 5.69531C32.7152 7.77344 33.5416 10.1736 33.5416 12.8958C33.5416 15.6181 32.7152 18.0182 31.0625 20.0964C29.4097 22.1745 27.3194 23.5417 24.7916 24.1979Z"
                fill="black"
              />
            </g>
          </svg>
        ),
        proFeature: true,
        name: "text2speech",
        compliance: {
          WCAG: {
            versions: ["1.1.1", "1.3.1", "2.1.1", "4.1.2"],
            description:
              "Provides text alternatives and programmatic access to content",
            color: "rgb(245, 158, 11)",
          },
          ADA: {
            versions: ["Title III"],
            description:
              "Ensures access for blind and visually impaired users",
            color: "rgb(59, 130, 246)",
          },
          AODA: {
            versions: ["Section 14(2)"],
            description:
              "Provides accessible content through screen readers",
            color: "rgb(16, 185, 129)",
          },
          EAA: {
            versions: ["Annex I, Section II"],
            description:
              "Ensures content is perceivable through assistive technologies",
            color: "rgb(139, 92, 246)",
          },
          WAD: {
            versions: ["Article 4", "EN 301 549"],
            description:
              "Mandatory screen reader support for public sector websites",
            color: "rgb(239, 68, 68)",
          },
        },
        // onEnableAlsoEnable: ["blindprofile"],
        onDisableAlsoDisable: ["blindprofile"],
      },
    ],
  },
  {
    title: "Page Navigation",
    description: "Assist users in navigating through the page elements.",
    options: [
      {
        id: "pagestructure",
        title: "Page Structure",
        description:
          "Displays all headings, links, and landmarks for easy navigation.",
        svg: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="34"
            viewBox="0 -960 960 960"
            width="35"
            fill="black"
          >
            <path d="M480-118 120-398l66-50 294 228 294-228 66 50-360 280Zm0-202L120-600l360-280 360 280-360 280Zm0-280Zm0 178 230-178-230-178-230 178 230 178Z" />
          </svg>
        ),
        proFeature: true,
        name: "pagestructure",
        compliance: {
          WCAG: {
            versions: ["1.3.1", "2.4.10"],
            description:
              "Enhances information structure and section headings",
            color: "rgb(245, 158, 11)",
          },
          ADA: {
            versions: ["Title III"],
            description: "Accommodates users with cognitive disabilities",
            color: "rgb(59, 130, 246)",
          },
          AODA: {
            versions: ["Section 14"],
            description: "Enhances content structure perception",
            color: "rgb(16, 185, 129)",
          },
          EAA: {
            versions: ["Annex I, Section III"],
            description:
              "Improves navigation and understanding of content organization",
            color: "rgb(139, 92, 246)",
          },
          WAD: {
            versions: ["Article 4", "EN 301 549"],
            description:
              "Mandatory page structure visibility for public sector websites",
            color: "rgb(239, 68, 68)",
          },
        },
      },
      {
        id: "linknavigation",
        title: "Useful Links",
        description:
          "Provides a list of all links on the page for easy access.",
        svg: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="36"
            viewBox="0 0 35 36"
            fill="none"
          >
            <mask
              id="mask0_912_240"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="35"
              height="36"
            >
              <rect y="0.5" width="35" height="35" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_912_240)">
              <path
                d="M10.2083 25.2917C8.19093 25.2917 6.47131 24.5808 5.04944 23.1589C3.62756 21.737 2.91663 20.0174 2.91663 18C2.91663 15.9827 3.62756 14.2631 5.04944 12.8412C6.47131 11.4193 8.19093 10.7084 10.2083 10.7084H14.5833C14.9965 10.7084 15.3428 10.8481 15.6224 11.1276C15.9019 11.4072 16.0416 11.7535 16.0416 12.1667C16.0416 12.5799 15.9019 12.9263 15.6224 13.2058C15.3428 13.4853 14.9965 13.625 14.5833 13.625H10.2083C8.99301 13.625 7.96003 14.0504 7.10933 14.9011C6.25864 15.7518 5.83329 16.7848 5.83329 18C5.83329 19.2153 6.25864 20.2483 7.10933 21.099C7.96003 21.9497 8.99301 22.375 10.2083 22.375H14.5833C14.9965 22.375 15.3428 22.5148 15.6224 22.7943C15.9019 23.0738 16.0416 23.4202 16.0416 23.8334C16.0416 24.2466 15.9019 24.5929 15.6224 24.8724C15.3428 25.152 14.9965 25.2917 14.5833 25.2917H10.2083ZM13.125 19.4584C12.7118 19.4584 12.3654 19.3186 12.0859 19.0391C11.8064 18.7596 11.6666 18.4132 11.6666 18C11.6666 17.5868 11.8064 17.2405 12.0859 16.961C12.3654 16.6815 12.7118 16.5417 13.125 16.5417H21.875C22.2882 16.5417 22.6345 16.6815 22.914 16.961C23.1935 17.2405 23.3333 17.5868 23.3333 18C23.3333 18.4132 23.1935 18.7596 22.914 19.0391C22.6345 19.3186 22.2882 19.4584 21.875 19.4584H13.125ZM20.4166 25.2917C20.0034 25.2917 19.6571 25.152 19.3776 24.8724C19.098 24.5929 18.9583 24.2466 18.9583 23.8334C18.9583 23.4202 19.098 23.0738 19.3776 22.7943C19.6571 22.5148 20.0034 22.375 20.4166 22.375H24.7916C26.0069 22.375 27.0399 21.9497 27.8906 21.099C28.7413 20.2483 29.1666 19.2153 29.1666 18C29.1666 16.7848 28.7413 15.7518 27.8906 14.9011C27.0399 14.0504 26.0069 13.625 24.7916 13.625H20.4166C20.0034 13.625 19.6571 13.4853 19.3776 13.2058C19.098 12.9263 18.9583 12.5799 18.9583 12.1667C18.9583 11.7535 19.098 11.4072 19.3776 11.1276C19.6571 10.8481 20.0034 10.7084 20.4166 10.7084H24.7916C26.809 10.7084 28.5286 11.4193 29.9505 12.8412C31.3724 14.2631 32.0833 15.9827 32.0833 18C32.0833 20.0174 31.3724 21.737 29.9505 23.1589C28.5286 24.5808 26.809 25.2917 24.7916 25.2917H20.4166Z"
                fill="black"
              />
            </g>
          </svg>
        ),
        proFeature: false,
        name: "linknavigation",
        compliance: {
          WCAG: {
            versions: ["2.4.5", "2.4.9"],
            description:
              "Provides multiple ways to locate content and navigate",
            color: "rgb(245, 158, 11)",
          },
          ADA: {
            versions: ["Title III"],
            description:
              "Ensures accessible navigation for users with disabilities",
            color: "rgb(59, 130, 246)",
          },
          AODA: {
            versions: ["Section 14"],
            description: "Provides accessible navigation methods",
            color: "rgb(16, 185, 129)",
          },
          EAA: {
            versions: ["Annex I, Section III"],
            description: "Improves content findability and navigation",
            color: "rgb(139, 92, 246)",
          },
        },
      },
      {
        id: "voicenavigation",
        title: "Voice Navigation",
        description:
          "Allows the user to navigate the page using voice commands.",
        svg: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#000"
          >
            <path d="M480-400q-50 0-85-35t-35-85v-240q0-50 35-85t85-35q50 0 85 35t35 85v240q0 50-35 85t-85 35Zm0-240Zm-40 520v-123q-104-14-172-93t-68-184h80q0 83 58.5 141.5T480-320q83 0 141.5-58.5T680-520h80q0 105-68 184t-172 93v123h-80Zm40-360q17 0 28.5-11.5T520-520v-240q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760v240q0 17 11.5 28.5T480-480Z" />
          </svg>
        ),
        name: "voicenavigation",
        proFeature: false,
        compliance: {
          WCAG: {
            versions: ["2.1.1", "2.1.3", "2.5.1"],
            description:
              "Provides keyboard alternative and enables voice-controlled navigation",
            color: "rgb(245, 158, 11)",
          },
          ADA: {
            versions: ["Title III"],
            description:
              "Accommodates users with motor impairments who cannot use traditional input methods",
            color: "rgb(59, 130, 246)",
          },
          AODA: {
            versions: ["Section 14(3)"],
            description:
              "Ensures accessible navigation methods for motor disabilities",
            color: "rgb(16, 185, 129)",
          },
          EAA: {
            versions: ["Annex I, Section II"],
            description:
              "Provides operable navigation alternatives for users with motor limitations",
            color: "rgb(139, 92, 246)",
          },
          WAD: {
            versions: ["Article 4", "EN 301 549"],
            description:
              "Mandatory voice navigation for public sector websites",
            color: "rgb(239, 68, 68)",
          },
        },
      },
      {
        id: "talkandtype",
        title: "Talk and Type",
        description:
          "Allows the user to talk and type using voice commands.",
        svg: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#000"
          >
            <path d="M80-80v-80q46 0 91-6t88-22q-46-23-72.5-66.5T160-349v-91h160v-120h135L324-822l72-36 131 262q20 40-3 78t-68 38h-56v40q0 33-23.5 56.5T320-360h-80v11q0 35 21.5 61.5T316-252l12 3q40 10 45 50t-31 60q-60 33-126.5 46T80-80Zm572-114-57-56q21-21 33-48.5t12-59.5q0-32-12-59.5T595-466l57-57q32 32 50 74.5t18 90.5q0 48-18 90t-50 74ZM765-80l-57-57q43-43 67.5-99.5T800-358q0-66-24.5-122T708-579l57-57q54 54 84.5 125T880-358q0 81-30.5 152.5T765-80Z" />
          </svg>
        ),
        proFeature: false,
        name: "talkandtype",
        compliance: {
          WCAG: {
            versions: ["2.1.1", "2.5.1", "3.3.5"],
            description:
              "Provides keyboard alternative and input assistance through speech recognition",
            color: "rgb(245, 158, 11)",
          },
          ADA: {
            versions: ["Title III"],
            description:
              "Accommodates users with motor impairments and typing difficulties",
            color: "rgb(59, 130, 246)",
          },
          AODA: {
            versions: ["Section 14(3)"],
            description:
              "Provides accessible input methods for motor and cognitive disabilities",
            color: "rgb(16, 185, 129)",
          },
          EAA: {
            versions: ["Annex I, Section II"],
            description:
              "Enables content input through alternative methods for users with motor limitations",
            color: "rgb(139, 92, 246)",
          },
          WAD: {
            versions: ["Article 4", "EN 301 549"],
            description:
              "Mandatory speech-to-text input for public sector websites",
            color: "rgb(239, 68, 68)",
          },
        },
      },
    ],
  },
];
