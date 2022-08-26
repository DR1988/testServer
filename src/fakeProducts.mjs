
import pkg from 'faker';
export const makeFakeProductName = () => pkg.commerce.productName()

export const makeFakePrice = () => parseFloat(pkg.commerce.price())

export const makeFakeProduct = () => {
    const price = makeFakePrice()
    const sku = pkg.datatype.uuid()
    const retailerSku = pkg.datatype.uuid()
    const serverId = pkg.datatype.number()
  
    return {
      type: "product",
      id: String(serverId),
      serverId,
      sku,
      retailerSku,
      name: makeFakeProductName(),
      price: price,
      originalPrice: price,
      originalUnitPrice: price,
      unitPrice: price,
      discount: 0,
      humanVolume: '1кг',
      volumeType: 'Kilograms',
      volume: 1,
      itemsPerPack: 1,
      requirements: [],
      discountEndsAt: null,
      discountPercent: 0,
      images: [],
      priceType: 'PER_ITEM',
      gramsPerUnit: 1000,
      isAdult: false,
      isPrescriptionDrug: false,
      active: true,
      mainTaxonId: null,
      labels: [],
      score: null,
      scoreDetails: null,
      licenseInfo: 'licenseInfo',
      hasSuggestedPreReplacements: false,
    }
  }

export const makeFakeBanners = () => {

  const serverId = pkg.datatype.number()

  return {
  type: "banner",
  id: serverId,
  creativeFormat: "Native",
  sourceImageURL: "https://www.argenmilla.com.ar/en/assets/images/argenmilla-logo-396x120.png",
  clickURL: "https://sberprime.sber.ru/",
  clickURLType: "external",
  trackClickURLs: [
    "https://adserver.k-stage.sbmt.io/track/4LhZv5SjpziCYMprbGO1fEp3sULITq4im3nLsoO2yYavqtdUspjuW54QNvHJ3N6D8G-fMPlMDUStzOHJlRI6oM8KZX5L0Jq2xVTtOE845yZ2CrPYtAcdM7gam_pYJKpWQKZhWm7Ex9jns0aUTvVY7H5Tjw6AEuAaf08gwZD_GV_I5YEj1GDU4cg16CeBfakDyuyJuf44PCl-CvP8R-BTHFyhoPEz5fXFPhtXn29zpe_tSG-hq22cZY0FFeHmvVoS2nKR2w-Cz7FKmZpi989Nk952ycuiAI9VAr9G263ppXjwtZ4BOPunxKRYeWe4nEhF9sw",
    "https://adserver.k-stage.sbmt.io/track/7xxgnbib254w_V95zS4bAyH-nfJz4ts4gnSLLzWN_mZ1PVPhFHvoPpwOrVimsiBbgPk5nVMzqAT9ci4WeZsooyaBjUh_QFMeqwFmIiXOYq6WYA_kstdGozGmjhrCVFpxLSsjQSBfOOrhDA2wmllEEh8dAAIGUdeUNfTgrYp31GzsEcPak4NyudVjFf2bBGiWj8dyJrJkQZ3tbEKzM0ypD11aBRfm4Kpgu8EUR7E8aEqb2w9DLAHavsyId1bANoy0abr9HapCK4VmzF2dQNSm_o-zjITrCbsW7gtIEuHA6h_vdb6NyqL3zw5aReB3evr9NXU"
  ],
  trackImpURLs: [
    "https://adserver.k-stage.sbmt.io/track/L9-ll32MsoaYzrQvWiIZ18_wUl7LV5Bmnk8M4WLgwkF5Tb81lQ6WrPXOfBfDHNVBOttrnRytLcjaxlxO2CvJoWNxxZF0vMdyraRhli1ZP1IDHRj-GioqgMJQBUEwxq0yLICRL_9fzGdU68q2pvdynUSO6GajPgPO22oDr4P_QiXX2MOYzcBLbIQla6Hp6LadT6dp7pUmnOrKIas7FlvLd7-K7IvryOIoD3W_B7Xadb3O7PdYn-l5cDDM8xqraNSomXR0h0PC4VsQkDoKCXMsNS74RGXcS5rtibH3V5jfv73OcvfUWJWHCAepTfY",
    "https://adserver.k-stage.sbmt.io/track/UcdCBCmDd6_aoZWLJwx_L8oY6P6a74KbHAIuWlAQ8-kBlyj7lLUZZfByP5hnjjuRcXBnX6A_EaEfYZxIQnoOyLwwbclbBUqbhhIjJ3SGevziT8rFeMBTx2hPJ4icOOO-Z6RKWjiI69ozlLA9YxaIcRmrXWS8m_W2GQhczqT7-4nb1ZKaOEzCDyaFsgQG9nfFifihm4-CmvCZ2xqKmIEO2nwwRoXGMIrBKSqfb_kLKa0ViyUsQ0jI085JJwuD1dmh11jqi2IYnOxMrJhP_JHNvobgP9lovD_G5LsnHlaEwKYzqbo1txTATyURfUE"
  ],
  backgroundColor: "#ffffff",
  fontColor: "#000000",
  titleText: "Повезло же вам!",
  bodyText: "У нас есть всё для вашей аптечки",
  promotionDescription: "",
  promotionTermsUrl: "",
  promotionCode: "",
  size: "396x120"
}
}