function tortoGabalas(tKiekis, zKiekis, tSvoris) {
    const zmPerTorta = Math.ceil(zKiekis / tKiekis);
    return Math.floor(tSvoris / zmPerTorta * 1000);

}

tortoGabalas(3, 17, 1); //166

