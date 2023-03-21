import './Parametre.css'
import { useState } from 'react'
import imgNana from '../../assets/nana.png'
import imgTomate from '../../assets/tomate.png'
import imgAloevera from '../../assets/aloevera.png'

function Parametre() {
    const [plante, setPlante] = useState<string>("");

    return(
      <div className='flex flex-col bg-white shadow-lg justify-center py-8 mx-32 items-center rounded-lg'>
        <h1 className='w-full text-center mb-5 text-emerald-600 text-2xl font-medium'> Paméterer l'arrosage</h1>
        <form className='w-full flex flex-col justify-center place-items-center'>
            <div className='flex flex-row w-full justify-center mb-8'>
                <label className='w-2/6 mt-2 text-xl'>Type de plante</label>
                <select className='w-1/2 h-12 ml-8 bg-white border border-gray-200 rounded '>
                    <option value="" selected>Choisissez une plante</option>
                    <option value="tomate">Tomate <img src={imgTomate} alt="" /></option>
                    <option value="aloevera">Aloe vera <img src={imgAloevera} alt="" /></option>
                    <option value="nana">Nana <img src={imgNana} alt="" /></option>
                </select>
            </div>
            <div className='flex flex-row w-full justify-center mb-8'>
                <label className='w-2/6 mt-2 text-xl'>Nombre d'arrosage</label>
                <input className='w-1/2 h-12 ml-8 border border-gray-200 rounded' type="text" />
            </div>
            <div className='flex flex-row w-full justify-center mb-8'>
                <label className='w-2/6 mt-2 text-xl'>Heures d'arrosage</label>
                <input className='w-1/2 h-12 ml-8 border border-gray-200 rounded' type="text" />
            </div>
            <button type='submit' className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded ml-auto mr-11">
                Sauvegarder
            </button>
        </form>
      </div>
    )
  
  }
  
  export default Parametre