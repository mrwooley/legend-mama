// Radix Icons
export default function Triangle({
                                  dim = 15,
                                  ...props
                                }) {
  return (
    <svg width={dim} viewBox="0 0 15 15" {...props}>
      <path
        d="M6 11L6 4L10.5 7.5L6 11Z"
        fill="inherit" fillRule="evenodd" clipRule="evenodd"></path>
    </svg>
  );
}
