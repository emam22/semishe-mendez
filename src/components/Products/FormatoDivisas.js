export const Currency = (value) => {
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
      currencyDisplay: "symbol",
      minimumFractionDigits: 0,
    }).format(value);
  };