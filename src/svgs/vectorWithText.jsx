import * as React from "react"
const VectorWithText = (props) => (
  <svg viewBox="0 0 800 750" {...props}>
    <defs>
        <mask id="jobMask" maskUnits="userSpaceOnUse" x="0" y="0" width="800" height="750">
      <filter id="jobFilter" x={0} y={0}>
        <feGaussianBlur in="SourceGraphic" stdDeviation={10} />
        <feOffset dx={10} dy={20} />
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <path class="mask" fill="white" d="M220.9,396.8c-259.7,66.7-53.6,390.1,235.9,312.7c290.4-77.6,267.4-641,48.1-670 C268,8.1,413,347.4,220.9,396.8z"></path>
      </mask>
      <text id="jobText" x="560" y="348" font-size="100" letter-spacing="-4px" font-weight="bold" text-anchor="middle">
                                        Job Offers                                    </text>
    </defs>
    <path
      fill="rgba(191, 0, 0, .5)"
      d="M220.9 396.8c-259.7 66.7-53.6 390.1 235.9 312.7 290.4-77.6 267.4-641 48.1-670C268 8.1 413 347.4 220.9 396.8z"
      className="letter shadow-letter"
      filter="url(#a)"
    />
    <path
      fill="#006cfc"
      d="M220.9 396.8c-259.7 66.7-53.6 390.1 235.9 312.7 290.4-77.6 267.4-641 48.1-670C268 8.1 413 347.4 220.9 396.8z"
      className="letter main-letter"
    />
    <use xlinkHref="#jobText" fill="#006cfc"></use>
    <use xlinkHref="#jobText" fill="white" mask="url(#jobMask)"></use>
  </svg>
)
export default VectorWithText
