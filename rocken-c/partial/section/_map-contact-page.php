<section class="map-section dark-bg">
    <div class="section__container">
        <div class="map-section__left">
            <div class="map-section__form">
                <div class="section__tag">Contact</div>
                <h2 class="section__title">Immer gerne <br>
                    <span>für Sie da</span></h2>

                <form action="#">
                    <div class="map-section__form-group-wrapper">
                        <div class="form-group">
                            <label>Vorname</label>
                            <input type="text" class="form-control" placeholder="Enter your first name" required>
                        </div>
                        <div class="form-group">
                            <label>Nachname</label>
                            <input type="text" class="form-control" placeholder="Enter your last name" required>
                        </div>
                        <div class="form-group">
                            <label>E-Mail-Adresse</label>
                            <input type="email" class="form-control" placeholder="Enter your email" required>
                        </div>
                        <div class="form-group">
                            <label>Telefonnummer</label>
                            <input type="tel" class="form-control" placeholder="Enter your phone number" required>
                        </div>
                        <div class="form-group">
                            <div class="custom-control custom-checkbox d-inline-flex">
                                <input type="radio" name="check" class="custom-control-input" id="jobsuche" checked>
                                <label class="custom-control-label" for="jobsuche">Jobsuche</label>
                            </div>
                            <div class="custom-control custom-checkbox d-inline-flex">
                                <input type="radio" name="check" class="custom-control-input" id="jobangebot">
                                <label class="custom-control-label" for="jobangebot">Jobangebot</label>
                            </div>
                            <div class="custom-control custom-checkbox d-inline-flex">
                                <input type="radio" name="check" class="custom-control-input" id="marketing">
                                <label class="custom-control-label" for="marketing">Marketing</label>
                            </div>
                            <div class="custom-control custom-checkbox d-inline-flex">
                                <input type="radio" name="check" class="custom-control-input" id="allgemein">
                                <label class="custom-control-label" for="allgemein">Allgemein</label>
                            </div>
                            <div class="custom-control custom-checkbox d-inline-flex">
                                <input type="radio" name="check" class="custom-control-input" id="lorem">
                                <label class="custom-control-label" for="lorem">Lorem ipsum</label>
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Ihre Nachricht</label>
                            <textarea class="form-control" placeholder="Enter your message"></textarea>
                        </div>
                    </div>
                    <div class="form-group__footer">
                        <button class="btn btn--l btn--bg-2 btn--lo-a" href="#"><span class="btn__text">Send</span></button>
                    </div>
                </form>
            </div>
        </div>
        <div class="map-section__right">
            <div id="map" class='map'></div>
            <div class="map__footer">
                <div class="map__footer__wrapper">
                    <div class="map__footer__right">
                        <div class="info__contact">
                            <div class="info__contact__icon blue-bg">
                                <picture class="d-flex">
                                    <img src="assets/img/section/prices-page/sms.svg" alt="#" loading="lazy">
                                </picture>
                            </div>
                            <div class="info__contact__desc">
                                <div class="info__contact__title">Email</div>
                                <a href="mailto:info@rocken.com" class="info__contact__link">info@rocken.com</a>
                            </div>
                        </div>
                        <div class="info__contact">
                            <div class="info__contact__icon purple-bg">
                                <picture class="d-flex">
                                    <img src="assets/img/section/prices-page/call-calling.svg" alt="#" loading="lazy">
                                </picture>
                            </div>
                            <div class="info__contact__desc">
                                <div class="info__contact__title">Jetzt telefonisch erreichbar bis 19 Uhr</div>
                                <a href="tel:41443852121" class="info__contact__link">+41 44 385 21 21</a>
                            </div>
                        </div>
                    </div>
                    <div class="map__footer__left">
                        <div class="info__contact__title">Standort</div>
                        <div class="map__address">ROCKEN AG, Limmatstrasse 250 <br>8005, Zürich <br>Schweiz</div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</section>

<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAkt0YSJsutDwTRQwC7GIJRILDGHhjuG_I&callback=initMap" async defer></script>
<script>

    function initMap() {
        var centerCoordinates = {lat: 47.387444, lng: 8.526844};
        var isMobile = window.innerWidth < 768;
        var mapOptions = {
            center: centerCoordinates,
            zoom: isMobile ? 15 : 17,
            styles: [
                {
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#212121"
                        }
                    ]
                },
                {
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#757575"
                        }
                    ]
                },
                {
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#212121"
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#757575"
                        }
                    ]
                },
                {
                    "featureType": "administrative.country",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#9e9e9e"
                        }
                    ]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "administrative.locality",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#bdbdbd"
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#757575"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#181818"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#616161"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#1b1b1b"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#2c2c2c"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#8a8a8a"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#373737"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#3c3c3c"
                        }
                    ]
                },
                {
                    "featureType": "road.highway.controlled_access",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#4e4e4e"
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#616161"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#757575"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#000000"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#3d3d3d"
                        }
                    ]
                }
            ]
        };
        var map = new google.maps.Map(document.getElementById('map'), mapOptions);

        function createMarker(position, icon, title) {
            var marker = new google.maps.Marker({
                position: position,
                map: map,
                icon: icon,
                title: title
            });
        }

        var centerIcon = {
            url: isMobile ? 'assets/img/section/prices-page/marker-mobile.svg' : 'assets/img/section/prices-page/marker.svg',
        };

        var centerMarker = createMarker(centerCoordinates, centerIcon, 'ROCKEN AG');


    }
</script>