export default function Line1({ className = "" }: Line1Props) {
  return (
    <div className={`${className}`}>
      <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 1 740.5" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 740.5L1 -0.000366211" stroke="black" stroke-opacity="0.25"/>
      </svg>
      
    </div>
  );
}

interface Line1Props {
  className?: string;
}
