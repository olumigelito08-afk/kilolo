const supremeAssets = import.meta.glob<string>("/src/assets/supreme/*.webp", {
  eager: true,
  query: "?url",
  import: "default",
});

const assetUrl = (file: string) => supremeAssets[`/src/assets/supreme/${file}`];

const names: Record<number, string> = {
  1: "-430-6x4-howo-truck-tractor--1-.jpg",
  2: "1688667458804.jpeg",
  3: "1734162552153.jpg",
  4: "19085379_401.jpg",
  5: "59184-1024x768.jpeg",
  6: "Copy+of+IMG_2677.JPG.webp",
  7: "Egbaoma-Gas.jpg",
  8: "Heavy-equipment-scaled (1).jpg",
  9: "IMG-20210824-WA0011.jpg",
  10: "IMG-20260920-WA0135.jpg",
  11: "IMG_0163-scaled-1-1024x768 (1).jpg",
  12: "IMG_0163-scaled-1-1024x768.jpg",
  13: "IMG_20200324_143053_7-scaled.jpg",
  14: "NCW-Construction-0424-scaled.jpg",
  15: "Platform-Petroleum-applauds-PIA-for-transforming-Energy-investment-in-Nigeria- (1).jpg",
  16: "Seafarer-3.png",
  17: "WhatsApp-Image-2021-08-09-at-1.28.17-PM-640x675.jpeg",
  18: "WhatsApp-Image-2025-03-24-at-14.12.35.jpeg",
  19: "african-american-worker-standing-uniform-wearing-safety-hat-factory_1303-30614.jpg",
  20: "blog-image.png",
  21: "cargo.jpg",
  22: "cctv-installation.jpg",
  23: "civil-engineering-careers.jpg",
  24: "civil-engineering-engineers-on-site.jpg.webp",
  25: "construction-workers-fabricating-steel-reinforcement-bar-construction-site-1024x684.jpg",
  26: "container-ship-workers-moving-container.jpg",
  27: "cropped-logistics-company-in-dubai-e1531614809750.jpg",
  28: "d03bc880-abf9-11ef-a04a-6f5efadaaae2.png.webp",
  29: "electrical-wiring-and-installation-10_0.jpeg.webp",
  30: "electrical-wiring-and-installation.jpeg (1).webp",
  31: "f68b61_7d23e49e076347b9b57fb11e23c76b8d~mv2.jpg",
  32: "free-photo-of-workers-on-vessel-1024x686 (1).jpeg",
  33: "heavy-equipment-tracker (1).webp",
  34: "hero image1.png",
  35: "hero image2.png",
  36: "hero image3.png",
  37: "hero image4.jpg",
  38: "hero image5.jpg",
  39: "hero image6.jpg",
  40: "hero image7.jpg",
  41: "images (100).jpeg",
  42: "images (26).jpeg",
  43: "images (59).jpeg",
  44: "images (88).jpeg",
  45: "images (89).jpeg",
  46: "images (90).jpeg",
  47: "images (91).jpeg",
  48: "images (92).jpeg",
  49: "images (93).jpeg",
  50: "images (94).jpeg",
  51: "images (95).jpeg",
  52: "images (96).jpeg",
  53: "images (97).jpeg",
  54: "images (98).jpeg",
  55: "images (99).jpeg",
  56: "images - 2026-09-20T174741.842.jpeg",
  57: "images - 2026-09-20T174810.244.jpeg",
  58: "images - 2026-09-20T174843.904.jpeg",
  59: "images - 2026-09-20T174901.936.jpeg",
  60: "images - 2026-09-20T175042.657.jpeg",
  61: "images - 2026-09-20T175121.969.jpeg",
  62: "images - 2026-09-20T175326.082.jpeg",
  63: "images - 2026-09-20T175609.949.jpeg",
  64: "images - 2026-09-20T175618.326.jpeg",
  65: "images - 2026-09-20T175726.231.jpeg",
  66: "images - 2026-09-20T175819.118.jpeg",
  67: "images - 2026-09-20T175857.572.jpeg",
  68: "images - 2026-09-20T180012.739.jpeg",
  69: "images - 2026-09-20T180041.564.jpeg",
  70: "images - 2026-09-20T180122.204.jpeg",
  71: "images - 2026-09-20T180144.236.jpeg",
  72: "images - 2026-09-20T180155.532.jpeg",
  73: "images - 2026-09-20T180209.467.jpeg",
  74: "images - 2026-09-20T180237.952.jpeg",
  75: "images - 2026-09-20T180247.613.jpeg",
  76: "images - 2026-09-20T180448.357.jpeg",
  77: "images - 2026-09-20T180505.572.jpeg",
  78: "images - 2026-09-20T180602.817.jpeg",
  79: "images - 2026-09-20T180717.061.jpeg",
  80: "images - 2026-09-20T180815.884.jpeg",
  81: "images - 2026-09-20T180837.100.jpeg",
  82: "images - 2026-09-20T180904.763.jpeg",
  83: "images - 2026-09-20T180919.220.jpeg",
  84: "images - 2026-09-20T181026.015.jpeg",
  85: "images - 2026-09-20T181202.359.jpeg",
  86: "images - 2026-09-20T181408.442.jpeg",
  87: "images - 2026-09-20T181638.260.jpeg",
  88: "images - 2026-09-20T182037.676.jpeg",
  89: "images - 2026-09-20T182041.449.jpeg",
  90: "images - 2026-09-20T184411.744.jpeg",
  91: "images - 2026-09-20T184549.497.jpeg",
  92: "images - 2026-09-20T184616.069.jpeg",
  93: "images - 2026-09-20T184654.095.jpeg",
  94: "images - 2026-09-20T185335.697.jpeg",
  95: "images - 2026-09-20T185438.702.jpeg",
  96: "images - 2026-09-20T190035.056.jpeg",
  97: "images - 2026-09-20T190904.261.jpeg",
  98: "images - 2026-09-20T191257.702.jpeg",
  99: "istockphoto-1036354066-612x612.jpg",
  100: "istockphoto-1061622036-612x612.jpg",
  101: "istockphoto-1395632883-612x612.jpg",
  102: "logo.svg",
  103: "main-9-1000x600.jpg",
  104: "ocean-freight.jpg",
  105: "oil-and-gas-companies-in-nigeria (3).jpg",
  106: "oil-and-gas-companies-in-nigeria.jpg",
  107: "pov-black-woman-courier-with-box-delivery-shipping-logistics-with-ecommerce-distribution-service-order-happy-person-with-package-supply-chain-parcel-cargo-office_590464-543235.jpg",
  108: "samiraoil-slide12.jpg",
  109: "shutterstock_2265697211.jpg (1).webp",
  110: "sng-gas-plant-1024x683.jpeg",
  111: "wk_history_2019.jpg",
  112: "wkrs_maintenance (1).jpg",
  113: "wkrs_onbaord_banner.jpg",
};

export type MediaItem = { id: number; name: string; url: string };

export const media: MediaItem[] = Object.entries(names)
  .map(([id, name]) => {
    const numericId = Number(id);
    const url = assetUrl(`media-${String(numericId).padStart(3, "0")}.webp`);
    return url ? { id: numericId, name, url } : undefined;
  })
  .filter((item): item is MediaItem => Boolean(item));

export const image = (id: number) => media.find((item) => item.id === id)?.url;
export const images = (ids: number[]) =>
  ids
    .map((id) => media.find((item) => item.id === id))
    .filter((item): item is MediaItem => Boolean(item));
export const heroImages: MediaItem[] = (
  [
    { id: 114, name: "Supreme Energy operations", url: assetUrl("optimized-hero-1.webp") },
    { id: 115, name: "Supreme Energy field team", url: assetUrl("optimized-hero-2.webp") },
    { id: 116, name: "Supreme Energy delivery operations", url: assetUrl("optimized-hero-3.webp") },
  ] as (MediaItem | { id: number; name: string; url?: string })[]
).filter((item): item is MediaItem => Boolean(item.url));
export const logoUrl = "/images/logo444.svg";

const pub = (name: string) => "/images/" + name.split(" ").join("%20");

export const heroCarouselImages: { src: string; alt: string }[] = [
  { src: pub("hero image1.png"), alt: "Supreme Energy operations 1" },
  { src: pub("hero image2.png"), alt: "Supreme Energy operations 2" },
  { src: pub("hero image3.png"), alt: "Supreme Energy operations 3" },
  { src: pub("hero image4.jpg"), alt: "Supreme Energy operations 4" },
  { src: pub("hero image5.jpg"), alt: "Supreme Energy operations 5" },
  { src: pub("hero image6.jpg"), alt: "Supreme Energy operations 6" },
  { src: pub("hero image7.jpg"), alt: "Supreme Energy operations 7" },
  { src: pub("hero imagee.jpeg"), alt: "Supreme Energy operations 8" },
];

export const pubImage = pub;
