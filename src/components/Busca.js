import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { InputText } from 'primereact/inputtext'

const Busca = () => {
  const [termoDeBusca, setTermoDeBusca] = useState('React')
  const [resultados, setResultados] = useState([])
  console.log(resultados)

  useEffect(() => {
    //definimos a função
    const fazBusca = async () => {
        const { data } = await axios.get(
            'https://en.wikipedia.org/w/api.php',{
                params:{
                    action: 'query',
                    list: 'search',
                    format: 'json',
                    // instruindo o navegador a permitir
                    // conteudo de qualquer origem
                    origin: '*',
                    srsearch: termoDeBusca
                }
            }
        )
        setResultados(data.query.search)
    }
    fazBusca()
  }, [termoDeBusca])
  return (
    <div>
        <span className="p-input-icon-left">
            <i className="pi pi-search"></i>
            <InputText
                onChange={(e) => setTermoDeBusca(e.target.value)}
            />
        </span>
    </div>
  )
}

export default Busca