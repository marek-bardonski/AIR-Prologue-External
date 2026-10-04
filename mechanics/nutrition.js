// CDDA vitamin units from data/json/vitamin.json (0.I); protein estimates are AIR approximations.
// Nutrient amounts are per consumed charge, just like calories. CC BY-SA 3.0.
export function foodNutrients({ id, calories, weight, materials, vitamins }, c) {
  const total = materials.reduce((n, m) => n + m.portion, 0) || 1;
  const share = materials.reduce((n, m) => n + (c.proteinEnergyShare[m.type] || 0) * m.portion / total, 0);
  const protein = c.proteinGrams[id] ?? Math.min(Math.max(0, weight), Math.max(0, calories) * share / 4);
  const amounts = {};
  for (const [id, value] of vitamins || []) {
    if (!(id in c.vitaminUnitsMg)) continue;
    if (typeof value === 'number') amounts[id] = value * c.vitaminUnitsMg[id];
    else {
      let mg = 0;
      for (const m of String(value).matchAll(/([\d.]+)\s*(mg|mcg|μg|µg|ug|g)/g)) {
        mg += Number(m[1]) * (m[2] === 'g' ? 1000 : m[2] === 'mg' ? 1 : .001);
      }
      amounts[id] = mg;
    }
  }
  // One aggregate vitamin score. C uses the supplied composition; other vitamins use conservative
  // food-family estimates. Minerals and non-nutritional CDDA counters do not contribute.
  const broad = protein === 0 && id in c.proteinGrams ? 0 : materials.reduce((n,m) =>
    n + (c.vitaminPointsPer100g[m.type] || 0) * m.portion / total, 0) * Math.max(0,weight) / 100;
  return { protein, vitamins: Math.max(0, amounts.vitC || 0) / c.vitaminReferenceMg * c.vitaminDaily + broad };
}
