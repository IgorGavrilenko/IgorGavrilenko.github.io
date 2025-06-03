window.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger, SplitText);


    function heroContentFunc() {
        let tl = gsap.timeline({
            defaults: {
                duration: .5,
            },
            scrollTrigger: {
                trigger: '.prices-hero',
                toggleActions: 'play none none none',
                start: 'top 100%',
                onRefresh: self => self.progress && self.animation.progress(1),
            }
        });
        tl
            .to('.prices-hero__subtitle', {
                duration: 1,
                autoAlpha: 1,
            })
            .to('.prices-hero__head p', {
                duration: 1,
                autoAlpha: 1,
            }, "-=.5")
            .to('.prices-hero__wrapper', {
                duration: 1,
                autoAlpha: 1,
            }, "-=.5")
            .to('.prices-hero__label', {
                right: 0,
            }, "-=.5")
    }

    // gsapMatchMediaFunc
    let mm;

    function gsapMatchMediaFunc() {
        mm = gsap.matchMedia();
        let Smooth;
        mm.add('(min-width: 1200px)', () => {
            const scroller = '.scroller';
            const scrollerInner = '.scroller__inner';
            const Smooth = ScrollSmoother.create({
                wrapper: scroller,
                content: scrollerInner,
                smooth: 1,
                effects: true,
                smoothTouch: .05,
                normalizeScroll: true,
                ignoreMobileResize: true
            });
        });
    }

    setTimeout(() => {
        heroContentFunc();
    }, 4000);


    const checkboxes = document.querySelectorAll('.switch-input');
    const plans = document.querySelectorAll('[id^="plan__"]');

    if (checkboxes) {
        calculatePlanHeights();

        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', calculatePlanHeights);
        });

        function calculatePlanHeights() {
            plans.forEach((plan, index) => {
                const planIdSuffix = ('0' + (index + 1)).slice(-2);
                let height = 0;

                checkboxes.forEach(chkbox => {
                    const inactiveAttributeName = `data-height-inactive__${planIdSuffix}`;
                    const activeAttributeName = `data-height-active__${planIdSuffix}`;
                    const attributeValue = parseInt(chkbox.checked ? chkbox.getAttribute(activeAttributeName) : chkbox.getAttribute(inactiveAttributeName));
                    height += attributeValue;
                });

                plan.style.height = height + '%';
            });
        }
    }



    const addFormRowButton = document.querySelector('.add-form-row');
    const formGroupWrapper = document.querySelector('.nl-modal__form-group-wrapper');
    let positionCounter = 1;

    if (addFormRowButton) {
        addFormRowButton.addEventListener('click', function() {
            const formGroupWrappers = document.querySelectorAll('.nl-modal__form-group-wrapper');
            const clonedFormGroupWrapper = formGroupWrapper.cloneNode(true);


            positionCounter++;


            const clonedPositionHead = clonedFormGroupWrapper.querySelector('.position__head');


            clonedPositionHead.querySelector('div').textContent = `Position ${positionCounter.toString().padStart(2, '0')}`;


            formGroupWrapper.parentNode.appendChild(clonedFormGroupWrapper);

            if (formGroupWrappers.length > 1) {
                formGroupWrapper.parentNode.classList.add('multiple-elements');
            }

            const removeFormRowButtons = clonedFormGroupWrapper.querySelectorAll('.remove-form-row');
            removeFormRowButtons.forEach(button => {
                button.addEventListener('click', function() {

                    clonedFormGroupWrapper.parentNode.removeChild(clonedFormGroupWrapper);

                    const positionHeaders = document.querySelectorAll('.position__head');

                    positionHeaders.forEach((header, index) => {
                        header.querySelector('div').textContent = `Position ${(index + 1).toString().padStart(2, '0')}`;
                    });

                    positionCounter = positionHeaders.length;
                });
            });
        });
    }



    const modalButtons = document.querySelectorAll('.prices-card .js-modal');

    if (modalButtons) {
        modalButtons.forEach(button => {
            button.addEventListener('click', function(event) {


                const pricesCard = this.closest('.prices-card');


                const modalFormTitle = document.querySelector('#modal__plan .form-title');
                const modalImg = document.querySelector('#modal__plan .hor__card__media picture img');


                const cardTitle = pricesCard.querySelector('.prices-card__title').innerText;
                const cardImgSrc = pricesCard.querySelector('.prices-card__media__img').dataset.src;


                modalFormTitle.innerText = cardTitle;
                modalImg.setAttribute('src', cardImgSrc);


                const modal = document.querySelector(this.dataset.modal);
                modal.style.display = 'block';


            });
        });
    }

    const modalButtons2 = document.querySelectorAll('.plan-modal-link');

    if (modalButtons2) {
        modalButtons2.forEach(button => {
            button.addEventListener('click', function(event) {

                const modalFormTitle = document.querySelector(`${this.dataset.modal} .form-title`);
                const modalImg = document.querySelector(`${this.dataset.modal} .hor__card__media picture img`);

                modalFormTitle.innerText = this.dataset.title;
                modalImg.setAttribute('src', this.dataset.src);

                const modal = document.querySelector(this.dataset.modal);
                modal.style.display = 'block';

            });
        });
    }

    var goStepButton = document.querySelector('.go-step-02');
    if (goStepButton) {
        goStepButton.addEventListener('click', function(event) {
            event.preventDefault();
            var allFieldsFilled = true;
            var requiredInputs = document.querySelectorAll('.step-01 input[required], .step-01 textarea[required]');
            for (var i = 0; i < requiredInputs.length; i++) {
                if (requiredInputs[i].value === '') {
                    allFieldsFilled = false;
                    break;
                }
            }


            if (allFieldsFilled) {

                document.querySelector('.step-02').classList.add('active');

                document.querySelector('.step-01').classList.remove('active');
            } else {

                alert('Seien Sie freundlich, füllen Sie alle Felder auf.');

            }
        });
    }

    function isValidEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }


    function isValidPhoneNumber(phoneNumber) {
        var phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phoneNumber);
    }

    var telInput = document.querySelector('.step-02 input[type="tel"]');
    if (telInput) {
        telInput.addEventListener('keydown', function(event) {
            // Коди клавіш, які відповідають цифрам
            var allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'Backspace', 'ArrowLeft', 'ArrowRight', 'Tab'];

            if (!allowedKeys.includes(event.key)) {
                event.preventDefault();
            }
        });
    }

    var goStepButton03 = document.querySelector('.go-step-03');
    if (goStepButton03) {
        goStepButton03.addEventListener('click', function(event) {
            event.preventDefault();
            var allFieldsFilled = true;
            var requiredInputs = document.querySelectorAll('.step-02 input[required], .step-02 textarea[required]');
            for (var i = 0; i < requiredInputs.length; i++) {
                if (requiredInputs[i].value === '') {
                    allFieldsFilled = false;
                    break;
                }
            }

            var emailInput = document.querySelector('.step-02 input[type="email"]');
            if (emailInput && !isValidEmail(emailInput.value)) {
                alert('Die eingegebene E-Mail-Adresse ist falsch.');
                return;
            }

            var telInput = document.querySelector('.step-02 input[type="tel"]');
            if (telInput && !isValidPhoneNumber(telInput.value)) {
                alert('Die eingegebene Telefonnummer ist falsch.');
                return;
            }


            if (allFieldsFilled) {
                document.querySelector('.step-03').classList.add('active');
                document.querySelector('.step-02').classList.remove('active');
            } else {

                alert('Seien Sie freundlich, füllen Sie alle Felder auf.');

            }
        });
    }



// DOMContentLoaded //
});
// DOMContentLoaded //
