const FilterChips = () => {
  const filterButtons = ['All', 'Mixes', 'Podcasts', 'Music', 'Gaming']

  return (
    <div className="flex w-full flex-wrap justify-start gap-3 py-3">
      {filterButtons.map((item) => (
        <button
          key={item}
          type="button"
          className="rounded-lg bg-gray-200 px-4 py-2 text-sm font-medium text-gray-900 transition hover:bg-gray-300 active:scale-95"
        >
          {item}
        </button>
      ))}
    </div>
  )
}

export default FilterChips
