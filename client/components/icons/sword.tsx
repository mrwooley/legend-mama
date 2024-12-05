
// Google Icons
export default function Sword({
                                dim = 100,
                                shadow = false,
                                ...props
                              }) {
  const filter = shadow ? "url(#filter0_d_40_2022)" : "none";
  return (
    <svg width={dim} viewBox="0 0 105 102"
         className="fill-button-fill-1 stroke-2 stroke-button-fill-1 hover:fill-highlight group-data-[state=on]:fill-accent-2" {...props}>
      <g filter={filter}>
        <path
          d="M19.0673 97.9976C17.4527 100.136 15.4241 100.653 13.6436 99.1041C10.6138 96.4687 7.78746 93.5662 5.12699 90.5551C3.3587 88.5538 3.73973 86.5346 5.79092 84.5774C10.7079 79.8859 15.4508 75.013 20.3068 70.1705C16.7027 66.62 13.1071 63.0778 9.54998 59.5736C16.1411 51.1725 20.3936 48.9534 28.2523 55.649C29.0069 54.9336 29.7923 54.2205 30.543 53.4726C47.8507 36.2274 65.1361 18.9597 82.509 1.77997C83.4723 0.827348 85.1397 0.152142 86.5041 0.108152C92.2092 -0.075795 97.9237 0.0306153 103.988 0.0306153C103.988 6.50105 104.044 12.8552 103.914 19.2055C103.898 19.9738 102.958 20.808 102.3 21.4658C84.9472 38.8056 67.575 56.1257 50.2092 73.452C49.5269 74.1328 48.8733 74.8423 48.2182 75.5261C54.3612 82.6043 54.012 86.1166 45.2074 93.7284C41.6335 90.1164 38.0661 86.5109 34.3795 82.7851C28.9353 88.2 24.0829 93.0263 19.0673 97.9976Z"
          fill="inherit"/>
      </g>
      <defs>
        <filter id="filter0_d_27_38" x="0" y="0" width="108%" height="108%" filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                         result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.113725 0 0 0 0 0.0823529 0 0 0 0 0.117647 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_27_38"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_27_38" result="shape"/>
        </filter>
      </defs>
    </svg>
  );
}
