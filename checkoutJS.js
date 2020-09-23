function initTest() {
    var target = document.getElementById('root');
    var accrodin = `
        <div class="accordion_wrap accordion_1">
            <div class="accordion_header active">
                Week 1: Finding Profitable Keywords
            </div>
            <div class="accordion_body">
                <ul class="list">
                    <li>Generating keyword ideas for your business</li>
                    <li>Evaluating keywords for traffic, value, and attainability</li>
                    <li>Setting up automated tracking of your targeted keywords</li>
                </ul>
            </div>
        </div>
        <div class="accordion_wrap accordion_2">
            <div class="accordion_header">
                Week 2: Site SEO Audit
            </div>
            <div class="accordion_body">
                <ul class="list">
                    <li>Generating keyword ideas for your business</li>
                    <li>Evaluating keywords for traffic, value, and attainability</li>
                    <li>Setting up automated tracking of your targeted keywords</li>
                </ul>
            </div>
        </div>
        <div class="accordion_wrap accordion_3">
            <div class="accordion_header">
                Week 3: Creating Shareable Content
            </div>
            <div class="accordion_body">
                <ul class="list">
                    <li>Generating keyword ideas for your business</li>
                    <li>Evaluating keywords for traffic, value, and attainability</li>
                    <li>Setting up automated tracking of your targeted keywords</li>
                </ul>
            </div>
        </div>
        <div class="accordion_wrap accordion_4">
            <div class="accordion_header">
                Week 4: Advanced Tracking
            </div>
            <div class="accordion_body">
                <ul class="list">
                    <li>Generating keyword ideas for your business</li>
                    <li>Evaluating keywords for traffic, value, and attainability</li>
                    <li>Setting up automated tracking of your targeted keywords</li>
                </ul>
            </div>
        </div>
        <div class="accordion_wrap accordion_5">
            <div class="accordion_header">
                Week 5: Link Building
            </div>
            <div class="accordion_body">
                <ul class="list">
                    <li>Generating keyword ideas for your business</li>
                    <li>Evaluating keywords for traffic, value, and attainability</li>
                    <li>Setting up automated tracking of your targeted keywords</li>
                </ul>
            </div>
        </div>
        <div class="accordion_wrap accordion_6">
            <div class="accordion_header">
                Week 6: Branding & Experience
            </div>
            <div class="accordion_body">
                <ul class="list">
                    <li>Generating keyword ideas for your business</li>
                    <li>Evaluating keywords for traffic, value, and attainability</li>
                    <li>Setting up automated tracking of your targeted keywords</li>
                </ul>
            </div>
        </div>
        <div class="accordion_wrap accordion_7">
            <div class="accordion_header">
                Week 7
            </div>
            <div class="accordion_body">
                <ul class="list">
                    <li>Generating keyword ideas for your business</li>
                    <li>Evaluating keywords for traffic, value, and attainability</li>
                    <li>Setting up automated tracking of your targeted keywords</li>
                </ul>
            </div>
        </div>`;

    const config = {
        childList: true,
        characterData: true,
        subtree: true
    };

    var aDiv = document.createElement("div");
    aDiv.setAttribute('class', 'wrapper');
    aDiv.innerHTML = accrodin;

    var running = false;
    var accordionItemHeaders;

    const callback = function(mutationsList, observer) {
        for (let mutation of mutationsList) {

            if (running || !window.location.pathname.includes('en/checkout')) return;

            var selector = target.querySelectorAll('.selector')[0];
            var isDesktopInOserver = window.matchMedia('(min-width: 1024px)').matches;

            if (selector && isDesktopInOserver) {
                target.querySelectorAll(".css-625156 .css-1uzl7ve")[0].classList.add('title-block');
                target.querySelectorAll(".css-g8dpj1")[0].classList.add('hero-title');

                var titleBlockEle = target.querySelectorAll('.title-block')[0];
                titleBlockEle.querySelectorAll('.hero-title')[0].innerHTML = "Let's Get Started <p class='sub-title'>I have a 7-week action plan mapped out for you.</p>";

                var menu = target.querySelectorAll('.css-1uzl7ve')[0];
                menu.parentNode.appendChild(aDiv);

                accordionItemHeaders = target.querySelectorAll(".accordion_header");
                accordionItemHeaders.forEach(accordionItemHeader => {
                    accordionItemHeader.addEventListener("click", event => {
                        for (var i = 0; i < accordionItemHeaders.length; i++) {
                            if (accordionItemHeaders[i].className == "accordion_header active") {
                                accordionItemHeaders[i].classList.remove('active');
                            }
                        }
                        accordionItemHeader.classList.toggle("active");
                    });
                });

                var plan_text = target.querySelectorAll('.css-x91rjw')[0];
                var box = target.querySelectorAll('.css-yrxlnk')[0];
                box.parentNode.append(plan_text);

                var text = target.querySelectorAll('.css-1eqvxdw')[0];
                text.append(target.querySelectorAll('.css-hd4lt0')[0]);

                var date_box = target.querySelectorAll('.css-esq9du')[0];
                date_box.appendChild(target.querySelectorAll('.css-k46iw5')[0]);
                if (target.querySelectorAll('.css-k46iw5')[0].classList.contains('cvv') || target.querySelectorAll('.css-k46iw5')[0].classList.contains('cno')) {

                } else {
                    target.querySelectorAll('.css-k46iw5')[0].classList.add('cvv');
                }
                if (target.querySelectorAll('.css-k46iw5')[1].classList.contains('cvv') || target.querySelectorAll('.css-k46iw5')[1].classList.contains('cno')) {

                } else {
                    target.querySelectorAll('.css-k46iw5')[1].classList.add('cno');
                }

                var pin_box = target.querySelectorAll('.css-1wetvnk')[0];
                target.querySelectorAll('.css-36plwo')[2].classList.add('pin_box');
                pin_box.appendChild(target.querySelectorAll('.css-d6rd3t')[0]);

                target.querySelectorAll('.css-625156')[0].classList.add('main-page');
                target.querySelectorAll('.css-1kj20mm')[0].classList.add('form-sec');

                target.querySelectorAll(".css-1e5o88d")[0].classList.add('checkout-terms');
                target.querySelectorAll(".css-74m0lw")[0].classList.add('checkout-title');
                target.querySelectorAll('.css-74m0lw')[0].innerHTML = "CHECK OUT";

                target.querySelectorAll('.css-1ms8dgq')[0].classList.add('hide-text');
                target.querySelectorAll('.css-19d83ht')[0].classList.add('hide-text');

                running = true;
                setTimeout(function() {
                    running = false;
                }, 1000);
                return;
            }
        }
    };

    const observer = new MutationObserver(callback);
    observer.observe(target, config);
}
window.addEventListener('popstate', initTest);
initTest();