const N1Logo = (props) => (
  <svg
    width={'100%'}
    height={'100%'}
    viewBox="0 0 35 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_1_2648)">
      <g filter="url(#filter0_d_1_2648)">
        <path
          d="M17.5004 34.2391C26.9553 34.2391 34.62 26.5744 34.62 17.1196C34.62 7.66469 26.9553 0 17.5004 0C8.04555 0 0.380859 7.66469 0.380859 17.1196C0.380859 26.5744 8.04555 34.2391 17.5004 34.2391Z"
          fill="url(#paint0_linear_1_2648)"
        />
      </g>
      <path
        d="M15.3119 24.462L11.1461 15.5408V24.2337L8.6543 24.3478V10.1957L11.5646 10.0815L15.2548 18.5652V10.3098L17.6135 10.0815V24.2337L15.3119 24.462ZM20.416 24.3478V22.0082H22.2421V13.5625L20.2829 13.981V11.9837L23.5356 10.0815H24.9051V22.0082H26.7693L26.6551 24.3478H20.416Z"
        fill="white"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_1_2648"
        x={-3.61914}
        y={0}
        width={42.2383}
        height={42.239}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1_2648"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_1_2648"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear_1_2648"
        x1={17.5004}
        y1={0}
        x2={17.5004}
        y2={34.2391}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#5751E1" />
        <stop offset={1} stopColor="#7572AB" />
      </linearGradient>
      <clipPath id="clip0_1_2648">
        <rect width={35} height={35} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export default N1Logo;
