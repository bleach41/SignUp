import { MainLayout } from "@/components/layout/main-layout"

export default function Home() {
  return (
    <div className="-mx-2 xl:-mx-60 -mt-8">
      <MainLayout>
        <div className="flex h-full w-full items-center justify-center text-secondary-foreground">
          <h1 className="text-2xl font-bold">Contenido Principal</h1>
        </div>
      </MainLayout>
    </div>
  )
}
