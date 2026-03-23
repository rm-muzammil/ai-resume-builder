"use client";

type Props = {
  resumeId: string;
};

export default function ExportPDFButton({ resumeId }: Props) {
  const handlePrint = () => {
    const url = `/resume/print/${resumeId}`;
    window.open(url, "_blank");
  };

  return (
    <button
      type="button"
      onClick={handlePrint}
      className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:opacity-90"
    >
      Download PDF
    </button>
  );
}