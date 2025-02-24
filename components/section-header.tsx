interface SectionHeaderProps {
  title: string
  subtitle: string
}

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <header className="mb-12 text-center space-y-4">
      <h2 className="text-3xl font-bold text-gray-900 md:text-4xl lg:text-[2.5rem]">
        {title}
      </h2>
      <p className="text-lg text-gray-600 md:text-xl max-w-3xl mx-auto">
        {subtitle}
      </p>
    </header>
  )
}