import { Spinner } from "@container101/ui";
import { useRef, useState } from "react";
import { useOnClickOutside } from "@container101/hooks";

export default function Web() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isModalOpen, setModalOpen] = useState(false);

  useOnClickOutside(ref, () => setModalOpen(false));

  return (
    <div className="flex flex-col">
      <Spinner />
      <div>Docs</div>
      <div>
        {isModalOpen ? (
          <div ref={ref}>
            👋 Hey, Im a modal. Click anywhere outside of me to close.
          </div>
        ) : (
          <button onClick={() => setModalOpen(true)}>Open Modal</button>
        )}
      </div>
    </div>
  );
}
