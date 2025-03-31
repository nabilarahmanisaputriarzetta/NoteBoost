export default function Add({ className = "" }: AddProps) {
  return (
    <div className={`${className}`}>
      <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 13.53 12.73" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line y1="6.66602" x2="13.5281" y2="6.66602" stroke="black"/>
      <line x1="6.57349" y1="13.1787" x2="6.57349" y2="0.446404" stroke="black"/>
      </svg>
      
    </div>
  );
}

interface AddProps {
  className?: string;
}
