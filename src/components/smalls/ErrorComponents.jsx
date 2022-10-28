import React from "react";

const ErrorComponents = ({ backgroundColor, message }) => {
  return (
    <div
      className={
        backgroundColor +
        " rounded text-swatch_6 fixed bottom-14 left-1/2 -translate-x-1/2 transition-all duration-150 ease-linear "
      }
    >
      {/* <p
        //   ref={notificationRef}
        className={
          backgroundColor +
          " bg-swatch_9 rounded p-2 text-swatch_9 fixed bottom-14 opacity-0 left-1/2 -translate-x-1/2 transition-all duration-150 ease-linear"
        }
      > */}
      {message}
      {/* </p> */}
    </div>
  );
};

export default ErrorComponents;
