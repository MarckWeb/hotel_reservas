import React from 'react'

const RoomForm = ({ room }: any) => {
  return (
    <div>
      <div>
        <label htmlFor="">Nº de habitaciones</label>
        <select name="" id="">
          <option value="">a</option>
          <option value="">b</option>
        </select>
      </div>
      <div>
        <label htmlFor="">Otros Servicios</label>
        <select name="" id="">
          <option value="">a</option>
          <option value="">b</option>
        </select>
      </div>

      <p>
        <span>Total</span> <span>{room[0]?.price}</span>
      </p>

      <ul>
        <li>
          <span>Articulo:r</span> <span> 2 Suiteluxi</span>
        </li>
        <li>
          <span>IVA</span> <span>21% Incluido</span>
        </li>
        <li>
          <span>Fecha</span> <span>2 Dic a 12 dic 2023</span>
        </li>
      </ul>
    </div>
  )
}

export default RoomForm
