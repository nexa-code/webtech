export const calculateBill = (units) => {
  const ranges = [
    { start: 1, end: 50, rate: 3.50 },
    { start: 51, end: 150, rate: 4.00 },
    { start: 151, end: 250, rate: 5.20 },
  ];

  let remainingUnits = units;
  let details = [];

  for (const range of ranges) {
    if (remainingUnits <= 0) break;
    const { start, end, rate } = range;
    const unitsInRange = Math.min(remainingUnits, end - start + 1);
    const cost = unitsInRange * rate;
    details.push({
      range: `${start}-${end}`,
      units: unitsInRange,
      rate,
      cost
    });
    remainingUnits -= unitsInRange;
  }

  if (remainingUnits > 0) {
    const finalRange = { start: 251, end: units, rate: 6.50 };
    const unitsInRange = remainingUnits;
    const cost = unitsInRange * finalRange.rate;
    details.push({
      range: `${finalRange.start}-${finalRange.end}`,
      units: unitsInRange,
      rate: finalRange.rate,
      cost
    });
  }

  const total = details.reduce((sum, item) => sum + item.cost, 0);

  return { total, details };
};



