import { ModeToggle } from "../components/mode-toggle";


import { useColor } from "@/chakra/hooks/use-color";
import { ScaffoldProvider } from "../contexts/scaffold-context";

export function DefaultLayout(props) {
  const { color } = useColor();

  return (
    <>
      <ModeToggle />
      {props.children}
    </>
  );
}
