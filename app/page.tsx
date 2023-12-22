import {Button} from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  const views = ['dashboard', 'authentication', 'forms', 'cards', 'music', 'playground']
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="flex flex-col gap-6 z-10 max-w-5xl w-full items-center justify-center font-mono">
        {
          views.map((view) => {
            return (
              <li key={view} className="list-none">
                <Link href={view}>
                  <Button className="text-xl">
                    {view}
                  </Button>
                </Link>
              </li>)
          })
        }
      </div>
    </main>
  )
}
