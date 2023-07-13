// Get the necessary elements from the HTML
const counterContainers = document.querySelectorAll('.counter-container');

// Initialize the counters and target values
const counters = [0, 0, 0, 0];
const targetValues = [3000,320,1000,587]; // Change these values as desired

// Define the duration and update interval
const duration = 2000; // Total duration for incrementing the counters in milliseconds
const interval = 20; // Interval for updating the counters in milliseconds

// Calculate the increment step for each counter
const incrementSteps = [];
for (let i = 0; i < counters.length; i++) {
  incrementSteps[i] = targetValues[i] / (duration / interval);
}

// Function to update the counters
function updateCounters() {
  let allCountersReachedTarget = true;

  for (let i = 0; i < counters.length; i++) {
    const counterValue = counterContainers[i].querySelector('.counter-value');
    const currentValue = counters[i];

    // Check if the counter has reached the target value
    if (currentValue < targetValues[i]) {
      counters[i] += incrementSteps[i];
      counterValue.textContent = Math.round(counters[i]);

      allCountersReachedTarget = false;
    } else {
      counterValue.textContent = targetValues[i];
    }
  }

  if (allCountersReachedTarget) {
    clearInterval(timer);
  }
}

// Start updating the counters at the defined interval
const timer = setInterval(updateCounters, interval);

// Stop the timer when all counters reach their target values
setTimeout(() => {
  clearInterval(timer);

  // Perform a final update to set the counters to the exact target values
  for (let i = 0; i < counters.length; i++) {
    const counterValue = counterContainers[i].querySelector('.counter-value');
    counterValue.textContent = targetValues[i];
  }
}, duration);











// this is for nav bar navitems showing active when scroll to this partiqular section 

  window.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('nav ul li a');
    var sections = document.querySelectorAll('section');
  
    function onScroll() {
      var scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
  
      for (var i = 0; i < sections.length; i++) {
        var section = sections[i];
        var sectionOffset = section.offsetTop - 50;
        var sectionHeight = section.offsetHeight;
        var sectionId = section.getAttribute('id');
  
        if (scrollPos >= sectionOffset && scrollPos < sectionOffset + sectionHeight) {
          for (var j = 0; j < navLinks.length; j++) {
            navLinks[j].parentNode.classList.remove('active');
          }
          document.querySelector('nav ul li a[href="#' + sectionId + '"]').parentNode.classList.add('active');
        }
      }
    }
  
    window.addEventListener('scroll', onScroll);
  });




  // this is for animation of every section when its scroll down to a partiqural section 


  window.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('nav ul li a');
    var sections = document.querySelectorAll('section');
  
    function onScroll() {
      var scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
  
      for (var i = 0; i < sections.length; i++) {
        var section = sections[i];
        var sectionOffset = section.offsetTop - 50;
        var sectionHeight = section.offsetHeight;
        var sectionId = section.getAttribute('id');
  
        if (scrollPos >= sectionOffset && scrollPos < sectionOffset + sectionHeight) {
          for (var j = 0; j < section.length; j++) {
            section[j].parentNode.classList.remove('animationActive');
          }
          document.querySelector('section').parentNode.classList.add('animationActive');
        }
      }
    }
  
    window.addEventListener('scroll', onScroll);
  });
  



  
