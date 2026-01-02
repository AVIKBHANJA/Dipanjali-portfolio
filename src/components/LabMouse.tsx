interface LabMouseProps {
  className?: string;
  size?: number;
  flip?: boolean;
}

const LabMouse = ({ className = "", size = 80, flip = false }: LabMouseProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ transform: flip ? "scaleX(-1)" : undefined }}
    >
      {/* Large Left Ear */}
      <ellipse
        cx="28"
        cy="22"
        rx="16"
        ry="20"
        fill="#fce8ec"
        stroke="#f5d5db"
        strokeWidth="1"
      />
      <ellipse
        cx="28"
        cy="22"
        rx="10"
        ry="13"
        fill="#f8b4c0"
      />
      
      {/* Large Right Ear */}
      <ellipse
        cx="72"
        cy="22"
        rx="16"
        ry="20"
        fill="#fce8ec"
        stroke="#f5d5db"
        strokeWidth="1"
      />
      <ellipse
        cx="72"
        cy="22"
        rx="10"
        ry="13"
        fill="#f8b4c0"
      />
      
      {/* Head/Face - main white fluffy shape */}
      <ellipse
        cx="50"
        cy="50"
        rx="32"
        ry="30"
        fill="#fafafa"
        stroke="#e8e8e8"
        strokeWidth="0.5"
      />
      
      {/* Cheek fluff left */}
      <ellipse
        cx="28"
        cy="55"
        rx="12"
        ry="10"
        fill="#fafafa"
      />
      
      {/* Cheek fluff right */}
      <ellipse
        cx="72"
        cy="55"
        rx="12"
        ry="10"
        fill="#fafafa"
      />
      
      {/* Snout area */}
      <ellipse
        cx="50"
        cy="60"
        rx="14"
        ry="10"
        fill="#fefefe"
      />
      
      {/* Nose - pink */}
      <ellipse
        cx="50"
        cy="55"
        rx="5"
        ry="4"
        fill="#f095a2"
      />
      <ellipse
        cx="50"
        cy="54"
        rx="2"
        ry="1.5"
        fill="#f8b4c0"
        opacity="0.6"
      />
      
      {/* Left Eye */}
      <ellipse
        cx="38"
        cy="42"
        rx="5"
        ry="5.5"
        fill="#1a1a1a"
      />
      <circle cx="36" cy="40" r="1.5" fill="#fff" />
      
      {/* Right Eye */}
      <ellipse
        cx="62"
        cy="42"
        rx="5"
        ry="5.5"
        fill="#1a1a1a"
      />
      <circle cx="60" cy="40" r="1.5" fill="#fff" />
      
      {/* Whiskers - left side */}
      <g stroke="#d4d4d4" strokeWidth="0.6" strokeLinecap="round">
        <line x1="32" y1="52" x2="12" y2="46" />
        <line x1="32" y1="56" x2="10" y2="56" />
        <line x1="32" y1="60" x2="12" y2="66" />
      </g>
      
      {/* Whiskers - right side */}
      <g stroke="#d4d4d4" strokeWidth="0.6" strokeLinecap="round">
        <line x1="68" y1="52" x2="88" y2="46" />
        <line x1="68" y1="56" x2="90" y2="56" />
        <line x1="68" y1="60" x2="88" y2="66" />
      </g>
      
      {/* Front paws */}
      <ellipse
        cx="38"
        cy="78"
        rx="8"
        ry="5"
        fill="#fce8ec"
      />
      <ellipse
        cx="62"
        cy="78"
        rx="8"
        ry="5"
        fill="#fce8ec"
      />
      
      {/* Paw details */}
      <circle cx="35" cy="78" r="1.5" fill="#f8b4c0" />
      <circle cx="38" cy="79" r="1.5" fill="#f8b4c0" />
      <circle cx="41" cy="78" r="1.5" fill="#f8b4c0" />
      
      <circle cx="59" cy="78" r="1.5" fill="#f8b4c0" />
      <circle cx="62" cy="79" r="1.5" fill="#f8b4c0" />
      <circle cx="65" cy="78" r="1.5" fill="#f8b4c0" />
    </svg>
  );
};

export default LabMouse;
