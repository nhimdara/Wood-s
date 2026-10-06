// src/utils/localizedProducts.js
// Returns localized products based on the active language.
// In Khmer ('km'): returns the exact original product data without modification.
// In English ('en'): deep merges English translations for categories, subproducts,
// key selling points, 5-step positioning frameworks, and clinical benefits.

import { products } from "../components/data/products.js";
import { productsEn } from "../locales/productsEn.js";

export function getLocalizedProducts(language = "km") {
  if (language === "km") {
    return products;
  }

  return products.map((cat) => {
    const catEn = productsEn[`cat_${cat.id}`];
    const localizedCat = {
      ...cat,
      description: catEn?.description || cat.description,
      subProducts: (cat.subProducts || []).map((sp) => {
        const spEn = productsEn[sp.id];
        if (!spEn) return sp;

        return {
          ...sp,
          keySellingPoint: spEn.keySellingPoint || sp.keySellingPoint,
          framework: spEn.framework
            ? {
                ...sp.framework,
                who: spEn.framework.who || sp.framework?.who,
                what: spEn.framework.what
                  ? { ...sp.framework?.what, ...spEn.framework.what }
                  : sp.framework?.what,
                why: spEn.framework.why || sp.framework?.why,
                how: spEn.framework.how
                  ? { ...sp.framework?.how, ...spEn.framework.how }
                  : sp.framework?.how,
                say: spEn.framework.say || sp.framework?.say,
              }
            : sp.framework,
          details: spEn.details
            ? {
                ...sp.details,
                description: spEn.details.description || sp.details?.description,
                benefits: spEn.details.benefits || sp.details?.benefits,
                howToUse: spEn.details.howToUse || sp.details?.howToUse,
                storage: spEn.details.storage || sp.details?.storage,
              }
            : sp.details,
        };
      }),
    };
    return localizedCat;
  });
}

export default getLocalizedProducts;
