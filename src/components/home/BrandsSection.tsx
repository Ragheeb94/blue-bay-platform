const brands = [
  "Permobil",
  "Quantum Rehab",
  "Pride Mobility",
  "Ki Mobility",
  "Sunrise Medical",
  "Motion Composites",
  "Bruno",
  "Amylior",
  "Motion Concepts",
  "Power Plus Mobility",
  "Travel Buggy",
  "Blake Medical",
];

export default function BrandsSection() {
  return (
    <section className="bg-white border-y border-slate-100 py-14">
      <div className="container">
        <div className="text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Brands We Carry</p>
          <h2 className="text-2xl font-bold text-slate-900">
            Equipment from the world&apos;s leading mobility manufacturers
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {brands.map((brand) => (
            <div
              key={brand}
              className="flex items-center justify-center px-4 py-4 rounded-xl border border-slate-200 bg-slate-50 hover:border-blue-200 hover:bg-blue-50 transition-colors"
            >
              <span className="text-sm font-bold text-slate-600 text-center leading-tight">{brand}</span>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-slate-400 mt-6">
          And many more. We source equipment based on your clinical needs, not what&apos;s in stock.
        </p>
      </div>
    </section>
  );
}
