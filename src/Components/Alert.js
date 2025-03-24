import React from "react"; //rfce
const capitalize = (words) => {
  const lower = words.toLowerCase();
  return lower.charAt(0).toUpperCase() + lower.slice(1);
};
const Alert = (props) => {
  return (
    props.alert && (
      <div>
        <div
          className={`alert alert-${props.alert.type} alert-dismissible show`}
          role="alert"
        >
          <strong>{capitalize(props.alert?.type ?? "")}</strong>
          {props.alert.msg}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      </div>
    )
  );
};
//&&-if the value of props.alert is null then do not execute further written code if true then return the value of further code
export { Alert };
