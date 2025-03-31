export default function Arrow_drop_down({
  className = "",
}: Arrow_drop_downProps) {
  return (
    <div className={`${className}`}>
      <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 15L7 10H17L12 15Z" fill="#1D1B20"/>
      </svg>
      
    </div>
  );
}

interface Arrow_drop_downProps {
  className?: string;
}
