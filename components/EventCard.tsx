"use client";
import { Calendar, Check, Clock, MapPin, Users, X } from "lucide-react";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

const EventCard = () => {
  const [isPresente, setPresente] = useState<boolean | null>(null); // TODO: Trocar para presença no DB

  return (
    <div className="bg-white w-full rounded-lg shadow-xs border border-border py-4 px-5 flex flex-col space-y-5">
      {/* Dados */}
      <div className="w-full space-y-2 flex flex-col max-md:items-start">
        {/* Titulo */}
        <div className="flex flex-row justify-between max-md:flex-col">
          <div className="flex flex-row items-center justify-center gap-2">
            <h1 className="font-bold text-xl uppercase">
              Reunião Ritualistica
            </h1>
            <div className="badge badge-primary badge-sm rounded-xl w-max px-3 font-semibold">
              Reunião
            </div>
          </div>

          {/* Badge Presença */}
          {isPresente !== null && (
            <div
              className={cn(
                "badge text-white rounded-xl w-max px-3 font-semibold",
                isPresente ? "badge-success" : "badge-error"
              )}
            >
              {isPresente ? <Check height={15} /> : <X height={15} />}
              {isPresente ? "Presente" : "Ausente"}
            </div>
          )}
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
      <div className="flex flex-row justify-between max-md:flex-col max-md:items-start">
        {/* Btns */}
        <div className="flex flex-row gap-2">
          {/* Confirmar */}
          <button
            onClick={() => setPresente(true)}
            className={cn(
              "flex flex-row gap-2 px-2 py-2 border border-border rounded-md font-semibold text-sm items-center justify-center cursor-pointer",
              isPresente ? "text-white bg-success border-success" : ""
            )}
          >
            <Check height={20} /> Confirmar Presença
          </button>
          {/* Ausencia */}
          <button
            onClick={() => setPresente(false)}
            className={cn(
              "flex flex-row gap-2 px-2 py-2 border border-border text-error rounded-md font-semibold text-sm items-center justify-center cursor-pointer",
              isPresente === false ? "text-white bg-error border-error" : ""
            )}
          >
            <X height={20} /> Justificar Ausência
          </button>
        </div>
        {/* Nominata */}
        <button className="flex flex-row gap-2 px-2 py-2 items-center justify-center cursor-pointer">
          <Users height={20} /> Ver Nominata
        </button>
      </div>
    </div>
  );
};

export default EventCard;
