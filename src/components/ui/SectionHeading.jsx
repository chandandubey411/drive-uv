const SectionHeading = ({ title, subtitle, align = "center" }) => {
  const alignClass =
    align === "left"
      ? "items-start text-left"
      : "items-center text-center";

  return (
    <div className={`flex flex-col ${alignClass} mb-10`}>
      <h2 className="text-3xl md:text-4xl font-bold font-display text-white leading-tight">
        {title}
      </h2>
      <div
        className={`w-16 h-1 bg-brand-gold mt-3 mb-4 rounded-full ${
          align === "left" ? "" : "mx-auto"
        }`}
      />
      {subtitle && (
        <p className="text-brand-muted text-base md:text-lg max-w-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
