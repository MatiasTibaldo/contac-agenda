import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className="container">
      <h1>Agenda de Contactos</h1>
      <Link to="/new">
        <button renderAs="button">
            <span>Nuevo contacto</span>
        </button>
      </Link>
      <button>
          Editar contacto
      </button>
      <button>
          Eliminar contacto
      </button>
      <button>
          Buscar contacto
      </button>
      <button>
          Listar contacto
      </button>
    </div>
  )
}