import React, { useState } from "react";
import styles from "./index.module.scss";
import PropTypes from "prop-types";
import cx from "classnames";

const Accordion = ({ children, isOpen, label }) => {
  const [isOpen2, setIsOpen] = useState(isOpen);
  const onChangeHandler = () => {
    // onChange && onChange(!isOpen);
    setIsOpen(!isOpen2);
  };
  return (
    <div className={styles.wrapper}>
      <span
        className={cx(styles.toggler, { [styles.active]: isOpen })}
        onClick={onChangeHandler}
      >
        {label}
      </span>
      <div
        className={cx(styles.panel, {
          [styles.active]: isOpen,
        })}
      >
        <div className={styles.contentWrapper}>{children}</div>
      </div>
    </div>
  );
};

export default Accordion;

Accordion.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onChange: PropTypes.func,
  children: PropTypes.node,
  label: PropTypes.string.isRequired,
};

Accordion.defaultProps = {
  isOpen: false,
  children: null,
  label: "Accordion",
};
