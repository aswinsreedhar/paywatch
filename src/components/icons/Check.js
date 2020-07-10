import * as React from "react";

function SvgComponent(props) {
  return (
    <svg width={27} height={27} {...props}>
      <path
        d="M13.5.26C6.188.26.26 6.189.26 13.5S6.189 26.74 13.5 26.74s13.24-5.928 13.24-13.24C26.731 6.191 20.808.268 13.5.26zm0 25.083c-6.54 0-11.843-5.302-11.843-11.843C1.657 6.96 6.96 1.657 13.5 1.657c6.54 0 11.843 5.302 11.843 11.843-.008 6.537-5.306 11.835-11.843 11.843zm6.238-15.949a.694.694 0 01-.149.973c-2.793 2.048-7.28 7.23-7.327 7.285a.694.694 0 01-.494.238h-.032a.689.689 0 01-.466-.191l-3.929-3.733a.698.698 0 01.964-1.01l3.384 3.258c1.266-1.425 4.688-5.186 7.071-6.94a.698.698 0 01.978.12z"
        fill="fill"
        fillRule="nonzero"
      />
    </svg>
  );
}

export default SvgComponent;
