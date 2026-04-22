# Image Integration Guide — CornbeltAI Disease Triage

This document explains how to add real photographs to the disease and pest
identification popup once images are available.

---

## Folder Structure

```
images/
├── corn/
│   ├── gray-leaf-spot-1.jpg       (Field symptom photo)
│   ├── gray-leaf-spot-2.jpg       (Close-up lesion photo)
│   ├── nclb-1.jpg
│   ├── nclb-2.jpg
│   ├── common-rust-1.jpg
│   ├── common-rust-2.jpg
│   ├── tar-spot-1.jpg
│   ├── tar-spot-2.jpg
│   ├── goss-wilt-1.jpg
│   ├── goss-wilt-2.jpg
│   ├── gibberella-ear-rot-1.jpg
│   ├── gibberella-ear-rot-2.jpg
│   ├── stalk-rot-1.jpg
│   ├── stalk-rot-2.jpg
│   ├── southern-rust-1.jpg
│   ├── southern-rust-2.jpg
│   ├── corn-rootworm-1.jpg
│   ├── corn-rootworm-2.jpg
│   ├── ecb-1.jpg
│   ├── ecb-2.jpg
│   ├── corn-earworm-1.jpg
│   ├── corn-earworm-2.jpg
│   ├── wbc-1.jpg
│   ├── wbc-2.jpg
│   ├── black-cutworm-1.jpg
│   ├── black-cutworm-2.jpg
│   ├── corn-aphid-1.jpg
│   ├── corn-aphid-2.jpg
│   ├── silk-beetle-1.jpg
│   └── silk-beetle-2.jpg
│
└── soybeans/
    ├── sds-1.jpg
    ├── sds-2.jpg
    ├── scn-1.jpg
    ├── scn-2.jpg
    ├── white-mold-1.jpg
    ├── white-mold-2.jpg
    ├── phytophthora-1.jpg
    ├── phytophthora-2.jpg
    ├── bsr-1.jpg
    ├── bsr-2.jpg
    ├── frogeye-1.jpg
    ├── frogeye-2.jpg
    ├── septoria-1.jpg
    ├── septoria-2.jpg
    ├── smv-1.jpg
    ├── smv-2.jpg
    ├── soybean-aphid-1.jpg
    ├── soybean-aphid-2.jpg
    ├── bean-leaf-beetle-1.jpg
    ├── bean-leaf-beetle-2.jpg
    ├── stink-bug-1.jpg
    ├── stink-bug-2.jpg
    ├── spider-mite-1.jpg
    ├── spider-mite-2.jpg
    ├── dectes-1.jpg
    ├── dectes-2.jpg
    ├── defoliator-1.jpg
    ├── defoliator-2.jpg
    ├── tah-1.jpg
    └── tah-2.jpg
```

---

## Image Specifications

| Property    | Recommendation                          |
|-------------|-----------------------------------------|
| Format      | `.jpg` (preferred) or `.webp`           |
| Dimensions  | Minimum 400 × 300 px (landscape)        |
| Aspect ratio| 4:3 (matches the placeholder boxes)     |
| File size   | ≤ 200 KB per image (compress for web)   |
| Color space | sRGB                                    |

---

## How to Replace a Placeholder with a Real Image

Each placeholder in `index.html` looks like this:

```html
<!-- IMAGE SLOT: corn/gray-leaf-spot-1.jpg -->
<div class="img-placeholder">
  <span class="img-icon">🖼️</span>
  <span class="img-label">Field Symptom</span>
  <span class="img-slot-id">corn/gray-leaf-spot-1</span>
</div>
```

**Step 1 — Add the image file**  
Copy the photo into the correct subfolder, e.g.:
```
images/corn/gray-leaf-spot-1.jpg
```

**Step 2 — Replace the placeholder markup**  
Find the matching `<div class="img-placeholder">` block in `index.html`
(search for the slot ID, e.g. `corn/gray-leaf-spot-1`), and replace the
entire `<div class="img-placeholder">` block with an `<img>` tag wrapped
in the same div:

```html
<div class="img-placeholder">
  <img src="images/corn/gray-leaf-spot-1.jpg"
       alt="Gray Leaf Spot — field symptom on corn leaf" />
</div>
```

- The `img-placeholder` CSS class will size the image automatically
  (`object-fit: cover`) to fill the slot.
- Keep the `alt` attribute descriptive for accessibility.
- You can remove the `<span>` child elements once the real image is in place.

---

## Batch Replacement Tips

If you have all images ready at once, you can use a find-and-replace script
or a text editor's multi-cursor feature:

1. Search for `<span class="img-slot-id">corn/gray-leaf-spot-1</span>` in
   `index.html` to locate each slot.
2. Replace the surrounding `<div class="img-placeholder">…</div>` block with
   the `<img>` version shown above.
3. Repeat for each of the 60 image slots (30 entries × 2 images each).

---

## Optional: Lazy Loading

For faster page load when the popup first opens, add `loading="lazy"` to
each `<img>` tag:

```html
<img src="images/corn/gray-leaf-spot-1.jpg"
     alt="Gray Leaf Spot — field symptom"
     loading="lazy" />
```

---

## Image Slot Reference

### Corn — Diseases

| # | Entry              | Slot 1 (img-slot-id)        | Slot 2 (img-slot-id)        |
|---|--------------------|-----------------------------|------------------------------|
| 1 | Gray Leaf Spot     | `corn/gray-leaf-spot-1`     | `corn/gray-leaf-spot-2`      |
| 2 | N. Corn Leaf Blight| `corn/nclb-1`               | `corn/nclb-2`                |
| 3 | Common Rust        | `corn/common-rust-1`        | `corn/common-rust-2`         |
| 4 | Tar Spot           | `corn/tar-spot-1`           | `corn/tar-spot-2`            |
| 5 | Goss's Wilt        | `corn/goss-wilt-1`          | `corn/goss-wilt-2`           |
| 6 | Gibberella Ear Rot | `corn/gibberella-ear-rot-1` | `corn/gibberella-ear-rot-2`  |
| 7 | Stalk Rot          | `corn/stalk-rot-1`          | `corn/stalk-rot-2`           |
| 8 | Southern Rust      | `corn/southern-rust-1`      | `corn/southern-rust-2`       |

### Corn — Pests

| #  | Entry                  | Slot 1                    | Slot 2                    |
|----|------------------------|---------------------------|---------------------------|
| 9  | Corn Rootworm          | `corn/corn-rootworm-1`    | `corn/corn-rootworm-2`    |
| 10 | European Corn Borer    | `corn/ecb-1`              | `corn/ecb-2`              |
| 11 | Corn Earworm           | `corn/corn-earworm-1`     | `corn/corn-earworm-2`     |
| 12 | Western Bean Cutworm   | `corn/wbc-1`              | `corn/wbc-2`              |
| 13 | Black Cutworm          | `corn/black-cutworm-1`    | `corn/black-cutworm-2`    |
| 14 | Corn Leaf Aphid        | `corn/corn-aphid-1`       | `corn/corn-aphid-2`       |
| 15 | Japanese Beetle        | `corn/silk-beetle-1`      | `corn/silk-beetle-2`      |

### Soybeans — Diseases

| # | Entry                  | Slot 1                       | Slot 2                        |
|---|------------------------|------------------------------|-------------------------------|
| 1 | Sudden Death Syndrome  | `soybeans/sds-1`             | `soybeans/sds-2`              |
| 2 | Soybean Cyst Nematode  | `soybeans/scn-1`             | `soybeans/scn-2`              |
| 3 | White Mold             | `soybeans/white-mold-1`      | `soybeans/white-mold-2`       |
| 4 | Phytophthora Root Rot  | `soybeans/phytophthora-1`    | `soybeans/phytophthora-2`     |
| 5 | Brown Stem Rot         | `soybeans/bsr-1`             | `soybeans/bsr-2`              |
| 6 | Frogeye Leaf Spot      | `soybeans/frogeye-1`         | `soybeans/frogeye-2`          |
| 7 | Septoria Brown Spot    | `soybeans/septoria-1`        | `soybeans/septoria-2`         |
| 8 | Soybean Mosaic Virus   | `soybeans/smv-1`             | `soybeans/smv-2`              |

### Soybeans — Pests

| #  | Entry                      | Slot 1                          | Slot 2                          |
|----|----------------------------|---------------------------------|---------------------------------|
| 9  | Soybean Aphid              | `soybeans/soybean-aphid-1`      | `soybeans/soybean-aphid-2`      |
| 10 | Bean Leaf Beetle           | `soybeans/bean-leaf-beetle-1`   | `soybeans/bean-leaf-beetle-2`   |
| 11 | Stink Bugs                 | `soybeans/stink-bug-1`          | `soybeans/stink-bug-2`          |
| 12 | Two-Spotted Spider Mite    | `soybeans/spider-mite-1`        | `soybeans/spider-mite-2`        |
| 13 | Dectes Stem Borer          | `soybeans/dectes-1`             | `soybeans/dectes-2`             |
| 14 | Soybean Looper             | `soybeans/defoliator-1`         | `soybeans/defoliator-2`         |
| 15 | Threecornered Alfalfa Hopper | `soybeans/tah-1`              | `soybeans/tah-2`                |
