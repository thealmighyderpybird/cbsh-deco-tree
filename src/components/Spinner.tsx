export default function Spinner({ size }: { size?: number }) {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" shapeRendering="auto" width={size} height={size}
                preserveAspectRatio="xMidYMid" className="block bg-transparent stroke-white">
        <circle cx="50" cy="50" r="30" fill="none" strokeWidth="10" strokeLinecap="round" className="transition-none">
            <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" keyTimes="0;0.5;1"
                              dur="1s" values="0 50 50;180 50 50;720 50 50" />
            <animate attributeName="stroke-dasharray" repeatCount="indefinite" keyTimes="0;0.5;1" dur="1s"
                     values="18.84955592153876 169.64600329384882;94.2477796076938 94.24777960769377;18.84955592153876 169.64600329384882" />
        </circle>
    </svg>
};