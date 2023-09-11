/* Header component */
export default class Header extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <header>
            <div class="flex flex-row justify-center px-2.5 py-2.5 h-20 mx-auto text-white bg-[#09090b]">
                <nav class="w-full max-w-7xl justify-between items-center flex flex-row">
                    <a href="#" class="basis-1/3">
                        <img class="h-12" src="/images/ee-logo-v1.svg"/>
                    </a>
                <ul class="flex flex-row gap-3.5">
                    <li>Accueil</li>
                    <li>Services</li>
                    <li>Portfeuille</li>
                    <li>A Propos de Nous</li>
                    <li>Contactez-nous</li>
                </ul>
                <button class="px-3.5 rounded-full py-2 bg-orange-500">Get a Quote</button>
                </nav>
            </div>
        </header>
        `
        
    }
}
customElements.define('main-header', Header);