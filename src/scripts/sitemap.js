console.log("!!!SITEMAP!!!");

const img = document.querySelector("#sitemap");
const map = document.querySelector("map[name='sitemap-map']");
const mapAreas = map.querySelectorAll("area");

function handleMapCoords() {
    if (!img || !map || !img.naturalWidth)
        return;

    const scale = img.clientWidth / img.naturalWidth;
    console.log('scale', scale);

    mapAreas.forEach(area => {
        const scaledCoords = area.getAttribute("coords")
            .split(",")
            .map(coord => Math.round(coord * scale))
            .join(",");

        area.setAttribute("coords", scaledCoords);
    });
}

/* ["load", "resize"].forEach(action => {
    window.addEventListener(action, handleMapCoords);
}); */