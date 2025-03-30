import React from 'react'
import EventCard from './EventCard'
import { ClockAlert } from 'lucide-react'

const NextEvent = () => {
  return (
    <div className='p-5 bg-white rounded-md shadow-md space-y-5'>
        <div className="badge border bg-tmmf-ligth font-bold uppercase badge-primary px-10 py-4 cursor-default">
            <ClockAlert size={18} strokeWidth={3} />
            <p>Próximo Evento</p>
        </div>
      <EventCard />
    </div>
  )
}

export default NextEvent
