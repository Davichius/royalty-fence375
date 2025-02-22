export function SectionHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
      <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
    </div>
  )
}

