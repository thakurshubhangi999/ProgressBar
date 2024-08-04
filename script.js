const progressCircle = document.querySelector('.progress-circle');
const progressText = document.querySelector('.progress-text');
const progressMaskFull = document.querySelector('.progress-mask.full .progress-fill');
const progressMaskHalf = document.querySelector('.progress-mask.half .progress-fill');

let progress = 0;
const targetProgress = 75; // Set your target progress percentage here

const updateProgress = () => {
  progress += 1;
  progressText.innerHTML = `${progress}%`;
  
  if (progress <= 50) {
    progressMaskFull.style.transform = `rotate(${progress * 3.6}deg)`;
  } else {
    progressMaskFull.style.transform = `rotate(180deg)`;
    progressMaskHalf.style.transform = `rotate(${(progress - 50) * 3.6}deg)`;
  }

  if (progress < targetProgress) {
    requestAnimationFrame(updateProgress);
  }
};

requestAnimationFrame(updateProgress);
