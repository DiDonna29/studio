const CoupleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M14 19a2 2 0 1 0-4 0" />
    <path d="M12 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    <path d="M6 19a2 2 0 1 0-4 0" />
    <path d="M4 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    <path d="M12 19v-4" />
    <path d="M12 9V5" />
    <path d="m14 15-2-3-2 3" />
    <path d="m20 15-2-3-2 3" />
    <path d="M4 19v-4" />
    <path d="M4 9V5" />
    <path d="m6 15-2-3-2 3" />
  </svg>
);
export default CoupleIcon;
