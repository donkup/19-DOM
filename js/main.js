
function generuotiSocials(selector, icons) {
    if (selector === '' ||
        typeof selector !== 'string') {
        console.error('ERROR: netinkamas parametras')
        return false;
    }
    if (!Array.isArray(icons) ||
        icons.length === 0) {
        console.error('ERROR: negali buti tuscias array')
        return false;
    }
    const iconsDOM = document.querySelector(selector);
    if (!iconsDOM) {
        console.error('ERROR: nepavyko rasti elemento')
        return false;
    }

    let HTML = '';
    for (let i = 0; i < icons.length; i++) {
        if (typeof icons[i] === 'string' &&
            icons[i] !== '') {
            HTML += `<i class="fa fa-${icons[i]}"></i>`;
            console.log(icons);
        }

    }
    iconsDOM.innerHTML = HTML;
}

const icons = ['facebook', 'twitter', 5, [], '', 'linkedin', 'instagram'];
generuotiSocials('.socials', icons);