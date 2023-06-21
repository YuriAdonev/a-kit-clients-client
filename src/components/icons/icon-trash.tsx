import {FC} from "react";

export const IconTrash: FC = () => {
  return (
    <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <line x1="15" y1="17.2" x2="9" y2="11.2" fill="none" style={{strokeLinecap:"round", strokeLinejoin: "bevel", strokeWidth: "1.5px"}}/>
      <line x1="15" y1="11.2" x2="9" y2="17.2" fill="none" style={{strokeLinecap:"round", strokeLinejoin: "bevel", strokeWidth: "1.5px"}}/>
      <rect x="3" y="1.81" width="18" height="4" rx="1" fill="none" style={{strokeLinecap:"round", strokeLinejoin: "bevel", strokeWidth: "1.5px"}}/>
      <path d="M19,5.81V20.19a2,2,0,0,1-2,2H7a2,2,0,0,1-2-2V5.81" fill="none" style={{strokeLinecap:"round", strokeLinejoin: "bevel", strokeWidth: "1.5px"}}/>
    </svg>
  )
}
