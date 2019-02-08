    var isScrolling = false;
 
    window.addEventListener("scroll", throttleScroll, false);
 
    function throttleScroll(e) {
      if (isScrolling == false) {
        window.requestAnimationFrame(function() {
          scrolling(e);
          isScrolling = false;
        });
      }
      isScrolling = true;
    }
 
    document.addEventListener("DOMContentLoaded", scrolling, false);
    function scrolling(e) {
 
      if (isPartiallyVisible(firstBox)) {
				const elems = document.getElementsByClassName('div');
				const elemArr = Array.from(elems);
				elemArr.forEach((el, i) => {
					const customHeight = el.getAttribute('customHeight');
					setTimeout(() => el.style.height = `${customHeight * 10 * (i + 1)}px`, 500 * (i + 1));
				});
				const backward = () => elemArr.forEach((el, i) => {
					setTimeout(() => el.style.height = `50px`, 500 * (elemArr.length - i));
				});
				setTimeout(backward, 500 * elemArr.length); 
      }
 
      if (isFullyVisible(secondBox)) {
				const elems = document.getElementsByClassName('div');
				const elemArr = Array.from(elems);
				elemArr.forEach((el, i) => {
					const customHeight = el.getAttribute('customHeight');
					setTimeout(() => el.style.height = `${customHeight * 10 * (i + 1)}px`, 500 * (i + 1));
				});
				const backward = () => elemArr.forEach((el, i) => {
					setTimeout(() => el.style.height = `50px`, 500 * (elemArr.length - i));
				});
				setTimeout(backward, 500 * elemArr.length); 
      }
    }
 
    function isPartiallyVisible(el) {
      var elementBoundary = el.getBoundingClientRect();
 
      var top = elementBoundary.top;
      var bottom = elementBoundary.bottom;
      var height = elementBoundary.height;
 
      return ((top + height >= 0) && (height + window.innerHeight >= bottom));
    }
 
    function isFullyVisible(el) {
      var elementBoundary = el.getBoundingClientRect();
 
      var top = elementBoundary.top;
      var bottom = elementBoundary.bottom;
 
      return ((top >= 0) && (bottom <= window.innerHeight));
    }