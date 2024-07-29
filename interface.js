document.addEventListener("DOMContentLoaded", function () {
  // Fetch the latest document on page load
  fetch("/api/get_latest_second_brain", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      if (data.second_brain) {
        const latestDocument = data.second_brain;
        const { purpose, topic, document, content } = latestDocument;

        document.getElementById("purposeInput").value = purpose;
        document.getElementById("topicsInput").value = topic;
        document.getElementById("docTypeSelect").value = document;
        document.getElementById("documentResult").innerText = content;
      } else {
        document.getElementById("documentResult").innerText =
          "No document found.";
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      document.getElementById("documentResult").innerText =
        "Error fetching document.";
    });

  // Handle form submission to save preferences
  document
    .getElementById("generateDocumentBtn")
    .addEventListener("click", function () {
      const purpose = document.getElementById("purposeInput").value;
      const topics = document.getElementById("topicsInput").value;
      const docType = document.getElementById("docTypeSelect").value;
      const content = document.getElementById("documentResult").innerText;

      fetch("/api/add_or_update_second_brain", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "user@example.com", // Replace with actual user email
          topic: topics,
          document: docType,
          purpose: purpose,
          content: content,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          document.getElementById("documentResult").innerText =
            "Document saved successfully!";
        })
        .catch((error) => {
          console.error("Error:", error);
          document.getElementById("documentResult").innerText =
            "Error saving document.";
        });
    });
});
