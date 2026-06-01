// Founder Image Exports
// Image will be manually added by client to: src/assets/images/founder/image1.png and image2.png

const founderModule = import.meta.glob('./*.{png,jpg,jpeg,webp}', {
  eager: true,
  query: '?url'
});

const getAsset = (name) => {
  if (founderModule && Object.prototype.hasOwnProperty.call(founderModule, name)) {
    const val = founderModule[name];
    return typeof val === 'string' ? val : val?.default || val?.url || null;
  }
  return null;
};

let founderAsset = getAsset('./image2.png') || getAsset('./image.png') || getAsset('./image1.png');
let masterAzharAsset = getAsset('./image1.png') || getAsset('./image2.png') || founderAsset;

if (!founderAsset && !masterAzharAsset) {
  const founderFiles = Object.values(founderModule || {});
  const firstFile = founderFiles.length > 0 ? (typeof founderFiles[0] === 'string' ? founderFiles[0] : founderFiles[0]?.default || null) : null;
  founderAsset = firstFile;
  masterAzharAsset = firstFile;
}

const founderPlaceholder = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="1000" viewBox="0 0 800 1000"%3E%3Cdefs%3E%3ClinearGradient id="grad" x1="0" y1="0" x2="1" y2="1"%3E%3Cstop offset="0%25" stop-color="%231c140f"/%3E%3Cstop offset="50%25" stop-color="%232d1f15"/%3E%3Cstop offset="100%25" stop-color="%23b38c66"/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width="800" height="1000" fill="url(%23grad)"/%3E%3Ccircle cx="400" cy="350" r="120" fill="%23d4a574" opacity="0.2"/%3E%3Ctext x="400" y="550" text-anchor="middle" fill="%23fff" font-family="Inter, sans-serif" font-size="48" font-weight="700"%3EShaik Azaruddin%3C/text%3E%3Ctext x="400" y="620" text-anchor="middle" fill="%23f7e0c2" font-family="Inter, sans-serif" font-size="24"%3EFounder, Crown Home Spaces%3C/text%3E%3Ctext x="400" y="680" text-anchor="middle" fill="%23d4a574" font-family="Inter, sans-serif" font-size="18"%3E11+ Years Luxury Interiors%3C/text%3E%3C/svg%3E';

export const founderImage = founderAsset || founderPlaceholder;
export const founderImageUrl = founderAsset || founderPlaceholder;
export const masterAzharImage = masterAzharAsset || founderAsset || founderPlaceholder;

export default {
  founderImage: founderAsset || founderPlaceholder,
  founderImageUrl: founderAsset || founderPlaceholder,
  masterAzharImage: masterAzharAsset || founderAsset || founderPlaceholder
};
