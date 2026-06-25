const yearEl = document.getElementById("year");
const menuBtn = document.getElementById("menubtn");
const mobileMenu = document.getElementById("mobileMenu");
const ctaBtn = document.getElementById("ctaBtn");
const callBtn = document.getElementById("callBtn");
const phoneLink = document.getElementById("phoneLink");
const heading = document.getElementById("heroHeading");
const featureGrid = document.getElementById("featureGrid")
const siteheader = document.querySelector(".site-header");


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
    description: 
 }

// Render Features using forEach

const renderFeatures = () => {
    if(!featureGrid){
        return; 
    };

    //use forEach on the services array
    services.forEach((service)=>{
        //to create our feauture-card blueprint (HTML)
        const card = document.createElement("article");
        card.classList.add("feature-card");//class/css
        card.innerHTML = `
            <img src="${service.img}" alt="${service.title}" class="feature-img" />
            <h3 class="feature-title">${service.title}</h3>
            <p class="feature-text">${service.text}</p>
        `;
        featureGrid.appendChild(card)      
    })
};
renderFeatures()


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

//Footer year auto-fills
//Hamburger Menu opens/closes (works with your mobile-menu.is-open CSS)
//CTA buttons do something visible(updates hero heading)

window.addEventListener("scroll", handleHeaderOnScroll);
