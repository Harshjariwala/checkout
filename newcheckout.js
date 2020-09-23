function initTest() {
    // Ref Classes
    var mainRow = '.css-625156',
        leftCol = '.css-625156 .css-1ezodpr',
        rightCol = '.css-625156 .css-1csbn7c',
        form = '.css-1kj20mm',
        titleBlock = '.css-625156 .css-1uzl7ve',
        heroTitle = '.css-g8dpj1',
        benefitsListTitle = '.css-1ms8dgq',
        benefitsLists = '.css-19d83ht',
        submitBtn = '.css-74m0lw',
        getLifeTimeTxt = '.css-1ta569j',
        switchLink = '.css-b27gvk';

    // Req for People count per City
    var defaultPeople = 43;
    var peoplePerCityResult = {
        "new york": 331,
        "los angeles": 227,
        "chicago": 189,
        "houston": 189,
        "phoenix": 143,
        "dallas": 143,
        "philadelphia": 143,
        "san antonio": 143,
        "san diego": 143,
        "san jose": 143,
        "austin": 89,
        "jacksonville": 89,
        "fort worth": 89,
        "columbus": 89,
        "charlotte": 89,
        "san francisco": 89,
        "indianapolis": 89,
        "seattle": 89,
        "denver": 89,
        "washington": 89,
        "boston": 89,
        "el paso": 89,
        "nashville-davidson": 89,
        "detroit": 89,
        "oklahoma city": 89,
        "portland": 89,
        "las vegas": 89,
        "memphis": 89,
        "louisville-jefferson county": 89,
        "baltimore": 73,
        "milwaukee": 73,
        "albuquerque": 73,
        "tucson": 73,
        "fresno": 73,
        "mesa": 73,
        "sacramento": 73,
        "atlanta": 73,
        "kansas city": 73,
        "colorado springs": 71,
        "omaha": 71,
        "raleigh": 71,
        "miami": 71,
        "long beach": 71,
        "virginia beach": 71,
        "oakland": 71,
        "minneapolis": 71,
        "tulsa": 71,
        "tampa": 71,
        "arlington": 71,
        "new orleans": 71,
        "tokyo": 239,
        "london": 239,
        "paris": 239,
        "mexico city": 239,
        "osaka/kobe": 131,
        "buenos aires": 131,
        "sao paulo": 131,
        "hong kong": 131,
        "shanghai": 131,
        "seoul": 131,
        "toronto": 131,
        "moscow": 131,
        "mumbai": 131,
        "madrid": 131,
        "istanbul": 131,
        "beijing": 131,
        "metro manila": 131,
        "sydney": 131,
        "rio de janeiro": 131,
        "jakarta": 131,
        "delhi": 131,
        "guangzhou": 131,
        "kolkata": 131,
        "singapore": 131,
        "cairo": 131,
        "barcelona": 131,
        "melbourne": 131,
        "rome": 89,
        "montreal": 89,
        "bangkok": 89,
        "milan": 89,
        "tehran": 89,
        "riyadh": 89,
        "pusan": 89,
        "bogotá": 89,
        "santiago": 89,
        "monterrey": 89,
        "tel aviv-jaffa": 89,
        "st petersburg": 89,
        "johannesburg": 89,
        "lisbon": 89,
        "belo horizonte": 67,
        "vienna": 67,
        "karachi": 67,
        "dhaka": 67,
        "lima": 67,
        "vancouver": 67,
        "cape town": 67,
        "stockholm": 67,
        "guadalajara": 67,
        "tianjin": 67,
        "jiddah": 67,
        "bangalore": 67,
        "dublin": 67,
        "ho chi min city": 67,
        "wuhan": 67,
        "fukuoka": 67,
        "birmingham": 67,
        "manchester": 67,
        "hyderabad": 67,
        "athens": 67,
        "chennai": 67,
        "berlin": 67,
        "chongqing": 67,
        "ankara": 67,
        "lyon": 67,
        "turin": 67,
        "porto alegre": 67,
        "brasilia": 67,
        "warsaw": 67,
        "hamburg": 67,
        "ahmedabad": 67,
        "recife": 67,
        "pune": 67
    }

    //Ref Root Elements
    var target = document.getElementById('root');
    var bodyEle = document.querySelector('body');
    if (bodyEle.classList.contains('whats-in-box')) {
        return;
    }
    // Add Ref To Body
    bodyEle.classList.add('whats-in-box');

    //Observer Set Propeties
    const config = {
        childList: true,
        characterData: true,
        subtree: true
    };

    var running = false;

    //Geo-Block
    var locBlock = document.createElement('div');
    locBlock.classList.add('geo-block');
    locBlock.innerHTML = `
    <div class="geo-pointer-wrapper">
    <img src="//res.cloudinary.com/spiralyze/image/upload/v1598705271/Ubsersuggest/Whats_in_the_box_AND_Future_Pacing_29082020/Geo-pointer.gif" alt="Geo-pointer" class="geo-point">
    </div>
    <div class="geo-content">
    <span id="people-count" class="medium">0</span>
    <span class="medium"> People </span>in 
    <span id="city-name" class="medium orange">Your City</span> Use UberSuggest to Increase their Traffic
    </div>`;

    // Adding Main Subtitle Code
    var benefitsListTitleEle = target.querySelectorAll(benefitsListTitle)[0];
    var mainSubTitle = document.createElement('p');
    mainSubTitle.classList.add('main-subtitle');
    mainSubTitle.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad <u>minim veniam.</u>';

    // Adding New Benefits Lists
    var newBenefitsLists = document.createElement('div');
    newBenefitsLists.classList.add('new-benefits-lits');
    newBenefitsLists.innerHTML = `
    <ul class="new-benefit-lists">
        <li>
            <img src="//res.cloudinary.com/spiralyze/image/upload/v1598705723/Ubsersuggest/Whats_in_the_box_AND_Future_Pacing_29082020/SEO-Training-Course.svg" alt="SEO Training Course">
            <p>SEO Training Course</p>
        </li>
        <li>
            <img src="//res.cloudinary.com/spiralyze/image/upload/v1598705723/Ubsersuggest/Whats_in_the_box_AND_Future_Pacing_29082020/Keyword-Discovery-Tool.svg" alt="Keyword Discovery Tool">
            <p>Keyword Discovery Tool</p>
        </li>
        <li>
            <img src="//res.cloudinary.com/spiralyze/image/upload/v1598705723/Ubsersuggest/Whats_in_the_box_AND_Future_Pacing_29082020/Coaching-Calls.svg" alt="Coaching Calls">
            <p>Coaching Calls</p>
        </li>
        <li>
            <img src="//res.cloudinary.com/spiralyze/image/upload/v1598705720/Ubsersuggest/Whats_in_the_box_AND_Future_Pacing_29082020/Daily-Rank-Checker.svg" alt="Daily Rank Checker">
            <p>Daily Rank Checker</p>
        </li>
        <li>
            <img src="//res.cloudinary.com/spiralyze/image/upload/v1598705720/Ubsersuggest/Whats_in_the_box_AND_Future_Pacing_29082020/Worksheets-Templates.svg" alt="Worksheets & Templates">
            <p>Worksheets & Templates</p>
        </li>
        <li>
            <img src="//res.cloudinary.com/spiralyze/image/upload/v1598705720/Ubsersuggest/Whats_in_the_box_AND_Future_Pacing_29082020/Competitor-Analysis.svg" alt="Competitor Analysis">
            <p>Competitor Analysis</p>
        </li>
        <li>
            <img src="//res.cloudinary.com/spiralyze/image/upload/v1598705720/Ubsersuggest/Whats_in_the_box_AND_Future_Pacing_29082020/Email-Support.svg" alt="Email Support">
            <p>Email Support</p>
        </li>
        <li>
            <img src="//res.cloudinary.com/spiralyze/image/upload/v1598705721/Ubsersuggest/Whats_in_the_box_AND_Future_Pacing_29082020/Backlink-Data.svg" alt="Backlink Data">
            <p>Backlink Data</p>
        </li>
        <li>
            <img src="//res.cloudinary.com/spiralyze/image/upload/v1598705721/Ubsersuggest/Whats_in_the_box_AND_Future_Pacing_29082020/Site-Audit-Tool.svg" alt="Site Audit Tool">
            <p>Site Audit Tool</p>
        </li>
    </ul>`;

    const callback = function(mutationsList, observer) {
        for (let mutation of mutationsList) {

            if (running || !window.location.pathname.includes('en/checkout')) return;

            var selector = target.querySelectorAll('.selector')[0];
            var isDesktopInOserver = window.matchMedia('(min-width: 1024px)').matches;

            if (selector && isDesktopInOserver) {
                // Adding Ref in DOM
                target.querySelectorAll(mainRow)[0].classList.add('main-page');
                target.querySelectorAll(leftCol)[0].classList.add('spz-leftCol');
                target.querySelectorAll(rightCol)[0].classList.add('spz-rightCol');
                target.querySelectorAll(form)[0].classList.add('form-sec');
                target.querySelectorAll(titleBlock)[0].classList.add('title-block');
                target.querySelectorAll(heroTitle)[0].classList.add('hero-title');
                target.querySelectorAll(benefitsListTitle)[0].classList.add('benefits-list-title');
                target.querySelectorAll(benefitsLists)[0].classList.add('benefits-lists');


                var mainTitleEle = target.querySelectorAll('.title-block')[0];
                mainTitleEle.querySelectorAll('img')[0].setAttribute('src', '//res.cloudinary.com/spiralyze/image/upload/f_auto/Ubsersuggest/Whats_in_the_box_AND_Future_Pacing_29082020/Neil-Patel.png');
                mainTitleEle.querySelectorAll('img')[0].setAttribute('alt', 'Neil_Patel');
                mainTitleEle.querySelectorAll('.hero-title')[0].innerHTML = 'Get Everything You Need to</br> Grow Your SEO Traffic';

                //Insert Geo-Block 
                selector.parentElement.insertBefore(locBlock, selector.parentElement.children[1]);

                // Req for City Info
                var req = new XMLHttpRequest();
                req.overrideMimeType("application/json");
                req.open('GET', '//ipapi.co/json/', true);
                req.onload = function() {
                    var response = JSON.parse(req.responseText);
                    var city = response.city;
                    if (city)
                        bodyEle.querySelectorAll('#city-name')[0].innerText = city;
                    bodyEle.querySelectorAll('#people-count')[0].innerText = (city && peoplePerCityResult[city.toLowerCase()]) ? peoplePerCityResult[city.toLowerCase()] : defaultPeople;
                };
                req.send(null);

                //Insert MainSubTitle
                target.querySelectorAll('.spz-leftCol')[0].insertBefore(mainSubTitle, benefitsListTitleEle);

                //Insert Benefits-lists
                target.querySelectorAll('.spz-leftCol')[0].insertBefore(newBenefitsLists, benefitsListTitleEle);

                var plan_text = target.querySelectorAll('.css-x91rjw')[0];
                var box = target.querySelectorAll('.css-yrxlnk')[0];
                box.parentNode.append(plan_text);

                var text = target.querySelectorAll('.css-1eqvxdw')[0];
                text.append(target.querySelectorAll('.css-hd4lt0')[0]);

                // Adding ALT tag in Credit Card and Paypal
                document.querySelectorAll('.whats-in-box form .css-1bz3pcg:first-child img')[0].setAttribute('alt', 'Credit Card');
                document.querySelectorAll('.whats-in-box form .css-1bz3pcg:last-child img')[0].setAttribute('alt', 'Paypal');

                target.querySelectorAll(".css-1e5o88d")[0].classList.add('checkout-terms');
                target.querySelectorAll(submitBtn)[0].classList.add('checkout-btn-title');
                target.querySelectorAll(submitBtn)[0].innerHTML = "CONTINUE";

                //Hide left side text and list elements 
                target.querySelectorAll(benefitsListTitle)[0].classList.add('hide-text');
                target.querySelectorAll(benefitsLists)[0].classList.add('hide-text');

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