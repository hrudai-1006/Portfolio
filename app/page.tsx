import AuralisDemo from "@/components/auralis-demo"
import PrismCometPreloader from "@/components/ui/prism-comet-preloader"

export default function Home() {
  return (
    <main className="relative min-h-dvh w-full overflow-x-clip bg-[#010103]">
      <PrismCometPreloader
        word="ChaosVerse"
        caption="Agents · Vision · Recovery"
        waitForEnter
        grid={false}
        stars
      >
        <AuralisDemo />
      </PrismCometPreloader>
    </main>
  )
}
