import clsx from "classnames";

interface SectionContainerProps {
  children: React.ReactNode;
  id: string;
  className?: string; // Pastikan className ada di props
}

const SectionContainer: React.FC<SectionContainerProps> = ({ children, id, className }) => {
  return (
    <section id={id} className={clsx("container mx-auto px-4 py-10", className)}>
      {children}
    </section>
  );
};

export default SectionContainer;
