import React from 'react'
import ReactDom from 'react-dom'
import "./modal.css"


const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 10
}

export default function Modal({ open, children, onClose }) {
  if (!open) return null

  return ReactDom.createPortal(
    <div>
      <div style={OVERLAY_STYLES} />
      <div className="modal-style">
        {children}
      </div>
    </div>,
    document.getElementById('portal')
  )
}