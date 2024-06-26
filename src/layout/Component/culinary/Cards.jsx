import React, { useState } from "react";

function Cards({ img, name, shortDesc, desc, price, category, count }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <button className="flex flex-col text-wrap" onClick={() => document.getElementById(`modals_menu-${count}`).showModal()}>
        <div className="card w-80 sm:w-96 bg-base-100 shadow-xl">
          <figure><img src={img} alt={name} className="object-cover w-full h-48" /></figure>
          <div className="card-body">
            <h2 className="card-title">
              {name}
            </h2>
            <p className="text-sm sm:text-base">{shortDesc}</p>
            <div className="card-actions justify-end flex-wrap">
              {category && category.map((cat, index) => (
                <div key={index} className="badge badge-outline">{cat}</div>
              ))}
            </div>
          </div>
        </div>
      </button>

      <dialog id={`modals_menu-${count}`} className="modal">
        <div className="modal-box w-11/12 max-w-3xl sm:max-w-5xl modal-bottom sm:modal-middle">
          <span className="font-bold text-lg">{name}</span>
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <div className="flex flex-col sm:flex-row gap-8">
            <img src={img} className="w-full sm:w-1/2" alt={name} />
            <div className="flex flex-col gap-4">
              <span className="text-base sm:text-lg">{desc}</span>
              <div className="card-actions justify-end flex-wrap">
                {category && category.map((cat, index) => (
                  <div key={index} className="badge badge-outline">{cat}</div>
                ))}
              </div>
              <span className="text-lg sm:text-xl">{price}</span>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default Cards;
