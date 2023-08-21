import ButtonComponent from "@/Components/ui/button"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ButtonComponent color="deep-purple" variant="filled" size="lg" ripple={true}>
        Button
      </ButtonComponent>

    </main>
  )
}
