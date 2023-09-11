export default class Footer extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `<footer>
        <div class="flex flex-col justify-center items-center pt-8">
            <div class="flex flex-col justify-center items-center w-full max-w-7xl">
                <div class="flex flex-col text-center justify-center py-14 gap-6 bg-[#ea580c] rounded-2xl w-full delay-[300ms] duration-[600ms] taos:translate-x-[-200px] taos:opacity-0">
                    <h2 class="text-4xl font-semibold">Subscribe To our Newsletter</h2>
                    <p>Subscribe to stay tuned for new web design and latest updates. Let's do it!</p>
                    <div class="flex mt-8 justify-center items-center w-full h-14"> 
                    <form class="absolute w-1/4" action="">
                        <input class="rounded-full w-full px-4 h-14" placeholder="Your Email Here" type="email">
                        <button class="rounded-full absolute top-[4px] right-[5px] px-4 h-12 bg-black" type="submit">subscribe</button>
                    </form>
                    </div>
                </div>
                <div class="flex flex-col pt-14 pb-6 gap-6">
                        <ul class="flex flex-row justify-center items-center gap-8 h-12">
                            <li><img class="h-6" src="/images/Icons/instagram.svg"/></li>
                            <li><img class="h-6" src="/images/Icons/facebook.svg"/></li>
                            <li><img class="h-6" src="/images/Icons/linkedin.svg"/></li>
                            <li><img class="h-6" src="/images/Icons/whatsapp.svg"/></li>
                        </ul>
                    <img class="h-12 mb-8" src="/images/ee-footer-logo.svg"/>
                    <nav>
                        <ul class="flex flex-row gap-3">
                            <li>Privacy Policy</li>
                            <li>Terms and Conditions</li>
                            <li>About us</li>
                            <li>Contact us</li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div class="flex justify-center items-center h-20 border-t w-full max-w-7xl">
                <p>©2023 - All Right Reserved | Made by Starthinc Labs</p>
            </div>
        </div>
        
    </footer>` 
    }
}
customElements.define('main-footer', Footer);