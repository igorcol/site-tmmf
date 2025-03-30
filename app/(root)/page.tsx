import AddButton from "@/components/AddButton"
import NextEvent from "@/components/NextEvent";

export default function Home() {
  return (
    <main className="w-full h-full flex flex-col">
      
      <AddButton />

      {/* TROCAR EVENT CARD POR SEÇÃO "PROXIMO EVENTO" */}
      <NextEvent />

      {/* SEÇÃO "FEED" COM VARIOS CARDS DE EVENTO */}
      <p>TODO: feed</p>

    </main>
  );
}
