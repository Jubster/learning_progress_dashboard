document.addEventListener("DOMContentLoaded", () => {
  const assessmentCards = document.querySelectorAll(".card");

  assessmentCards.forEach((card) => {
    const cardBody = card.querySelector(".card-body");
    const toggleButton = card.querySelector(".role-toggle-button");

    if (card.classList.contains("state-completed")) {
      cardBody.classList.add("d-none");
      toggleButton.textContent = "Show details";
      toggleButton.setAttribute("aria-expanded", "false");
    } else {
      cardBody.classList.remove("d-none");
      toggleButton.textContent = "Hide details";
      toggleButton.setAttribute("aria-expanded", "true");
    }

    toggleButton.addEventListener("click", () => {
      const isHidden = cardBody.classList.contains("d-none");

      if (isHidden) {
        cardBody.classList.remove("d-none");
        toggleButton.textContent = "Hide details";
        toggleButton.setAttribute("aria-expanded", "true");

        if (card.classList.contains("state-completed")) {
          const feedbackContainer = cardBody.querySelector(".role-feedback");
          const feedback = document.createElement("p");
          feedback.classList.add("feedback");

          if (!feedbackContainer.querySelector(".feedback")) {
            fetch("./api/feedback")
              .then(response => response.text())
              .then(feedbackText => {
                feedback.textContent = feedbackText;
                feedbackContainer.appendChild(feedback);
              });
          }
        }
      } else {
        cardBody.classList.add("d-none");
        toggleButton.textContent = "Show details";
        toggleButton.setAttribute("aria-expanded", "false");
      }
    });
  });

  (async () => {
    const qa = document.querySelector("dl");
    const response = await fetch("./api/q-and-a");
    const data = await response.json();

    data.forEach((item) => {
      const question = document.createElement("dt");
      question.textContent = item.question;

      const answer = document.createElement("dd");
      answer.textContent = item.answer;

      qa.appendChild(question);
      qa.appendChild(answer);
    });
  })();

  const form = document.querySelector(".role-new-question");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    fetch("./api/q-and-a", {
      method: "POST",
      body: formData,
    });

    alert("Your question will be answered shortly");

    form.reset();
  });
});