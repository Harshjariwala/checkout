function initTest(){
	// Ref
    var bodyEle = document.querySelector('body');
    if(bodyEle.classList.contains('whats-in-box')) {
        return;
    }
    // Add Ref To Body
    bodyEle.classList.add('whats-in-box');
    

    // observer binding
    var target = document.getElementById('root');
    const config = {
        childList: true, characterData: true, subtree: true
    };
    var running = false;
    const callback = function(mutationsList, observer) {
        for (let mutation of mutationsList) {
            if(running || !window.location.pathname.includes('en/checkout')) return;
            
        	var selector = target.querySelectorAll('.selector')[0];
        	var isDesktopInOserver = window.matchMedia('(min-width: 1024px)').matches;
            if(selector && isDesktopInOserver) {
                // Adding Ref in DOM
                target.querySelectorAll(".css-625156 .css-1uzl7ve")[0].classList.add('title-block');
                target.querySelectorAll(".css-g8dpj1")[0].classList.add('hero-title');
                
                // Change content
                var titleBlockEle = target.querySelectorAll('.title-block')[0];
                titleBlockEle.querySelectorAll('.hero-title')[0].textContent = 'XXXXXXXXXXXXX';
                
                // Oberserver Stopping
                running = true;
                setTimeout(function() { running = false; }, 1000);
                return;
            }
        }
    };
    const observer = new MutationObserver(callback);
    observer.observe(target, config);
    // End observer binding
}
window.addEventListener('popstate', initTest);
initTest();