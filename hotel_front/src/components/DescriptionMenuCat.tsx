import React from 'react'
import Button from './Button'

const DescriptionMenuCat = () => {
  return (
    <section>
      <div>
        <div>
          <p>fecha 30 nov 2023</p>
          <p>Nº Comanda 2155866666</p>
        </div>
        <div></div>
      </div>
      <article>
        <h2>Comanda</h2>
        <table>
          <thead>
            <tr>
              <th>Detalle</th>
              <th>#</th>
              <th>Precio</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ensalada de aiutm</td>
              <td>1</td>
              <td>15 E</td>
              <td>15 E</td>
            </tr>
            <tr>
              <td>Ensalada de aiutm</td>
              <td>1</td>
              <td>15 E</td>
              <td>15 E</td>
            </tr>
            <tr>
              <td>Ensalada de aiutm</td>
              <td>1</td>
              <td>15 E</td>
              <td>15 E</td>
            </tr>
          </tbody>
        </table>

        <div>
          <p>
            <span>Sub-Total:</span> <span>42.25 E</span>
          </p>
          <p>
            <span>IVA:</span> <span>12.15 E</span>
          </p>
        </div>

        <div>
          <p>
            <span>Total:</span> <span>57.40E</span>
          </p>
          <Button type="button" text="Realizar Comanda" />
        </div>
      </article>
    </section>
  )
}

export default DescriptionMenuCat
