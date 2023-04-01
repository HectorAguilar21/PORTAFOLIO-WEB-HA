import React from "react";

export default function ModalInfoStack({ children, infoModal, titleModal }) {
  return (
    <div
      class="modal fade"
      id={infoModal}
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
        <div class="modal-content bg-white border-none px-10 pb-3 rounded-3xl">
          <div class="modal-body">
            <h1
              class="modal-title title-stack text-indigo-800 text-5xl py-3"
              id="exampleModalLabel"
            >
              {titleModal}
            </h1>
            <div className="text-black pb-10 parragraph-section sFHD:text-2xl sTPRO:text-xl sTMINI:text-lg sHD:text-justify sMINI:text-center">
              {children}
            </div>
            <button
              type="button"
              class="btn title-buttons bg-red-500 text-white w-full hover:bg-red-600 uppercase text-xl"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
