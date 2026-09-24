"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { createPlan } from "@/services/auth";

export default function Home() {
  const handleSeleccionarImagen = (e: React.ChangeEvent<HTMLInputElement>) => {
    const archivo = e.target.files?.[0];
    if (archivo) {
      const urlPreview = URL.createObjectURL(archivo);
      setImagenVistaPrevia(urlPreview);
    }
  };
  const [imagen, setImagen] = useState("");
  const [nombrePlan, setNombrePlan] = useState("");
  const [direccion, setDireccion] = useState("");
  const [precio, setPrecio] = useState(0);
  const [duracion, setDuracion] = useState(0);
  const [descripcion, setDescripcion] = useState("");
  const [recomendaciones, setRecomendaciones] = useState("");

  const [imagenVistaPrevia, setImagenVistaPrevia] = useState<string | null>(
    null,
  );
  const inputArchivoRef = useRef<HTMLInputElement>(null);
  const handleBotonSubirFotoClick = () => {
    inputArchivoRef.current?.click();
  };

  const handleCrearPlan = () => {
    createPlan(
      nombrePlan,
      descripcion,
      precio,
      duracion,
      recomendaciones,
      direccion,
      imagen,
    );
  };
  return (
    <div className="flex flex-col h-screen w-screen bg-gray-200">
      <div className="flex flex-row text-black">
        <h1 className="text-2xl">Crear un nuevo plan</h1>
      </div>
      <div className="flex flex-row text-black">
        <h1>
          Organiza, invita a tus amigos o abre plazas para que otros miembros se
          sumen a vivir momentos únicos.
        </h1>
      </div>
      <div className="flex flex-row text-black">
        <div className="flex flex-col bg-white rounded-lg h-full w-full">
          <p>Foto de portada del plan</p>
          <div className="flex flex-col items-center justify-center w-full max-w-md h-64 lg:h-100 md:h-64 sm:h-50 border-2 border-1 border-stone-400 rounded-xl bg-stone-50 hover:bg-stone-100 transition-colors overflow-hidden relative group">
            {/* {imagen != "" ? (
              <div className="relative w-full h-full">
                <Image
                  src={imagen}
                  alt="imagen"
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="flex flex-col items-center gap-2 p-6 text-center">
                <p className="text-stone-700 font-medium text-sm">preview</p>
              </div>
            )} */}
            <input
              className="bg-white rounded-lg p-3"
              placeholder="https://"
              onChange={(e) => setImagen(e.target.value)}
            ></input>
          </div>
          {/* <div className="flex flex-row bg-stone-300  transition hover:bg-stone-500  border rounded-md my-4">
            <button
              onClick={handleBotonSubirFotoClick}
              className="text-black cursor-pointer my-4 mx-4"
            >
              subir
            </button>
          </div> */}
          <div className="flex flex-row w-full">
            <div className="flex flex-col w-full">
              <div className="flex flex-row">
                <p className="text-black">Nombre del plan</p>
                <p className="text-red-200 "> *</p>
              </div>

              <div className="bg-stone-200 rounded-md w-full">
                <input
                  onChange={(e) => setNombrePlan(e.target.value)}
                  className="text-black w-full"
                ></input>
              </div>
            </div>
          </div>
          <div className="flex flex-row w-full">
            <div className="flex flex-col">
              <div className="flex flex-row">
                <p className="text-black">Dirección</p>
                <p className="text-red-200 "> *</p>
              </div>

              <div className="bg-stone-200 rounded-md ">
                <input
                  onChange={(e) => setDireccion(e.target.value)}
                  className="text-black w-full"
                ></input>
              </div>
            </div>
          </div>
          <div className="flex flex-row w-full">
            <div className="flex flex-col">
              <div className="flex flex-row">
                <p className="text-black">Precio estimado</p>
                <p className="text-red-200 "> *</p>
              </div>

              <div className="bg-stone-200 rounded-md ">
                <input
                  onChange={(e) => setPrecio(e.target.valueAsNumber)}
                  className="text-black w-full"
                ></input>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row">
                  <p className="text-black">Duración (minutos)</p>
                  <p className="text-red-200 "> *</p>
                </div>

                <div className="bg-stone-200 rounded-md ">
                  <input
                    onChange={(e) => setDuracion(e.target.valueAsNumber)}
                    className="text-black w-full"
                  ></input>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row w-full">
            <div className="flex flex-col w-full">
              <div className="flex flex-row">
                <p className="text-black">Descripción del plan</p>
                <p className="text-red-200 "> *</p>
              </div>

              <div className="bg-stone-200 rounded-md ">
                <textarea
                  // onKeyDown={handleKeyDown}
                  placeholder="Escribe acá..."
                  className="w-full bg-transparent text-black placeholder-stone-400 outline-none overflow-y-auto resize-none
                [&::-webkit-scrollbar]:w-2
                [&::-webkit-scrollbar-track]:bg-stone-200/60
                [&::-webkit-scrollbar-track]:rounded-md
                [&::-webkit-scrollbar-thumb]:bg-stone-400
                [&::-webkit-scrollbar-thumb]:rounded-md
                [&::-webkit-scrollbar-thumb]:min-h-[3px]
                hover:[&::-webkit-scrollbar-thumb]:bg-stone-500
                active:[&::-webkit-scrollbar-thumb]:bg-stone-600"
                  onChange={(e) => setDescripcion(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row w-full">
            <div className="flex flex-col w-full">
              <div className="flex flex-row">
                <p className="text-black">
                  Recomendaciones para los asistentes
                </p>
              </div>
              <div className="flex flex-row">
                <p className="text-black">
                  Agrega tips clave como vestimenta recomendada, qué llevar o
                  recordatorios puntuales.
                </p>
              </div>

              <div className="bg-stone-200 rounded-md ">
                <textarea
                  // onKeyDown={handleKeyDown}
                  placeholder="Escribe acá..."
                  className="w-full bg-transparent text-black placeholder-stone-400 outline-none overflow-y-auto resize-none
                [&::-webkit-scrollbar]:w-2
                [&::-webkit-scrollbar-track]:bg-stone-200/60
                [&::-webkit-scrollbar-track]:rounded-md
                [&::-webkit-scrollbar-thumb]:bg-stone-400
                [&::-webkit-scrollbar-thumb]:rounded-md
                [&::-webkit-scrollbar-thumb]:min-h-[3px]
                hover:[&::-webkit-scrollbar-thumb]:bg-stone-500
                active:[&::-webkit-scrollbar-thumb]:bg-stone-600"
                  onChange={(e) => setRecomendaciones(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row w-full">
            <div className="flex flex-col w-full">
              <div className="flex flex-row">
                <div className="flex flex-col flex-1">
                  <button type="submit">Cancelar</button>
                </div>
                <div className="flex flex-col flex-1 ">
                  <button
                    onClick={handleCrearPlan}
                    className="bg-blue-800/60 transition hover:bg-blue-800"
                  >
                    Publicar el plan{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
