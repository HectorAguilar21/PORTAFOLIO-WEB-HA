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
        <div class="modal-content bg-white border-none pb-3 rounded-3xl">
          <div class="modal-body sTMINI:px-[60px] sMINI:px-[30px]">
            <h1
              class="modal-title font-Pattaya text-indigo-800 text-5xl py-3"
              id="exampleModalLabel"
            >
              {titleModal}
            </h1>
            <div className="text-black pb-10 font-SourceSansPro sFHD:text-2xl sTPRO:text-xl sTMINI:text-lg sCXS:text-base sMINI:text-sm sHD:text-justify sMINI:text-center">
              {children}
            </div>
            <button
              type="button"
              class="btn font-SourceSansPro bg-red-500 text-white w-full hover:bg-red-600 uppercase text-xl"
              data-bs-dismiss="modal"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
