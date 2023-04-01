import React from "react";

export default function ContentModalReact({
  children,
  infoModal,
  titleModal,
  setDataModal,
}) {
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
              class="modal-title title-stack text-indigo-800 text-5xl py-3 text-center capitalize"
              id="exampleModalLabel"
            >
              {titleModal}
            </h1>
            <div className="flex justify-evenly flex-wrap gap-10 py-10">
              {children}
            </div>
            <button
              type="button"
              class="btn title-buttons bg-red-500 text-white w-full hover:bg-red-600 uppercase text-xl"
              data-bs-dismiss="modal"
              onClick={() => setDataModal("")}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
