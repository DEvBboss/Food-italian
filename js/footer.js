let footerSection = document.querySelector('footer')

let createFooterContent = `
 <div class="container">
         <div class="top">
            <div class="footer_bx b1">
                    <h3>Company</h3>
                    <ul>
                        <li><a href="./index.html"><i class='bx bx-chevron-right' ></i> Home</a></li>
                        <li><a href="./about.html"><i class='bx bx-chevron-right' ></i> About Us</a></li>
                        <li><a href="./contact.html"><i class='bx bx-chevron-right' ></i> Contact Us</a></li>
                        <li><a href="#"><i class='bx bx-chevron-right' ></i> Reservation</a></li>
                        <li><a href="#"><i class='bx bx-chevron-right' ></i> Privacy Policy</a></li>
                        <li><a href="#"><i class='bx bx-chevron-right' ></i> Team & Condition</a></li>
                    </ul>
            </div>
            <div class="footer_bx b2">
                      <h3>Contact</h3>
                      <div class="addressBx">
                        <i class='bx bxs-map' ></i>
                        <p>Rayong,Thaland</p>
                      </div>
                      <div class="addressBx">
                        <i class='bx bxs-phone' ></i>
                        <p>+66 123 456 789</p>
                      </div>
                      <div class="addressBx">
                        <i class='bx bxs-envelope' ></i>
                        <p>KitchenFood@gmail.com</p>
                      </div>
                      <div class="social_mediaBx">
                        <i class='bx bxl-facebook' ></i>
                        <i class='bx bxl-youtube' ></i>
                        <i class='bx bxl-linkedin'></i>
                      </div>
            </div>
            <div class="footer_bx b3">
                   <h3>Opening</h3>
                   <div class="timeOpen">
                    <p class="week">วันจันทร์ - วันศุกร์</p>
                    <p>09:00 - 20:00</p>
                   </div>
                   <div class="timeOpen">
                    <p class="week">วันเสาร์ - วันอาทิตย์</p>
                    <p>15:00 - 22:00</p>
                   </div>
            </div>
            <div class="footer_bx b4">
                 <h3>Gallery  </h3>
                 <div class="footerInputBx">                
              </div>
            </div>
         </div>
         <div class="down">
            <div class="left">
                <p>© Italian Food , All Rights Reserved.</p>
            </div>
            <div class="right">
                <ul>
                    <li>Home</li>
                    <li>Cookies</li>
                    <li>Help</li>
                    <li>FAQs</li>
                </ul>
            </div>
         </div>
    </div>
`


footerSection.innerHTML = createFooterContent