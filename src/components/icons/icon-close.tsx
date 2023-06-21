import {FC} from "react";

export const IconClose: FC = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <line className="cls-1" x1="18.36" y1="18.36" x2="5.64" y2="5.64" fill="none" style={{strokeLinecap:"round", strokeLinejoin: "bevel", strokeWidth: "1.5px"}} />
      <line className="cls-1" x1="18.36" y1="5.64" x2="5.64" y2="18.36" fill="none" style={{strokeLinecap:"round", strokeLinejoin: "bevel", strokeWidth: "1.5px"}} />
    </svg>
  )
}
