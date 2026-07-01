import { useState } from 'react'

const initialFormData = {
  nombre: '',
  apellido: '',
  telefono: '',
  email: '',
  edad: '',
  servicio: '',
  mensaje: '',
}

function useContactForm() {
  const [formData, setFormData] = useState(initialFormData)

  const handleChange = (event) => {
    const { name, value } = event.target
    const nextFormData = { ...formData, [name]: value }

    setFormData(nextFormData)
    console.log('Cambio en input:', { name, value, formData: nextFormData })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Datos enviados:', formData)
  }

  const handleReset = () => {
    setFormData(initialFormData)
    console.log('Formulario reseteado:', initialFormData)
  }

  return {
    formData,
    handleChange,
    handleReset,
    handleSubmit,
  }
}

export default useContactForm
