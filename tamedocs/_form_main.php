<section class="form">
    <div class="container container--form">
        <div class="form__item">
            <h1 class="form__title">Get in touch!</h1>
            <form class="form__body" action="#">
                <div class="form__group form__group--row">
                    <div class="form__group-inner">
                        <label for="name">Name</label>
                        <input class="form__t-input" type="text" name="name" id="name">
                    </div>
                    <div class="form__group-inner">
                        <label for="last-name">Last Name</label>
                        <input class="form__t-input" type="text" name="last-name" id="last-name">
                    </div>
                </div>
                <div class="form__group form__group--row">
                    <div class="form__group-inner">
                        <label for="email">Email</label>
                        <input class="form__t-input" type="email" name="email" id="email">
                    </div>
                    <div class="form__group-inner">
                        <label for="tel">Number</label>
                        <input class="form__t-input" type="text" name="tel" id="tel">
                    </div>
                </div>
                <div class="form__group">
                    <label for="company">Company</label>
                    <input class="form__t-input" type="text" name="company" id="company">
                </div>
                <div class="form__group">
                    <label for="message">Message</label>
                    <textarea class="form__textarea" name="message" id="message" cols="30" rows="3"></textarea>
                </div>
                <div class="form__group">
                    <label for="select">What is your message regarding? </label>
                    <select class="form__select" name="select" id="select">
                        <option value="0">Product</option>
                        <option value="1">Demo</option>
                        <option value="2">Data Privacy</option>
                        <option value="3">Issue</option>
                        <option value="4">Payments</option>
                        <option value="5">Other</option>
                    </select>
                </div>
                <div class="form__group form__group--checkbox">
                    <input class="form__c-input" type="checkbox" name="pp" id="pp">
                    <label for="pp">
                        <span>I agree to my data being collected and processed in accordance with the Tamedocs privacy policy.</span>
                    </label>

                </div>
                <div class="form__group form__group--submit">
                    <button class="form__button btn btn--fill-1" type="submit">Send Message</button>
                </div>
            </form>
        </div>
        <div class="form__item">
            <picture>
                <img class="form__img" src="assets/img/form/1.png" width="" height="" alt="">
            </picture>
        </div>
    </div>
</section>
