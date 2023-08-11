export function scroll(blockId: string) {
    const block = document.getElementById(blockId);
    block?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }