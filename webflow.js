<!DOCTYPE html>
<!-- This site was created in Webflow. https://www.webflow.com -->
<!-- Last Published: Fri Apr 12 2024 08:08:35 GMT+0000 (Coordinated Universal Time) -->
<html data-wf-domain="fontbrief-v2.webflow.io" data-wf-page="65314cd1aa740b92c48f779d" data-wf-site="64a2f089a6ce9ca261d2a68d" lang="en">
    <head>
        <meta charset="utf-8"/>
        <title>FontBrief-v2</title>
        <meta content="width=device-width, initial-scale=1" name="viewport"/>
        <meta content="Webflow" name="generator"/>
        <link href="https://assets-global.website-files.com/64a2f089a6ce9ca261d2a68d/css/fontbrief-v2.webflow.93e27d23d.css" rel="stylesheet" type="text/css"/>
        <script type="text/javascript">
            !function(o, c) {
                var n = c.documentElement
                  , t = " w-mod-";
                n.className += t + "js",
                ("ontouchstart"in o || o.DocumentTouch && c instanceof DocumentTouch) && (n.className += t + "touch")
            }(window, document);
        </script>
        <link href="https://assets-global.website-files.com/img/favicon.ico" rel="shortcut icon" type="image/x-icon"/>
        <link href="https://assets-global.website-files.com/img/webclip.png" rel="apple-touch-icon"/>
        <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@1.24.0"></script>
        <script>
            function loadResource(src, type, isModule=false) {
                if (type === 'script') {
                    var script = document.createElement('script');
                    script.src = src;
                    script.async = false;
                    if (isModule) {
                        script.type = 'module';
                    }
                    document.head.appendChild(script);
                } else if (type === 'css') {
                    var link = document.createElement('link');
                    link.href = src;
                    link.rel = 'stylesheet';
                    document.head.appendChild(link);
                }
            }

            function loadLocalhostResources() {
                // Load JavaScript
                var script = document.createElement('script');
                script.src = 'http://localhost:5500/fb-index.js';
                script.type = 'module';
                script.onerror = function() {
                    loadResource('https://cristicoss.github.io/font-brief/fb-index.js', 'script', true);
                }
                ;
                script.async = false;
                document.head.appendChild(script);

                // Load CSS
                var cssLink = document.createElement('link');
                cssLink.href = 'http://localhost:5500/style-fontbrief.css';
                cssLink.rel = 'stylesheet';
                cssLink.onerror = function() {
                    loadResource('https://cristicoss.github.io/font-brief/style-fontbrief.css', 'css');
                }
                ;
                document.head.appendChild(cssLink);
            }

            loadLocalhostResources();
        </script>
    </head>
    <body>
        <div class="new-site_container">
            <div class="fimxed_guide-delete hidden"></div>
            <main id="app" class="page-wrapper">
                <main v-scope="{ blend: &#x27;&#x27;  }" class="main-wrapper">
                    <div v-scope="{ counter: store.counter}" id="w-node-_13076c98-8450-3c1c-d05f-4f69e4996814-c48f779d" class="island_container">
                        <nav id="w-node-_976e7115-d86e-338a-74e6-3ca3f1dc5794-c48f779d" data-w-id="976e7115-d86e-338a-74e6-3ca3f1dc5794" class="island_wrapper">
                            <div class="filters_wrapper">
                                <a id="w-node-d82f1d58-01e8-fe71-c49d-236582edc314-c48f779d" href="#" class="island_logo-container w-inline-block">
                                    <div id="w-node-_15c0d46c-0dbb-e3e5-50c5-c7a21afd15dd-c48f779d" class="fb_logo-container">
                                        <div class="notification_new-fonts right">
                                            <div id="w-node-d1748690-724f-edae-100d-96a3f0de3457-c48f779d" class="notification_number">5</div>
                                        </div>
                                        <div class="fb_logo w-embed">
                                            <svg width="38" height="43" viewBox="0 0 38 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.49926 24.0484C4.49926 26.8316 6.06712 28.6971 8.33546 29.4188C6.01545 28.9033 2.9227 27.2539 2.9227 23.6462C2.9227 17.2546 13.9615 10.7544 26.9727 12.323C16.6362 11.9369 4.49926 17.3994 4.49926 24.0484ZM15.4786 34.3339C12.8749 38.5857 9.01077 42.459 3.90744 42.459C1.89817 42.459 0.351562 41.6856 0.351562 40.2426C0.351562 38.8507 1.79484 38.2327 3.44432 38.2327C5.04194 38.2327 6.44825 38.5014 7.51442 38.9044C6.42625 38.6227 5.04194 38.5419 3.65033 38.5419C1.8466 38.5419 0.97043 39.1601 0.97043 40.0879C0.97043 41.1704 2.20705 41.6856 3.95976 41.6856C8.39237 41.6856 11.737 38.2966 14.6541 33.6122L25.1961 17.5296C28.7341 11.6827 34.1137 8.17188 37.773 8.17188C34.6804 8.42992 29.905 11.8273 26.2265 17.5296L15.4786 34.3339ZM16.9424 27.1511C16.9424 29.5221 12.7676 30.2949 9.46865 29.6763C12.6647 29.8827 15.4845 28.5089 15.845 25.829C16.3089 25.9321 16.9424 26.5839 16.9424 27.1511ZM33.53 35.0088C33.53 31.04 30.9103 27.5116 22.7667 27.5116C32.0448 27.0478 34.9308 30.8618 34.9308 35.0366C34.9308 41.2218 26.0727 45.571 14.1426 40.2224C25.8164 44.7224 33.53 40.2146 33.53 35.0088ZM23.0244 26.6869C30.5492 26.8416 35.343 24.6256 35.343 19.3682C35.343 16.7483 34.4166 14.4505 31.292 13.0655C34.6929 14.136 36.632 16.2871 36.632 19.3162C36.632 23.7489 32.4571 27.6666 23.0244 26.6869Z" fill="currentColor"/>
                                                <path d="M20.4137 0.375H1.86328V8.16815H20.4137V0.375Z" fill="currentColor"/>
                                                <path d="M20.4137 11.3594H1.86328V19.1525H20.4137V11.3594Z" fill="currentColor"/>
                                                <path d="M7.79315 0.375H0V26.0601H7.79315V0.375Z" fill="currentColor"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div id="w-node-_52254cbe-225c-0ed8-e092-b677464b07f8-c48f779d" class="fb_name-logo fadein">Font Brief</div>
                                </a>
                                <div id="w-node-_75095dbd-fd4b-150e-709e-2383781cc935-c48f779d" class="filters_container">
                                    <div class="fb_name-big fadeout">Font Brief</div>
                                    <div id="w-node-_403f7a43-fec3-203c-a4c8-9d281a620b24-c48f779d" class="filters_attributes-container fadein hidden">
                                        <div data-fade-nr="1" class="filter_container fadein">
                                            <div class="filter_name">
                                                <div class="filter_attribute-name">Neutral</div>
                                                <div class="filter_attribute-name">Expressive</div>
                                            </div>
                                            <div class="filter_boxes-container">
                                                <div v-on:mouseout="handleMouseOut" data-atr="1a" v-on:click="handleClick" data-pos="1" v-on:mouseover="handleMouseOver" class="filter_box"></div>
                                                <div v-on:mouseout="handleMouseOut" data-atr="1o" v-on:click="handleClick" data-pos="2" v-on:mouseover="handleMouseOver" class="filter_box"></div>
                                                <div v-on:mouseout="handleMouseOut" data-atr="1m" v-on:click="handleClick" data-pos="3" v-on:mouseover="handleMouseOver" class="filter_box"></div>
                                                <div v-on:mouseout="handleMouseOut" data-atr="1j" v-on:click="handleClick" data-pos="4" v-on:mouseover="handleMouseOver" class="filter_box"></div>
                                                <div v-on:mouseout="handleMouseOut" data-atr="1i" v-on:click="handleClick" data-pos="5" v-on:mouseover="handleMouseOver" class="filter_box last"></div>
                                            </div>
                                        </div>
                                        <div data-fade-nr="2" class="filter_container fadein">
                                            <div class="filter_attribute-name">Elegant / Rugged</div>
                                            <div class="filter_boxes-container">
                                                <div v-on:mouseout="handleMouseOut" data-atr="2a" v-on:click="handleClick" v-on:mouseover="handleMouseOver" data-pos="1" class="filter_box"></div>
                                                <div v-on:mouseout="handleMouseOut" data-atr="2o" v-on:click="handleClick" v-on:mouseover="handleMouseOver" data-pos="2" class="filter_box"></div>
                                                <div v-on:mouseout="handleMouseOut" data-atr="2m" v-on:click="handleClick" v-on:mouseover="handleMouseOver" data-pos="3" class="filter_box"></div>
                                                <div v-on:mouseout="handleMouseOut" data-atr="2j" v-on:click="handleClick" v-on:mouseover="handleMouseOver" data-pos="4" class="filter_box"></div>
                                                <div v-on:mouseout="handleMouseOut" data-atr="2i" v-on:click="handleClick" v-on:mouseover="handleMouseOver" data-pos="5" class="filter_box last"></div>
                                            </div>
                                        </div>
                                        <div data-fade-nr="3" class="filter_container fadein">
                                            <div class="filter_attribute-name">Serious / Friendly</div>
                                            <div class="filter_boxes-container">
                                                <div v-on:mouseout="handleMouseOut" data-atr="3a" v-on:click="handleClick" v-on:mouseover="handleMouseOver" data-pos="1" class="filter_box"></div>
                                                <div v-on:mouseout="handleMouseOut" data-atr="3o" v-on:click="handleClick" v-on:mouseover="handleMouseOver" data-pos="2" class="filter_box"></div>
                                                <div v-on:mouseout="handleMouseOut" data-atr="3m" v-on:click="handleClick" v-on:mouseover="handleMouseOver" data-pos="3" class="filter_box"></div>
                                                <div v-on:mouseout="handleMouseOut" data-atr="3j" v-on:click="handleClick" v-on:mouseover="handleMouseOver" data-pos="4" class="filter_box"></div>
                                                <div v-on:mouseout="handleMouseOut" data-atr="3i" v-on:click="handleClick" v-on:mouseover="handleMouseOver" data-pos="5" class="filter_box last"></div>
                                            </div>
                                        </div>
                                        <div data-fade-nr="4" class="filter_container fadein">
                                            <div class="filter_attribute-name">Technic / Organic</div>
                                            <div class="filter_boxes-container">
                                                <div v-on:mouseout="handleMouseOut" data-atr="4a" v-on:click="handleClick" v-on:mouseover="handleMouseOver" data-pos="1" class="filter_box"></div>
                                                <div v-on:mouseout="handleMouseOut" data-atr="4o" v-on:click="handleClick" v-on:mouseover="handleMouseOver" data-pos="2" class="filter_box"></div>
                                                <div v-on:mouseout="handleMouseOut" data-atr="4m" v-on:click="handleClick" v-on:mouseover="handleMouseOver" data-pos="3" class="filter_box"></div>
                                                <div v-on:mouseout="handleMouseOut" data-atr="4j" v-on:click="handleClick" v-on:mouseover="handleMouseOver" data-pos="4" class="filter_box"></div>
                                                <div v-on:mouseout="handleMouseOut" data-atr="4i" v-on:click="handleClick" v-on:mouseover="handleMouseOver" data-pos="5" class="filter_box last"></div>
                                            </div>
                                        </div>
                                        <div data-fade-nr="5" class="filter_container fadein">
                                            <div class="filter_attribute-name">Classic / Progressive</div>
                                            <div class="filter_boxes-container">
                                                <div v-on:mouseout="handleMouseOut" data-atr="5a" v-on:click="handleClick" v-on:mouseover="handleMouseOver" data-pos="1" class="filter_box"></div>
                                                <div v-on:mouseout="handleMouseOut" data-atr="5o" v-on:click="handleClick" v-on:mouseover="handleMouseOver" data-pos="2" class="filter_box"></div>
                                                <div v-on:mouseout="handleMouseOut" data-atr="5m" v-on:click="handleClick" v-on:mouseover="handleMouseOver" data-pos="3" class="filter_box"></div>
                                                <div v-on:mouseout="handleMouseOut" data-atr="5j" v-on:click="handleClick" v-on:mouseover="handleMouseOver" data-pos="4" class="filter_box"></div>
                                                <div v-on:mouseout="handleMouseOut" data-atr="5i" v-on:click="handleClick" v-on:mouseover="handleMouseOver" data-pos="5" class="filter_box last"></div>
                                            </div>
                                        </div>
                                        <div data-fade-nr="6" class="filter_container fadein">
                                            <div class="filter_attribute-name">Familiar / Daring</div>
                                            <div class="filter_boxes-container">
                                                <div v-on:mouseout="handleMouseOut" data-atr="6a" v-on:click="handleClick" v-on:mouseover="handleMouseOver" data-pos="1" class="filter_box"></div>
                                                <div v-on:mouseout="handleMouseOut" data-atr="6o" v-on:click="handleClick" v-on:mouseover="handleMouseOver" data-pos="2" class="filter_box"></div>
                                                <div v-on:mouseout="handleMouseOut" data-atr="6m" v-on:click="handleClick" v-on:mouseover="handleMouseOver" data-pos="3" class="filter_box"></div>
                                                <div v-on:mouseout="handleMouseOut" data-atr="6j" v-on:click="handleClick" v-on:mouseover="handleMouseOver" data-pos="4" class="filter_box"></div>
                                                <div v-on:mouseout="handleMouseOut" data-atr="6i" v-on:click="handleClick" v-on:mouseover="handleMouseOver" data-pos="5" class="filter_box last"></div>
                                            </div>
                                        </div>
                                        <div data-fade-nr="7" class="filter_container fadein">
                                            <div class="filter_attribute-name">Loud / Discreet</div>
                                            <div class="filter_boxes-container">
                                                <div v-on:mouseout="handleMouseOut" data-atr="7a" v-on:click="handleClick" v-on:mouseover="handleMouseOver" data-pos="1" class="filter_box"></div>
                                                <div v-on:mouseout="handleMouseOut" data-atr="7o" v-on:click="handleClick" v-on:mouseover="handleMouseOver" data-pos="2" class="filter_box"></div>
                                                <div v-on:mouseout="handleMouseOut" data-atr="7m" v-on:click="handleClick" v-on:mouseover="handleMouseOver" data-pos="3" class="filter_box"></div>
                                                <div v-on:mouseout="handleMouseOut" data-atr="7j" v-on:click="handleClick" v-on:mouseover="handleMouseOver" data-pos="4" class="filter_box"></div>
                                                <div v-on:mouseout="handleMouseOut" data-atr="7i" v-on:click="handleClick" v-on:mouseover="handleMouseOver" data-pos="5" class="filter_box last"></div>
                                            </div>
                                        </div>
                                        <div data-fade-nr="8" class="filter_container fadein">
                                            <div class="filter_attribute-name">Cold / Warm</div>
                                            <div class="filter_boxes-container">
                                                <div v-on:mouseout="handleMouseOut" data-atr="8a" v-on:click="handleClick" v-on:mouseover="handleMouseOver" data-pos="1" class="filter_box"></div>
                                                <div v-on:mouseout="handleMouseOut" data-atr="8o" v-on:click="handleClick" v-on:mouseover="handleMouseOver" data-pos="2" class="filter_box"></div>
                                                <div v-on:mouseout="handleMouseOut" data-atr="8m" v-on:click="handleClick" v-on:mouseover="handleMouseOver" data-pos="3" class="filter_box"></div>
                                                <div v-on:mouseout="handleMouseOut" data-atr="8j" v-on:click="handleClick" v-on:mouseover="handleMouseOver" data-pos="4" class="filter_box"></div>
                                                <div v-on:mouseout="handleMouseOut" data-atr="8i" v-on:click="handleClick" v-on:mouseover="handleMouseOver" data-pos="5" class="filter_box last"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="filters_secondary-container fadein hidden">
                                        <div id="w-node-_403f7a43-fec3-203c-a4c8-9d281a620b79-c48f779d" class="filters_search-container">
                                            <div class="icon_container">
                                                <div class="icon_search w-embed">
                                                    <svg height="100%" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M9.87627 9.02705H9.25209L9.03086 8.81372C9.80516 7.91301 10.2713 6.74366 10.2713 5.4716C10.2713 2.63513 7.97212 0.335937 5.13566 0.335937C2.2992 0.335937 0 2.63513 0 5.4716C0 8.30806 2.2992 10.6073 5.13566 10.6073C6.40772 10.6073 7.57707 10.1411 8.47779 9.3668L8.69111 9.58802V10.2122L12.6416 14.1548L13.8189 12.9776L9.87627 9.02705ZM5.13566 9.02705C3.16831 9.02705 1.5802 7.43895 1.5802 5.4716C1.5802 3.50424 3.16831 1.91614 5.13566 1.91614C7.10301 1.91614 8.69111 3.50424 8.69111 5.4716C8.69111 7.43895 7.10301 9.02705 5.13566 9.02705Z" fill="currentcolor"/>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div class="icon_container">
                                                <div id="w-node-_403f7a43-fec3-203c-a4c8-9d281a620b7d-c48f779d" class="icon_info w-embed">
                                                    <svg height="100%" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M2.23295 6.72798V6.67685C2.23864 6.13423 2.29545 5.70242 2.40341 5.38139C2.51136 5.06037 2.66477 4.80043 2.86364 4.60156C3.0625 4.4027 3.30114 4.21946 3.57955 4.05185C3.74716 3.94957 3.89773 3.82884 4.03125 3.68963C4.16477 3.54759 4.26989 3.38423 4.34659 3.19957C4.42614 3.01491 4.46591 2.81037 4.46591 2.58594C4.46591 2.30753 4.40057 2.06605 4.26989 1.86151C4.1392 1.65696 3.96449 1.49929 3.74574 1.38849C3.52699 1.2777 3.28409 1.2223 3.01705 1.2223C2.78409 1.2223 2.55966 1.2706 2.34375 1.36719C2.12784 1.46378 1.94744 1.61577 1.80256 1.82315C1.65767 2.03054 1.57386 2.30185 1.55114 2.63707H0.477273C0.5 2.15412 0.625 1.74077 0.852273 1.39702C1.08239 1.05327 1.38494 0.790483 1.75994 0.608665C2.13778 0.426847 2.55682 0.335938 3.01705 0.335938C3.51705 0.335938 3.9517 0.435369 4.32102 0.634233C4.69318 0.833097 4.98011 1.10582 5.18182 1.45241C5.38636 1.79901 5.48864 2.19389 5.48864 2.63707C5.48864 2.94957 5.44034 3.23224 5.34375 3.48509C5.25 3.73793 5.11364 3.96378 4.93466 4.16264C4.75852 4.36151 4.54545 4.53764 4.29545 4.69105C4.04545 4.8473 3.84517 5.01207 3.6946 5.18537C3.54403 5.35582 3.43466 5.55895 3.36648 5.79474C3.2983 6.03054 3.26136 6.32457 3.25568 6.67685V6.72798H2.23295ZM2.77841 9.25071C2.56818 9.25071 2.38778 9.17543 2.23722 9.02486C2.08665 8.87429 2.01136 8.69389 2.01136 8.48366C2.01136 8.27344 2.08665 8.09304 2.23722 7.94247C2.38778 7.7919 2.56818 7.71662 2.77841 7.71662C2.98864 7.71662 3.16903 7.7919 3.3196 7.94247C3.47017 8.09304 3.54545 8.27344 3.54545 8.48366C3.54545 8.62287 3.50994 8.75071 3.43892 8.86719C3.37074 8.98366 3.27841 9.07741 3.16193 9.14844C3.0483 9.21662 2.92045 9.25071 2.77841 9.25071Z" fill="currentcolor"/>
                                                        <path d="M0 11.5689H6.08523V12.3871H0V11.5689Z" fill="currentcolor"/>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="w-node-_403f7a43-fec3-203c-a4c8-9d281a620b7e-c48f779d" class="filters_sans-serif-container">
                                            <div class="filter_sans-container">
                                                <div class="filter_sans-check"></div>
                                                <div class="filter_attribute-name">Sans</div>
                                            </div>
                                            <div class="filter_sans-container">
                                                <div class="filter_sans-check"></div>
                                                <div class="filter_attribute-name">Serif</div>
                                            </div>
                                            <div class="filter_sans-container">
                                                <div class="filter_sans-check"></div>
                                                <div class="filter_attribute-name">Workhorse</div>
                                            </div>
                                            <div class="filter_sans-container">
                                                <div class="filter_sans-check"></div>
                                                <div class="filter_attribute-name">Free</div>
                                            </div>
                                            <div class="tags_btn">
                                                <div class="filter_attribute-name">Tags</div>
                                            </div>
                                        </div>
                                        <div id="w-node-_403f7a43-fec3-203c-a4c8-9d281a620b8f-c48f779d" class="filters_total-fonts">
                                            <h4 class="filter_attribute-name">Showing {{ store.counter }} fonts</h4>
                                            <a href="#" class="reset_btn w-button">Reset all</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="island_burger">
                                    <a id="w-node-_55df511b-dcfd-f961-1f32-1ca3c5f3f805-c48f779d" href="#" class="menu_top10s w-inline-block">
                                        <div class="menu_top10s-text">Top 10s</div>
                                        <div class="notification_top10s">
                                            <div id="w-node-_88e0f997-c4d4-79a9-d2eb-de47c725f27c-c48f779d" class="notification_number">5</div>
                                        </div>
                                    </a>
                                    <a href="#" class="login_btn w-inline-block">
                                        <div class="menu_top10s-text">Login</div>
                                    </a>
                                    <div data-w-id="716a966c-e53a-0ac1-b276-4ebe0ef13609" class="menu_burger-container">
                                        <div data-w-id="274014c0-7682-8852-e59c-5bec8ecfa51f" data-is-ix2-target="1" class="menu_burger-lottie" data-animation-type="lottie" data-src="https://assets-global.website-files.com/64a2f089a6ce9ca261d2a68d/6537dec49477e5af5c2d993a_burger2.json" data-loop="0" data-direction="1" data-autoplay="0" data-renderer="svg" data-default-duration="0.3670336854174455" data-duration="0"></div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <section class="home-header_content-wrapper">
                        <div class="titles_wrapper">
                            <div id="w-node-c122cd53-8723-c5eb-ac02-eafd46da4319-c48f779d" class="h2_container">
                                <h2 id="w-node-_2ab6e4a4-858c-0ab4-c479-017195825bb5-c48f779d" class="heading-style-h2">THE highly curated font tool for exceptional fonts.</h2>
                                <div class="padding_small"></div>
                                <h2 class="heading-style-h2">on display: signifier, by klim type</h2>
                            </div>
                            <div class="h1_container">
                                <h1 id="w-node-dbd72d3e-b7f8-8add-b062-8ff70a13165b-c48f779d" class="heading-style-h1">FONT BRIEF PUTS DESIGN BRIEF FIRST, AIMING TO MAKE FINDING CUTTING-EDGE FONTS INTUITIVE AND NATURAL — It’s Nice That .com</h1>
                                <div class="padding_small"></div>
                                <h1 class="heading-style-h1">Made possible with support from CARGO</h1>
                            </div>
                        </div>
                    </section>
                    <section class="section_intro with-background">
                        <div class="padding-global">
                            <header class="container-large align-middle"></header>
                        </div>
                    </section>
                    <section id="highlights" class="section_highlight">
                        <div class="higlights_wrapper">
                            <div class="padding_extra-small"></div>
                            <h2 class="heading">NEWS</h2>
                            <div class="padding_extra-small"></div>
                            <div class="padding_small hidden"></div>
                            <div class="container-flexible">
                                <div class="promo-font_container">
                                    <div class="promo-font_wrapper">
                                        <div class="label_wrapper">
                                            <div class="label_blue">
                                                <div class="label_text">New</div>
                                            </div>
                                            <div class="regular_text text_size-small text_dark-grey">{{  store.sortedFonts[0].foundry }}</div>
                                        </div>
                                        <img src="https://assets-global.website-files.com/64a2f089a6ce9ca261d2a68d/65aa84b30fa540ebcc268c89_LogoFB-blue.svg" loading="lazy" v-bind:src="store.sortedFonts[0].font_name" v-bind:alt="store.sortedFonts[0].Name" alt="" class="promo-font_image"/>
                                    </div>
                                    <div class="promo-font_wrapper">
                                        <div class="label_wrapper">
                                            <div class="label_blue">
                                                <div class="label_text">New</div>
                                            </div>
                                            <div class="regular_text text_size-small text_dark-grey">{{  store.sortedFonts[0].foundry }}</div>
                                        </div>
                                        <img src="https://assets-global.website-files.com/64a2f089a6ce9ca261d2a68d/65aa84b30fa540ebcc268c89_LogoFB-blue.svg" loading="lazy" v-bind:src="store.sortedFonts[0].font_name" v-bind:alt="store.sortedFonts[0].Name" alt="" class="promo-font_image"/>
                                    </div>
                                    <div class="promo-font_wrapper">
                                        <div class="label_wrapper">
                                            <div class="label_blue">
                                                <div class="label_text">New</div>
                                            </div>
                                            <div class="regular_text text_size-small text_dark-grey">{{  store.sortedFonts[0].foundry }}</div>
                                        </div>
                                        <img src="https://assets-global.website-files.com/64a2f089a6ce9ca261d2a68d/65aa84b30fa540ebcc268c89_LogoFB-blue.svg" loading="lazy" v-bind:src="store.sortedFonts[0].font_name" v-bind:alt="store.sortedFonts[0].Name" alt="" class="promo-font_image"/>
                                    </div>
                                    <div class="promo-font_wrapper">
                                        <div class="label_wrapper">
                                            <div class="label_blue">
                                                <div class="label_text">New</div>
                                            </div>
                                            <div class="regular_text text_size-small text_dark-grey">{{  store.sortedFonts[0].foundry }}</div>
                                        </div>
                                        <img src="https://assets-global.website-files.com/64a2f089a6ce9ca261d2a68d/65aa84b30fa540ebcc268c89_LogoFB-blue.svg" loading="lazy" v-bind:src="store.sortedFonts[0].font_name" v-bind:alt="store.sortedFonts[0].Name" alt="" class="promo-font_image"/>
                                    </div>
                                </div>
                                <div class="promo-font-2_container">
                                    <div class="promo-font-2_wrapper">
                                        <div class="label_wrapper">
                                            <div class="label_blue">
                                                <div class="label_text">New</div>
                                            </div>
                                            <div class="regular_text text_size-small text_dark-grey">{{  store.sortedFonts[1].foundry }}</div>
                                        </div>
                                        <img src="https://assets-global.website-files.com/64a2f089a6ce9ca261d2a68d/65aa84b30fa540ebcc268c89_LogoFB-blue.svg" loading="lazy" v-bind:src="store.sortedFonts[1].font_name" v-bind:alt="store.sortedFonts[1].Name" alt="" class="promo-font_image"/>
                                    </div>
                                    <div class="promo-font-2_wrapper">
                                        <div class="label_wrapper">
                                            <div class="label_blue">
                                                <div class="label_text">New</div>
                                            </div>
                                            <div class="regular_text text_size-small text_dark-grey">{{  store.sortedFonts[1].foundry }}</div>
                                        </div>
                                        <img src="https://assets-global.website-files.com/64a2f089a6ce9ca261d2a68d/65aa84b30fa540ebcc268c89_LogoFB-blue.svg" loading="lazy" v-bind:src="store.sortedFonts[1].font_name" v-bind:alt="store.sortedFonts[1].Name" alt="" class="promo-font_image"/>
                                    </div>
                                    <div class="promo-font-2_wrapper">
                                        <div class="label_wrapper">
                                            <div class="label_blue">
                                                <div class="label_text">New</div>
                                            </div>
                                            <div class="regular_text text_size-small text_dark-grey">{{  store.sortedFonts[1].foundry }}</div>
                                        </div>
                                        <img src="https://assets-global.website-files.com/64a2f089a6ce9ca261d2a68d/65aa84b30fa540ebcc268c89_LogoFB-blue.svg" loading="lazy" v-bind:src="store.sortedFonts[1].font_name" v-bind:alt="store.sortedFonts[1].Name" alt="" class="promo-font_image"/>
                                    </div>
                                    <div class="promo-font-2_wrapper">
                                        <div class="label_wrapper">
                                            <div class="label_blue">
                                                <div class="label_text">New</div>
                                            </div>
                                            <div class="regular_text text_size-small text_dark-grey">{{  store.sortedFonts[1].foundry }}</div>
                                        </div>
                                        <img src="https://assets-global.website-files.com/64a2f089a6ce9ca261d2a68d/65aa84b30fa540ebcc268c89_LogoFB-blue.svg" loading="lazy" v-bind:src="store.sortedFonts[1].font_name" v-bind:alt="store.sortedFonts[1].Name" alt="" class="promo-font_image"/>
                                    </div>
                                </div>
                                <div class="promo-font_container">
                                    <div class="promo-font_wrapper">
                                        <div class="label_wrapper">
                                            <div class="label_promoted">
                                                <div class="label_text-grey">Promoted</div>
                                            </div>
                                            <div class="regular_text text_size-small text_dark-grey">{{  store.sortedFonts[2].foundry }}</div>
                                        </div>
                                        <img src="https://assets-global.website-files.com/64a2f089a6ce9ca261d2a68d/65aa84b30fa540ebcc268c89_LogoFB-blue.svg" loading="lazy" v-bind:src="store.sortedFonts[2].font_name" v-bind:alt="store.sortedFonts[2].Name" alt="" class="promo-font_image"/>
                                    </div>
                                    <div class="promo-font_wrapper">
                                        <div class="label_wrapper">
                                            <div class="label_promoted">
                                                <div class="label_text-grey">Promoted</div>
                                            </div>
                                            <div class="regular_text text_size-small text_dark-grey">{{  store.sortedFonts[2].foundry }}</div>
                                        </div>
                                        <img src="https://assets-global.website-files.com/64a2f089a6ce9ca261d2a68d/65aa84b30fa540ebcc268c89_LogoFB-blue.svg" loading="lazy" v-bind:src="store.sortedFonts[2].font_name" v-bind:alt="store.sortedFonts[2].Name" alt="" class="promo-font_image"/>
                                    </div>
                                    <div class="promo-font_wrapper">
                                        <div class="label_wrapper">
                                            <div class="label_promoted">
                                                <div class="label_text-grey">Promoted</div>
                                            </div>
                                            <div class="regular_text text_size-small text_dark-grey">{{  store.sortedFonts[2].foundry }}</div>
                                        </div>
                                        <img src="https://assets-global.website-files.com/64a2f089a6ce9ca261d2a68d/65aa84b30fa540ebcc268c89_LogoFB-blue.svg" loading="lazy" v-bind:src="store.sortedFonts[2].font_name" v-bind:alt="store.sortedFonts[2].Name" alt="" class="promo-font_image"/>
                                    </div>
                                    <div class="promo-font_wrapper">
                                        <div class="label_wrapper">
                                            <div class="label_promoted">
                                                <div class="label_text-grey">Promoted</div>
                                            </div>
                                            <div class="regular_text text_size-small text_dark-grey">{{  store.sortedFonts[2].foundry }}</div>
                                        </div>
                                        <img src="https://assets-global.website-files.com/64a2f089a6ce9ca261d2a68d/65aa84b30fa540ebcc268c89_LogoFB-blue.svg" loading="lazy" v-bind:src="store.sortedFonts[2].font_name" v-bind:alt="store.sortedFonts[2].Name" alt="" class="promo-font_image"/>
                                    </div>
                                </div>
                                <div class="promo-font-2_container">
                                    <div class="promo-font-2_wrapper">
                                        <div class="label_wrapper">
                                            <div class="label_promoted">
                                                <div class="label_text-grey">Promoted</div>
                                            </div>
                                            <div class="regular_text text_size-small text_dark-grey">{{  store.sortedFonts[3].foundry }}</div>
                                        </div>
                                        <img src="https://assets-global.website-files.com/64a2f089a6ce9ca261d2a68d/65aa84b30fa540ebcc268c89_LogoFB-blue.svg" loading="lazy" v-bind:src="store.sortedFonts[3].font_name" v-bind:alt="store.sortedFonts[3].Name" alt="" class="promo-font_image"/>
                                    </div>
                                    <div class="promo-font-2_wrapper">
                                        <div class="label_wrapper">
                                            <div class="label_promoted">
                                                <div class="label_text-grey">Promoted</div>
                                            </div>
                                            <div class="regular_text text_size-small text_dark-grey">{{  store.sortedFonts[3].foundry }}</div>
                                        </div>
                                        <img src="https://assets-global.website-files.com/64a2f089a6ce9ca261d2a68d/65aa84b30fa540ebcc268c89_LogoFB-blue.svg" loading="lazy" v-bind:src="store.sortedFonts[3].font_name" v-bind:alt="store.sortedFonts[3].Name" alt="" class="promo-font_image"/>
                                    </div>
                                    <div class="promo-font-2_wrapper">
                                        <div class="label_wrapper">
                                            <div class="label_promoted">
                                                <div class="label_text-grey">Promoted</div>
                                            </div>
                                            <div class="regular_text text_size-small text_dark-grey">{{  store.sortedFonts[3].foundry }}</div>
                                        </div>
                                        <img src="https://assets-global.website-files.com/64a2f089a6ce9ca261d2a68d/65aa84b30fa540ebcc268c89_LogoFB-blue.svg" loading="lazy" v-bind:src="store.sortedFonts[3].font_name" v-bind:alt="store.sortedFonts[3].Name" alt="" class="promo-font_image"/>
                                    </div>
                                    <div class="promo-font-2_wrapper">
                                        <div class="label_wrapper">
                                            <div class="label_promoted">
                                                <div class="label_text-grey">Promoted</div>
                                            </div>
                                            <div class="regular_text text_size-small text_dark-grey">{{  store.sortedFonts[3].foundry }}</div>
                                        </div>
                                        <img src="https://assets-global.website-files.com/64a2f089a6ce9ca261d2a68d/65aa84b30fa540ebcc268c89_LogoFB-blue.svg" loading="lazy" v-bind:src="store.sortedFonts[3].font_name" v-bind:alt="store.sortedFonts[3].Name" alt="" class="promo-font_image"/>
                                    </div>
                                </div>
                                <div class="sponsor-stripe_wrapper">
                                    <div class="sponsor-stripe_text">• The newest fonts from the fringes of the type world or less known classics • Made possible with the support of Partner Name • The newest fonts from the fringes of the type world or less known classics • Made possible with the support of Partner Name </div>
                                    <div class="sponsor-stripe_text">• The newest fonts from the fringes of the type world or less known classics • Made possible with the support of Partner Name • The newest fonts from the fringes of the type world or less known classics • Made possible with the support of Partner Name </div>
                                    <div class="sponsor-stripe_text">• The newest fonts from the fringes of the type world or less known classics • Made possible with the support of Partner Name • The newest fonts from the fringes of the type world or less known classics • Made possible with the support of Partner Name </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="section_news">
                        <div class="padding_medium"></div>
                        <h2 id="top-anchor" class="heading hidden">⚡️ News ⚡️</h2>
                        <div class="news_container hidden">
                            <div id="w-node-b4090c4d-3a5e-c700-4e5b-e701a7c63542-c48f779d" class="news_headline-container">
                                <h3 class="heading-style-h3">Ampersand Collection 1</h3>
                                <h4 class="heading-style-h4">The ampersand has been an opportunity for graphic expression since the et has become &amp;. This is a collection that shows this joy. All &amp;from fonts featured on Font Brief.</h4>
                            </div>
                            <div id="w-node-_8b29166b-fabb-4bc0-453c-01ac266fd29f-c48f779d" class="news_image-container"></div>
                        </div>
                        <div class="news_container">
                            <div id="w-node-fc5b8511-6e31-f6b1-f503-2a878992f619-c48f779d" class="news_headline-container">
                                <h3 class="heading-style-h3">
                                    New Hot 10 by <br/>Team Gericke at Pentagram
                                </h3>
                                <h4 class="heading-style-h4">The ampersand has been an opportunity for graphic expression since the et has become &amp;. This is a collection that shows this joy. All &amp;from fonts featured on Font Brief.</h4>
                            </div>
                            <div id="w-node-fa01a50e-bec3-89b2-c771-c846b6f72812-c48f779d" class="news_image-container delete-in-js"></div>
                            <div class="label_blue absolute">
                                <div class="label_text">New</div>
                            </div>
                        </div>
                        <div class="padding_small"></div>
                        <div class="newsletter_wrapper">
                            <div class="newsletter_left-wrapper">
                                <div class="bell_wrapper">
                                    <div class="icon_bell">🔔</div>
                                </div>
                                <div class="newsletter-text_wrapper">
                                    <div class="newsletter_hl">The project you have now is the project</div>
                                    <h4 class="newsletter_text">Join 50K+ others for Trend Reports, New Additions &amp;More.</h4>
                                </div>
                            </div>
                            <div class="button_wrapper blue round">
                                <div class="button_text">Email Address</div>
                                <img src="https://assets-global.website-files.com/64a2f089a6ce9ca261d2a68d/652560288f843bc1e83db727_arrow.svg" loading="lazy" alt="" class="icons_white-arrow"/>
                            </div>
                        </div>
                        <div class="padding_small"></div>
                        <h2 id="gg" class="heading">
                            Life &#x27;s too short to use helvetica.<br/>Welcome to font brief.
                        </h2>
                        <div class="padding_medium"></div>
                    </section>
                    <section class="section_font-list">
                        <div class="newsletter_wrapper-fixed fadeout active">
                            <a v-on:click="handleNewsletter()" href="#" class="close-newsletter_btn w-inline-block"></a>
                            <div class="newsletter-wrapper round">
                                <div class="newsletter_left-wrapper">
                                    <div class="bell_wrapper">
                                        <div class="icon_bell">🔔</div>
                                    </div>
                                    <div class="newsletter-text_wrapper">
                                        <h4 class="newsletter_text">Join 50K+ others for Trend Reports, New Additions &amp;More.</h4>
                                    </div>
                                </div>
                                <div v-on:click="handleNewsletter()" class="button_wrapper blue round">
                                    <div class="button_text">Subscribe</div>
                                    <img src="https://assets-global.website-files.com/64a2f089a6ce9ca261d2a68d/652560288f843bc1e83db727_arrow.svg" loading="lazy" alt="" class="icons_white-arrow"/>
                                </div>
                            </div>
                        </div>
                        <div class="font-list_container">
                            <div id="list-top" class="paddding_top-list"></div>
                            <div class="view-btns_container">
                                <div class="fb_logo-list w-embed">
                                    <svg width="38" height="43" viewBox="0 0 38 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.49926 24.0484C4.49926 26.8316 6.06712 28.6971 8.33546 29.4188C6.01545 28.9033 2.9227 27.2539 2.9227 23.6462C2.9227 17.2546 13.9615 10.7544 26.9727 12.323C16.6362 11.9369 4.49926 17.3994 4.49926 24.0484ZM15.4786 34.3339C12.8749 38.5857 9.01077 42.459 3.90744 42.459C1.89817 42.459 0.351562 41.6856 0.351562 40.2426C0.351562 38.8507 1.79484 38.2327 3.44432 38.2327C5.04194 38.2327 6.44825 38.5014 7.51442 38.9044C6.42625 38.6227 5.04194 38.5419 3.65033 38.5419C1.8466 38.5419 0.97043 39.1601 0.97043 40.0879C0.97043 41.1704 2.20705 41.6856 3.95976 41.6856C8.39237 41.6856 11.737 38.2966 14.6541 33.6122L25.1961 17.5296C28.7341 11.6827 34.1137 8.17188 37.773 8.17188C34.6804 8.42992 29.905 11.8273 26.2265 17.5296L15.4786 34.3339ZM16.9424 27.1511C16.9424 29.5221 12.7676 30.2949 9.46865 29.6763C12.6647 29.8827 15.4845 28.5089 15.845 25.829C16.3089 25.9321 16.9424 26.5839 16.9424 27.1511ZM33.53 35.0088C33.53 31.04 30.9103 27.5116 22.7667 27.5116C32.0448 27.0478 34.9308 30.8618 34.9308 35.0366C34.9308 41.2218 26.0727 45.571 14.1426 40.2224C25.8164 44.7224 33.53 40.2146 33.53 35.0088ZM23.0244 26.6869C30.5492 26.8416 35.343 24.6256 35.343 19.3682C35.343 16.7483 34.4166 14.4505 31.292 13.0655C34.6929 14.136 36.632 16.2871 36.632 19.3162C36.632 23.7489 32.4571 27.6666 23.0244 26.6869Z" fill="currentColor"/>
                                        <path d="M20.4137 0.375H1.86328V8.16815H20.4137V0.375Z" fill="currentColor"/>
                                        <path d="M20.4137 11.3594H1.86328V19.1525H20.4137V11.3594Z" fill="currentColor"/>
                                        <path d="M7.79315 0.375H0V26.0601H7.79315V0.375Z" fill="currentColor"/>
                                    </svg>
                                </div>
                                <div id="list-top" class="padding_small"></div>
                                <div class="view-btns_wrapper">
                                    <div class="view-btns-left_wrapper">
                                        <div class="foundry-view_btn hidden">
                                            <div class="foundry-view_wrapper">
                                                <div class="regular_text text_size-small text_dark-grey">Foundry View</div>
                                                <div class="notification_new-foundries right-up">
                                                    <div id="w-node-dc2fc522-cb55-a49b-bf5f-fef5e71a25fc-c48f779d" class="notification_number">5</div>
                                                </div>
                                            </div>
                                        </div>
                                        <a v-on:click="store.loadedImages()" href="#" class="w-inline-block">
                                            <div class="grid-view_btn clicked w-embed">
                                                <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.618 1H1V6.94396H10.618V1ZM0 0V7.94396H11.618V0H0Z" fill="currentColor"/>
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1837 17.3594L20.8018 17.3594L20.8018 11.4154L11.1837 11.4154L11.1837 17.3594ZM21.8018 18.3594L21.8018 10.4154L10.1837 10.4154L10.1837 18.3594L21.8018 18.3594Z" fill="currentColor"/>
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.802 1H15.0566V6.94396H20.802V1ZM14.0566 0V7.94396H21.802V0H14.0566Z" fill="currentColor"/>
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.998779 17.3594L6.74414 17.3594L6.74414 11.4154L0.99878 11.4154L0.998779 17.3594ZM7.74414 18.3594L7.74414 10.4154L-0.00122003 10.4154L-0.0012207 18.3594L7.74414 18.3594Z" fill="currentColor"/>
                                                </svg>
                                            </div>
                                        </a>
                                        <a v-on:click="store.loadedImages()" href="#" class="w-inline-block">
                                            <div class="columns-view_btn w-embed">
                                                <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9 1H1V17H9V1ZM0 0V18H10V0H0Z" fill="currentColor"/>
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M21 1H13V17H21V1ZM12 0V18H22V0H12Z" fill="currentColor"/>
                                                </svg>
                                            </div>
                                        </a>
                                        <a v-on:click="store.loadedImages()" href="#" class="w-inline-block">
                                            <div class="list-view_btn w-embed">
                                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17 1H1V17H17V1ZM0 0V18H18V0H0Z" fill="currentColor"/>
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="regular_text text_size-small text_dark-grey">Use your project &#x27;s personality to match with industry leading fonts</div>
                                    <div class="view-btns-right_wrapper">
                                        <div class="sort_btn hidden">
                                            <img src="https://assets-global.website-files.com/64a2f089a6ce9ca261d2a68d/652e4d2fd901d37cd5dd77ec_Group%20601.svg" loading="lazy" alt="" class="icons_sort"/>
                                        </div>
                                        <a v-on:click="handleColor()" href="#" class="color_btn w-inline-block">
                                            <div class="icons_color-wheel w-embed">
                                                <svg width="20" height="16" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7 5V1H16.3333V5H7Z" fill="#4A4A4A" stroke="#4A4A4A" stroke-width="1"/>
                                                    <path d="M21.6667 17L19 5H4.33333L2 17H21.6667Z" stroke="#4A4A4A" stroke-width="2"/>
                                                </svg>
                                            </div>
                                        </a>
                                        <div class="size_slider">
                                            <input type="range" id="fontsize" name="fontsizerange" min="10" max="150" v-model.number="store.sliderValue" v-on:input="handleFontSize(event)"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="padding_extra-small"></div>
                            <div v-bind:class="store.fontBGColor" class="font-list_wrapper">
                                <div v-bind:class="store.fontFGColor" class="coloroverlay"></div>
                                <div v-bind:class="store.imgColorOver" class="font-items_container">
                                    <div class="font-items_wrapper">
                                        <div v-bind:class="match(index)" v-for="(font, index) in store.fonts" v-bind:data-index="index" v-on:mouseenter="handleMouseOverFont(event, font.Pangram, index)" v-on:mouseleave="handleMouseLeaveFont(event)" class="font-list_item hidden">
                                            <div v-show="store.listType" class="font_details-wrapper">
                                                <div class="font_info-left">
                                                    <div class="regular_text text_size-small text_dark-grey">{{ font.foundry }}</div>
                                                </div>
                                                <div class="font_info-right">
                                                    <div v-if="font.new" class="label_blue">
                                                        <div class="label_text">New</div>
                                                    </div>
                                                    <div v-if="font.promoted" class="label_promoted">
                                                        <div class="label_text-grey">Promoted</div>
                                                    </div>
                                                    <div class="padding_extra-small"></div>
                                                    <div class="regular_text text_size-small text_dark-grey">Italic, Roman</div>
                                                    <div class="padding_extra-small"></div>
                                                    <div v-scope="{ isHidden: false }" v-on:click="isHidden = !isHidden" class="save_btn-wrapper">
                                                        <div v-if="!isHidden" class="save_button_wrapper invisible-fade">
                                                            <div class="save_btn w-embed">
                                                                <svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M12,23.3l-5.9-5.5L0,23.2V0h12V23.3z M2,2v16.8l4.2-3.7l3.8,3.6V2H2z" fill="currentColor"/>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div v-if="isHidden" class="unsave_button-wrapper">
                                                            <div v-if="isHidden" class="unsave_btn w-embed">
                                                                <svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M12,23.3l-5.9-5.5L0,23.2V0h12V23.3z" fill="currentColor"/>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div v-show="!store.listType" class="font_details-wrapper-grid">
                                                <div class="font_info-left">
                                                    <div v-scope="{ isHidden: false }" v-on:click="isHidden = !isHidden" class="save_btn-wrapper grid">
                                                        <div v-if="!isHidden" class="save_button_wrapper invisible-fade">
                                                            <div class="save_btn w-embed">
                                                                <svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M12,23.3l-5.9-5.5L0,23.2V0h12V23.3z M2,2v16.8l4.2-3.7l3.8,3.6V2H2z" fill="currentColor"/>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div v-if="isHidden" class="unsave_button-wrapper">
                                                            <div v-if="isHidden" class="unsave_btn w-embed">
                                                                <svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M12,23.3l-5.9-5.5L0,23.2V0h12V23.3z" fill="currentColor"/>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="font_info-center">
                                                    <div class="regular_text text_size-small text_dark-grey">{{ font.foundry }}</div>
                                                </div>
                                                <div class="font_info-right">
                                                    <div v-if="font.promoted" class="label_promoted">
                                                        <div class="label_text-grey">Promoted</div>
                                                    </div>
                                                    <div v-if="font.new" class="label_blue">
                                                        <div class="label_text">New</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div v-bind:class="match(index)" class="font_image-wrapper">
                                                <a v-bind:class="store.overColor" v-bind:href="&#x27;https://fontbrief.webflow.io/fonts/&#x27; + font.Slug" href="#" class="image_link w-inline-block">
                                                    <img class="font_image-crop" v-bind:alt="font.Name" src="https://assets-global.website-files.com/64a2f089a6ce9ca261d2a68d/659d866cfc01ba47d62e1040_logo-in-list.svg" alt="" v-on:load="store.resizeGridImgs(event);" loading="lazy" v-bind:src="font.font_name"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div v-bind:class="match(index)" v-for="(font, index) in store.fonts" v-bind:data-index="index" v-on:mouseenter="handleMouseOverFont(event, font.Pangram, index)" v-on:mouseleave="handleMouseLeaveFont(event)" id="w-node-ce2e8f7a-54b9-0479-d596-47942a1a7ae0-c48f779d" class="font-list_item">
                                            <div v-show="store.listType" class="font_details-wrapper">
                                                <div class="font_info-left">
                                                    <div class="regular_text text_size-small text_dark-grey">{{ font.foundry }}</div>
                                                </div>
                                                <div class="font_info-right">
                                                    <div v-if="font.new" class="label_blue">
                                                        <div class="label_text">New</div>
                                                    </div>
                                                    <div v-if="font.promoted" class="label_promoted">
                                                        <div class="label_text-grey">Promoted</div>
                                                    </div>
                                                    <div class="padding_extra-small"></div>
                                                    <div class="regular_text text_size-small text_dark-grey">Italic, Roman</div>
                                                    <div class="padding_extra-small"></div>
                                                    <div v-scope="{ isHidden: false }" v-on:click="isHidden = !isHidden" class="save_btn-wrapper">
                                                        <div v-if="!isHidden" class="save_button_wrapper invisible-fade">
                                                            <div class="save_btn w-embed">
                                                                <svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M12,23.3l-5.9-5.5L0,23.2V0h12V23.3z M2,2v16.8l4.2-3.7l3.8,3.6V2H2z" fill="currentColor"/>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div v-if="isHidden" class="unsave_button-wrapper">
                                                            <div v-if="isHidden" class="unsave_btn w-embed">
                                                                <svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M12,23.3l-5.9-5.5L0,23.2V0h12V23.3z" fill="currentColor"/>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div v-show="!store.listType" class="font_details-wrapper-grid">
                                                <div class="font_info-left">
                                                    <div v-scope="{ isHidden: false }" v-on:click="isHidden = !isHidden" class="save_btn-wrapper grid">
                                                        <div v-if="!isHidden" class="save_button_wrapper invisible-fade">
                                                            <div class="save_btn w-embed">
                                                                <svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M12,23.3l-5.9-5.5L0,23.2V0h12V23.3z M2,2v16.8l4.2-3.7l3.8,3.6V2H2z" fill="currentColor"/>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div v-if="isHidden" class="unsave_button-wrapper">
                                                            <div v-if="isHidden" class="unsave_btn w-embed">
                                                                <svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M12,23.3l-5.9-5.5L0,23.2V0h12V23.3z" fill="currentColor"/>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="font_info-center">
                                                    <div class="regular_text text_size-small text_dark-grey">{{ font.foundry }}</div>
                                                </div>
                                                <div class="font_info-right">
                                                    <div v-if="font.promoted" class="label_promoted">
                                                        <div class="label_text-grey">Promoted</div>
                                                    </div>
                                                    <div v-if="font.new" class="label_blue">
                                                        <div class="label_text">New</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div v-bind:class="match(index)" class="font_image-wrapper">
                                                <a v-bind:class="store.overColor" v-bind:href="&#x27;https://fontbrief.webflow.io/fonts/&#x27; + font.Slug" href="#" class="image_link w-inline-block">
                                                    <img class="font_image-crop" v-bind:alt="font.Name" src="https://assets-global.website-files.com/64a2f089a6ce9ca261d2a68d/65c0de9c380647cc9933ce45_635792a666ce574b7d1b8b33_acma-01.webp" alt="" v-on:load="store.resizeGridImgs(event);" sizes="(max-width: 767px) 100vw, (max-width: 1279px) 507.2109375px, 80vw" loading="lazy" v-bind:src="font.font_name" srcset="https://assets-global.website-files.com/64a2f089a6ce9ca261d2a68d/65c0de9c380647cc9933ce45_635792a666ce574b7d1b8b33_acma-01-p-500.webp 500w, https://assets-global.website-files.com/64a2f089a6ce9ca261d2a68d/65c0de9c380647cc9933ce45_635792a666ce574b7d1b8b33_acma-01-p-800.webp 800w, https://assets-global.website-files.com/64a2f089a6ce9ca261d2a68d/65c0de9c380647cc9933ce45_635792a666ce574b7d1b8b33_acma-01-p-1080.webp 1080w, https://assets-global.website-files.com/64a2f089a6ce9ca261d2a68d/65c0de9c380647cc9933ce45_635792a666ce574b7d1b8b33_acma-01-p-1600.webp 1600w, https://assets-global.website-files.com/64a2f089a6ce9ca261d2a68d/65c0de9c380647cc9933ce45_635792a666ce574b7d1b8b33_acma-01.webp 2050w"/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="list_container">
                            <div class="loading_image hidden">
                                <img src="https://assets-global.website-files.com/64a2f089a6ce9ca261d2a68d/652e4ce0974bb0ef2bcf6802_Logo.svg" alt="" width="100" class="loading_logo"/>
                            </div>
                            <div class="pagination_container">
                                <div class="pagination_btn">
                                    <div class="pagination_text">1</div>
                                </div>
                            </div>
                        </div>
                        <div id="list-top" class="padding_large"></div>
                    </section>
                    <section class="section_top-fonts">
                        <div class="padding_small"></div>
                        <div class="top_wrapper">
                            <h2 class="heading-style-h2 center">TOP 10 By BP &amp;O</h2>
                            <h1 class="heading-style-h1 center">TOP 10S BY STUDIOS &amp;SITES</h1>
                            <div class="padding_medium"></div>
                            <img src="https://assets-global.website-files.com/64a2f089a6ce9ca261d2a68d/658412c6efe94c74579760bc_B.png" loading="lazy" alt="" class="image_top"/>
                        </div>
                        <div class="padding_small"></div>
                        <a v-on:click="handleNewsletter()" href="#" class="w-inline-block">
                            <h1 class="heading-style-h1 center link">TOP 10S BY STUDIOS &amp;SITES</h1>
                        </a>
                        <div class="padding_large"></div>
                    </section>
                    <section class="section_footer">
                        <h2 class="heading-style-h2 center">
                            Life &#x27;s too short to use helvetica<br/>The exciting new fonts of the design world. Now findable.
                        </h2>
                        <div class="padding_small"></div>
                        <div class="padding_small"></div>
                        <div class="padding_medium"></div>
                        <div class="footer_wrapper">
                            <div class="simple_wrapper">
                                <a href="#" class="island_logo-container w-inline-block">
                                    <div v-on:click="handleNewsletter()" id="w-node-cd42a983-be7e-32f8-8f0a-a7cbacf90ebc-c48f779d" class="fb_logo-container">
                                        <img src="https://assets-global.website-files.com/64a2f089a6ce9ca261d2a68d/652e4ce0974bb0ef2bcf6802_Logo.svg" loading="lazy" id="w-node-cd42a983-be7e-32f8-8f0a-a7cbacf90ec0-c48f779d" alt="" class="fb_logo"/>
                                    </div>
                                    <div id="w-node-cd42a983-be7e-32f8-8f0a-a7cbacf90ec1-c48f779d" class="fb_name">Font Brief</div>
                                </a>
                            </div>
                            <div class="simple_wrapper">
                                <a href="#" class="link_text text_size-small">Top 10s</a>
                                <div class="padding_small"></div>
                                <a href="#" class="link_text text_size-small">Resources</a>
                                <div class="padding_small"></div>
                                <a href="#" class="link_text text_size-small">Submit Font</a>
                                <div class="padding_small"></div>
                                <a href="#" class="link_text text_size-small">About</a>
                                <div class="padding_small"></div>
                                <a href="#" class="link_text text_size-small">Contact</a>
                                <div class="padding_small"></div>
                                <a href="#" class="link_text text_size-small">Terms of use</a>
                                <div class="padding_small"></div>
                                <a href="#" class="link_text text_size-small">Privacy Policy</a>
                            </div>
                            <div class="simple_wrapper">
                                <div class="copyright_wrapper">
                                    <a href="#" class="link_text text_size-small">© 2024 Font Brief</a>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </main>
        </div>
        <script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=64a2f089a6ce9ca261d2a68d" type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
        <script src="https://assets-global.website-files.com/64a2f089a6ce9ca261d2a68d/js/webflow.42e79add5.js" type="text/javascript"></script>
    </body>
</html>