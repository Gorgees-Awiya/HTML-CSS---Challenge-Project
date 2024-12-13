// Sample data for each topic
const topics = {
    1: {
        explanation: "Explanation for Topic 1. Learn about HTML structure.",
        code: "<h1>Hello, World!</h1>",
        result: "<h1 style='color:blue;'>Hello, World!</h1>",
    },
    2: {
        explanation: "Explanation for Topic 2. Learn about CSS styling.",
        code: "body { background-color: lightblue; }",
        result: "<div style='background-color: lightblue; padding: 20px;'>Styled Result</div>",
    },
    3: {
        explanation: "Explanation for Topic 3. Learn about JavaScript.",
        code: "console.log('Hello, JavaScript!');",
        result: "Check your browser's console for the result.",
    },
};

// Function to update content
function updateContent(topicId) {
    const explainer = document.getElementById("code-explainer");
    const code = document.getElementById("code");
    const result = document.getElementById("result");

    if (topics[topicId]) {
        explainer.innerHTML = `<h1>Code Explainer</h1><p>${topics[topicId].explanation}</p>`;
        code.innerHTML = `<pre><code>${topics[topicId].code}</code></pre>`;
        result.innerHTML = topics[topicId].result;
    }
}

// Event listener for left panel buttons
document.querySelectorAll(".left button").forEach(button => {
    button.addEventListener("click", () => {
        const topicId = button.getAttribute("data-item");
        updateContent(topicId);
    });
});
