/** Las categorias del menu solo tienen una palabra
 */
const menu = [
  {
    id: 1,
    title: "bitcoin",
    category: "art",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto. `,
  },
  {
    id: 2,
    title: "ethereum",
    category: "collectibles",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `Ethereum is a decentralized, open-source blockchain featuring smart contract functionality. `,
  },
  {
    id: 3,
    title: "litecoin",
    category: "blockchain",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `Litecoin is a peer-to-peer cryptocurrency and open-source software project released under the MIT/X11 license.`,
  },
  {
    id: 4,
    title: "polkadot ",
    category: "art",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Polkadot is a heterogeneous multi-chain interchange and translation architecture which enables customised side-chains to connect with public blockchains.`,
  },
  {
    id: 5,
    title: "ripple",
    category: "collectibles",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "doge",
    category: "blockchain",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Dogecoin is a cryptocurrency invented by software engineers Billy Markus and Jackson Palmer, who decided to create a payment system that is instant, fun, and free from traditional banking fees.`,
  },
  {
    id: 7,
    title: " chainlink",
    category: "art",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `Chainlink is the most widely used oracle network for powering universally connected smart contracts, enabling any blockchain to access to real-world data.`,
  },
  {
    id: 8,
    title: "binance coin ",
    category: "collectibles",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `BNB powers the Binance Ecosystem. As the native coin of Binance Chain, BNB has multiple use cases: fueling transactions on the Chain. `,
  },
  {
    id: 9,
    title: "Cardano",
    category: "blockchain",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `Cardano is a cryptocurrency network and open source project that aims to run a public blockchain platform for smart contracts. Cardano's internal cryptocurrency is called Ada`,
  },
  {
    id: 10,
    title: "tether",
    category: "games",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: `Tether is a controversial cryptocurrency with tokens issued by Tether Limited. It formerly falsely claimed that each token was backed by one United States dollar, but on 14 March 2019 changed the backing to include loans to affiliate companies.`,
  },
];
// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`; 
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all projects"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}

document.createElement('p')
//181.177.229.235