// Function to update word and sentence counts
function updateCounts() {
    const textInput = document.getElementById("textInput").value.trim();

    // Calculate word count
    const words = textInput.split(/\s+/).filter(word => word.length > 0);
    const wordCount = words.length;

    // Update word count in the DOM
    document.getElementById("wordcount").textContent = `Words: ${wordCount}`;

    // Calculate sentence count
    const sentences = textInput.split(/[.!?]\s+/).filter(sentence => sentence.length > 0);
    const sentenceCount = sentences.length;

    // Update sentence count in the DOM
    document.getElementById("sentenceCount").textContent = `Sentences: ${sentenceCount}`;
}

// Attach input event listener to the text area
document.getElementById("textInput").addEventListener("input", updateCounts);
