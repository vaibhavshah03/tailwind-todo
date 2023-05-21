import React, { memo } from "react";
import ReactDOM from "react-dom";
import cx from "clsx";

export type ModalProps = React.PropsWithChildren<{
  className?: string;
  containerClass?: string;
  onClick?: () => void;
  onClose: () => void;
  open: boolean;
  overlayClass?: string;
  renderToElement?: Element;
}>;

const ModalComponent = (props: ModalProps) => {
  const { open, onClose, children, className, containerClass, overlayClass } =
    props;
  if (!open) {
    return null;
  }

  const JSX = (
    <>
      <div
        className={cx(
          "fixed inset-0 flex items-center justify-center p-4 px-8",
          containerClass
        )}
      >
        <div className={"fixed inset-0 transition-opacity"} onClick={onClose}>
          <div
            className={cx("absolute inset-0 bg-brown opacity-50", overlayClass)}
          />
        </div>

        <div
          style={{ scrollbarWidth: "thin" }}
          className={cx(
            "max-h-[90vh] w-full overflow-y-auto z-50 shadow-xl",
            className
          )}
        >
          {children}
        </div>
      </div>
    </>
  );

  return ReactDOM.createPortal(
    JSX,
    document.getElementById("modal-container") as Element
  );
};
export const Modal = memo(ModalComponent) as typeof ModalComponent;
