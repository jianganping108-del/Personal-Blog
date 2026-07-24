const observers = new WeakMap();

export const reveal = {
  beforeMount(element, binding) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const delay = Number(binding.value?.delay ?? binding.value ?? 0);
    element.classList.add("reveal-ready");
    element.style.setProperty("--reveal-delay", `${Math.max(0, delay)}ms`);
  },
  mounted(element) {
    if (!element.classList.contains("reveal-ready")) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        element.classList.add("reveal-visible");
        observer.unobserve(element);
        observers.delete(element);
      },
      { threshold: 0.12, rootMargin: "0px 0px -6%" },
    );

    observers.set(element, observer);
    observer.observe(element);
  },
  unmounted(element) {
    observers.get(element)?.disconnect();
    observers.delete(element);
  },
};
