import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className="container">
      <h1>Agenda de Contactos</h1>
      <Link to="/new">
        <button>
            <span>Nuevo contacto</span>
        </button>
      </Link>
      <Link to="/edit">
        <button>
            <span>Editar contactos</span>
        </button>
      </Link>
      <Link to="/delete">
        <button>
            <span>Eliminar contactos</span>
        </button>
      </Link>
      <Link to="/search">
      <button>
          Buscar contacto
      </button>
      </Link>
      <Link to="/list">
        <button>
            <span>Listar contactos</span>
        </button>
      </Link>
    </div>
  )
}