import ImageSlider from "./ImageSlider.js";
import { imageSlider, images } from "./ImageSlider.js";

export default class EventCard extends HTMLElement {
    constructor() {
        super()

    }
    connectedCallback() {
        console.log("Event card connectedCallback called");
        const title = this.getAttribute("title");
        const description = this.getAttribute("description");
        const icon = this.getAttribute("icon");
        const charLimit = this.getAttribute("data-char-limit") || null; // Get char limit attribute
        const whatsappLink = this.getAttribute("data-whatsapp-link") || null;
        const images = this.getAttribute("data-slider-images") || null;
        
        this.render(title, description, icon);
        this.truncateText(charLimit);
        this.setupActionButtons(whatsappLink);
        
        
    }
    render (title, description, icon) {
        console.log("Event card render called");
        this.innerHTML = `

        <img class="event-card-img" src="${icon}"/>
        <h3 class="event-card-title">${title}</h3>
        <p class="event-card-description">${description}</p>
        <div id="action-buttons">
                <button id="contact-btn" class="action-btn"><img src="/images/Icons/contact-us.svg" alt="">Contact Us</button>
                <button data-modal-target="#modal" id="view-btn" class="action-btn"><img src="/images/Icons/view.svg" alt="">view</button>
                <button id="whatsapp-btn" class="action-btn" data-id="whatsapp-btn"><img src="/images/Icons/whatsapp.svg" alt="">WhatsApp</button>
        </div>
        `;
    }

        

    truncateText(charLimit) {
        const descriptionElement = this.querySelector(".event-card-description");
        const text = descriptionElement.textContent;
    
        if (charLimit && text.length > charLimit) {
          descriptionElement.textContent = text.slice(0, charLimit) + " ...";
        }
    }
    
    setupActionButtons(whatsappLink) {
        const contactButton = this.querySelector("#contact-btn");
        const viewButton = this.querySelector("#view-btn");
        const whatsappButton = this.querySelector("#whatsapp-btn");

        contactButton.addEventListener("click", () => {
          // Show popup form for the selected event-card
          // Implement your popup logic here
          console.log("Contact button clicked");

        });
    
        viewButton.addEventListener("click", () => {
          // Show popup with content related to the event-card
          // popup logic here
          console.log("View button clicked");
           // Create a popup with a slider carousel and description
           const overlay = document.createElement("div");
           overlay.classList.add("fixed", "bg-black", "top-0", "left-0", "right-0", "bottom-0", "opacity-75", "pointer-events-auto", "ease-in-out", "duration-300");
           const popup = document.createElement("div");
           popup.classList.add("popup");


           // Close button for the popup
            const closeButton = document.createElement("a");
            closeButton.classList.add("popup-close-button");
            const closeButtonIcon = document.createElement("img");
            closeButtonIcon.src = "/images/Icons/close.svg";
            closeButtonIcon.classList.add("h-8")
            closeButton.appendChild(closeButtonIcon);
            closeButton.classList.add("w-fit", "fixed", "top-[6px]", "right-[6px]", "cursor-pointer");
            
            // Add carousel images and configuration here
            const imageSliderElement = document.createElement("image-slider");
            imageSliderElement.classList.add("image-slider");
            // const images = this.getAttribute("data-slider-images");
            // const imagesArray = images.replace(/'/g, "").split(", ");
            // console.log(imagesArray);
            
            
           const description = document.createElement("p");
           description.textContent = this.getAttribute("description");
           popup.appendChild(closeButton);
           popup.appendChild(imageSliderElement);
           popup.appendChild(description);
           
           
           // Add the popup to the DOM
           this.appendChild(popup);
           this.appendChild(overlay);
           // Calling the image slider function
           //  imageSlider(document.querySelector(".image-slider"),images);

           // Close button logic
           closeButton.addEventListener ("click", () => {
            console.log("close button clicked");
            popup.remove();
            overlay.remove();
           } )

        });
    
        whatsappButton.addEventListener("click", () => {
          // Open custom link to WhatsApp in a new tab
          console.log("WhatsApp button clicked");

          if (whatsappLink) {
            window.open(whatsappLink, "_blank");
          }
        });
    }
    
}

customElements.define("event-card", EventCard);
