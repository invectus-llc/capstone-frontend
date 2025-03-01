import { useRef } from "react";

export default function useLoginScript() {
  const containerRef = useRef(null);

  const handleRegisterClick = () => {
    if (containerRef.current) {
      containerRef.current.classList.add("active");
    }
  };

  const handleLoginClick = () => {
    if (containerRef.current) {
      containerRef.current.classList.remove("active");
    }
  };

  return { containerRef, handleRegisterClick, handleLoginClick };
}