import React from 'react';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import propTypes from 'prop-types';
import '@reach/dialog/styles.css';

function Modal({
  id,
  isOpen,
  onClose,
  closeLabel,
  onOK,
  OKLabel,
  children,
  ...rest
}) {
  return (
    <DialogOverlay
      {...rest}
      isOpen={isOpen}
      className="flex flex-col justify-center items-center z-50"
      onDismiss={onClose}
    >
      <DialogContent
        aria-labelledby={id}
        className="p-8 md:p-12 md:pb-8 rounded-lg flex flex-col space-y-8 my-0 shadow-lg w-9/12 md:w-1/2 text-lg"
      >
        <p className="">
          {children}
        </p>
        <div className="flex flex-col md:flex-row justify-end space-y-4 md:space-x-4 md:space-y-0">
          {OKLabel && (
            <button type="button" className="btn-primary min-w-4rem" onClick={onOK}>
              {OKLabel}
            </button>
          )}
          <button
            type="button"
            className={OKLabel ? `btn-secondary min-w-4rem` : `btn-primary min-w-4rem`}
            onClick={onClose}
          >
            {closeLabel}
          </button>
        </div>
      </DialogContent>
    </DialogOverlay>
  );
}

Modal.propTypes = {
  id: propTypes.string.isRequired,
  onClose: propTypes.func.isRequired,
  onOK: propTypes.func,
  children: propTypes.node.isRequired,
};

export default Modal;
