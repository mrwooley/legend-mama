
// Google Icons
export default function CrossedSwords({
                                        dim = 100,
                                        shadow = false,
                                        ...props
                                      }) {

  const filter = shadow ? "url(#filter0_d_40_2022)" : "none";
  return (
    <svg width={dim} viewBox="0 0 100 100" className="fill-button-fill-1 stroke-2 stroke-button-fill-1 hover:fill-highlight group-data-[state=on]:fill-accent-2" {...props}>
      <g filter={filter}>
        <mask id="mask0_40_2022" style={{maskType: "alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="100%"
              height="100%">
          <rect width="100%" height="100%" fill="#inherit"/>
        </mask>
        <g mask="url(#mask0_40_2022)">
          <path
            d="M79.3749 90.0001L67.1874 77.9168L58.0208 87.0834L55.1041 84.1668C53.5069 82.5695 52.7083 80.5904 52.7083 78.2293C52.7083 75.8681 53.5069 73.889 55.1041 72.2918L72.7083 54.6876C74.3055 53.0904 76.2846 52.2918 78.6458 52.2918C81.0069 52.2918 82.986 53.0904 84.5833 54.6876L87.4999 57.6043L78.3333 66.7709L90.4166 78.9584C91.2499 79.7918 91.6666 80.764 91.6666 81.8751C91.6666 82.9862 91.2499 83.9584 90.4166 84.7918L85.2083 90.0001C84.3749 90.8334 83.4027 91.2501 82.2916 91.2501C81.1805 91.2501 80.2083 90.8334 79.3749 90.0001ZM91.6666 24.5834L44.3749 71.8751L44.8958 72.2918C46.493 73.889 47.2916 75.8681 47.2916 78.2293C47.2916 80.5904 46.493 82.5695 44.8958 84.1668L41.9791 87.0834L32.8124 77.9168L20.6249 90.0001C19.7916 90.8334 18.8194 91.2501 17.7083 91.2501C16.5971 91.2501 15.6249 90.8334 14.7916 90.0001L9.58325 84.7918C8.74992 83.9584 8.33325 82.9862 8.33325 81.8751C8.33325 80.764 8.74992 79.7918 9.58325 78.9584L21.6666 66.7709L12.4999 57.6043L15.4166 54.6876C17.0138 53.0904 18.993 52.2918 21.3541 52.2918C23.7152 52.2918 25.6944 53.0904 27.2916 54.6876L27.7083 55.2084L74.9999 7.91675H91.6666V24.5834ZM28.9583 45.2084L8.33325 24.5834V7.91675H24.9999L45.6249 28.5417L28.9583 45.2084Z"
            fill="inherit"/>
        </g>
      </g>
      <defs>
        <filter id="filter0_d_40_2022" x="-4" y="0" width="108%" height="108%" filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                         result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.113725 0 0 0 0 0.0823529 0 0 0 0 0.117647 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_40_2022"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_40_2022" result="shape"/>
        </filter>
      </defs>
    </svg>
  );
}
