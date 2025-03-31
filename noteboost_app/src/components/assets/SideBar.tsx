export default function SideBar({ className = "" }: SideBarProps) {
  return (
    <div className={`${className}`}>
      <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 16 14.65" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.33325 7.2015C1.33325 4.89887 1.33325 3.74756 2.1143 3.03223C2.89535 2.31689 4.15243 2.31689 6.66658 2.31689H9.33325C11.8474 2.31689 13.1045 2.31689 13.8855 3.03223C14.6666 3.74756 14.6666 4.89887 14.6666 7.2015V8.42265C14.6666 10.7253 14.6666 11.8766 13.8855 12.5919C13.1045 13.3073 11.8474 13.3073 9.33325 13.3073H6.66658C4.15243 13.3073 2.89535 13.3073 2.1143 12.5919C1.33325 11.8766 1.33325 10.7253 1.33325 8.42265V7.2015Z" stroke="black" stroke-width="1.5"/>
      <path d="M10 13.3076L10 2.31726" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
      
    </div>
  );
}

interface SideBarProps {
  className?: string;
}
