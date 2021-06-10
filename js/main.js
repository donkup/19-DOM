function renderNav(selector, data) {
    //validation

    //logic
    const DOM = document.querySelector(selector);
    let HTML = '';

    for (const i in data) {
        const menuItem = data[i];
        HTML += `<a href="${menuItem.href}">${menuItem.title}</a>`
    }

    //post-logic validation

    //result return
    DOM.insertAdjacentHTML('beforeend', `<nav>${HTML}</nav>`);
}

const menu = [
    {
        href: '#',
        title: 'Home'
    },
    {
        href: '#',
        title: 'Services'
    },
    {
        href: '#',
        title: 'About us'
    },
    {
        href: '#',
        title: 'Contact us'
    }
];

renderNav('header', menu);