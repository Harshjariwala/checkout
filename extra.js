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