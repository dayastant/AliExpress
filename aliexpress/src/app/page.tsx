import ThemeToggle from "@/components/shared/theme-toggle";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";


export default function Home() {
  return (
    <div className="p-5">
      <div className="w-100 flex justify-end gap-2">
        <UserButton/>
        <ThemeToggle/>
      </div>
      <h1 className="font-barlow text-blue-500">Welcome our pages</h1>

      <Button variant="destructive">Click here</Button>
    </div>
  );
}
