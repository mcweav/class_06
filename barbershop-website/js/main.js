const yearEl = document.getElementById("year");
const menuBtn = document.getElementById("menubtn");
const mobileMenu = document.getElementById("mobileMenu");
const ctaBtn = document.getElementById("ctaBtn");
const callBtn = document.getElementById("callBtn");
const phoneLink = document.getElementById("phoneLink");
const heading = document.getElementById("heroHeading");
const featureGrid = document.getElementById("featureGrid")
const siteheader = document.querySelector(".site-header");

// ----- Modal Elements -----
const serviceModal = document.getElementById("serviceModal");
const serviceModalOverlay = document.getElementById("serviceModalOverlay");
const serviceModalClose = document.getElementById("serviceModalClose");
const serviceModalTitle = document.getElementById("serviceModalTitle");
const serviceModalPrice = document.getElementById("serviceModalPrice");
const serviceModalList = document.getElementById("serviceModalList");

const services = [
 {
    id: 1,
    title: "Classic Haircut",
    description: "Timeless cuts with modern precision tailored to your style.",
    image: "assets/images/feature-1.jpg",
    alt: "Classic haircut",
    price: 25,
    popular: true,
    details: [
        "Consultation with your barber before the cut begins.",
        "Hair sectioning and shape-up based on your preferred style.",
        "Professional clippers, trimmers, and shears used for precsision.",
        "Neckline cleanup and finishing touches included.",
        "Light styling product applied for a clean final look."
    ]
 },
 {
    id: 2,
    title: "Beard Trim",
    description: "Shape and line-up your beard for a clean, sharp finish.",
    image: "assets/images/feature-2.jpg",
    alt: "Beard trim",
    price: 15,
    popular: false,
    details: [
        "Beard assessment and shaping based on face structure.",
        "Line-up around cheeks, jawline, and neckline.",
        "Trimmers and detail tools used for crisp edges.",
        "Conditioning beard product may be applied for softness.",
        "Final symetry check for a polished finish."
    ]
 },
 {
    id: 3,
    title: "Straight Razor Shave",
    description: "Hot towel treatment with a smooth traditional shave.",
    image: "Straight razor shave",
    price: 30,
    popular: true,
    details: [
        "Hot towel prep to soften facial hair and open pores.",
        "Premium shaving cream or lather applied to protect the skin.",
        "Straight razor shave performed with careful detailing.",
        "Second hot towel may be used for comfort and cleanup.",
        "Aftershave or soothing skin product applied after service."
    ]
 },
 {
    id: 4,
    title: "Fade & Style",
    description: "A clean fade with finishing detail for a sharp, modern look.",
    image: "assets/images/feature-2.jpg",
    alt: "Fade Haircut",
    price: 35,
    popular: false,
    details: [
        "Style consultation before clipper work begins.",
        "Fade blended to your prefered level and finish.",
        "Detailing around temples, neckline, and beard area if needed.",
        "Scissors and clipper-over-comb may be used for texture.",
        "Styling product added to complete the final look."
    ]
 },
 {
    id: 5,
    title: "Kids Cut",
    description: "Clean, comfortable haircut service for younger clients.",
    image: "assets/images/feature-1.jpg",
    alt: "Kids haircut",
    price: 20,
    popular: false,
    details: [
        "Simple consultation with child and parent if needed.",
        "Age-appropriate haircut with comfort in mind.",
        "Careful clipper and scissor work for a clean finish.",
        "Scalp cleaned and checked for even consistency.",
        "Moisturizing scalp product applied after the shave."
    ]
 }
];

// Render Features using forEach

const renderFeatures = () => {
    if (!featureGrid) return;

const cardsHTML = services.map((service) => {
     let badgeHTML = "";

    if (service.popular) {
        badgeHTML = `<p class="service-badge">Popular Choice</p>`;
    } else {
        badgeHTML = `<p class="service-badge alt-badge">Barber Favorite</p>`;
 }

    return `
        <article class="feature-card">
            <img
                src="${service.image}"
                alt="${service.alt}"
                class="feature-img"
            />

            <h3 class="feature-title">${service.title}</h3>

            <p class="feature-text">${service.description}</p>

            ${badgeHTML}

            <p class="service-price">$${service.price}</p>

            <div class="service-actions">
                <button
                    class="service-details-btn"
                    type="button"
                    data-service-id="${service.id}"
                >
                    View Details
                </button>
            </div>
        </article>
    `;
 }).join("");
 
 featureGrid.innerHTML = cardsHTML;
};

//Navigation Data(array of objects)
const navLinks = [
    {label: "Home", href: "#hero"},
    {label: "Services", href:"#features"},
    {label: "Book", href:"cta"},
    {label: "Contact", href: "footer"}
];

//Render Navigation using .map()
const renderNavigation = () => {

    //destop Nav
    if(nav){
        const navHTML = navLinks.map((link) => {
            return `
                <a href="${link.href}" class="nav-link">
                    ${link.label}
                </a>
            `;
        }).join("");
        nav.innerHTML = navHTML;
    }

    //Mobile Nav
    if(mobileMenu){
        const mobileHTML =navLinks.map(link => {
            return `
                <a href="${link.href}" class="mobile-link">
                    ${link.label}
                </a>    
            `;
        }).join("");
        mobileMenu.innerHTML = mobileHTML;
    }

};
renderNavigation();


const handleHeaderOnScroll = () => {
    if(!siteheader)return;

    if(window.ScrollY > 10){
        siteheader.classList.add("is-scrolled");
    }else{
        siteheader.classList.remove("is-scrolled");
    }
};

//update footer year automatically
const setCurrentYear = () => {
    const now = new Date();
    console.log(yearEl);
    yearEl.textContent = now.getFullYear();
};

//Toggle mobile menu open/close

let isMenuOpen = false;

const toggleMobileMenu = () => {
    //make sure mobile menu is there
    if(!mobileMenu){
        return;
    };

    //create a if statement for menuOpen
    if(isMenuOpen === false){
        mobileMenu.classList.add("is-open");
        isMenuOpen = true;
    }else{
        mobileMenu.classList.remove("is-open");
        isMenuOpen = false;
    }

};

//close mobile menu(used when a link is clicked)

const closeMobileMenu = () => {
    if(!mobileMenu){return};
    mobileMenu.classList.remove("is-open");
    isMenuOpen = false;
};

//reasable function with parameters
const updateHeadText = (newText) => {
    if(!heading)return;
    heading.textContent = newText
};

setCurrentYear();

const openServiceModal = (serviceId) => {
 if (
     !serviceModal ||
     !serviceModalTitle ||
     !serviceModalPrice ||
     !serviceModalList
 ) {
     return;
 }
 const selectedService = services.find((service) => {
     return service.id === Number(serviceId);
 });
     if (!selectedService) return;
     serviceModalTitle.textContent = selectedService.title;
     serviceModalPrice.textContent = `$${selectedService.price}`;
     serviceModalList.innerHTML = selectedService.details.map((detail) => {
     return `<li>${detail}</li>`;
 }).join("");
     serviceModal.classList.add("is-open");
     serviceModal.setAttribute("aria-hidden", "false");
     document.body.style.overflow = "hidden";
};

renderNavigation();
renderFeatures();
setCurrentYear();

//Event Listeners
//Hamburger menu toggle
if(menuBtn){
    menuBtn.addEventListener("click", () => {
        toggleMobileMenu();
    });
};

// close mobile menu when a mobile link is clicked

if(mobileMenu){
    mobileMenu.addEventListener("click",(event) => {
        //if they click in <a> inside the menu, close it
        if(event.target.tagName === "A"){
            closeMobileMenu()
        };
    });
};


//CTA button 

if(ctaBtn){
    ctaBtn.addEventListener("click", ()=>{
        updateHeadText("Booking coming next --- great choice!");
    });
};



//Call Button: try to use the phone number in the footer

if(callBtn){
    callBtn.addEventListener("click", () => {
        if(phoneLink){
            updateHeadText("Call us at" + phoneLink.textContent);
        }else{
            updateHeadText("Call feature coming next!");
        };
    });
};

if (featureGrid) {
 featureGrid.addEventListener("click", (event) => {
 const clickedButton = event.target.closest(".service-details-btn");
 if (!clickedButton) return;
 const serviceId = clickedButton.dataset.serviceId;
 openServiceModal(serviceId);
 });
}


const closeServiceModal = () => {
 if (!serviceModal) return;
 serviceModal.classList.remove("is-open");
 serviceModal.setAttribute("aria-hidden", "true");
 document.body.style.overflow = "";
};


//Footer year auto-fills
//Hamburger Menu opens/closes (works with your mobile-menu.is-open CSS)
//CTA buttons do something visible(updates hero heading)

window.addEventListener("scroll", handleHeaderOnScroll);
