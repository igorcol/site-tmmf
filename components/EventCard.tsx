import { Calendar, Clock, MapPin } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

const EventCard = () => {
  return (
    <div className="bg-white w-full rounded-lg shadow-xs border border-border py-4 px-5 flex flex-col space-y-5">
      {/* Dados */}
      <div className="w-full space-y-2">
        {/* Titulo */}
        <div>
          <div className="badge badge-primary rounded-xl w-max px-3 font-semibold">
            Reunião
          </div>
          <h1 className="font-bold text-xl">Reunião Ritualistica</h1>
        </div>

        {/* Data, Horário, Local */}
        <div className="text-gray-600">
          <p className="flex flex-row gap-2">
            <Calendar width={16} /> 28/06/2025
          </p>
          <p className="flex flex-row gap-2">
            <Clock width={16} /> 15:00
          </p>
          <p className="flex flex-row gap-2">
            <MapPin width={16} /> A.R.L.S Inteligência e Poder
          </p>
        </div>
      </div>

      {/* Descrição */}
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque impedit
          ducimus numquam optio nostrum reprehenderit labore modi, et quos
          doloribus excepturi rerum quasi accusantium nulla cupiditate a amet
          deleniti deserunt?
        </p>
      </div>

      {/* Confirmação */}
      <div className="flex flex-row justify-between">
        {/* Btns */}
        <div className="flex flex-row gap-5">
          <Button>Presente</Button>
          <Button>Ausente</Button>
        </div>
        {/* Nominata */}
        <p>Ver Nominata</p>
      </div>
    </div>
  );
};

export default EventCard;
