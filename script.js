document.addEventListener('DOMContentLoaded', function () {
  const overlay = document.getElementById('overlay');
  const overlayAnswer = document.getElementById('overlay-answer');
  const closeBtns = document.querySelectorAll('.close-btn');
  const yesBtn = document.querySelector('.yes');
  const noBtn = document.querySelector('.no');
  const submitBtn = document.querySelector('.submit-btn');
  const nextBtn = document.querySelector('.next');
  const options = document.querySelectorAll('.option');

  // Check local storage and show/hide overlay
  const selectedOption = localStorage.getItem('selectedOption');
  if (!selectedOption) {
    overlay.classList.remove('hidden');
  } else {
    overlay.classList.add('hidden');
    document.querySelector('.titlecard').style.display = 'flex';
    // Apply the selected style to the option from local storage
    options.forEach(option => {
      if (option.textContent === selectedOption) {
        option.classList.add('selected');
      }
    });
  }

  // Event listeners for Yes and No buttons
  yesBtn.addEventListener('click', () => {
    overlay.classList.add('hidden');
    overlayAnswer.classList.remove('hidden');
  });

  noBtn.addEventListener('click', () => {
    overlay.classList.add('hidden');
    overlayAnswer.classList.remove('hidden');
  });

  // Event listeners for close buttons
  closeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      overlay.classList.add('hidden');
      overlayAnswer.classList.add('hidden');
    });
  });

  // Event listener for Submit button
  submitBtn.addEventListener('click', () => {
    // Add shadow class to Next button
    nextBtn.classList.add('next-shadow');

    // Save the selected option to local storage
    const selectedOption = document.querySelector('.option.selected');
    if (selectedOption) {
      localStorage.setItem('selectedOption', selectedOption.textContent);
    }
  });

  // Event listener for Next button
  nextBtn.addEventListener('click', () => {
    // Remove shadow class when Next is clicked
    nextBtn.classList.remove('next-shadow');
    overlayAnswer.classList.add('hidden');
    document.querySelector('.titlecard').style.display = 'flex'; // Show titlecard
  });

  // Event listener for options to select them
  options.forEach(option => {
    option.addEventListener('click', () => {
      // Remove 'selected' class from all options
      options.forEach(opt => opt.classList.remove('selected'));
      // Add 'selected' class to the clicked option
      option.classList.add('selected');
    });
  });
});
