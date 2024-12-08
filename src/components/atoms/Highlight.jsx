import PropTypes from 'prop-types'; // Import PropTypes for prop validation
import Typography from './Typography'; // Assuming Typography is a reusable component

// The Highlight component
const Highlight = ({ text, highlightInstructions = [], className, as = 'span', ...props }) => {
  // A helper function to split text and apply styles to specific parts
  const applyStyles = () => {
    let lastIndex = 0;
    const elements = [];

    // Loop through each highlight instruction and apply styles
    highlightInstructions.forEach(({ text: highlightText, style }, idx) => {
      // Find the start index of the highlight text in the original text
      const startIdx = text.indexOf(highlightText, lastIndex);

      if (startIdx !== -1) {
        // Add the part before the highlighted text as a Typography element
        if (lastIndex < startIdx) {
          elements.push(
            <Typography key={`before-${idx}`} {...props} className={className} as={as}>
              {text.slice(lastIndex, startIdx)}
            </Typography>
          );
        }

        // Prepare the class names based on the style
        const highlightClasses = [
          style.highlight ? 'bg-yellow-300' : '',
          style.bold ? 'font-bold' : '',
          style.underline ? 'underline' : '',
          style.italic ? 'italic' : '',
          style.strikeThrough ? 'line-through' : '',
          style.color ? `text-${style.color}` : '',
        ]
          .filter(Boolean)
          .join(' ');

        // Apply Typography for the highlighted text part
        elements.push(
          <Typography
            key={`highlight-${idx}`} // Use a key for each highlight
            {...props}
            className={`${highlightClasses} ${className}`} // Apply styles to Typography
            as={as} // Render as 'span' or any other inline element
          >
            {highlightText}
          </Typography>
        );

        // Update the last index to be the end of the highlighted text
        lastIndex = startIdx + highlightText.length;
      }
    });

    // Add the remaining text after the last highlight as a Typography element
    if (lastIndex < text.length) {
      elements.push(
        <Typography key={`after-${highlightInstructions.length}`} {...props} className={className} as={as}>
          {text.slice(lastIndex)}
        </Typography>
      );
    }

    return elements;
  };

  return (
    <div className={className}>
      {/* Apply Typography wrapper to all text with highlights */}
      {applyStyles()}
    </div>
  );
};

// PropTypes for validation
Highlight.propTypes = {
  text: PropTypes.string.isRequired, // The full text to display
  highlightInstructions: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired, // Substring to highlight
      style: PropTypes.shape({
        highlight: PropTypes.bool, // Apply background highlight
        bold: PropTypes.bool, // Apply bold
        underline: PropTypes.bool, // Apply underline
        italic: PropTypes.bool, // Apply italic
        strikeThrough: PropTypes.bool, // Apply strikethrough
        color: PropTypes.string, // Text color (tailwind color class like 'red-500')
      }),
    })
  ).isRequired, // Array of objects defining highlight text and style
  className: PropTypes.string, // Additional custom className for the Typography
  as: PropTypes.string, // Element type to render, defaults to 'span' for inline rendering
};

Highlight.defaultProps = {
  highlightInstructions: [],
  className: '',
  as: 'span', // Default to render as 'span' for inline rendering
};

export default Highlight;
