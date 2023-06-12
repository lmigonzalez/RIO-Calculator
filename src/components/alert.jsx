import style from "./style.module.css";
import css from "classnames";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function Alert({ children, type, message }) {
  const [isShow, setIsShow] = useState(true);

  const renderElAlert = function () {
    return React.cloneElement(children);
  };
    
    useEffect(() => {
     setTimeout(()=>setIsShow(false),5000) 
  },[])

  const handleClose = (e) => {
    e.preventDefault();
    setIsShow(false);
  };

  return (
    <div className={css(style.alert, style[type], !isShow && style.hide)}>
      <span className={style.closebtn} onClick={handleClose}>
        &times;
      </span>
      {children ? renderElAlert() : message}
    </div>
  );
}