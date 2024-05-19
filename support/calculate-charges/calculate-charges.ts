/*export const calculateCharge = ({
  productPrice,
  productQuantity = 1,
  isTaxInclusive = false,
  roundTaxAtSubtotal,
  taxRate,
  shippingCharge,
  taxOnShipping = false,
  allowShippingPerQuantity = false
}: {
  productPrice?: number;
  productQuantity?: number;
  isTaxInclusive?: boolean;
  roundTaxAtSubtotal?: boolean;
  taxRate?: number;
  shippingCharge?: number;
  taxOnShipping?: boolean;
  allowShippingPerQuantity?: boolean;
}) => {
  let total: number;
  let perProductTax: number;
  let totalProductTax: number;
  let perProductShippingCharge: number;
  let totalProductShippingCharge: number;

  if (!isTaxInclusive) {
    perProductTax = productPrice * taxRate;
    totalProductTax = perProductTax * productQuantity;
  } else {
    perProductTax = productPrice * (1 + taxRate) - productPrice;
    totalProductTax = perProductTax * productQuantity;
  }

  if (shippingCharge) {
    if (taxOnShipping) {
      if (isTaxInclusive) {
        if (allowShippingPerQuantity) {
          perProductShippingCharge = shippingCharge * (1 + taxRate) - shippingCharge;
          totalProductShippingCharge = perProductShippingCharge * productQuantity;
        } else {
          totalProductShippingCharge = shippingCharge * (1 + taxRate);
        }
      } else {
        if (allowShippingPerQuantity) {
          perProductShippingCharge = shippingCharge * taxRate;
          totalProductShippingCharge = perProductShippingCharge * productQuantity;
        } else {
          totalProductShippingCharge = shippingCharge * taxRate;
        }
      }
    } else {
      if (allowShippingPerQuantity) {
        totalProductShippingCharge = shippingCharge * productQuantity;
      } else {
        totalProductShippingCharge = shippingCharge;
      }
    }
  }

  console.log(perProductShippingCharge);
  return total;
};
*/

const taxInclusive = (linePrice: number, rate: number, quantity: number) => {
  const taxRate = 1 + rate;
  const taxPerQuantity = Math.round((linePrice * taxRate - linePrice) * 100) / 100;
  const pricePerQuantityExcludingTax = linePrice - taxPerQuantity;
  const totalTax = taxPerQuantity * quantity;
  const totalPriceExcludingTax = pricePerQuantityExcludingTax * quantity;
  const pricePerQuantityIncludingTax = pricePerQuantityExcludingTax + taxPerQuantity;
  const totalPriceIncludingTax = pricePerQuantityIncludingTax * quantity;

  return { taxPerQuantity, pricePerQuantityExcludingTax, pricePerQuantityIncludingTax, totalTax, totalPriceExcludingTax, totalPriceIncludingTax };
};

const taxExclusive = (linePrice: number, rate: number, quantity: number) => {
  const taxPerQuantity = Math.round(linePrice * rate * 100) / 100;
  const pricePerQuantityExcludingTax = linePrice;
  const pricePerQuantityIncludingTax = Math.round((taxPerQuantity + pricePerQuantityExcludingTax) * 100) / 100;
  const totalTax = taxPerQuantity * quantity;
  const totalPriceExcludingTax = pricePerQuantityExcludingTax * quantity;
  const totalPriceIncludingTax = pricePerQuantityIncludingTax * quantity;

  return { taxPerQuantity, pricePerQuantityExcludingTax, pricePerQuantityIncludingTax, totalTax, totalPriceExcludingTax, totalPriceIncludingTax };
};

export const calculateCharge = ({
  productPrice,
  productQuantity = 1,
  isTaxInclusive = false,
  roundTaxAtSubtotal,
  taxRate,
  shippingTax,
  taxOnShipping = false,
  allowShippingPerQuantity = false
}: {
  productPrice?: number;
  productQuantity?: number;
  isTaxInclusive?: boolean;
  roundTaxAtSubtotal?: boolean;
  taxRate?: number;
  shippingTax?: number;
  taxOnShipping?: boolean;
  allowShippingPerQuantity?: boolean;
}) => {
  let total: number;
  let perProductTax: number;
  let totalProductTax: number;
  let perShippingTax: number;
  let totalShippingTax: number;

  const inclusive = taxInclusive(9.19, 0.07, 1);
  const exclusive = taxExclusive(9.19, 0.07, 1);
  console.log("inclusive", inclusive);
  console.log("exclusive", exclusive);

  return total;
};
